import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct an Immigration Expert | UK Solicitors Guide",
  description:
    "Step-by-step guide to instructing immigration experts for UK tribunal proceedings. Report type selection, Legal Aid prior authority, letter of instruction, and deadlines.",
  path: "/how-to-instruct",
});

const sections = [
  {
    title: "Step 1: Identify the report type",
    body: "Review the refusal grounds and identify which expert report type is required — country condition, persecution analysis, human rights, CPIN challenge, internal relocation, or linguistic identity. Use our report types hub and network directory to route instruction to the right specialist.",
  },
  {
    title: "Step 2: Select the network site",
    body: "Country-specific reports are instructed through specialist country sites in our network. Thematic persecution and human rights reports are routed to persecutionexpert.com and humanrightsexperts.com. immigrationexpertreports.com coordinates standards and instruction process.",
  },
  {
    title: "Step 3: Legal Aid or private funding",
    body: "For Legal Aid cases, obtain LAA prior authority before the expert begins work. Provide the prior authority reference, appeal reference, and tribunal deadlines at instruction. Privately funded cases proceed on agreed fee terms.",
  },
  {
    title: "Step 4: Prepare the letter of instruction",
    body: "Draft numbered questions, list documents provided, state assumptions of fact, and specify deadlines. Follow the Adam Pipe October 2025 guide and Practice Direction 2024 requirements. See our letter of instruction guide for detailed guidance.",
  },
  {
    title: "Step 5: Provide documents",
    body: "Include the refusal letter, CPIN (with publication date), witness statements, country guidance decisions, tribunal directions, and any supporting documentation on the appellant's profile and claimed fear.",
  },
  {
    title: "Step 6: Report delivery and exchange",
    body: "Standard turnaround is 2 to 3 weeks. Exchange the report in accordance with tribunal directions. Late reports risk refusal under Rule 15. Opposing parties may submit written questions within the agreed timeframe.",
  },
  {
    title: "Step 7: Oral evidence if directed",
    body: "Where the tribunal directs oral evidence, confirm expert availability and attendance fees at instruction. Experts prepare for cross-examination and concurrent evidence (hot-tubbing) where directed.",
  },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct an Immigration Expert"
        subtitle="A step-by-step guide for UK immigration solicitors, barristers, and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        {sections.map((section, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl font-bold text-[#1E3A5F]">{section.title}</h2>
            <p className="mt-3 text-[#374151] leading-relaxed">{section.body}</p>
          </div>
        ))}
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/guides/letter-of-instruction-guide" className="font-semibold text-[#0E7490] hover:underline">
            Letter of instruction guide
          </Link>
          <Link href="/guides/instructing-expert-legal-aid" className="font-semibold text-[#B8860B] hover:underline">
            Legal Aid instruction guide
          </Link>
          <Link href="/contact" className="font-semibold text-[#0E7490] hover:underline">
            Request an expert report
          </Link>
        </div>
      </PageShell>
    </>
  );
}
