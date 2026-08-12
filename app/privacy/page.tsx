import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy | Immigration Expert Reports",
  description: "Privacy policy for immigrationexpertreports.com",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Privacy Policy" breadcrumbs={crumbs}>
        <p className="text-[#3A3F47] leading-relaxed">
          Immigration Expert Reports is the network master hub connecting UK solicitors with qualified immigration
          expert witnesses. We collect personal data submitted through our contact form (name, law firm, email, phone,
          and case details) solely to respond to instruction requests and route cases to appropriate specialists in
          our network.
        </p>
        <p className="mt-4 text-[#3A3F47] leading-relaxed">
          Contact form submissions are processed via our secure lead API and may trigger email
          notifications to our team. We use cookies as described in our{" "}
          <Link href="/cookie-policy" className="text-[#4F8FFF] hover:underline">
            Cookie Policy
          </Link>
          . Non-essential tracking scripts load only after you grant cookie consent.
        </p>
        <h2 className="mt-8 text-lg font-bold text-[#0C0E12]">Your Rights (GDPR)</h2>
        <p className="mt-4 text-[#3A3F47] leading-relaxed">
          You have the right to access, rectify, erase, restrict processing, and port your personal data. You may
          withdraw consent for non-essential cookies at any time via Cookie Settings in the footer. To exercise your
          rights, contact {SITE_EMAIL}.
        </p>
      </PageShell>
    </>
  );
}
