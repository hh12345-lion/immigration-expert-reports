import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Immigration Expert Report Guides for Solicitors | UK Tribunal",
  description:
    "Solicitor guides on immigration expert reports — standards, Legal Aid instruction, letters of instruction, CPIN vs Country Guidance, and CPR Part 35.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Solicitor Guides: Immigration Expert Reports"
        subtitle="Practical guides for instructing compliant expert evidence in UK immigration tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={guides.map((g) => ({
            title: g.title,
            description: g.metaDescription,
            href: `/guides/${g.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/report-standards" className="font-semibold text-[#2557D6] hover:underline">
            Full report standards pillar page
          </Link>
          <Link href="/cpin-and-country-guidance" className="font-semibold text-[#2557D6] hover:underline">
            CPIN & Country Guidance
          </Link>
          <Link href="/network" className="font-semibold text-[#2557D6] hover:underline">
            Network directory
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
