export const LEAD_BRAND_NAME = "Immigration Expert Reports";

/** Row 1 column headers for Google Sheet — must match append order in /api/submit-lead */
export const LEAD_SHEET_COLUMNS = [
  "Timestamp",
  "Full Name",
  "Organisation",
  "Email",
  "Phone",
  "Report Type",
  "Country / Region",
  "Proceedings",
  "Funding",
  "Case Summary",
  "Brand Name",
] as const;

export type SubmitLeadInput = {
  fullName: string;
  email: string;
  phone: string;
};

export type SubmitLeadPayload = SubmitLeadInput & {
  organisation?: string;
  reportType?: string;
  countryRegion?: string;
  proceedings?: string;
  funding?: string;
  summary?: string;
};

/** Minimal webhook payload (n8n / Lead_notification_url) */
export function buildLeadWebhookPayload(input: SubmitLeadInput) {
  return {
    "Full Name": input.fullName.trim(),
    Email: input.email.trim(),
    "Phone Number": input.phone.trim(),
    "Brand name": LEAD_BRAND_NAME,
  };
}

export function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    undefined
  );
}

export type SubmitLeadResult = { ok: true } | { ok: false; error: string };

/**
 * Lead_notification_setup.md — POST to /api/submit-lead.
 * On Netlify, force-redirect sends this to /.netlify/functions/submit-lead.
 */
export async function postSubmitLead(payload: SubmitLeadPayload): Promise<SubmitLeadResult> {
  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone ?? "",
        organisation: payload.organisation ?? "",
        reportType: payload.reportType ?? "",
        countryRegion: payload.countryRegion ?? "",
        proceedings: payload.proceedings ?? "",
        funding: payload.funding ?? "",
        summary: payload.summary ?? "",
      }),
    });

    if (res.ok) return { ok: true };

    let message = `Submission failed (${res.status})`;
    try {
      const data = (await res.json()) as { error?: string };
      if (data?.error) message = data.error;
    } catch {
      // ignore non-JSON error bodies
    }
    return { ok: false, error: message };
  } catch {
    return { ok: false, error: "Could not reach the server. Check your connection and try again." };
  }
}
