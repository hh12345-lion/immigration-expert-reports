import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqs } from "@/data/faq";

export const metadata = createMetadata({
  title: "Immigration Expert Reports FAQ | UK Tribunal Evidence",
  description:
    "Frequently asked questions about immigration expert reports — Practice Direction 2024, Adam Pipe 2025, Legal Aid, CPIN challenges, report types, and network sites.",
  path: "/faq",
});

export default function FaqPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqs} />
      <PageShell
        title="Frequently Asked Questions"
        subtitle="Common questions from UK immigration solicitors instructing expert evidence."
        breadcrumbs={crumbs}
      >
        <FAQSection faqs={faqs} />
      </PageShell>
    </>
  );
}
