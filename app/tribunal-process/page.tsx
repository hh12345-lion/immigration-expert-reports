import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { tribunalProcesses } from "@/data/tribunal-process";

export const metadata = createMetadata({
  title: "Immigration Tribunal Expert Evidence Process | FTT, UT & SJE Guide",
  description:
    "Expert evidence procedure in UK immigration tribunals — FTT asylum appeals, Upper Tribunal, single joint experts, hot-tubbing, late evidence, and judicial review.",
  path: "/tribunal-process",
});

export default function TribunalProcessPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Tribunal Process" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Tribunal Expert Evidence Process"
        subtitle="Unique to this site — tribunal procedure for expert reports in FTT, Upper Tribunal, SJE directions, hot-tubbing, late evidence, and judicial review."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Understanding tribunal procedure is essential for timely expert instruction. Reports must comply with
          tribunal directions, Practice Direction 2024, and the Adam Pipe October 2025 guide. Instruct experts early —
          standard turnaround is 2 to 3 weeks.
        </p>
        <CardGrid
          items={tribunalProcesses.map((t) => ({
            title: t.title,
            description: t.metaDescription,
            href: `/tribunal-process/${t.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/report-standards" className="font-semibold text-[#B8860B] hover:underline">
            Report standards
          </Link>
          <Link href="/tribunal-process/late-expert-evidence" className="font-semibold text-[#B8860B] hover:underline">
            Late expert evidence
          </Link>
        </div>
      </PageShell>
    </>
  );
}
