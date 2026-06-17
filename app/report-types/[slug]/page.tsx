import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { reportTypes, getReportType } from "@/data/report-types";
import { ContentPageView } from "@/components/content/ContentPageView";

export function generateStaticParams() {
  return reportTypes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getReportType(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/report-types/${slug}`,
  });
}

function PersecutionGeoSections() {
  return (
    <>
      <h2 id="hj-iran" className="mt-10 scroll-mt-24 text-xl font-bold text-[#1E3A5F]">
        HJ (Iran) [2010] UKSC — Four-Stage Test (LGBTQ+ Asylum)
      </h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        The Supreme Court in <em>HJ (Iran)</em> [2010] UKSC 31 rejected the requirement that LGBTQ+ asylum claimants
        conceal their sexuality to avoid persecution. Expert reports addressing sexuality-based persecution in UK
        tribunals should apply this framework:
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-[#374151] leading-relaxed">
        <li>Is the claimant gay (or perceived as gay)?</li>
        <li>Do they have to conceal their sexuality to avoid persecution?</li>
        <li>Would concealment be reasonably tolerable?</li>
        <li>If not, is there a real risk of persecution?</li>
      </ol>

      <h2 id="rt-zimbabwe" className="mt-10 scroll-mt-24 text-xl font-bold text-[#1E3A5F]">
        RT (Zimbabwe) [2012] UKSC — Imputed Political Opinion
      </h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        In <em>RT (Zimbabwe)</em> [2012] UKSC 38, the Supreme Court held that political opinion may be imputed to a
        claimant by persecutors — a person may be at risk for perceived opposition to the government even without
        actual political activity. Expert persecution analysis for UK tribunals should address whether state or
        non-state actors would impute dissenting political opinion to the appellant&apos;s profile, including family
        associations, region, or past conduct.
      </p>
    </>
  );
}

export default async function ReportTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getReportType(slug);
  if (!page) notFound();

  return (
    <ContentPageView
      page={page}
      hubLabel="Report Types"
      hubHref="/report-types"
      linkKind="report-type"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Report Types", href: "/report-types" },
        { label: page.title },
      ]}
    >
      {slug === "persecution-analysis-reports" ? <PersecutionGeoSections /> : null}
    </ContentPageView>
  );
}
