import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Immigration Case Types Requiring Expert Reports | UK Tribunal Guide",
  description:
    "Expert evidence for FTT asylum appeals, Upper Tribunal, deportation, fresh claims, human rights, judicial review, administrative review, and country guidance challenges.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Case Types & Expert Reports"
        subtitle="Which expert reports are needed for each type of UK immigration proceeding."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.metaDescription,
            href: `/case-types/${c.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/report-types" className="font-semibold text-[#2557D6] hover:underline">
            View report types
          </Link>
          <Link href="/report-standards" className="font-semibold text-[#2557D6] hover:underline">
            Report standards
          </Link>
          <Link href="/cpin-and-country-guidance" className="font-semibold text-[#2557D6] hover:underline">
            CPIN & Country Guidance
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
