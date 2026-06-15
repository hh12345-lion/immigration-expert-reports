import { readFileSync } from "fs";
import { join } from "path";
import { SITE_URL, LINKEDIN_URL } from "../constants";
import { buildPublicUrlInventory } from "./publicUrlInventory";
import { SLUG_REDIRECTS } from "./slug-redirects";
import { reportTypes } from "../../data/report-types";
import { tribunalProcesses } from "../../data/tribunal-process";
import { caseTypes } from "../../data/case-types";
import { guides } from "../../data/guides";
import { services } from "../../data/services";
import { verifyRelatedLinksMatrix } from "../../data/related-links";
import { glossaryTerms, getGlossaryTermsWithLinks } from "../../data/glossary";
import { glossaryAnchorId } from "../glossary";

export type ArchIssue = { level: "error" | "warn"; message: string };

const REDIRECT_ONLY_PATHS = ["/faq", "/fees", "/experts"] as const;

export function verifySeoArchitecture(): ArchIssue[] {
  const issues: ArchIssue[] = [];

  if (SITE_URL !== "https://www.immigrationexpertreports.com") {
    issues.push({
      level: "warn",
      message: `SITE_URL should be https://www.immigrationexpertreports.com (got ${SITE_URL})`,
    });
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expectedDynamic =
    reportTypes.length +
    tribunalProcesses.length +
    caseTypes.length +
    guides.length +
    services.length;
  const dynamicInSitemap = inventory.entries.filter(
    (e) =>
      e.path.startsWith("/report-types/") ||
      e.path.startsWith("/tribunal-process/") ||
      e.path.startsWith("/case-types/") ||
      e.path.startsWith("/guides/") ||
      e.path.startsWith("/services/")
  ).length;

  if (dynamicInSitemap !== expectedDynamic) {
    issues.push({
      level: "error",
      message: `Expected ${expectedDynamic} dynamic URLs in sitemap inventory, got ${dynamicInSitemap}`,
    });
  }

  for (const path of REDIRECT_ONLY_PATHS) {
    if (inventory.allPaths.includes(path)) {
      issues.push({
        level: "error",
        message: `Redirect-only path ${path} must not appear in sitemap inventory`,
      });
    }
    if (!SLUG_REDIRECTS[path]) {
      issues.push({
        level: "error",
        message: `Missing 301 redirect for ${path} in SLUG_REDIRECTS`,
      });
    }
  }

  if (Object.keys(SLUG_REDIRECTS).length === 0) {
    issues.push({ level: "error", message: "SLUG_REDIRECTS is empty" });
  }

  for (const msg of verifyRelatedLinksMatrix()) {
    issues.push({ level: "error", message: `Internal links: ${msg}` });
  }

  const homepagePath = join(process.cwd(), "app", "page.tsx");
  const homepageSource = readFileSync(homepagePath, "utf-8");
  for (const required of [
    "/contact",
    "/how-to-instruct",
    "/report-standards",
    "/network",
    "/cpin-and-country-guidance",
    "/what-is-an-immigration-expert-report",
    "/report-types/country-condition-reports",
  ]) {
    if (!homepageSource.includes(`"${required}"`) && !homepageSource.includes(`'${required}'`)) {
      issues.push({
        level: "error",
        message: `Homepage missing required internal link to ${required}`,
      });
    }
  }

  const networkPath = join(process.cwd(), "app", "network", "page.tsx");
  const networkSource = readFileSync(networkPath, "utf-8");
  for (const required of ["/cpin-and-country-guidance", "/report-standards", "/how-to-instruct", "/contact"]) {
    if (!networkSource.includes(`"${required}"`) && !networkSource.includes(`'${required}'`)) {
      issues.push({
        level: "error",
        message: `Network page missing required internal link to ${required}`,
      });
    }
  }

  const standardsPath = join(process.cwd(), "app", "report-standards", "page.tsx");
  const standardsSource = readFileSync(standardsPath, "utf-8");
  if (!standardsSource.includes('id="report-standards"')) {
    issues.push({
      level: "error",
      message: 'Report standards page missing GEO anchor id="report-standards"',
    });
  }
  if (!standardsSource.includes("<caption")) {
    issues.push({
      level: "warn",
      message: "Report standards GEO table missing <caption>",
    });
  }

  const layoutPath = join(process.cwd(), "app", "layout.tsx");
  const layoutSource = readFileSync(layoutPath, "utf-8");
  if (!layoutSource.includes('lang="en-GB"')) {
    issues.push({ level: "error", message: 'Root layout missing lang="en-GB"' });
  }
  if (!layoutSource.includes('"en-GB"') || !layoutSource.includes("x-default")) {
    issues.push({ level: "warn", message: "Root layout missing hreflang alternates" });
  }

  const termsWithoutLinks = getGlossaryTermsWithLinks().filter((t) => !t.link).length;
  if (termsWithoutLinks > 0) {
    issues.push({
      level: "warn",
      message: `${termsWithoutLinks} glossary terms missing outbound internal links`,
    });
  }

  const anchorIds = glossaryTerms.map((t) => glossaryAnchorId(t.term));
  const duplicateAnchors = anchorIds.filter((id, i) => anchorIds.indexOf(id) !== i);
  if (duplicateAnchors.length > 0) {
    issues.push({
      level: "error",
      message: `Duplicate glossary anchor IDs: ${[...new Set(duplicateAnchors)].join(", ")}`,
    });
  }

  if (!LINKEDIN_URL.includes("immigrationexpertreports")) {
    issues.push({
      level: "warn",
      message: `LINKEDIN_URL should reference immigrationexpertreports (got ${LINKEDIN_URL})`,
    });
  }

  return issues;
}
