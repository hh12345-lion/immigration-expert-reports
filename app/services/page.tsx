import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { servicesCatalogSchema } from "@/lib/schema";
import { SITE_SCOPE_LINE } from "@/lib/constants";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Immigration Expert Report Services UK | Tribunal Evidence",
  description:
    "Immigration expert report services for UK tribunals — country condition, persecution analysis, human rights, CPIN challenge, internal relocation, linguistic identity, QA review, and oral evidence.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={servicesCatalogSchema(
          services.map((s) => ({ slug: s.slug, title: s.title, description: s.description }))
        )}
      />
      <PageShell
        title="Immigration Expert Report Services"
        subtitle="Eight core services for UK immigration and asylum tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          Each service maps to a report type in our network taxonomy. Country-specific instruction is routed to
          specialist network sites via our{" "}
          <Link href="/network" className="text-[#0E7490] hover:underline">
            network directory
          </Link>
          . Report standards and tribunal compliance apply across all services in the United Kingdom.
        </p>
        <p className="mb-8 text-sm text-[#374151]/90 leading-relaxed">{SITE_SCOPE_LINE}</p>
        <CardGrid
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
            href: `/services/${s.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="font-semibold text-[#0E7490] hover:underline">
            Request an expert report
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#B8860B] hover:underline">
            Fees & Legal Aid
          </Link>
        </div>
      </PageShell>
    </>
  );
}
