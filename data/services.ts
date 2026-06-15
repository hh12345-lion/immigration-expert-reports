import type { FAQ } from "@/lib/schema";

export type Service = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  reportTypeHref?: string;
};

export const services: Service[] = [
  {
    slug: "country-condition-reports",
    title: "Country Condition Reports",
    description:
      "Independent evidence on conditions in the country of origin beyond the Home Office CPIN — security, human rights, state protection, and profile-specific risks.",
    metaTitle: "Country Condition Expert Reports Service UK | Immigration Tribunals",
    metaDescription:
      "Country condition expert report service for UK immigration tribunals. Independent evidence beyond the CPIN with dated sources and profile-specific analysis.",
    h1: "Country Condition Expert Reports Service",
    content: [
      "Country condition expert reports provide independent evidence on security, human rights, state protection, and internal relocation in the appellant's country of origin. They address the individual appellant's profile and region — going beyond generic Home Office CPIN summaries.",
      "Our network routes country-specific instruction to specialist country expert sites while maintaining unified report standards, Practice Direction 2024 compliance, and tribunal-ready structure.",
      "Country condition reports are typically instructed alongside persecution or human rights analysis where both country conditions and Convention or ECHR issues are engaged.",
    ],
    faqs: [
      {
        question: "What does a country condition expert report cover?",
        answer:
          "Security and human rights conditions, state protection effectiveness, internal relocation viability, and profile-specific risks relevant to the appellant's claimed fear — with dated primary sources beyond the Home Office CPIN.",
      },
      {
        question: "How long does a country condition report take?",
        answer:
          "Standard turnaround is typically 2 to 3 weeks. Expedited reports may be available depending on expert availability and tribunal deadlines.",
      },
    ],
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    slug: "persecution-analysis-reports",
    title: "Persecution Analysis Reports",
    description:
      "Refugee Convention grounds analysis — political opinion, religion, race, nationality, PSG, nexus, state protection, and internal relocation.",
    metaTitle: "Persecution Analysis Expert Reports Service UK | Refugee Convention",
    metaDescription:
      "Persecution analysis expert report service for UK asylum tribunals. Convention nexus, state protection, and persecution methodology.",
    h1: "Persecution Analysis Expert Reports Service",
    content: [
      "Persecution analysis expert reports examine whether the appellant faces a well-founded fear of persecution for a Refugee Convention reason. Experts assess nexus, state protection failures, and internal relocation using leading authority including HJ (Iran) [2010] and RT (Zimbabwe) [2012].",
      "Persecution analysis is distinct from country condition reporting. Specialist persecution reports are delivered through persecutionexpert.com in our network directory.",
      "Reports comply with Practice Direction 2024, the Adam Pipe October 2025 guide, and Ikarian Reefer independence principles.",
    ],
    faqs: [
      {
        question: "When should I instruct a persecution analysis expert?",
        answer:
          "When the claim turns on Refugee Convention nexus, persecution methodology, or state protection — often alongside a country condition expert for complex cases.",
      },
      {
        question: "Can persecution and country experts be instructed together?",
        answer:
          "Yes. Many cases require both — country experts assess conditions on the ground; persecution experts analyse Convention nexus and persecution threshold.",
      },
    ],
    reportTypeHref: "/report-types/persecution-analysis-reports",
  },
  {
    slug: "human-rights-violation-reports",
    title: "Human Rights Violation Reports",
    description:
      "ECHR Article 3 deportation analysis, treaty standards, torture survivors, arbitrary detention, and human rights defenders.",
    metaTitle: "Human Rights Violation Expert Reports Service UK | ECHR Article 3",
    metaDescription:
      "Human rights violation expert report service for UK deportation and removal cases. ECHR Article 3 and treaty standards analysis.",
    h1: "Human Rights Violation Expert Reports Service",
    content: [
      "Human rights violation expert reports apply ECHR, ICCPR, CAT, and CEDAW standards to deportation and removal cases where Article 3 or Article 8 is engaged.",
      "Expert analysis covers torture survivors, human rights defenders, arbitrary detention, and conditions of return engaging treaty standards beyond Refugee Convention persecution methodology.",
      "Specialist human rights reports are available through humanrightsexperts.com in our network directory.",
    ],
    faqs: [
      {
        question: "When is a human rights expert report needed?",
        answer:
          "When the claim engages ECHR Article 3 deportation, Article 8 family/private life, or treaty standards beyond Refugee Convention persecution — including torture survivors and HR defenders.",
      },
      {
        question: "Human rights expert vs persecution expert?",
        answer:
          "Human rights experts apply ECHR and treaty standards; persecution experts apply Refugee Convention methodology. Article 3 deportation cases often require human rights expertise.",
      },
    ],
    reportTypeHref: "/report-types/human-rights-violation-reports",
  },
  {
    slug: "cpin-challenge-reports",
    title: "CPIN Challenge Reports",
    description:
      "Rebutting Home Office CPIN findings with dated primary sources, profile-specific analysis, and Country Guidance framework application.",
    metaTitle: "CPIN Challenge Expert Reports Service UK | Home Office Rebuttal",
    metaDescription:
      "CPIN challenge expert report service for UK immigration tribunals. Dated sources, profile-specific analysis, and Country Guidance precedence.",
    h1: "CPIN Challenge Expert Reports Service",
    content: [
      "CPIN challenge expert reports rebut Home Office Country Policy Information Note findings where the CPIN is dated, incomplete, or fails to address the appellant's specific profile.",
      "Where Country Guidance conflicts with CPIN findings, tribunals must follow CG as binding Upper Tribunal precedent. Experts identify CPIN gaps with dated primary sources.",
      "CPIN challenge analysis is often integrated into country condition reports rather than instructed as a standalone report type.",
    ],
    faqs: [
      {
        question: "Can an expert report challenge the Home Office CPIN?",
        answer:
          "Yes. Expert reports routinely go beyond and challenge CPIN findings where dated, incomplete, or not addressing the appellant's specific profile. Country Guidance takes precedence where it conflicts.",
      },
      {
        question: "What makes a CPIN challenge report effective?",
        answer:
          "Dated primary sources, profile-specific analysis, identification of CPIN gaps, and current conditions not reflected in the CPIN publication date.",
      },
    ],
    reportTypeHref: "/report-types/cpin-challenge-reports",
  },
  {
    slug: "internal-relocation-analysis",
    title: "Internal Relocation Analysis",
    description:
      "Viability and reasonableness assessment of internal flight alternatives — security, clan connections, economic subsistence, and gender-specific barriers.",
    metaTitle: "Internal Relocation Expert Reports Service UK | Immigration Tribunals",
    metaDescription:
      "Internal relocation expert report service for UK asylum tribunals. Viability and reasonableness analysis for internal flight alternatives.",
    h1: "Internal Relocation Analysis Service",
    content: [
      "Internal relocation expert reports assess whether internal relocation within the country of origin is viable and reasonable as an alternative to international protection.",
      "Experts apply UNHCR and tribunal standards to assess security at the proposed destination, clan and family connections, economic subsistence, and gender-specific barriers.",
      "Dedicated internal relocation analysis may be instructed separately in complex cases or integrated into country condition reports.",
    ],
    faqs: [
      {
        question: "What does an internal relocation expert report assess?",
        answer:
          "Whether internal relocation is viable and reasonable — security at the proposed destination, clan/economic support, gender-specific barriers, and whether relocation would expose the appellant to persecution or serious harm.",
      },
      {
        question: "Is internal relocation always in country condition reports?",
        answer:
          "It should be where the respondent raises internal relocation. Dedicated analysis may be instructed separately in complex cases.",
      },
    ],
    reportTypeHref: "/report-types/internal-relocation-reports",
  },
  {
    slug: "linguistic-identity-reports",
    title: "Linguistic / Identity Reports",
    description:
      "Dialect analysis, clan membership assessment, cultural knowledge testing, and consistency with claimed origin where identity is disputed.",
    metaTitle: "Linguistic & Identity Expert Reports Service UK | Asylum Evidence",
    metaDescription:
      "Linguistic and clan identity expert report service for UK asylum tribunals. Dialect analysis and identity plausibility assessment.",
    h1: "Linguistic & Identity Expert Reports Service",
    content: [
      "Linguistic and clan identity expert reports address disputed nationality, regional origin, or clan membership in asylum cases through dialect analysis and cultural knowledge assessment.",
      "These reports are instructed where the Home Office disputes the appellant's claimed identity. Dedicated linguistic experts may be directed as Single Joint Experts on narrow identity issues.",
      "Experienced country experts often assess clan plausibility as part of country condition reports where identity is secondary to conditions analysis.",
    ],
    faqs: [
      {
        question: "When is a linguistic expert needed in asylum cases?",
        answer:
          "Where the appellant's claimed nationality, region, or clan identity is disputed — dialect analysis, cultural knowledge, and consistency with documented background.",
      },
      {
        question: "Can a country expert assess clan membership?",
        answer:
          "Experienced country experts often assess clan plausibility as part of country condition reports. Dedicated linguistic experts may be instructed where identity is the primary disputed issue.",
      },
    ],
    reportTypeHref: "/report-types/linguistic-clan-identity-reports",
  },
  {
    slug: "expert-report-review-qa",
    title: "Expert Report Review & QA",
    description:
      "Quality assurance review of draft expert reports for Practice Direction 2024 compliance, source quality, independence, and tribunal readiness.",
    metaTitle: "Immigration Expert Report Review & QA Service UK",
    metaDescription:
      "Expert report quality assurance review for UK immigration tribunals. Practice Direction 2024, Adam Pipe 2025, and Ikarian Reefer compliance checking.",
    h1: "Expert Report Review & Quality Assurance Service",
    content: [
      "Expert report review and QA provides quality assurance on draft expert reports before tribunal exchange. Review covers Practice Direction 2024 compliance, Adam Pipe October 2025 structure, source quality, independence, and tribunal readiness.",
      "Solicitors may instruct QA review where reports are prepared in-house, from overseas experts, or where tribunal scrutiny of expert independence is anticipated.",
      "Review identifies gaps in source citation, assumptions, limitations, and areas where the report may read as advocacy rather than independent expert analysis.",
    ],
    faqs: [
      {
        question: "When should I request expert report QA review?",
        answer:
          "Before tribunal exchange when you need confidence the report meets Practice Direction 2024, Adam Pipe 2025, and Ikarian Reefer independence standards — especially for late or externally prepared reports.",
      },
      {
        question: "Does QA review replace instructing a qualified expert?",
        answer:
          "No. QA review assesses an existing draft report for compliance and quality. It does not replace independent expert evidence from a qualified country, persecution, or human rights expert.",
      },
    ],
    reportTypeHref: "/report-standards",
  },
  {
    slug: "oral-evidence-tribunal",
    title: "Oral Evidence at Tribunal",
    description:
      "Expert witness attendance, cross-examination preparation, hot-tubbing, and concurrent evidence at immigration tribunal hearings.",
    metaTitle: "Oral Expert Evidence at Tribunal Service UK | Immigration Hearings",
    metaDescription:
      "Expert witness oral evidence service for UK immigration tribunals. Tribunal attendance, cross-examination, and hot-tubbing preparation.",
    h1: "Oral Expert Evidence at Tribunal Service",
    content: [
      "Experts may be directed to attend the immigration tribunal where their evidence is contested, issues are complex, or the tribunal requires oral evidence for fair determination.",
      "Oral evidence allows cross-examination and concurrent evidence (hot-tubbing) where directed. Attendance fees are separate from report preparation and require LAA prior authority in legally aided cases.",
      "Experts must know their report thoroughly, maintain independence under challenge, and distinguish assumed facts from expert opinion per the Adam Pipe October 2025 guide.",
    ],
    faqs: [
      {
        question: "When should an expert attend the tribunal in person?",
        answer:
          "Where the expert's evidence is contested, the issues are complex, or the tribunal directs attendance. Oral evidence allows cross-examination and hot-tubbing where directed.",
      },
      {
        question: "How should experts prepare for tribunal cross-examination?",
        answer:
          "Experts must know their report thoroughly, maintain independence under challenge, and distinguish between assumed facts and expert opinion. Joint statements should identify agreed facts before hot-tubbing.",
      },
    ],
    reportTypeHref: "/report-types/oral-evidence-tribunal",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
