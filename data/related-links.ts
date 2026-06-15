import type { ContentPage } from "./content-types";
import { reportTypes } from "./report-types";
import { guides } from "./guides";
import { caseTypes } from "./case-types";

export type RelatedLink = { label: string; href: string };

export function mergeRelatedLinks(...groups: (RelatedLink[] | undefined)[]): RelatedLink[] {
  const seen = new Set<string>();
  const out: RelatedLink[] = [];
  for (const group of groups) {
    if (!group) continue;
    for (const link of group) {
      if (!seen.has(link.href)) {
        seen.add(link.href);
        out.push(link);
      }
    }
  }
  return out;
}

export const CORE_LINKS = {
  contact: { label: "Contact us", href: "/contact" } satisfies RelatedLink,
  instruct: { label: "How to instruct", href: "/how-to-instruct" } satisfies RelatedLink,
  standards: { label: "Report standards", href: "/report-standards" } satisfies RelatedLink,
  cpin: { label: "CPIN & Country Guidance", href: "/cpin-and-country-guidance" } satisfies RelatedLink,
  network: { label: "Network directory", href: "/network" } satisfies RelatedLink,
  reportTypes: { label: "Report types hub", href: "/report-types" } satisfies RelatedLink,
  guides: { label: "Solicitor guides", href: "/guides" } satisfies RelatedLink,
  definition: {
    label: "What is an immigration expert report?",
    href: "/what-is-an-immigration-expert-report",
  } satisfies RelatedLink,
  tribunal: { label: "Tribunal process", href: "/tribunal-process" } satisfies RelatedLink,
};

/** Homepage Rule D — paths that must appear on `/` */
export const HOMEPAGE_REQUIRED_PATHS = [
  "/contact",
  "/how-to-instruct",
  "/report-standards",
  "/network",
  "/cpin-and-country-guidance",
  "/what-is-an-immigration-expert-report",
  "/report-types/country-condition-reports",
  "/report-types/persecution-analysis-reports",
  "/report-types/human-rights-violation-reports",
  "/report-types/cpin-challenge-reports",
] as const;

/** Network hub Rule B */
export const NETWORK_REQUIRED_PATHS = [
  "/cpin-and-country-guidance",
  "/report-standards",
  "/how-to-instruct",
  "/contact",
  "/report-types/country-condition-reports",
  "/report-types/persecution-analysis-reports",
  "/report-types/human-rights-violation-reports",
  "/report-types/cpin-challenge-reports",
] as const;

const REPORT_TYPE_BASE: RelatedLink[] = [
  CORE_LINKS.cpin,
  CORE_LINKS.standards,
  CORE_LINKS.network,
  CORE_LINKS.instruct,
  CORE_LINKS.contact,
];

const GUIDE_BASE: RelatedLink[] = [
  CORE_LINKS.cpin,
  CORE_LINKS.standards,
  CORE_LINKS.instruct,
  CORE_LINKS.contact,
];

const CASE_TYPE_BASE: RelatedLink[] = [
  CORE_LINKS.instruct,
  CORE_LINKS.contact,
  CORE_LINKS.reportTypes,
];

const REPORT_TYPE_SLUG_EXTRAS: Record<string, RelatedLink[]> = {
  "country-condition-reports": [
    { label: "Choosing the right expert", href: "/guides/choosing-the-right-expert" },
    { label: "FTT asylum appeals", href: "/case-types/asylum-appeal-ftt" },
  ],
  "persecution-analysis-reports": [
    { label: "Political opinion asylum guide", href: "/guides/choosing-the-right-expert" },
    { label: "FTT asylum appeals", href: "/case-types/asylum-appeal-ftt" },
  ],
  "human-rights-violation-reports": [
    { label: "Deportation & removal cases", href: "/case-types/deportation-removal" },
    { label: "Human rights claims", href: "/case-types/human-rights-claims" },
  ],
  "cpin-challenge-reports": [
    { label: "CPIN vs Country Guidance guide", href: "/guides/cpin-vs-country-guidance-guide" },
    { label: "Country guidance challenges", href: "/case-types/country-guidance-challenges" },
  ],
  "internal-relocation-reports": [
    { label: "Country condition reports", href: "/report-types/country-condition-reports" },
    { label: "FTT asylum appeals", href: "/case-types/asylum-appeal-ftt" },
  ],
  "linguistic-clan-identity-reports": [
    { label: "Country condition reports", href: "/report-types/country-condition-reports" },
    { label: "Single joint experts", href: "/tribunal-process/single-joint-experts" },
  ],
  "medical-psychiatric-reports": [
    { label: "Human rights violation reports", href: "/report-types/human-rights-violation-reports" },
    { label: "Deportation & removal", href: "/case-types/deportation-removal" },
  ],
  "oral-evidence-tribunal": [
    { label: "Hot-tubbing procedure", href: "/tribunal-process/hot-tubbing-concurrent-evidence" },
    { label: "Expert report fees & timelines", href: "/how-to-instruct" },
  ],
};

const GUIDE_SLUG_EXTRAS: Record<string, RelatedLink[]> = {
  "immigration-expert-report-standards-guide": [
    CORE_LINKS.reportTypes,
    { label: "CPR Part 35 guide", href: "/guides/cpr-part-35-immigration-expert-reports" },
  ],
  "instructing-expert-legal-aid": [CORE_LINKS.reportTypes],
  "letter-of-instruction-guide": [
    CORE_LINKS.reportTypes,
    { label: "Legal Aid instruction guide", href: "/guides/instructing-expert-legal-aid" },
  ],
  "cpin-vs-country-guidance-guide": [
    { label: "CPIN challenge reports", href: "/report-types/cpin-challenge-reports" },
    CORE_LINKS.reportTypes,
  ],
  "choosing-the-right-expert": [
    { label: "Country condition reports", href: "/report-types/country-condition-reports" },
    { label: "Persecution analysis reports", href: "/report-types/persecution-analysis-reports" },
  ],
  "cpr-part-35-immigration-expert-reports": [
    { label: "Standards guide", href: "/guides/immigration-expert-report-standards-guide" },
    CORE_LINKS.reportTypes,
  ],
};

const CASE_TYPE_SLUG_EXTRAS: Record<string, RelatedLink[]> = {
  "asylum-appeal-ftt": [
    { label: "Country condition reports", href: "/report-types/country-condition-reports" },
    { label: "FTT tribunal process", href: "/tribunal-process/ftt-asylum-appeals" },
  ],
  "upper-tribunal-appeal": [
    { label: "Country guidance challenges", href: "/case-types/country-guidance-challenges" },
    { label: "Upper Tribunal process", href: "/tribunal-process/upper-tribunal" },
  ],
  "deportation-removal": [
    { label: "Human rights violation reports", href: "/report-types/human-rights-violation-reports" },
  ],
  "fresh-claims": [
    { label: "Country condition reports", href: "/report-types/country-condition-reports" },
  ],
  "human-rights-claims": [
    { label: "Human rights violation reports", href: "/report-types/human-rights-violation-reports" },
  ],
  "judicial-review": [
    { label: "Administrative review", href: "/case-types/administrative-review" },
  ],
  "administrative-review": [
    { label: "FTT asylum appeals", href: "/case-types/asylum-appeal-ftt" },
  ],
  "country-guidance-challenges": [
    { label: "CPIN challenge reports", href: "/report-types/cpin-challenge-reports" },
    { label: "Upper Tribunal process", href: "/tribunal-process/upper-tribunal" },
  ],
};

export function getReportTypeRelatedLinks(slug: string, existing?: RelatedLink[]): RelatedLink[] {
  return mergeRelatedLinks(existing, REPORT_TYPE_BASE, REPORT_TYPE_SLUG_EXTRAS[slug]);
}

export function getGuideRelatedLinks(slug: string, existing?: RelatedLink[]): RelatedLink[] {
  return mergeRelatedLinks(existing, GUIDE_BASE, GUIDE_SLUG_EXTRAS[slug]);
}

export function getCaseTypeRelatedLinks(slug: string, existing?: RelatedLink[]): RelatedLink[] {
  return mergeRelatedLinks(existing, CASE_TYPE_BASE, CASE_TYPE_SLUG_EXTRAS[slug]);
}

export type ContentLinkKind = "report-type" | "guide" | "case-type" | "tribunal-process";

export function enrichContentPageLinks(page: ContentPage, kind: ContentLinkKind): ContentPage {
  let relatedLinks = page.relatedLinks;
  if (kind === "report-type") {
    relatedLinks = getReportTypeRelatedLinks(page.slug, page.relatedLinks);
  } else if (kind === "guide") {
    relatedLinks = getGuideRelatedLinks(page.slug, page.relatedLinks);
  } else if (kind === "case-type") {
    relatedLinks = getCaseTypeRelatedLinks(page.slug, page.relatedLinks);
  } else if (kind === "tribunal-process") {
    relatedLinks = mergeRelatedLinks(page.relatedLinks, CASE_TYPE_BASE, [
      CORE_LINKS.standards,
      CORE_LINKS.cpin,
    ]);
  }
  return { ...page, relatedLinks };
}

/** Assert every report-type / guide / case-type meets minimum internal links */
export function verifyRelatedLinksMatrix(): string[] {
  const errors: string[] = [];

  for (const page of reportTypes) {
    const links = getReportTypeRelatedLinks(page.slug, page.relatedLinks);
    const hrefs = new Set(links.map((l) => l.href));
    for (const required of ["/cpin-and-country-guidance", "/report-standards", "/network", "/how-to-instruct", "/contact"]) {
      if (!hrefs.has(required)) {
        errors.push(`report-types/${page.slug} missing link to ${required}`);
      }
    }
  }

  for (const page of guides) {
    const links = getGuideRelatedLinks(page.slug, page.relatedLinks);
    const hrefs = new Set(links.map((l) => l.href));
    for (const required of ["/cpin-and-country-guidance", "/report-standards", "/how-to-instruct", "/contact"]) {
      if (!hrefs.has(required)) {
        errors.push(`guides/${page.slug} missing link to ${required}`);
      }
    }
  }

  for (const page of caseTypes) {
    const links = getCaseTypeRelatedLinks(page.slug, page.relatedLinks);
    const hrefs = new Set(links.map((l) => l.href));
    for (const required of ["/how-to-instruct", "/contact"]) {
      if (!hrefs.has(required)) {
        errors.push(`case-types/${page.slug} missing link to ${required}`);
      }
    }
  }

  return errors;
}
