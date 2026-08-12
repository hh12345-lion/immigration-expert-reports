import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | Immigration Expert Reports",
  description: "Terms of use for immigrationexpertreports.com",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Terms" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Terms of Use" breadcrumbs={crumbs}>
        <p className="text-[#3A3F47] leading-relaxed">
          Immigration Expert Reports is the network master hub for immigration expert evidence in UK tribunal
          proceedings. We coordinate report standards, instruction process, and routing to specialist network sites. We
          are not a law firm and do not provide legal advice. Expert reports instructed through our network operate
          independently and owe their primary duty to the tribunal under Immigration Tribunal Practice Direction
          paragraph 10 and Ikarian Reefer principles.
        </p>
        <p className="mt-4 text-[#3A3F47] leading-relaxed">
          Fees quoted are indicative and confirmed on instruction. Cancellation terms are agreed between the instructing
          solicitor and the expert at the point of engagement. Country-specific asylum profiles and regional content
          are published on sibling network sites, not on this domain.
        </p>
      </PageShell>
    </>
  );
}
