import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { SITE_SCOPE_LINE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "What Is an Immigration Expert Report? | UK Tribunal Evidence Guide",
  description:
    "An immigration expert report provides independent evidence to UK immigration tribunals on country conditions, persecution, human rights violations, and return risk — beyond the Home Office CPIN.",
  path: "/what-is-an-immigration-expert-report",
});

const faqs = [
  {
    question: "What is an immigration expert report in the UK?",
    answer:
      "An immigration expert report is independent written evidence for UK immigration and asylum tribunals, addressing country conditions, persecution, human rights, or related issues for a specific appellant profile — beyond generic Home Office CPINs.",
  },
  {
    question: "Who instructs immigration expert reports in the United Kingdom?",
    answer:
      "UK solicitors, barristers, and Legal Aid practitioners instruct experts for First-tier Tribunal asylum appeals, Upper Tribunal cases, deportation proceedings, and related UK immigration appeals.",
  },
];

export default function WhatIsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "What Is an Immigration Expert Report?" },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        faqs={faqs}
        extra={articleSchema({
          headline: "What Is an Immigration Expert Report?",
          description: metadata.description as string,
          path: "/what-is-an-immigration-expert-report",
        })}
      />
      <PageShell
        title="What Is an Immigration Expert Report?"
        subtitle="Independent tribunal evidence on country conditions, persecution, human rights, and return risk — beyond the Home Office CPIN."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#3E4450] leading-relaxed">
          An immigration expert report is written independent evidence provided to UK immigration tribunals by a
          qualified expert with specialist knowledge of country conditions, persecution analysis, human rights
          standards, or related disciplines. Unlike the Home Office Country Policy Information Note (CPIN), which
          provides generic country policy, an expert report addresses the individual appellant&apos;s specific
          profile, region, and claimed fear with dated primary sources and reasoned analysis.
        </p>
        <p className="mb-4 text-sm text-[#3E4450]/90 leading-relaxed">{SITE_SCOPE_LINE}</p>
        <p className="mb-4 text-[#3E4450] leading-relaxed">
          UK immigration tribunals rely heavily on expert evidence in asylum appeals, human rights claims,
          deportation proceedings, and Upper Tribunal country guidance cases. Expert reports assist the tribunal in
          assessing whether the appellant faces a well-founded fear of persecution, whether Article 3 ECHR is
          engaged, whether internal relocation is viable, and whether the Home Office CPIN accurately reflects
          current conditions for the appellant&apos;s profile.
        </p>
        <p className="mb-4 text-[#3E4450] leading-relaxed">
          Immigration expert reports must comply with Immigration Tribunal Practice Direction 2024 (default 20-page
          limit), the Adam Pipe October 2025 expert report guide, and Ikarian Reefer independence principles. Experts
          owe a paramount duty to the tribunal — objective, unbiased, and independent of the instructing party.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#1B2430]">Types of Immigration Expert Reports</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#3E4450]">
          <li>Country condition reports — conditions in the country of origin beyond the CPIN</li>
          <li>Persecution analysis reports — Refugee Convention nexus and methodology</li>
          <li>Human rights violation reports — ECHR Article 3 and treaty standards</li>
          <li>CPIN challenge and rebuttal reports — challenging Home Office country policy</li>
          <li>Internal relocation analysis — viability and reasonableness of internal flight</li>
          <li>Linguistic and clan identity reports — disputed nationality and identity</li>
          <li>Oral evidence at tribunal — expert witness attendance and cross-examination</li>
        </ul>

        <FAQSection faqs={faqs} />

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/report-types" className="font-semibold text-[#2557D6] hover:underline">
            View all report types
          </Link>
          <Link href="/report-standards" className="font-semibold text-[#2557D6] hover:underline">
            Report standards guide
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#2557D6] hover:underline">
            How to instruct
          </Link>
          <Link href="/contact" className="font-semibold text-[#2557D6] hover:underline">
            Contact us
          </Link>
        </div>
      </PageShell>
    </>
  );
}
