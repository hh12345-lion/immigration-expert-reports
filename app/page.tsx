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

const briefs = [
  "Practice Direction 2024 length discipline (20-page default)",
  "Dated primary sources vs generic CPIN summaries",
  "Ikarian Reefer independence and duty to the tribunal",
  "Legal Aid prior-authority friendly instruction packs",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:items-start lg:gap-14 lg:px-8 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-signal">For solicitors and counsel</p>
            <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-ink min-[375px]:text-4xl sm:text-5xl lg:text-[3.25rem]">
              Tribunal-ready expert evidence for UK immigration appeals
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Country conditions, persecution risk, CPIN challenge, and human rights analysis — instructed through one
              network hub for First-tier and Upper Tribunal proceedings.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="font-display inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] bg-signal px-6 py-3 text-sm font-semibold text-white hover:bg-signal-hover sm:w-auto sm:px-8"
              >
                Request a report
              </Link>
              <Link
                href="/how-to-instruct"
                className="font-display inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-signal hover:text-signal sm:w-auto sm:px-8"
              >
                How to instruct
              </Link>
            </div>
            <figure className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[6px] bg-section-alt">
              <Image
                src="/images/hero-channel-corridor.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </figure>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-[6px] border border-border bg-surface p-5 sm:p-6">
              <p className="font-display text-sm font-semibold text-ink">Chamber brief</p>
              <p className="mt-1 text-sm text-muted">What practitioners instruct</p>
              <ul className="mt-5 space-y-3">
                {briefs.map((item) => (
                  <li key={item} className="chamber-ticket text-sm leading-relaxed text-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-signal">Why expert evidence</p>
            <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              CPINs state policy. Experts address the appellant.
            </h2>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[6px] bg-section-alt">
              <Image
                src="/images/bundle-index.jpg"
                alt="Indexed tribunal bundle sections with tape and tabs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
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
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  t: "Standards first",
                  d: "Practice Direction 2024, Adam Pipe October 2025 guidance, Ikarian Reefer independence, and CPR Part 35 principles.",
                },
                {
                  t: "Routed network",
                  d: "Country-specific and thematic expert sites share one instruction path — you describe the case; we match the report.",
                },
                {
                  t: "Legal Aid ready",
                  d: "Instruction bundles and rate framing designed for LAA prior authority in FTT and Upper Tribunal matters.",
                },
              ].map((item) => (
                <div key={item.t} className="chamber-ticket">
                  <h3 className="font-display text-sm font-semibold text-ink">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-signal">Report types</p>
              <h2 className="font-display mt-1 text-2xl font-semibold text-ink sm:text-3xl">What we prepare</h2>
            </div>
            <Link href="/report-types" className="text-sm font-medium text-signal hover:underline">
              View all types
            </Link>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {reportTypes.slice(0, 6).map((r) => (
              <Link key={r.slug} href={`/report-types/${r.slug}`} className="group block min-w-0">
                <h3 className="font-display text-lg font-semibold text-ink group-hover:text-signal">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{r.metaDescription.slice(0, 160)}…</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
            {priorityReports.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-signal hover:underline">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-body">
            <Link href="/report-standards" className="hover:text-signal hover:underline">
              Report standards
            </Link>
            <Link href="/cpin-and-country-guidance" className="hover:text-signal hover:underline">
              CPIN &amp; Country Guidance
            </Link>
            <Link href="/what-is-an-immigration-expert-report" className="hover:text-signal hover:underline">
              What is an expert report?
            </Link>
            <Link href="/network" className="hover:text-signal hover:underline">
              Network directory
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-signal">Services</p>
            <h2 className="font-display mt-1 text-2xl font-semibold text-ink sm:text-3xl">
              From written report to oral evidence
            </h2>
          </div>
          <div className="rounded-[6px] bg-ink p-6 text-white sm:p-8 lg:col-span-8">
            <ul className="flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="font-display inline-flex min-h-[44px] items-center rounded-[6px] border border-white/20 px-4 py-2 text-sm hover:border-mark hover:text-mark"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-signal">Case types</p>
          <h2 className="font-display mt-1 text-2xl font-semibold text-ink sm:text-3xl">Where reports are used</h2>
          <p className="mt-3 max-w-2xl text-body">
            Asylum appeals, human rights claims, deportation, and Upper Tribunal challenges each need a different
            evidential emphasis — risk on return, Article 8/3, or error of law.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {caseTypes.slice(0, 4).map((c, i) => (
              <Link
                key={c.slug}
                href={`/case-types/${c.slug}`}
                className={`group rounded-[6px] p-6 ${i % 2 === 0 ? "bg-surface" : "bg-section-alt"}`}
              >
                <h3 className="font-display font-semibold text-ink group-hover:text-signal">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{c.metaDescription.slice(0, 120)}…</p>
              </Link>
            ))}
          </div>
          <Link
            href="/case-types"
            className="mt-8 inline-flex min-h-[44px] items-center text-sm font-medium text-signal hover:underline"
          >
            All case types
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
