import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { reportTypes } from "@/data/report-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title:
    "Immigration Expert Reports UK | Country & Asylum Reports for Immigration Tribunals",
  description:
    "Find qualified immigration expert reports for UK tribunals. Country condition reports, persecution analysis, human rights assessments, CPIN challenges, and Legal Aid compatible expert evidence. Practice Direction 2024 compliant.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#1E3A5F] py-14 md:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#B8860B] sm:text-sm">
            UK Immigration & Asylum Tribunals
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Immigration Expert Reports UK: Tribunal Evidence for Solicitors
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            The network master hub for immigration expert reports. We set report standards, instruction process, and
            tribunal compliance — connecting UK solicitors, barristers, and Legal Aid practitioners with qualified
            experts for asylum appeals, human rights claims, deportation proceedings, and Upper Tribunal cases.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#0E7490] px-6 py-3 font-semibold text-white hover:bg-[#0c6378] sm:w-auto sm:px-8"
            >
              Request an Expert Report
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              How to Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl md:text-3xl">
            Why Immigration Expert Evidence Matters
          </h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            UK immigration tribunals rely heavily on expert evidence — country condition reports, persecution analysis,
            human rights assessments, CPIN challenges, and linguistic identity reports. Home Office CPINs provide
            generic country policy; independent expert reports address the appellant&apos;s specific profile with dated
            primary sources and Practice Direction 2024 compliance.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-[#374151]/90 leading-relaxed">
            All guidance on this site relates to expert evidence in United Kingdom proceedings — the Immigration and
            Asylum Chamber, Upper Tribunal (Immigration and Asylum Chamber), and related UK appeals. We do not advise
            on immigration matters outside the UK.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Report Standards & Compliance",
                desc: "Practice Direction 2024 (20-page default), Adam Pipe October 2025 guide, Ikarian Reefer independence, and CPR Part 35 principles applied in tribunal proceedings.",
              },
              {
                title: "Network of Specialist Experts",
                desc: "Country-specific, persecution, and human rights expert sites across our network — routed through one instruction process and quality framework.",
              },
              {
                title: "Legal Aid Compatible",
                desc: "LAA prior authority guidance, rate expectations, and instruction bundles for legally aided FTT and Upper Tribunal proceedings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[8px] border border-[#CBD5E1] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
              >
                <h3 className="font-semibold text-[#1E3A5F]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">Report Types</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Eight report types across our network taxonomy — from country condition to oral evidence at tribunal.
          </p>
          <div className="mt-8">
            <CardGrid
              items={reportTypes.slice(0, 6).map((r) => ({
                title: r.title,
                description: r.metaDescription.slice(0, 120) + "...",
                href: `/report-types/${r.slug}`,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/report-types" className="inline-flex min-h-[44px] items-center font-semibold text-[#0E7490] hover:underline">
              View all report types
            </Link>
            <Link href="/report-standards" className="inline-flex min-h-[44px] items-center font-semibold text-[#0E7490] hover:underline">
              Report standards guide
            </Link>
            <Link href="/cpin-and-country-guidance" className="inline-flex min-h-[44px] items-center font-semibold text-[#0E7490] hover:underline">
              CPIN & Country Guidance
            </Link>
            <Link href="/what-is-an-immigration-expert-report" className="inline-flex min-h-[44px] items-center font-semibold text-[#0E7490] hover:underline">
              What is an immigration expert report?
            </Link>
            <Link href="/network" className="inline-flex min-h-[44px] items-center font-semibold text-[#0E7490] hover:underline">
              Network directory
            </Link>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1E3A5F]">Priority report types</h3>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "Country condition reports", href: "/report-types/country-condition-reports" },
                { label: "Persecution analysis reports", href: "/report-types/persecution-analysis-reports" },
                { label: "Human rights violation reports", href: "/report-types/human-rights-violation-reports" },
                { label: "CPIN challenge reports", href: "/report-types/cpin-challenge-reports" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium text-[#0E7490] hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">Expert Services</h2>
          <div className="mt-8">
            <CardGrid
              items={services.map((s) => ({
                title: s.title,
                description: s.description,
                href: `/services/${s.slug}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">Case Types</h2>
          <div className="mt-8">
            <CardGrid
              items={caseTypes.slice(0, 4).map((c) => ({
                title: c.title,
                description: c.metaDescription.slice(0, 120) + "...",
                href: `/case-types/${c.slug}`,
              }))}
            />
          </div>
          <Link href="/case-types" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#0E7490] hover:underline">
            View all case types
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
