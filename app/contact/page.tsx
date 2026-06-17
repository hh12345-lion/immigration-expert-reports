import { ContactForm } from "@/components/forms/ContactForm";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, SITE_SCOPE_LINE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contact | Request an Immigration Expert Report",
  description:
    "Request an immigration expert report for UK tribunal proceedings. Country condition, persecution, human rights, CPIN challenge, and Legal Aid compatible expert evidence.",
  path: "/contact",
  noindex: true,
  follow: true,
});

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Request an Immigration Expert Report"
        subtitle="Submit your case details for UK tribunal proceedings — confidential response within one business day."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          Complete the form below or email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-[#0E7490] hover:underline">
            {SITE_EMAIL}
          </a>
          . We route instructions to the appropriate specialist in our network for United Kingdom immigration and
          asylum tribunal cases.
        </p>
        <p className="mb-8 text-sm text-[#374151]/90 leading-relaxed">{SITE_SCOPE_LINE}</p>
        <ContactForm />
      </PageShell>
    </>
  );
}
