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
    />
  );
}
