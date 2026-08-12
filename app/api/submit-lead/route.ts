import { NextResponse } from "next/server";
import { appendRowWithRetry, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  buildLeadWebhookPayload,
  getLeadWebhookUrl,
  LEAD_BRAND_NAME,
  type SubmitLeadPayload,
} from "@/lib/submit-lead";

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!sheetsConfigured && !webhookUrl) {
    const missing: string[] = [];
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim()) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    if (!process.env.GOOGLE_PRIVATE_KEY?.trim()) missing.push("GOOGLE_PRIVATE_KEY");
    if (!process.env.GOOGLE_SHEET_ID?.trim()) missing.push("GOOGLE_SHEET_ID");
    if (!webhookUrl) missing.push("Lead_notification_url");

    return NextResponse.json(
      {
        error:
          "Lead storage not configured. Add Google Sheets vars and/or Lead_notification_url to .env.local (local) or Netlify env (production), then restart the server.",
        missing,
      },
      { status: 503 }
    );
  }

  let body: SubmitLeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = sanitize(body.fullName ?? "");
  const email = (body.email ?? "").toLowerCase().trim();
  const phone = sanitize(body.phone ?? "");
  const summary = sanitize(body.summary ?? "");

  if (!fullName || !email) {
    return NextResponse.json({ error: "fullName and email are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // Column order must match LEAD_SHEET_COLUMNS in lib/submit-lead.ts
  const row = [
    new Date().toISOString(),
    fullName,
    sanitize(body.organisation ?? ""),
    email,
    phone,
    sanitize(body.reportType ?? ""),
    sanitize(body.countryRegion ?? ""),
    sanitize(body.proceedings ?? ""),
    sanitize(body.funding ?? ""),
    summary,
    LEAD_BRAND_NAME,
  ];

  if (sheetsConfigured) {
    try {
      await appendRowWithRetry(row);
    } catch (error: unknown) {
      const err = error as { message?: string; code?: number; response?: { status?: number } };
      console.error("Google Sheets error:", {
        message: err?.message,
        code: err?.code,
        status: err?.response?.status,
        spreadsheetId: process.env.GOOGLE_SHEET_ID?.slice(0, 8) + "...",
        timestamp: new Date().toISOString(),
      });
      if (!webhookUrl) {
        return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
      }
    }
  }

  if (webhookUrl) {
    const outbound = buildLeadWebhookPayload({ fullName, email, phone });
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
        signal: AbortSignal.timeout(12_000),
      });
      if (!res.ok && !sheetsConfigured) {
        return NextResponse.json({ error: "Lead notification endpoint error" }, { status: 502 });
      }
    } catch {
      if (!sheetsConfigured) {
        return NextResponse.json({ error: "Could not reach lead notification endpoint" }, { status: 502 });
      }
      console.error("Lead webhook request failed");
    }
  }

  return NextResponse.json({ ok: true });
}
