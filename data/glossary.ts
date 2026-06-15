export type GlossaryTerm = { term: string; definition: string; link?: string };

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Adam Pipe Guide (October 2025)",
    definition:
      "Updated tribunal guidance on expert reports in immigration proceedings, setting expectations for structure, independence, source quality, methodology, and tribunal attendance.",
  },
  {
    term: "Article 3 (ECHR)",
    definition:
      "European Convention on Human Rights Article 3 prohibits torture and inhuman or degrading treatment. Engaged in deportation and removal cases where return would expose the appellant to such treatment.",
  },
  {
    term: "Article 8 (ECHR)",
    definition:
      "ECHR Article 8 protects private and family life. Engaged in immigration cases where removal would disproportionately interfere with established family or private life in the UK.",
  },
  {
    term: "CPIN (Country Policy Information Note)",
    definition:
      "Home Office operational guidance on country conditions. Experts go beyond and may challenge CPIN findings with dated primary sources and profile-specific analysis.",
  },
  {
    term: "Country Guidance (CG)",
    definition:
      "Binding Upper Tribunal precedent on country conditions for specific profiles. Tribunals must follow CG where it conflicts with CPINs.",
  },
  {
    term: "CPR Part 35",
    definition:
      "Civil Procedure Rules governing expert evidence in civil courts. Principles on independence and duty to the tribunal are applied by analogy in immigration proceedings.",
  },
  {
    term: "Expert Report",
    definition:
      "Written independent evidence from a qualified expert addressing specific questions on country conditions, persecution, human rights, or related matters for tribunal proceedings.",
  },
  {
    term: "Expert Witness (Immigration Tribunal)",
    definition:
      "A qualified expert who provides independent written and/or oral evidence to the immigration tribunal, owing a paramount duty to the tribunal under Ikarian Reefer principles.",
  },
  {
    term: "First-Tier Tribunal (FTT)",
    definition:
      "The primary tribunal for asylum and immigration appeals against Home Office decisions. Immigration and Asylum Chamber (IAC) hears most expert evidence.",
  },
  {
    term: "Hot-Tubbing",
    definition:
      "Concurrent expert evidence procedure where experts give evidence simultaneously and may question each other, directed by the tribunal to resolve disputes efficiently.",
  },
  {
    term: "Ikarian Reefer",
    definition:
      "Ikarian Reefer [1993] 2 Lloyd's Rep 68 — leading authority on expert independence. Experts owe a paramount duty to the tribunal, not the instructing party.",
  },
  {
    term: "Internal Relocation",
    definition:
      "Whether the appellant could safely and reasonably relocate within their country of origin as an alternative to international protection. Assessed for viability and reasonableness.",
  },
  {
    term: "Letter of Instruction",
    definition:
      "Document from the instructing solicitor setting out numbered questions, documents provided, assumptions of fact, deadlines, and funding for the expert report.",
  },
  {
    term: "LAA Prior Authority",
    definition:
      "Legal Aid Agency approval required before instructing expert disbursements in legally aided immigration cases. Must be obtained before the expert begins work.",
  },
  {
    term: "OSCOLA",
    definition:
      "Oxford Standard for Citation of Legal Authorities. Widely used for source citation in expert reports, particularly in tribunal and Upper Tribunal proceedings.",
  },
  {
    term: "Practice Direction (Expert Evidence)",
    definition:
      "Immigration Tribunal Practice Direction governing expert evidence, including the default 20-page report limit (paragraphs 9.2/9.3) and independence requirements (paragraph 10).",
  },
  {
    term: "Refugee Convention 1951",
    definition:
      "International treaty defining refugee status based on well-founded fear of persecution for reasons of race, religion, nationality, political opinion, or membership of a particular social group.",
  },
  {
    term: "Rule 15 (Late Evidence)",
    definition:
      "Tribunal rule governing late evidence. Late expert reports risk refusal or reduced weight at the tribunal's discretion.",
  },
  {
    term: "Single Joint Expert (SJE)",
    definition:
      "An expert instructed jointly by both parties on a specific issue, maintaining independence and documenting instructions from both sides.",
  },
  {
    term: "Statement of Truth",
    definition:
      "Required declaration by the expert confirming the report's contents are true to the best of their knowledge. Must match the signed final PDF submitted to the tribunal.",
  },
  {
    term: "State Protection",
    definition:
      "Whether the state can and will provide effective protection against persecution. Assessed using the three-part test: existence, adequacy, and accessibility of protection.",
  },
  {
    term: "Subsidiary Protection (Article 15(c))",
    definition:
      "EU Qualification Directive protection for those facing serious harm including indiscriminate violence in situations of international or internal armed conflict.",
  },
  {
    term: "UNHCR Eligibility Guidelines",
    definition:
      "International standards published by UNHCR on refugee status determination for specific profiles. Persuasive reference for expert analysis in UK proceedings.",
  },
  {
    term: "Upper Tribunal (UT)",
    definition:
      "Appellate tribunal for immigration and asylum matters. Country Guidance cases establish binding precedent. Heightened evidential standards apply.",
  },
  {
    term: "Well-Founded Fear",
    definition:
      "The Refugee Convention standard requiring a real risk of persecution for a Convention reason. Expert evidence supports the objective assessment of this risk.",
  },
  {
    term: "Country Condition Report",
    definition:
      "Expert report on conditions in the country of origin — security, human rights, state protection, internal relocation, and profile-specific risks beyond the CPIN.",
  },
  {
    term: "Persecution Expert Report",
    definition:
      "Expert report analysing Refugee Convention nexus, persecution methodology, state protection, and internal relocation for asylum claims.",
  },
  {
    term: "Human Rights Expert Report",
    definition:
      "Expert report applying ECHR and international treaty standards to deportation, removal, and human rights protection claims.",
  },
  {
    term: "EUAA Country Guidance",
    definition:
      "European Union Agency for Asylum country guidance documents. Persuasive international reference cited by experts where relevant to UK analysis.",
  },
  {
    term: "Tribunal Directions",
    definition:
      "Orders from the tribunal setting deadlines for evidence exchange, hearing dates, and procedural requirements. Expert reports must comply with exchange deadlines.",
  },
];

const GLOSSARY_TERM_LINKS: Record<string, string> = {
  "Adam Pipe Guide (October 2025)": "/report-standards#report-standards",
  "Article 3 (ECHR)": "/report-types/human-rights-violation-reports",
  "Article 8 (ECHR)": "/case-types/human-rights-claims",
  "CPIN (Country Policy Information Note)": "/cpin-and-country-guidance",
  "Country Guidance (CG)": "/cpin-and-country-guidance",
  "CPR Part 35": "/guides/cpr-part-35-immigration-expert-reports",
  "Expert Report": "/what-is-an-immigration-expert-report",
  "Expert Witness (Immigration Tribunal)": "/qualifications",
  "First-Tier Tribunal (FTT)": "/tribunal-process/ftt-asylum-appeals",
  "Hot-Tubbing": "/tribunal-process/hot-tubbing-concurrent-evidence",
  "Ikarian Reefer": "/report-standards",
  "Internal Relocation": "/report-types/internal-relocation-reports",
  "Letter of Instruction": "/guides/letter-of-instruction-guide",
  "LAA Prior Authority": "/guides/instructing-expert-legal-aid",
  "OSCOLA": "/guides/immigration-expert-report-standards-guide",
  "Practice Direction (Expert Evidence)": "/report-standards#report-standards",
  "Refugee Convention 1951": "/cpin-and-country-guidance",
  "Rule 15 (Late Evidence)": "/tribunal-process/late-expert-evidence",
  "Single Joint Expert (SJE)": "/tribunal-process/single-joint-experts",
  "Statement of Truth": "/report-standards",
  "State Protection": "/report-types/country-condition-reports",
  "Subsidiary Protection (Article 15(c))": "/case-types/asylum-appeal-ftt",
  "UNHCR Eligibility Guidelines": "/cpin-and-country-guidance",
  "Upper Tribunal (UT)": "/tribunal-process/upper-tribunal",
  "Well-Founded Fear": "/report-types/persecution-analysis-reports",
  "Country Condition Report": "/report-types/country-condition-reports",
  "Persecution Expert Report": "/report-types/persecution-analysis-reports",
  "Human Rights Expert Report": "/report-types/human-rights-violation-reports",
  "EUAA Country Guidance": "/cpin-and-country-guidance",
  "Tribunal Directions": "/how-to-instruct",
};

export function getGlossaryTermsWithLinks(): GlossaryTerm[] {
  return glossaryTerms.map((t) => ({
    ...t,
    link: t.link ?? GLOSSARY_TERM_LINKS[t.term],
  }));
}
