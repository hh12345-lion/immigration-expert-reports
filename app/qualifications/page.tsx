import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Immigration Expert Qualifications | UK Tribunal Standards",
  description:
    "Qualifications for immigration expert reports in UK tribunals — academic credentials, country expertise, tribunal acceptance, Practice Direction compliance, and independence.",
  path: "/qualifications",
});

const qualifications = [
  "Academic credentials in a relevant field (political science, law, anthropology, human rights, area studies)",
  "Country or regional expertise with documented field research experience",
  "Prior tribunal and Upper Tribunal acceptance record",
  "Practice Direction 2024 and Adam Pipe October 2025 compliance",
  "Independence and objectivity track record under Ikarian Reefer principles",
  "Language capabilities where relevant to the country or profile",
  "UNHCR, NGO, or international organisation experience where applicable",
  "OSCOLA citation competence and dated source methodology",
];

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Report Qualifications"
        subtitle="Generic qualification standards for experts across our network — not country-specific profiles."
        breadcrumbs={crumbs}
      >
        <p className="mb-6 text-[#3E4450] leading-relaxed">
          Immigration expert reports in UK tribunal proceedings require experts with demonstrated qualifications,
          relevant experience, and a track record of independent, objective analysis. These standards apply across
          all report types in our network taxonomy.
        </p>
        <ul className="space-y-4">
          {qualifications.map((q) => (
            <li
              key={q}
              className="flex gap-3 rounded-[8px] border border-[#DDD6CB] bg-white p-4 text-[#3E4450]"
            >
              <span className="mt-0.5 text-[#2557D6]" aria-hidden="true">
                ✓
              </span>
              {q}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link href="/report-standards" className="font-semibold text-[#2557D6] hover:underline">
            Report standards pillar page
          </Link>
        </div>
      </PageShell>
    </>
  );
}
