import type { ContentPage } from "./content-types";

export const tribunalProcesses: ContentPage[] = [
  {
    slug: "ftt-asylum-appeals",
    title: "FTT Asylum Appeals",
    metaTitle: "Expert Reports in FTT Asylum Appeals | First-Tier Tribunal Guide",
    metaDescription:
      "Expert reports in First-tier Tribunal asylum appeals. Exchange deadlines, Rule 15 evidence, bundle requirements, and Practice Direction 2024 compliance for UK solicitors.",
    h1: "Expert Reports in FTT Asylum Appeals | First-Tier Tribunal Guide",
    content: [
      "The First-tier Tribunal (Immigration and Asylum Chamber) is the primary forum for asylum appeals against Home Office refusals. Expert reports provide independent evidence on country conditions, persecution, human rights violations, and return risk that tribunals require to determine appeals fairly.",
      "Expert evidence must comply with tribunal directions on exchange deadlines. Late reports risk refusal under Rule 15 or reduced weight at the tribunal's discretion. Solicitors should instruct experts early in the appeal process — standard turnaround is typically 2 to 3 weeks for a focused report.",
      "FTT expert reports must comply with Immigration Tribunal Practice Direction 2024 (default 20-page limit unless permission granted), the Adam Pipe October 2025 expert report guide, and Ikarian Reefer independence principles. Reports should include a statement of truth, dated source list, and clearly numbered responses to the letter of instruction.",
      "Bundle requirements vary by tribunal centre and judge. Expert reports should be paginated, referenced in the appeal bundle index, and exchanged in accordance with tribunal directions. Rule 15 governs late evidence — experts should flag feasibility immediately when instructions are received close to deadlines.",
    ],
    faqs: [
      {
        question: "When should expert evidence be exchanged in FTT asylum appeals?",
        answer:
          "Expert reports must comply with tribunal directions on exchange deadlines. Late reports risk refusal under Rule 15. Instruct experts early in the appeal process — standard turnaround is 2–3 weeks.",
      },
      {
        question: "What format should FTT expert reports follow?",
        answer:
          "Practice Direction 2024 compliant (20-page default), Adam Pipe 2025 structure, OSCOLA citations, statement of truth, and clearly numbered responses to the letter of instruction.",
      },
    ],
    relatedLinks: [
      { label: "Report standards", href: "/report-standards" },
      { label: "Late expert evidence", href: "/tribunal-process/late-expert-evidence" },
    ],
  },
  {
    slug: "upper-tribunal",
    title: "Upper Tribunal",
    metaTitle: "Expert Reports in Upper Tribunal Immigration Appeals",
    metaDescription:
      "Expert evidence in Upper Tribunal immigration appeals. Country guidance challenges, CG framework, fresh expert evidence, and heightened scrutiny in UT proceedings.",
    h1: "Expert Reports in Upper Tribunal Immigration Appeals",
    content: [
      "Upper Tribunal (Immigration and Asylum Chamber) appeals involve complex legal issues, country guidance challenges, and precedent-setting decisions. Expert evidence in UT cases often requires deeper analysis addressing the country guidance framework and authoritative sources.",
      "UT cases may engage country guidance challenges where the expert must apply binding CG precedent to the appellant's profile. Reports must cite authoritative sources, address CG methodology, and comply with Practice Direction 2024 and Adam Pipe 2025 requirements.",
      "Fresh expert evidence in UT appeals requires permission and must be justified under UT rules. Late evidence rules apply with heightened scrutiny. Solicitors should obtain counsel's advice on expert strategy before instruction in UT proceedings.",
      "UT decisions on country guidance have binding precedent value for future FTT decisions. Expert evidence quality and independence are scrutinised closely in CG cases — reports must meet the highest evidential standards.",
    ],
    faqs: [
      {
        question: "Are expert reports different in Upper Tribunal cases?",
        answer:
          "UT cases often involve country guidance challenges or complex legal issues requiring deeper expert analysis. Reports must address CG framework and cite authoritative sources. Standard PD 2024 and Adam Pipe 2025 requirements apply.",
      },
      {
        question: "Can new expert evidence be adduced in the Upper Tribunal?",
        answer:
          "Subject to UT rules and directions. Fresh expert evidence in UT appeals requires permission and must be justified — late evidence rules apply with heightened scrutiny.",
      },
    ],
    relatedLinks: [
      { label: "Country guidance challenges", href: "/case-types/country-guidance-challenges" },
      { label: "CPIN & Country Guidance", href: "/cpin-and-country-guidance" },
    ],
  },
  {
    slug: "single-joint-experts",
    title: "Single Joint Experts",
    metaTitle: "Single Joint Experts in Immigration Cases | SJE Guide",
    metaDescription:
      "Single joint expert directions in UK immigration tribunals. Joint instruction protocols, independence, fee sharing, and when SJEs are directed in asylum cases.",
    h1: "Single Joint Experts in Immigration Cases | SJE Guide",
    content: [
      "Single Joint Experts (SJEs) are instructed jointly by both parties to provide independent expert evidence on a specific issue. SJEs are less common in asylum proceedings than in commercial courts but tribunals may direct joint instruction on narrow issues such as linguistic analysis or specific country conditions.",
      "Experts instructed as SJEs must maintain independence and document instructions received from both parties. The expert owes a paramount duty to the tribunal under Ikarian Reefer principles — not to either instructing party.",
      "Fee sharing is typically directed by the tribunal or agreed between parties. LAA prior authority is required for legally aided cases before the expert begins work. Scope, questions, and materials must be agreed before instruction.",
      "SJE directions require careful case management. Solicitors should agree the letter of instruction, documents to be provided, and timetable with the opposing party before approaching the expert. See CPR Part 35 principles applied by analogy in tribunal proceedings.",
    ],
    faqs: [
      {
        question: "Are single joint experts used in immigration tribunals?",
        answer:
          "SJEs are less common in asylum than commercial courts but tribunals may direct joint instruction on narrow issues (e.g. linguistic analysis, specific country conditions). Experts must maintain independence and document instructions from both parties.",
      },
      {
        question: "How do SJE fees work in immigration cases?",
        answer:
          "Fees are typically shared between parties as directed. Prior authority required for legally aided cases. Scope must be agreed before instruction.",
      },
    ],
    relatedLinks: [
      { label: "CPR Part 35 guide", href: "/guides/cpr-part-35-immigration-expert-reports" },
      { label: "Linguistic identity reports", href: "/report-types/linguistic-clan-identity-reports" },
    ],
  },
  {
    slug: "hot-tubbing-concurrent-evidence",
    title: "Hot-Tubbing & Concurrent Evidence",
    metaTitle: "Hot-Tubbing & Concurrent Expert Evidence | Immigration Tribunal",
    metaDescription:
      "Hot-tubbing and concurrent expert evidence in UK immigration tribunals. Joint statements, expert preparation, and tribunal-directed concurrent evidence procedure.",
    h1: "Hot-Tubbing & Concurrent Expert Evidence | Immigration Tribunal",
    content: [
      "Hot-tubbing (concurrent evidence) is a procedure where experts give evidence simultaneously and may question each other, directed by the tribunal. The aim is to resolve expert disputes efficiently and identify agreed facts and genuine areas of disagreement.",
      "Tribunals increasingly direct hot-tubbing in complex multi-expert cases where country condition, persecution, and human rights experts disagree on key issues. Experts must prepare joint statements identifying agreed facts and disputed issues before the hearing.",
      "Hot-tubbing is not negotiation — experts must maintain independence throughout concurrent evidence. The expert's duty to assist the tribunal remains paramount. Experts should not advocate for either party's position during concurrent evidence.",
      "Preparation for hot-tubbing requires thorough knowledge of the opposing expert's report, clear identification of methodological differences, and willingness to concede points where the evidence supports it. Adam Pipe 2025 addresses tribunal attendance and concurrent evidence expectations.",
    ],
    faqs: [
      {
        question: "What is hot-tubbing in immigration tribunals?",
        answer:
          "Concurrent evidence where experts give evidence simultaneously and may question each other, directed by the tribunal. Aims to resolve expert disputes efficiently.",
      },
      {
        question: "How should experts prepare for hot-tubbing?",
        answer:
          "Experts should prepare joint statements identifying agreed facts and disputed issues before the hearing. Maintain independence — hot-tubbing is not negotiation.",
      },
    ],
    relatedLinks: [
      { label: "Oral evidence at tribunal", href: "/report-types/oral-evidence-tribunal" },
      { label: "Report standards", href: "/report-standards" },
    ],
  },
  {
    slug: "late-expert-evidence",
    title: "Late Expert Evidence",
    metaTitle: "Late Expert Evidence in Immigration Tribunals | Risk & Remedies",
    metaDescription:
      "Late expert evidence in UK immigration tribunals. Rule 15, risk of refusal, interim opinions, staged reports, and practical remedies for solicitors.",
    h1: "Late Expert Evidence in Immigration Tribunals | Risk & Remedies",
    content: [
      "Late expert reports risk refusal under Rule 15 or reduced weight at the tribunal's discretion. Solicitors should not assume late reports will be admitted — the tribunal has discretion but late evidence faces significant scrutiny.",
      "Where full reports cannot meet deadlines, experts may provide focused interim opinions or staged reports — but this requires tribunal permission and early communication with the tribunal. Experts should flag feasibility immediately when instructions are received close to deadlines.",
      "Practical remedies for solicitors include applying for an extension of time before the deadline, seeking directions for staged evidence, and instructing experts with realistic timelines at the earliest opportunity. Standard turnaround is 2 to 3 weeks for a focused report.",
      "Late evidence directions should explain the reason for delay, the importance of the evidence to fair determination, and any prejudice to the opposing party. Practice Direction 2024 and tribunal directions on expert evidence exchange must be followed.",
    ],
    faqs: [
      {
        question: "What happens if an expert report is late?",
        answer:
          "Late expert reports risk refusal under Rule 15 or reduced weight. The tribunal has discretion but solicitors should not assume late reports will be admitted.",
      },
      {
        question: "Can partial or interim expert reports be submitted?",
        answer:
          "Where full reports cannot meet deadlines, experts may provide focused interim opinions or staged reports — but this requires tribunal permission and early communication with the tribunal.",
      },
    ],
    relatedLinks: [
      { label: "How to instruct", href: "/how-to-instruct" },
      { label: "FTT asylum appeals", href: "/tribunal-process/ftt-asylum-appeals" },
    ],
  },
  {
    slug: "judicial-review-expert-evidence",
    title: "Judicial Review Expert Evidence",
    metaTitle: "Expert Evidence in Immigration Judicial Review | JR Guide",
    metaDescription:
      "Expert evidence in immigration judicial review. When JR engages country conditions, JR vs tribunal expert evidence, and strategic instruction timing.",
    h1: "Expert Evidence in Immigration Judicial Review | JR Guide",
    content: [
      "Expert evidence is used less commonly in immigration judicial review than in tribunal appeals, but may support JR where country conditions, policy lawfulness, or factual disputes are central to the claim. JR procedural rules differ from tribunal Practice Direction requirements.",
      "Expert evidence may be relevant where JR challenges the lawfulness of Home Office country policy, operational guidance, or decision-making on country conditions. Counsel should advise on whether expert evidence is essential to establish an arguable case at permission stage.",
      "Typically expert evidence is instructed after JR permission is granted, unless expert evidence is essential to establish an arguable case at the permission stage. The timing and admissibility of expert evidence in JR is a matter for specialist immigration counsel.",
      "Tribunal expert reports prepared for appeal proceedings may be relevant in related JR claims but JR evidential requirements differ. Solicitors should not assume tribunal-standard reports automatically meet JR requirements without counsel review.",
    ],
    faqs: [
      {
        question: "Is expert evidence used in immigration judicial review?",
        answer:
          "Less commonly than in tribunal appeals, but expert evidence may support JR where country conditions or policy lawfulness is at issue. JR procedural rules differ from tribunal Practice Direction.",
      },
      {
        question: "Should I instruct an expert before or after JR permission?",
        answer:
          "Typically after permission, unless expert evidence is essential to establish an arguable case. Counsel should advise on JR expert strategy.",
      },
    ],
    relatedLinks: [
      { label: "Judicial review case type", href: "/case-types/judicial-review" },
      { label: "Report standards", href: "/report-standards" },
    ],
  },
];

export function getTribunalProcess(slug: string) {
  return tribunalProcesses.find((t) => t.slug === slug);
}
