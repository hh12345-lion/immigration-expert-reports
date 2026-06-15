import { PageShell } from "@/components/layout/PageShell";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getGlossaryTermsWithLinks } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Immigration Expert Reports Glossary | UK Tribunal Terms",
  description:
    "Glossary of immigration expert report and tribunal terms — CPIN, Country Guidance, Practice Direction, Ikarian Reefer, hot-tubbing, LAA prior authority, and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];
  const terms = getGlossaryTermsWithLinks();
  const faqItems = terms.map((t) => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
  }));

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqItems} />
      <PageShell
        title="Immigration Expert Reports Glossary"
        subtitle="30 definition-first terms for UK immigration practitioners."
        breadcrumbs={crumbs}
      >
        <GlossarySearch terms={terms} />
      </PageShell>
    </>
  );
}
