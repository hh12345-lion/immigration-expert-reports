import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
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

const priorityReports = [
  { label: "Country condition reports", href: "/report-types/country-condition-reports" },
  { label: "Persecution analysis", href: "/report-types/persecution-analysis-reports" },
  { label: "Human rights violation reports", href: "/report-types/human-rights-violation-reports" },
  { label: "CPIN challenge reports", href: "/report-types/cpin-challenge-reports" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Masthead — brand-first, one composition */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-channel-corridor.png"
            alt=""
            fill
            priority
            className="object-cover opacity-55"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto grid min-h-[min(88vh,44rem)] max-w-7xl items-end gap-10 px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:grid-cols-12 lg:px-8 lg:pb-20">
          <div className="lg:col-span-8">
            <p className="animate-mast font-display text-[0.7rem] font-bold uppercase tracking-[0.22em] text-mark">
              Immigration Expert Reports
            </p>
            <h1 className="animate-mast-delay font-display mt-4 max-w-3xl text-3xl font-bold leading-[1.05] tracking-tight min-[375px]:text-4xl sm:text-5xl lg:text-6xl">
              Tribunal-ready expert evidence for UK immigration appeals
            </h1>
            <p className="animate-mast-delay mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Country conditions, persecution risk, CPIN challenge, and human rights analysis — instructed through one
              network hub for First-tier and Upper Tribunal proceedings.
            </p>
            <div className="animate-mast-delay mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="font-display inline-flex min-h-[44px] w-full items-center justify-center bg-mark px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink hover:bg-white sm:w-auto sm:px-8"
              >
                Request a report
              </Link>
              <Link
                href="/how-to-instruct"
                className="font-display inline-flex min-h-[44px] w-full items-center justify-center border border-white/35 px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-white hover:border-mark hover:text-mark sm:w-auto sm:px-8"
              >
                How to instruct
              </Link>
            </div>
          </div>

          <aside className="animate-rail hidden border-l border-white/15 pl-6 lg:col-span-4 lg:block">
            <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-signal">
              What practitioners instruct
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Practice Direction 2024 length discipline (20-page default)</li>
              <li>Dated primary sources vs generic CPIN summaries</li>
              <li>Ikarian Reefer independence &amp; duty to the tribunal</li>
              <li>Legal Aid prior-authority friendly instruction packs</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Substance rail */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-12">
          <div className="border-b border-border px-4 py-12 sm:px-6 lg:col-span-5 lg:border-b-0 lg:border-r lg:px-8 lg:py-16">
            <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-signal">
              Why expert evidence
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              CPINs state policy. Experts address the appellant.
            </h2>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-section-alt">
              <Image
                src="/images/bundle-index.jpg"
                alt="Indexed tribunal bundle sections with steel-blue tape and chartreuse tabs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="px-4 py-12 sm:px-6 lg:col-span-7 lg:px-10 lg:py-16">
            <p className="leading-relaxed text-body">
              Home Office Country Policy and Information Notes give a generalised country picture. Immigration
              tribunals still need independent analysis tied to the appellant&apos;s profile — ethnicity, religion,
              political activity, sexual orientation, gender, health, or particular social group — with sources dated
              and cited so the judge can weigh reliability.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              This hub sets report standards, instruction workflow, and compliance expectations across a network of
              country and thematic specialists. Guidance here relates only to United Kingdom proceedings: the
              Immigration and Asylum Chamber, Upper Tribunal (IAC), and related UK appeals.
            </p>

            <dl className="mt-10 space-y-6 border-t border-border pt-8">
              {[
                {
                  t: "Standards before drafting",
                  d: "Practice Direction 2024, Adam Pipe October 2025 practitioner guidance, Ikarian Reefer independence, and CPR Part 35 principles applied in tribunal settings.",
                },
                {
                  t: "Routed specialist network",
                  d: "Country-specific and thematic expert sites share one instruction path — you describe the case; we match the right report type and jurisdiction.",
                },
                {
                  t: "Legal Aid compatible",
                  d: "Instruction bundles and rate framing designed for LAA prior authority in FTT and Upper Tribunal matters.",
                },
              ].map((item) => (
                <div key={item.t} className="grid gap-2 md:grid-cols-[minmax(0,11rem)_1fr] md:gap-6">
                  <dt className="font-display text-sm font-bold text-ink">{item.t}</dt>
                  <dd className="text-sm leading-relaxed text-body">{item.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Report index — not cards */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-signal">
                Report types
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold text-ink sm:text-3xl">Filing index</h2>
            </div>
            <Link
              href="/report-types"
              className="font-display text-[0.7rem] font-bold uppercase tracking-[0.12em] text-signal hover:text-ink"
            >
              View all types →
            </Link>
          </div>

          <div className="mt-2">
            {reportTypes.slice(0, 6).map((r) => (
              <Link key={r.slug} href={`/report-types/${r.slug}`} className="index-row group">
                <span className="font-display text-base font-bold text-ink group-hover:text-signal">{r.title}</span>
                <span className="text-sm leading-relaxed text-body">{r.metaDescription.slice(0, 140)}…</span>
                <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] text-muted group-hover:text-mark">
                  Open
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {priorityReports.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-[0.7rem] font-bold uppercase tracking-[0.1em] text-signal hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/report-standards" className="text-body underline-offset-4 hover:text-signal hover:underline">
              Report standards
            </Link>
            <Link
              href="/cpin-and-country-guidance"
              className="text-body underline-offset-4 hover:text-signal hover:underline"
            >
              CPIN &amp; Country Guidance
            </Link>
            <Link
              href="/what-is-an-immigration-expert-report"
              className="text-body underline-offset-4 hover:text-signal hover:underline"
            >
              What is an expert report?
            </Link>
            <Link href="/network" className="text-body underline-offset-4 hover:text-signal hover:underline">
              Network directory
            </Link>
          </div>
        </div>
      </section>

      {/* Services as offset strip */}
      <section className="bg-ink py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-mark">Services</p>
          <h2 className="font-display mt-2 max-w-xl text-2xl font-bold sm:text-3xl">
            From written report to oral evidence
          </h2>
          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-2 py-5 transition sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-display text-lg font-bold group-hover:text-mark">{s.title}</span>
                  <span className="max-w-xl text-sm leading-relaxed text-white/60 sm:text-right">{s.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case types — staggered margin */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:ml-[12%] lg:ml-[18%]">
            <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-signal">
              Case types
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-ink sm:text-3xl">Where reports are used</h2>
            <p className="mt-3 max-w-2xl text-body">
              Asylum appeals, human rights claims, deportation, and Upper Tribunal challenges each need a different
              evidential emphasis — risk on return, Article 8/3, or error of law.
            </p>
            <ul className="mt-8 space-y-0">
              {caseTypes.slice(0, 4).map((c, i) => (
                <li key={c.slug}>
                  <Link
                    href={`/case-types/${c.slug}`}
                    className="group flex gap-4 border-b border-border py-4 sm:gap-6"
                    style={{ marginLeft: `${Math.min(i * 1.25, 4)}rem` }}
                  >
                    <span className="font-display shrink-0 text-signal">/</span>
                    <span>
                      <span className="font-display block font-bold text-ink group-hover:text-signal">{c.title}</span>
                      <span className="mt-1 block text-sm text-body">{c.metaDescription.slice(0, 110)}…</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/case-types"
              className="font-display mt-8 inline-flex min-h-[44px] items-center text-[0.7rem] font-bold uppercase tracking-[0.12em] text-signal hover:text-ink"
            >
              All case types →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
