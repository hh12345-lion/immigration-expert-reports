export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.immigrationexpertreports.com";
export const SITE_NAME = "Immigration Expert Reports";
export const SITE_EMAIL = "cases@immigrationexpertreports.com";
export const SITE_REGION = "United Kingdom";
/** Short scope line for footers and contact — not a site-wide banner */
export const SITE_SCOPE_LINE =
  "Expert report guidance and instruction for UK immigration and asylum tribunal proceedings only (England, Wales, Scotland, and Northern Ireland).";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/immigrationexpertreports";

export const COLORS = {
  primary: "#0C0E12",
  accent: "#4F8FFF",
  gold: "#C5E63A",
  background: "#E9ECEF",
  sectionAlt: "#DEE2E6",
  border: "#C5CAD1",
  heading: "#0C0E12",
  body: "#3A3F47",
  ink: "#0C0E12",
  paper: "#E9ECEF",
  signal: "#4F8FFF",
  mark: "#C5E63A",
} as const;
