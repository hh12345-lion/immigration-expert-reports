import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Mark, Sweep, SwooshPhoto } from "@/components/brand/Brand";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { reportTypes } from "@/data/report-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title:
    "Immigration Expert Reports UK | Country & Asylum Reports for Immigration Tribunals",
  description:
    "Find qualified immigration expert reports for UK tribunals. Country condition reports, persecution analysis, human rights assessments, CPIN challenges, and Legal Aid compatible expert evidence. Practice Direction 2024 compliant.",
  path: "/",
});

const briefs = [
  "Practice Direction 2024 length discipline (20-page default)",
  "Dated primary sources vs generic CPIN summaries",
  "Ikarian Reefer independence and duty to the tribunal",
  "Legal Aid prior-authority friendly instruction packs",
];

const pillars = [
  {
    t: "Standards first",
    d: "Practice Direction 2024, Adam Pipe October 2025 guidance, Ikarian Reefer independence, and CPR Part 35 principles.",
  },
  {
    t: "Routed network",
    d: "Country-specific and thematic expert sites share one instruction path: you describe the case; we match the report.",
  },
  {
    t: "Legal Aid ready",
    d: "Instruction bundles and rate framing designed for LAA prior authority in FTT and Upper Tribunal matters.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Hero: the title leads; the photograph carries the sweep of the monogram. */}
      <section className="relative overflow-hidden bg-paper">
        <Sweep className="pointer-events-none absolute -right-32 -top-24 hidden h-[46rem] w-auto text-blue/[0.06] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="min-w-0">
            <h1 className="font-display max-w-3xl text-[2.6rem] leading-[1.06] text-ink sm:text-6xl lg:text-[4rem]">
              Tribunal-ready expert evidence for UK immigration appeals
            </h1>
            <span aria-hidden className="mt-7 block h-1.5 w-20 rounded-tl-full bg-orange" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
              Country conditions, persecution risk, CPIN challenge, and human rights analysis, instructed through one
              network hub for First-tier and Upper Tribunal proceedings.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-blue px-8 font-bold text-white transition hover:bg-orange"
              >
                Request a report
              </Link>
              <Link
                href="/how-to-instruct"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border-2 border-ink/25 px-8 font-bold text-ink transition hover:border-blue hover:text-blue"
              >
                How to instruct
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg sm:pb-16 lg:max-w-none">
            <SwooshPhoto photo={photos.passportControl} priority aspect="aspect-[4/5]" sizes="(max-width: 1024px) 85vw, 480px" className="ml-auto w-[88%]" />
            <div className="relative mt-5 overflow-hidden rounded-xl bg-surface shadow-lift sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[68%]">
              <span aria-hidden className="block h-1.5 bg-orange" />
              <div className="p-5">
                <p className="font-display text-lg text-ink">What practitioners instruct</p>
                <ul className="mt-3 space-y-2">
                  {briefs.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-body">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:px-8">
          <SwooshPhoto photo={photos.lunarHouse} aspect="aspect-[4/5]" sizes="(max-width: 1024px) 85vw, 440px" className="mx-auto w-full max-w-md" />
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-[2.7rem] sm:leading-tight">
              CPINs state policy. Experts address the appellant.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Home Office Country Policy and Information Notes give a generalised country picture. Immigration tribunals
              still need independent analysis tied to the appellant&apos;s profile (ethnicity, religion, political
              activity, sexual orientation, gender, health, or particular social group) with sources dated and cited so
              the judge can weigh reliability.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              This hub sets report standards, instruction workflow, and compliance expectations across a network of
              country and thematic specialists. Guidance here relates only to United Kingdom proceedings: the
              Immigration and Asylum Chamber, Upper Tribunal (IAC), and related UK appeals.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map((item) => (
                <div key={item.t} className="border-t-[3px] border-blue pt-4">
                  <h3 className="font-display text-xl text-ink">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl text-ink sm:text-[2.7rem]">What we prepare</h2>
            <Link href="/report-types" className="inline-flex min-h-[46px] items-center rounded-full border-2 border-ink/25 px-6 font-bold text-ink hover:border-blue hover:text-blue">
              All report types
            </Link>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {reportTypes.slice(0, 6).map((r) => {
              const p = photoFor(r.slug);
              return (
                <Link key={r.slug} href={`/report-types/${r.slug}`} className="group block min-w-0">
                  <div className="swoosh-sm relative aspect-[16/11] overflow-hidden bg-section-alt">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="font-display mt-5 text-2xl text-ink group-hover:text-signal">{r.title}</h3>
                  <p className="mt-2 line-clamp-3 leading-relaxed text-body">{r.metaDescription}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6">
            {[
              { href: "/report-standards", label: "Report standards" },
              { href: "/cpin-and-country-guidance", label: "CPIN & Country Guidance" },
              { href: "/what-is-an-immigration-expert-report", label: "What is an expert report?" },
              { href: "/network", label: "Network directory" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center gap-2 font-bold text-signal hover:underline">
                <Sweep className="h-3.5 w-auto text-orange" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* A full-width photograph of the Channel crossing, under a navy sweep. */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image src={photos.whiteCliffs.src} alt={photos.whiteCliffs.alt} fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl leading-tight text-cream sm:text-[2.8rem]">From written report to oral evidence</h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Every service is built for UK tribunal practice, from the first country report to cross-examination at the
              hearing.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex min-h-[42px] items-center rounded-full border border-cream/30 bg-navy/40 px-4 text-sm font-bold text-cream backdrop-blur transition hover:border-orange hover:bg-orange"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
        <Mark className="pointer-events-none absolute -left-16 bottom-0 h-80 w-auto opacity-[0.06]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-ink sm:text-[2.7rem]">Where reports are used</h2>
            <p className="mt-4 text-lg text-body">
              Asylum appeals, human rights claims, deportation, and Upper Tribunal challenges each need a different
              evidential emphasis: risk on return, Article 8/3, or error of law.
            </p>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {caseTypes.slice(0, 4).map((c) => {
              const p = photoFor(c.slug);
              return (
                <Link key={c.slug} href={`/case-types/${c.slug}`} className="group block">
                  <div className="swoosh-sm relative aspect-[4/5] overflow-hidden bg-section-alt">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 290px" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="font-display mt-4 text-xl text-ink group-hover:text-signal">{c.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body">{c.metaDescription}</p>
                </Link>
              );
            })}
          </div>
          <Link href="/case-types" className="mt-10 inline-flex min-h-[46px] items-center rounded-full border-2 border-ink/25 px-6 font-bold text-ink hover:border-blue hover:text-blue">
            All case types
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
