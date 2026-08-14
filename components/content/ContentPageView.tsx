import type { ReactNode } from "react";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import type { ContentPage } from "@/data/content-types";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import { enrichContentPageLinks, type ContentLinkKind } from "@/data/related-links";

export function ContentPageView({
  page,
  hubLabel,
  hubHref,
  breadcrumbs,
  linkKind,
  children,
}: {
  page: ContentPage;
  hubLabel: string;
  hubHref: string;
  breadcrumbs: Crumb[];
  linkKind?: ContentLinkKind;
  children?: ReactNode;
}) {
  const enriched = linkKind ? enrichContentPageLinks(page, linkKind) : page;
  const relatedLinks = enriched.relatedLinks ?? [];

  return (
    <>
      <PageJsonLd breadcrumbs={breadcrumbs} faqs={enriched.faqs.length ? enriched.faqs : undefined} />
      <PageShell title={enriched.h1} breadcrumbs={breadcrumbs}>
        {enriched.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#3E4450] leading-relaxed">
            {p}
          </p>
        ))}

        {children}

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

        {enriched.faqs.length > 0 && <FAQSection faqs={enriched.faqs} />}

        <div className="mt-10">
          <Link href={hubHref} className="font-semibold text-[#2557D6] hover:underline">
            ← Back to {hubLabel}
          </Link>
        </div>
      </PageShell>
    </>
  );
}
