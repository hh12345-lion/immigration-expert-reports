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
  primary: "#1B2430",
  accent: "#2557D6",
  gold: "#C47A12",
  background: "#F5F2EC",
  sectionAlt: "#EBE6DC",
  border: "#DDD6CB",
  heading: "#1B2430",
  body: "#3E4450",
  ink: "#1B2430",
  paper: "#F5F2EC",
  signal: "#2557D6",
  mark: "#C47A12",
} as const;
