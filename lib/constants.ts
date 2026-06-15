export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.immigrationexpertreports.com";
export const SITE_NAME = "Immigration Expert Reports";
export const SITE_EMAIL = "info@immigrationexpertreports.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/immigrationexpertreports";

export const COLORS = {
  primary: "#1E3A5F",
  accent: "#0E7490",
  gold: "#B8860B",
  background: "#FFFFFF",
  sectionAlt: "#F8FAFC",
  border: "#CBD5E1",
  heading: "#1E3A5F",
  body: "#374151",
} as const;
