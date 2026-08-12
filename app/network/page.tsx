import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { networkSites } from "@/data/network-sites";
import { SITE_SCOPE_LINE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Immigration Expert Network Directory | Country & Thematic Expert Sites",
  description:
    "Complete network directory for immigration expert reports — country-specific, persecution, and human rights expert sites linked from the master hub.",
  path: "/network",
});

export default function NetworkPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Network Directory" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Network Directory"
        subtitle="Country-specific asylum profiles and thematic expert reports live on sibling network sites. This hub links out with descriptive anchor text — no country content is published on this domain."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 leading-relaxed text-body">
          immigrationexpertreports.com is the network master hub for United Kingdom immigration tribunal expert
          evidence. It owns report standards, instruction process, report type taxonomy, and tribunal procedure. Use
          the directory below to find the right specialist site for each UK case type and country.
        </p>
        <p className="mb-8 text-sm leading-relaxed text-muted">{SITE_SCOPE_LINE}</p>

        <div className="divide-y divide-border border-y border-border">
          {networkSites.map((site) => (
            <article key={site.url} className="grid gap-3 py-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:gap-8">
              <div>
                <h2 className="font-display text-lg font-bold text-ink">{site.name}</h2>
                <p className="font-display mt-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-signal">
                  {site.role}
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-body">{site.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display inline-flex min-h-[44px] items-center text-[0.7rem] font-bold uppercase tracking-[0.1em] text-signal hover:text-ink"
                  >
                    {site.anchorText} →
                  </a>
                  <Link href={site.reportTypeHref} className="text-xs text-muted hover:text-signal hover:underline">
                    Related report type
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2">
          {[
            { href: "/report-types/country-condition-reports", label: "Country condition reports" },
            { href: "/report-types/persecution-analysis-reports", label: "Persecution analysis" },
            { href: "/report-types/human-rights-violation-reports", label: "Human rights reports" },
            { href: "/report-types/cpin-challenge-reports", label: "CPIN challenges" },
            { href: "/report-types", label: "All report types" },
            { href: "/cpin-and-country-guidance", label: "CPIN & Country Guidance" },
            { href: "/report-standards", label: "Report standards" },
            { href: "/how-to-instruct", label: "How to instruct" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-[0.7rem] font-bold uppercase tracking-[0.1em] text-signal hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
}
