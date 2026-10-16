import { photos, type Photo } from "@/lib/photos";

/** One photograph per content page, keyed by slug. */
const BY_SLUG: Record<string, Photo> = {
  // Report types and services
  "country-condition-reports": photos.worldMap,
  "persecution-analysis-reports": photos.receptionCentre,
  "human-rights-violation-reports": photos.refugeesArriving,
  "cpin-challenge-reports": photos.marshamStreet,
  "internal-relocation-reports": photos.departuresBoard,
  "internal-relocation-analysis": photos.departuresBoard,
  "linguistic-clan-identity-reports": photos.passportStamps,
  "linguistic-identity-reports": photos.passportStamps,
  "medical-psychiatric-reports": photos.libraryStacks,
  "expert-report-review-qa": photos.libraryStacks,
  "oral-evidence-tribunal": photos.prioryCourts,
  // Case types
  "asylum-appeal-ftt": photos.prioryCourts,
  "upper-tribunal-appeal": photos.libraryStacks,
  "deportation-removal": photos.eGates,
  "fresh-claims": photos.receptionCentre,
  "human-rights-claims": photos.refugeesArriving,
  "judicial-review": photos.prioryCourts,
  "administrative-review": photos.lunarHouse,
  "country-guidance-challenges": photos.worldMap,
  // Guides
  "immigration-expert-report-standards-guide": photos.libraryStacks,
  "instructing-expert-legal-aid": photos.lunarHouse,
  "letter-of-instruction-guide": photos.passportStamps,
  "cpin-vs-country-guidance-guide": photos.marshamStreet,
  "choosing-the-right-expert": photos.worldMap,
  "cpr-part-35-immigration-expert-reports": photos.prioryCourts,
  // Tribunal process
  "ftt-asylum-appeals": photos.prioryCourts,
  "upper-tribunal": photos.marshamStreet,
  "single-joint-experts": photos.libraryStacks,
  "hot-tubbing-concurrent-evidence": photos.prioryCourts,
  "late-expert-evidence": photos.departuresBoard,
  "judicial-review-expert-evidence": photos.lunarHouse,
};

/** Photographs for section and standalone pages. */
export const sectionPhotos = {
  reportTypes: photos.passportControl,
  caseTypes: photos.prioryCourts,
  services: photos.arrivalsCorridor,
  guides: photos.libraryStacks,
  tribunalProcess: photos.prioryCourts,
  blog: photos.eurostar,
  contact: photos.whiteCliffs,
  cpin: photos.marshamStreet,
  faq: photos.arrivalsCorridor,
  fees: photos.lunarHouse,
  glossary: photos.libraryStacks,
  howToInstruct: photos.passportStamps,
  network: photos.eurostar,
  qualifications: photos.libraryStacks,
  reportStandards: photos.worldMap,
  whatIs: photos.passportControl,
  legal: photos.doverFerry,
} satisfies Record<string, Photo>;

const POOL: Photo[] = [photos.arrivalsCorridor, photos.whiteCliffs, photos.doverFerry, photos.eurostar, photos.worldMap];

export function photoFor(slug: string): Photo {
  return BY_SLUG[slug] ?? fallbackPhoto(slug);
}

/** A stable topical photograph for a page that has none of its own. */
export function fallbackPhoto(seed: string): Photo {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return POOL[h % POOL.length];
}
