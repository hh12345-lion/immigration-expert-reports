import Link from "next/link";
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
        title="Instruct in four fields"
        subtitle="Name, firm, email, and a short case note. We match the right network specialist for UK tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="leading-relaxed text-body">
              Prefer email? Write to{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-signal hover:underline">
                {SITE_EMAIL}
              </a>
              .
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{SITE_SCOPE_LINE}</p>
            <ul className="mt-8 space-y-3 border-l-2 border-signal pl-4 text-sm text-body">
              <li>Country / region of risk</li>
              <li>FTT, Upper Tribunal, or related appeal stage</li>
              <li>Report type if known (country condition, CPIN challenge, etc.)</li>
            </ul>
          </div>
          <ContactForm />
        </div>
        <p className="mt-10 text-sm text-muted">
          Also see{" "}
          <Link href="/how-to-instruct" className="text-signal hover:underline">
            how to instruct
          </Link>{" "}
          and{" "}
          <Link href="/fees" className="text-signal hover:underline">
            fees guidance
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
