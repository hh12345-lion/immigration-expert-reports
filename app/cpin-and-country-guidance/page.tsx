import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "CPIN & Country Guidance: Expert Evidence Guide | UK Immigration",
  description:
    "CPIN vs Country Guidance hierarchy for immigration expert evidence. When experts challenge CPINs, apply CG framework, and cite dated sources in UK tribunal proceedings.",
  path: "/cpin-and-country-guidance",
});

const docTable = [
  {
    type: "CPIN (Country Policy Information Note)",
    authority: "Home Office operational guidance",
    role: "Expert goes beyond and may challenge",
  },
  {
    type: "Country Guidance (CG)",
    authority: "Upper Tribunal binding precedent",
    role: "Expert applies CG framework to appellant profile",
  },
  {
    type: "EUAA Country Guidance",
    authority: "European reference (persuasive)",
    role: "Expert cites where relevant to UK analysis",
  },
  {
    type: "UNHCR Eligibility Guidelines",
    authority: "International standards",
    role: "Expert applies to profile-specific analysis",
  },
];

export default function CpinCountryGuidancePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "CPIN & Country Guidance" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={articleSchema({
          headline: "CPIN & Country Guidance: A Guide for UK Immigration Solicitors Instructing Experts",
          description: metadata.description as string,
          path: "/cpin-and-country-guidance",
        })}
      />
      <PageShell
        title="CPIN & Country Guidance: A Guide for UK Immigration Solicitors Instructing Experts"
        subtitle="Document hierarchy, expert role, and when to challenge Home Office country policy."
        breadcrumbs={crumbs}
      >
        <p className="mb-6 text-[#3E4450] leading-relaxed">
          Solicitors instructing immigration experts must understand the hierarchy of country information sources.
          Home Office CPINs provide operational guidance but are not binding on tribunals. Country Guidance cases
          establish binding Upper Tribunal precedent. When CPIN and CG conflict, tribunals must follow CG. Experts
          must cite dated sources and state CPIN publication dates.
        </p>

        <div className="table-scroll overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="mb-3 text-left text-sm text-[#3E4450]">
              Document hierarchy for immigration expert evidence: CPIN, Country Guidance, and international references
            </caption>
            <thead>
              <tr className="border-b border-[#DDD6CB] bg-[#EBE6DC]">
                <th className="p-3 font-semibold text-[#1B2430]">Document Type</th>
                <th className="p-3 font-semibold text-[#1B2430]">Authority</th>
                <th className="p-3 font-semibold text-[#1B2430]">Expert Role</th>
              </tr>
            </thead>
            <tbody>
              {docTable.map((row) => (
                <tr key={row.type} className="border-b border-[#DDD6CB]">
                  <td className="p-3 text-[#3E4450]">{row.type}</td>
                  <td className="p-3 text-[#3E4450]">{row.authority}</td>
                  <td className="p-3 text-[#3E4450]">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">Country Guidance Hierarchy</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Country Guidance cases are decided by the Upper Tribunal and bind First-tier Tribunals on the issues they
          determine. CPINs are Home Office operational documents updated periodically — they do not override binding
          CG. Experts apply the CG framework to the appellant&apos;s specific profile and identify where the CPIN
          diverges from CG or fails to address profile-specific risks.
        </p>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Home Office CPIN publishing continues through 2025–2026 across major asylum jurisdictions. Experts must
          compare CPIN dates with current conditions and cite more recent primary sources where the CPIN is outdated
          or incomplete.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/report-types/cpin-challenge-reports" className="font-semibold text-[#2557D6] hover:underline">
            CPIN challenge reports
          </Link>
          <Link href="/guides/cpin-vs-country-guidance-guide" className="font-semibold text-[#2557D6] hover:underline">
            CPIN vs CG guide
          </Link>
          <Link href="/report-standards" className="font-semibold text-[#2557D6] hover:underline">
            Report standards
          </Link>
          <Link href="/network" className="font-semibold text-[#2557D6] hover:underline">
            Network directory
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#2557D6] hover:underline">
            How to instruct
          </Link>
          <Link href="/contact" className="font-semibold text-[#2557D6] hover:underline">
            Contact us
          </Link>
        </div>
        <h2 className="mt-12 text-xl font-bold text-[#1B2430]">Report types</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            { label: "Country condition reports", href: "/report-types/country-condition-reports" },
            { label: "Persecution analysis reports", href: "/report-types/persecution-analysis-reports" },
            { label: "Human rights violation reports", href: "/report-types/human-rights-violation-reports" },
            { label: "CPIN challenge reports", href: "/report-types/cpin-challenge-reports" },
            { label: "Internal relocation reports", href: "/report-types/internal-relocation-reports" },
            { label: "Linguistic & clan identity reports", href: "/report-types/linguistic-clan-identity-reports" },
            { label: "Medical & psychiatric (signposting)", href: "/report-types/medical-psychiatric-reports" },
            { label: "Oral evidence at tribunal", href: "/report-types/oral-evidence-tribunal" },
          ].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-[#2557D6] hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </PageShell>
    </>
  );
}
