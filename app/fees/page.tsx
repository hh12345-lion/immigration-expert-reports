import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Immigration Expert Report Fees | UK Tribunal & Legal Aid Rates",
  description:
    "Indicative fees for immigration expert reports in UK tribunals. Legal Aid prior authority, report and attendance fees, and turnaround expectations.",
  path: "/fees",
});

export default function FeesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Fees" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Report Fees"
        subtitle="Indicative fee guidance for solicitors instructing expert evidence in UK immigration proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#3E4450] leading-relaxed">
          Expert report fees vary by report type, complexity, country, and urgency. Standard country condition and
          persecution analysis reports typically require 2 to 3 weeks for preparation. Expedited reports may be
          available depending on expert availability and tribunal deadlines.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#1B2430]">Legal Aid Cases</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          LAA prior authority is required before instructing expert disbursements in legally aided cases. Submit
          proposed scope, expert CV, and indicative fees with your prior authority application. The expert must not
          begin work until prior authority is confirmed. Attendance fees for oral evidence at tribunal are separate
          disbursements requiring prior authority.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#1B2430]">Private Instructions</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Privately funded instructions proceed on agreed fee terms confirmed at instruction. Fees cover report
          preparation within the agreed scope. Additional fees apply for written questions from opposing parties,
          supplementary reports, and tribunal attendance where directed.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#1B2430]">Request a Quote</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Contact us with case details for indicative fees and expert availability. Provide the report type, country,
          proceeding, funding type, and tribunal deadline for the most accurate response.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="font-semibold text-[#2557D6] hover:underline">
            Request an expert report
          </Link>
          <Link href="/guides/instructing-expert-legal-aid" className="font-semibold text-[#2557D6] hover:underline">
            Legal Aid instruction guide
          </Link>
        </div>
      </PageShell>
    </>
  );
}
