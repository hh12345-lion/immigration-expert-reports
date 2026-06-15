import { reportTypes } from "./report-types";
import { tribunalProcesses } from "./tribunal-process";
import { caseTypes } from "./case-types";
import { guides } from "./guides";
import { services } from "./services";

export type NavLink = { label: string; href: string };

export const reportTypesNavLinks: NavLink[] = reportTypes.map((r) => ({
  label: r.title,
  href: `/report-types/${r.slug}`,
}));

export const tribunalProcessNavLinks: NavLink[] = tribunalProcesses.map((t) => ({
  label: t.title,
  href: `/tribunal-process/${t.slug}`,
}));

export const caseTypesNavLinks: NavLink[] = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const guidesNavLinks: NavLink[] = guides.map((g) => ({
  label: g.title,
  href: `/guides/${g.slug}`,
}));

export const servicesNavLinks: NavLink[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

export const resourcesNavLinks: NavLink[] = [
  { label: "Report Standards", href: "/report-standards" },
  { label: "CPIN & Country Guidance", href: "/cpin-and-country-guidance" },
  { label: "Solicitor Guides", href: "/guides" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Network Directory", href: "/network" },
  { label: "Glossary", href: "/glossary" },
];

export const mobileNavGroups = [
  {
    title: "Report Types",
    links: [{ label: "All Report Types", href: "/report-types" }, ...reportTypesNavLinks],
  },
  {
    title: "Tribunal Process",
    links: [{ label: "Tribunal Process Hub", href: "/tribunal-process" }, ...tribunalProcessNavLinks],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypesNavLinks],
  },
  {
    title: "Services",
    links: [{ label: "All Services", href: "/services" }, ...servicesNavLinks],
  },
  {
    title: "Resources",
    links: [
      { label: "Report Standards", href: "/report-standards" },
      { label: "Network Directory", href: "/network" },
      { label: "How to Instruct", href: "/how-to-instruct" },
      { label: "Qualifications", href: "/qualifications" },
      { label: "Fees", href: "/fees" },
      { label: "Guides", href: "/guides" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
];
