import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { reportTypes } from "@/data/report-types";

export const metadata = createMetadata({
  title: "Immigration Expert Report Types UK | Tribunal Evidence Taxonomy",
  description:
    "Eight immigration expert report types for UK tribunals — country condition, persecution analysis, human rights, CPIN challenge, internal relocation, linguistic identity, and oral evidence.",
  path: "/report-types",
});

export default function ReportTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Report Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Report Types"
        subtitle="The network taxonomy for expert evidence in UK immigration tribunals — what to instruct, when, and which specialist site to use."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          immigrationexpertreports.com owns the report type taxonomy and instruction standards. Country-specific
          asylum profiles live on sibling network sites — this hub explains each report type and links to the right
          specialist. See our{" "}
          <Link href="/network" className="text-[#0E7490] hover:underline">
            network directory
          </Link>{" "}
          for country and thematic expert sites.
        </p>
        <CardGrid
          items={reportTypes.map((r) => ({
            title: r.title,
            description: r.metaDescription,
            href: `/report-types/${r.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/report-standards" className="font-semibold text-[#B8860B] hover:underline">
            Report standards pillar
          </Link>
          <Link href="/cpin-and-country-guidance" className="font-semibold text-[#B8860B] hover:underline">
            CPIN & Country Guidance
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#B8860B] hover:underline">
            How to instruct
          </Link>
          <Link href="/contact" className="font-semibold text-[#B8860B] hover:underline">
            Contact us
          </Link>
          <Link href="/guides/choosing-the-right-expert" className="font-semibold text-[#B8860B] hover:underline">
            Choosing the right expert
          </Link>
        </div>
      </PageShell>
    </>
  );
}
