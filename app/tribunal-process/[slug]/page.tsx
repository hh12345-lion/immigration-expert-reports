import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { tribunalProcesses, getTribunalProcess } from "@/data/tribunal-process";
import { ContentPageView } from "@/components/content/ContentPageView";

export function generateStaticParams() {
  return tribunalProcesses.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getTribunalProcess(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/tribunal-process/${slug}`,
  });
}

export default async function TribunalProcessSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getTribunalProcess(slug);
  if (!page) notFound();

  return (
    <ContentPageView
      page={page}
      hubLabel="Tribunal Process"
      hubHref="/tribunal-process"
      linkKind="tribunal-process"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Tribunal Process", href: "/tribunal-process" },
        { label: page.title },
      ]}
    />
  );
}
