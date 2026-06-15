export const LEAD_BRAND_NAME = "Immigration Expert Reports";

/** Row 1 column headers for Google Sheet (Sheet35) — must match append order in /api/submit-lead */
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

/** Client-side: POST lead to /api/submit-lead */
export async function postSubmitLead(payload: SubmitLeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
