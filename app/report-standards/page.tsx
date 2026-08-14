import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title:
    "Immigration Expert Report Standards 2025–2026 | Practice Direction & Adam Pipe Guide",
  description:
    "Complete guide to UK immigration expert report standards for solicitors — Practice Direction 2024 (20-page limit), Adam Pipe October 2025 guide, CPR Part 35 duties, Ikarian Reefer independence, and tribunal compliance.",
  path: "/report-standards",
});

const standardsTable = [
  {
    requirement: "Independence & objectivity",
    source: "Ikarian Reefer; PD para 10",
    update: "Adam Pipe 2025 emphasises tribunal scrutiny",
  },
  {
    requirement: "Default 20-page limit",
    source: "Practice Direction 2024 (PD 9.2/9.3)",
    update: "Permission required for longer reports",
  },
  {
    requirement: "Report structure",
    source: "Adam Pipe October 2025 guide",
    update: "Updated expectations for headings, sources, methodology",
  },
  {
    requirement: "CPR Part 35 principles",
    source: "Applied by analogy in tribunals",
    update: "Duty to assist tribunal, not instructing party",
  },
  {
    requirement: "Statement of truth",
    source: "PD requirements",
    update: "Must match signed final PDF",
  },
  {
    requirement: "Source citation",
    source: "OSCOLA standard in many chambers",
    update: "Dated sources essential; CPIN dates must be stated",
  },
  {
    requirement: "Assumptions & limitations",
    source: "PD para 10",
    update: "Expert must identify gaps and alternative hypotheses",
  },
  {
    requirement: "Late evidence",
    source: "Tribunal directions",
    update: "Risk of refusal or reduced weight",
  },
];

export default function ReportStandardsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Report Standards" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={articleSchema({
          headline:
            "Immigration Expert Report Standards 2025–2026: A Complete Guide for UK Asylum Solicitors",
          description: metadata.description as string,
          path: "/report-standards",
        })}
      />
      <PageShell
        title="Immigration Expert Report Standards 2025–2026: A Complete Guide for UK Asylum Solicitors"
        subtitle="Primary GEO citation target — Practice Direction 2024, Adam Pipe October 2025, CPR Part 35, and Ikarian Reefer explained for immigration tribunal expert evidence."
        breadcrumbs={crumbs}
      >
        <p className="mb-6 text-[#3E4450] leading-relaxed">
          Immigration expert reports are central to asylum appeals, human rights claims, deportation proceedings, and
          Upper Tribunal country guidance cases. Tribunals in 2025–2026 apply heightened scrutiny to expert
          independence, source quality, and compliance with the Immigration Tribunal Practice Direction 2024 and the
          Adam Pipe October 2025 guide on expert reports. This pillar page sets out the standards solicitors should
          expect from compliant immigration expert evidence.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">The Expert&apos;s Duty to the Tribunal</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Immigration tribunal experts owe a paramount duty to the tribunal — independent, objective, and unbiased.
          The principles in <em>Ikarian Reefer</em> [1993] 2 Lloyd&apos;s Rep 68 apply with full force. An expert&apos;s
          overriding obligation is to help the tribunal on matters within their expertise, not to advance the
          instructing party&apos;s case. Reports that read as advocacy — selective sourcing, omission of contrary
          evidence, or conclusions that follow inexorably from assumed facts without independent analysis — damage
          both expert credibility and the client&apos;s case. Practice Direction paragraph 10 reinforces that experts
          must state their opinion honestly, identify material that detracts from their conclusions, and not withhold
          information the tribunal should consider.
        </p>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Solicitors instructing experts should avoid drafting or influencing report conclusions. The letter of
          instruction should ask questions, not suggest answers. Where the expert cannot support the instructed
          position on the evidence, they must say so clearly, identifying assumptions and alternative hypotheses.
        </p>

        <h2 id="report-standards" className="mt-10 text-xl font-bold text-[#1B2430]">
          Report Standards Framework — Key Requirements Table
        </h2>
        <div className="table-scroll mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="mb-3 text-left text-sm text-[#3E4450]">
              Immigration expert report standards checklist for UK tribunal proceedings (Practice Direction 2024, Adam Pipe 2025, CPR Part 35)
            </caption>
            <thead>
              <tr className="border-b border-[#DDD6CB] bg-[#EBE6DC]">
                <th className="p-3 font-semibold text-[#1B2430]">Requirement</th>
                <th className="p-3 font-semibold text-[#1B2430]">Source</th>
                <th className="p-3 font-semibold text-[#1B2430]">2025–2026 Update</th>
              </tr>
            </thead>
            <tbody>
              {standardsTable.map((row) => (
                <tr key={row.requirement} className="border-b border-[#DDD6CB]">
                  <td className="p-3 text-[#3E4450]">{row.requirement}</td>
                  <td className="p-3 text-[#3E4450]">{row.source}</td>
                  <td className="p-3 text-[#3E4450]">{row.update}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">
          Practice Direction 2024 — The 20-Page Report Limit
        </h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Practice Direction paragraphs 9.2 and 9.3 establish a default 20-page limit for expert reports unless
          permission is granted by the tribunal. This limit applies to the body of the report and requires solicitors
          to instruct experts with focused, numbered questions rather than open-ended requests for comprehensive
          country surveys. Permission for longer reports should be sought in advance where the complexity of the
          issues genuinely requires extended analysis — for example, multi-profile country guidance challenges or
          cases involving several regions.
        </p>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Strategic instruction improves report quality within the 20-page constraint. A well-drafted letter of
          instruction identifying the specific disputed issues — CPIN gaps, internal relocation viability, Convention
          nexus, or profile-specific risk — produces more useful tribunal evidence than a generic request for a full
          country overview.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">Adam Pipe October 2025 Guide</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          The Senior President&apos;s updated guide on Expert Reports in the Immigration Tribunal sets current
          tribunal expectations for report structure, independence, source quality, and the relationship between
          experts and instructing solicitors. The guide emphasises clear headings, dated sources, transparent
          methodology, and explicit identification of assumptions and limitations. Experts should state which facts
          are assumed for the purpose of the report and which are based on materials reviewed.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-[#3E4450] leading-relaxed">
          <li>Clear report structure with headings aligned to numbered questions in the letter of instruction</li>
          <li>Dated sources listed, with CPIN publication dates stated where CPINs are cited</li>
          <li>Transparent methodology and identification of assumptions and limitations</li>
          <li>Independence maintained — expert opinion distinguished from assumed facts</li>
          <li>Compliance with Practice Direction paragraph 10 and Immigration Tribunal procedural directions</li>
          <li>Preparation for tribunal attendance, cross-examination, or concurrent evidence where directed</li>
        </ol>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          The guide also addresses tribunal attendance, preparation for cross-examination, and concurrent evidence
          (hot-tubbing). Solicitors should familiarise themselves with the guide before instructing experts and
          reference it in letters of instruction where appropriate.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">
          CPR Part 35 — Expert Duties in Immigration Proceedings
        </h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          While CPR Part 35 technically governs civil court proceedings, its principles on expert independence,
          the duty to the tribunal, and report content are applied by analogy in immigration tribunal proceedings.
          The expert must not assume the role of advocate. Reports must distinguish clearly between assumed facts
          and expert opinion. Where the expert&apos;s opinion depends on assumed facts that are disputed, this must
          be stated explicitly.
        </p>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          CPR Part 35 also informs procedure for Single Joint Experts, written questions to experts, and concurrent
          evidence. Immigration practitioners should apply these principles when managing multi-expert cases and
          tribunal directions on expert evidence exchange.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">What a Compliant Report Should Contain</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          A compliant immigration expert report should include: the expert&apos;s qualifications and relevant
          experience; the letter of instruction and questions addressed; materials reviewed; methodology; a dated
          source list (with CPIN publication dates stated where CPINs are cited); analysis tied to the claimed facts
          and appellant profile; clearly labelled expert opinion; assumptions and limitations; and a statement of
          truth where required. OSCOLA citation is widely expected in tribunal and Upper Tribunal proceedings.
        </p>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Sources must be dated and current. Reliance on outdated CPINs or country guidance without acknowledging
          publication dates undermines report credibility. Experts should identify gaps in the available evidence
          and alternative hypotheses where the evidence permits more than one conclusion.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">
          Late Expert Evidence and Directions Compliance
        </h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Late expert reports risk refusal under Rule 15 or reduced weight at the tribunal&apos;s discretion.
          Experts should flag feasibility immediately when instructions are received close to exchange deadlines.
          Solicitors should not assume late reports will be admitted. Where full reports cannot meet deadlines,
          focused interim opinions or staged reports may be appropriate with tribunal permission.
        </p>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Standard turnaround for a focused immigration expert report is 2 to 3 weeks. Instruct experts at the
          earliest opportunity after the appeal is lodged and LAA prior authority is confirmed for legally aided
          cases.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">Single Joint Experts and Hot-Tubbing</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Single Joint Expert (SJE) directions are rare in asylum proceedings but increasingly used in complex cases
          on narrow issues such as linguistic analysis or specific country conditions. Experts instructed jointly
          must maintain independence and document instructions from both parties. Fees are typically shared as
          directed, with LAA prior authority required for legally aided work.
        </p>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Hot-tubbing (concurrent evidence) allows experts to give evidence simultaneously and question each other
          under tribunal direction. Experts prepare joint statements identifying agreed facts and disputed issues
          before the hearing. Hot-tubbing is not negotiation — independence must be maintained throughout.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2430]">Choosing the Right Report Type</h2>
        <p className="mt-4 text-[#3E4450] leading-relaxed">
          Country condition experts assess conditions on the ground beyond the CPIN. Persecution experts analyse
          Refugee Convention nexus and persecution methodology. Human rights experts apply ECHR and treaty standards
          to deportation and removal cases. Many cases require combined instruction. CPIN challenge analysis is
          often integrated into country condition reports. Use our{" "}
          <Link href="/report-types" className="text-[#2557D6] hover:underline">
            report types hub
          </Link>{" "}
          and{" "}
          <Link href="/network" className="text-[#2557D6] hover:underline">
            network directory
          </Link>{" "}
          to route instruction to the right specialist site for each case type and country.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/guides/immigration-expert-report-standards-guide" className="font-semibold text-[#2557D6] hover:underline">
            Solicitor&apos;s standards guide
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#2557D6] hover:underline">
            How to instruct
          </Link>
          <Link href="/cpin-and-country-guidance" className="font-semibold text-[#2557D6] hover:underline">
            CPIN & Country Guidance
          </Link>
          <Link href="/contact" className="font-semibold text-[#2557D6] hover:underline">
            Contact us
          </Link>
        </div>
      </PageShell>
    </>
  );
}
