import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { guides, getGuide } from "@/data/guides";
import { getGuideRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const relatedLinks = getGuideRelatedLinks(slug, guide.relatedLinks);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: guide.title },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={articleSchema({
          headline: guide.h1,
          description: guide.metaDescription,
          path: `/guides/${slug}`,
        })}
      />
      <PageShell title={guide.h1} breadcrumbs={crumbs}>
        {guide.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#3E4450] leading-relaxed">
            {p}
          </p>
        ))}
        {relatedLinks.length > 0 && (
          <>
            <h2 className="mt-8 text-xl font-bold text-[#1B2430]">Related Resources</h2>
            <ul className="mt-4 space-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#2557D6] hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="mt-10">
          <Link href="/guides" className="font-semibold text-[#2557D6] hover:underline">
            ← Back to Guides
          </Link>
        </div>
      </PageShell>
    </>
  );
}
