import type { ContentPage } from "./content-types";

export const caseTypes: ContentPage[] = [
  {
    slug: "asylum-appeal-ftt",
    title: "FTT Asylum Appeal",
    metaTitle: "Immigration Expert Reports for FTT Asylum Appeals | UK Tribunal",
    metaDescription:
      "Expert reports for First-tier Tribunal asylum appeals. Country condition, persecution, human rights, and CPIN challenge evidence for UK immigration proceedings.",
    h1: "Immigration Expert Reports for FTT Asylum Appeals",
    content: [
      "First-tier Tribunal asylum appeals are the most common proceeding requiring immigration expert evidence. Expert reports address country conditions, persecution analysis, human rights violations, and return risk beyond the Home Office CPIN and refusal letter.",
      "Solicitors should identify the report type required at the earliest stage — country condition, persecution, human rights, or combined instructions. Use our report types hub and network directory to route instruction to the right specialist.",
      "Expert reports must be exchanged in accordance with tribunal directions. Standard turnaround is 2 to 3 weeks. Practice Direction 2024 default 20-page limit applies unless permission is granted for longer reports.",
      "LAA prior authority is required for expert disbursements in legally aided cases. Confirm funding before the expert begins work. See our Legal Aid instruction guide for rate expectations and prior authority process.",
    ],
    faqs: [
      {
        question: "What expert reports do FTT asylum appeals typically need?",
        answer:
          "Country condition reports are most common, often alongside persecution or human rights analysis. CPIN challenge and internal relocation analysis may be required depending on the refusal grounds.",
      },
      {
        question: "How early should I instruct an expert for an FTT appeal?",
        answer:
          "As soon as the appeal is lodged and report type identified. Allow 2 to 3 weeks for standard reports and obtain LAA prior authority before work begins in legally aided cases.",
      },
    ],
    relatedLinks: [
      { label: "FTT tribunal process", href: "/tribunal-process/ftt-asylum-appeals" },
      { label: "Report types", href: "/report-types" },
    ],
  },
  {
    slug: "upper-tribunal-appeal",
    title: "Upper Tribunal Appeal",
    metaTitle: "Expert Reports for Upper Tribunal Immigration Appeals | UK",
    metaDescription:
      "Expert evidence for Upper Tribunal immigration appeals. Country guidance framework, complex legal issues, and heightened evidential standards in UT proceedings.",
    h1: "Immigration Expert Reports for Upper Tribunal Appeals",
    content: [
      "Upper Tribunal appeals often involve country guidance challenges, complex legal issues, or errors of law in FTT decisions. Expert evidence must address the CG framework where relevant and meet heightened evidential standards.",
      "UT expert reports require deeper source analysis, authoritative citations, and clear application of binding country guidance to the appellant's profile. Fresh expert evidence requires permission under UT rules.",
      "Counsel should advise on expert strategy in UT proceedings. Reports must comply with Practice Direction 2024, Adam Pipe 2025, and Ikarian Reefer independence principles.",
    ],
    faqs: [
      {
        question: "Do UT appeals need different expert reports than FTT?",
        answer:
          "The same report types apply but UT cases often require deeper CG framework analysis and more authoritative sourcing. Heightened scrutiny applies to expert independence and methodology.",
      },
      {
        question: "Can I adduce new expert evidence in the UT?",
        answer:
          "Subject to UT rules and tribunal permission. Fresh evidence must be justified and late evidence rules apply with heightened scrutiny.",
      },
    ],
    relatedLinks: [
      { label: "Upper Tribunal process", href: "/tribunal-process/upper-tribunal" },
      { label: "Country guidance challenges", href: "/case-types/country-guidance-challenges" },
    ],
  },
  {
    slug: "deportation-removal",
    title: "Deportation & Removal",
    metaTitle: "Expert Reports for Deportation & Removal Cases | UK Immigration",
    metaDescription:
      "Expert evidence for deportation and removal proceedings. ECHR Article 3, human rights violation reports, medical deportation, and country condition analysis.",
    h1: "Immigration Expert Reports for Deportation & Removal Cases",
    content: [
      "Deportation and removal cases frequently engage ECHR Article 3 (prohibition of torture and inhuman or degrading treatment) and Article 8 (family and private life). Human rights violation expert reports apply treaty and ECHR standards beyond Refugee Convention persecution analysis.",
      "Medical deportation cases engage Paposhvili [2017] and Savran [2021] — medical evidence on treatment availability is essential alongside country condition analysis on healthcare infrastructure. This site signposts the distinction; medical experts are instructed separately.",
      "Country condition experts address return risk, state protection, and conditions in the country of origin. Human rights experts apply Article 3 and treaty standards. Combined instruction is common in complex deportation cases.",
    ],
    faqs: [
      {
        question: "What expert reports are needed for Article 3 deportation?",
        answer:
          "Human rights violation reports applying ECHR Article 3 standards, often alongside country condition reports. Medical deportation cases additionally require medical expert evidence on treatment availability.",
      },
      {
        question: "Can country experts address Article 3 claims?",
        answer:
          "Country experts address conditions and state healthcare infrastructure. Human rights experts apply Article 3 legal standards. Both may be required in complex deportation cases.",
      },
    ],
    relatedLinks: [
      { label: "Human rights reports", href: "/report-types/human-rights-violation-reports" },
      { label: "Medical reports (signposting)", href: "/report-types/medical-psychiatric-reports" },
    ],
  },
  {
    slug: "fresh-claims",
    title: "Fresh Claims",
    metaTitle: "Expert Reports for Fresh Claims | UK Immigration",
    metaDescription:
      "Expert evidence for fresh asylum and human rights claims. New country conditions, changed circumstances, and updated CPIN challenge analysis.",
    h1: "Immigration Expert Reports for Fresh Claims",
    content: [
      "Fresh claims require evidence that circumstances have changed or new information has emerged that was not previously considered. Expert reports may address changed country conditions, new security developments, or updated profile-specific risk analysis.",
      "Experts should cite dated sources demonstrating material change since the previous decision. CPIN publication dates must be compared with current conditions. Country Guidance cases remain authoritative where they conflict with CPINs.",
      "Timelines for fresh claim expert reports are often compressed. Experts should flag feasibility immediately. Interim opinions or focused reports may be appropriate where full reports cannot meet tight deadlines.",
    ],
    faqs: [
      {
        question: "When is expert evidence needed for a fresh claim?",
        answer:
          "Where new country conditions, changed circumstances, or updated profile-specific risk requires independent expert analysis beyond the previous decision and current CPIN.",
      },
      {
        question: "How quickly can experts turn around fresh claim reports?",
        answer:
          "Standard turnaround is 2 to 3 weeks but expedited reports may be available. Experts should flag feasibility immediately for compressed timelines.",
      },
    ],
    relatedLinks: [
      { label: "Late expert evidence", href: "/tribunal-process/late-expert-evidence" },
      { label: "CPIN challenge reports", href: "/report-types/cpin-challenge-reports" },
    ],
  },
  {
    slug: "human-rights-claims",
    title: "Human Rights Claims",
    metaTitle: "Expert Reports for Human Rights Claims | UK Immigration Tribunals",
    metaDescription:
      "Expert evidence for human rights claims in UK immigration proceedings. ECHR Articles 3 and 8, treaty standards, and human rights violation analysis.",
    h1: "Immigration Expert Reports for Human Rights Claims",
    content: [
      "Human rights claims engage ECHR Articles 3 and 8 and international treaty standards beyond Refugee Convention persecution. Human rights violation expert reports apply treaty methodology to deportation, removal, and protection claims.",
      "Expert analysis covers torture, arbitrary detention, extrajudicial killings, human rights defenders, and conditions of return engaging Article 3. Article 8 claims may require country condition evidence on integration, family ties, and conditions affecting private and family life.",
      "Specialist human rights reports are available through humanrightsexperts.com. Country condition experts complement human rights analysis where conditions on the ground are contested.",
    ],
    faqs: [
      {
        question: "What is the difference between human rights and persecution expert reports?",
        answer:
          "Human rights experts apply ECHR and treaty standards. Persecution experts apply Refugee Convention methodology. Article 3 deportation cases often require human rights expertise.",
      },
      {
        question: "Which network site provides human rights expert reports?",
        answer:
          "humanrightsexperts.com — see our network directory for specialist human rights violation reports.",
      },
    ],
    relatedLinks: [
      { label: "Human rights reports", href: "/report-types/human-rights-violation-reports" },
      { label: "Network directory", href: "/network" },
    ],
  },
  {
    slug: "judicial-review",
    title: "Judicial Review",
    metaTitle: "Expert Reports for Immigration Judicial Review | UK",
    metaDescription:
      "Expert evidence in immigration judicial review proceedings. Policy challenges, country conditions, and strategic instruction timing for JR claims.",
    h1: "Immigration Expert Reports for Judicial Review",
    content: [
      "Expert evidence in immigration judicial review is less common than in tribunal appeals but may be relevant where country conditions, policy lawfulness, or factual disputes are central to the claim.",
      "Counsel should advise on whether expert evidence is essential at permission stage or should be instructed after permission is granted. JR procedural rules differ from tribunal Practice Direction requirements.",
      "Country condition and human rights experts may support JR challenging Home Office country policy or operational guidance. Reports prepared for tribunal proceedings may be relevant but require counsel review for JR admissibility.",
    ],
    faqs: [
      {
        question: "Is expert evidence admissible in immigration JR?",
        answer:
          "Expert evidence may support JR where country conditions or policy lawfulness is at issue. Admissibility and timing are matters for specialist immigration counsel.",
      },
      {
        question: "Can I reuse tribunal expert reports in JR?",
        answer:
          "Tribunal reports may be relevant but JR evidential requirements differ. Counsel should review whether existing reports meet JR standards.",
      },
    ],
    relatedLinks: [
      { label: "JR expert evidence guide", href: "/tribunal-process/judicial-review-expert-evidence" },
    ],
  },
  {
    slug: "administrative-review",
    title: "Administrative Review",
    metaTitle: "Expert Reports for Administrative Review | UK Immigration",
    metaDescription:
      "Whether expert evidence is needed for Home Office administrative review. Limitations of AR and when to proceed to tribunal appeal with expert reports.",
    h1: "Immigration Expert Reports and Administrative Review",
    content: [
      "Administrative review (AR) is an internal Home Office review process — it does not typically involve expert evidence submission. AR examines whether the original decision-maker made the correct decision based on the material before them.",
      "Expert reports are generally not submitted during administrative review. Where AR is unsuccessful, solicitors should consider expert evidence for the subsequent appeal to the First-tier Tribunal.",
      "Early expert instruction planning is advisable while AR is pending, particularly where country conditions are contested or the CPIN does not address the appellant's profile. This allows timely exchange when the appeal is lodged.",
    ],
    faqs: [
      {
        question: "Can I submit expert evidence during administrative review?",
        answer:
          "Generally no — AR reviews the original decision on existing material. Expert reports are typically instructed for subsequent tribunal appeals.",
      },
      {
        question: "Should I instruct an expert while AR is pending?",
        answer:
          "Planning early instruction is advisable so expert reports are ready for tribunal exchange deadlines if AR is unsuccessful.",
      },
    ],
    relatedLinks: [
      { label: "FTT asylum appeals", href: "/case-types/asylum-appeal-ftt" },
      { label: "How to instruct", href: "/how-to-instruct" },
    ],
  },
  {
    slug: "country-guidance-challenges",
    title: "Country Guidance Challenges",
    metaTitle: "Expert Reports for Country Guidance Challenges | UK Immigration",
    metaDescription:
      "Expert evidence in Upper Tribunal country guidance cases. CG framework, binding precedent, and expert role in CG challenges.",
    h1: "Immigration Expert Reports for Country Guidance Challenges",
    content: [
      "Country Guidance (CG) cases before the Upper Tribunal establish binding precedent on country conditions for specific profiles. Expert evidence is central to CG challenges — experts must apply the CG framework and cite authoritative dated sources.",
      "Where CG and CPIN conflict, tribunals must follow CG. Experts identify CPIN gaps, apply CG methodology, and provide profile-specific analysis that informs the country guidance determination.",
      "CG expert reports require the highest evidential standards. Independence under Ikarian Reefer principles is scrutinised closely. Experts may be directed to attend the UT and give oral evidence in CG cases.",
    ],
    faqs: [
      {
        question: "What is the expert's role in country guidance cases?",
        answer:
          "Experts provide authoritative country condition analysis applying the CG framework to specific profiles. Evidence informs binding UT precedent on country conditions.",
      },
      {
        question: "Do CG cases require different experts than standard appeals?",
        answer:
          "The same expert disciplines apply but CG cases require deeper sourcing, CG framework analysis, and often oral evidence at the Upper Tribunal.",
      },
    ],
    relatedLinks: [
      { label: "CPIN & Country Guidance", href: "/cpin-and-country-guidance" },
      { label: "Upper Tribunal process", href: "/tribunal-process/upper-tribunal" },
    ],
  },
];

export function getCaseType(slug: string) {
  return caseTypes.find((c) => c.slug === slug);
}
