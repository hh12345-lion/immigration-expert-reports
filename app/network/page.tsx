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
        <p className="mb-4 text-[#374151] leading-relaxed">
          immigrationexpertreports.com is the network master hub for United Kingdom immigration tribunal expert
          evidence. It owns report standards, instruction process, report type taxonomy, and tribunal procedure. Use
          the directory below to find the right specialist site for each UK case type and country.
        </p>
        <p className="mb-8 text-sm text-[#374151]/90 leading-relaxed">{SITE_SCOPE_LINE}</p>

        <div className="grid gap-6 sm:grid-cols-2">
          {networkSites.map((site) => (
            <article
              key={site.url}
              className="flex min-w-0 flex-col rounded-[8px] border border-[#CBD5E1] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-lg font-bold text-[#1E3A5F]">{site.name}</h2>
              <p className="mt-1 text-xs font-medium text-[#B8860B]">{site.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#374151]">{site.description}</p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#0E7490] hover:underline"
                >
                  {site.anchorText} →
                </a>
                <Link
                  href={site.reportTypeHref}
                  className="text-xs text-[#374151] hover:text-[#0E7490] hover:underline"
                >
                  Related report type
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/report-types/country-condition-reports" className="font-semibold text-[#0E7490] hover:underline">
            Country condition reports
          </Link>
          <Link href="/report-types/persecution-analysis-reports" className="font-semibold text-[#0E7490] hover:underline">
            Persecution analysis reports
          </Link>
          <Link href="/report-types/human-rights-violation-reports" className="font-semibold text-[#0E7490] hover:underline">
            Human rights violation reports
          </Link>
          <Link href="/report-types/cpin-challenge-reports" className="font-semibold text-[#0E7490] hover:underline">
            CPIN challenge reports
          </Link>
          <Link href="/report-types" className="font-semibold text-[#B8860B] hover:underline">
            All report types
          </Link>
          <Link href="/cpin-and-country-guidance" className="font-semibold text-[#B8860B] hover:underline">
            CPIN & Country Guidance
          </Link>
          <Link href="/report-standards" className="font-semibold text-[#B8860B] hover:underline">
            Report standards
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#B8860B] hover:underline">
            How to instruct
          </Link>
          <Link href="/contact" className="font-semibold text-[#B8860B] hover:underline">
            Contact us
          </Link>
        </div>
      </PageShell>
    </>
  );
}
