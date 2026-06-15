export type NetworkSite = {
  name: string;
  url: string;
  role: string;
  description: string;
  anchorText: string;
  reportTypeHref: string;
};

export const networkSites: NetworkSite[] = [
  {
    name: "Persecution Expert",
    url: "https://www.persecutionexpert.com",
    role: "Refugee Convention persecution grounds",
    description:
      "Thematic persecution analysis across all Convention grounds — political opinion, religion, race, nationality, and particular social group. Complements country condition reports where nexus and persecution methodology are contested.",
    anchorText: "Persecution expert reports UK",
    reportTypeHref: "/report-types/persecution-analysis-reports",
  },
  {
    name: "Human Rights Experts",
    url: "https://www.humanrightsexperts.com",
    role: "ECHR Article 3, treaty standards",
    description:
      "Human rights violation expert reports for Article 3 deportation, torture survivors, arbitrary detention, and treaty-based claims beyond Refugee Convention persecution analysis.",
    anchorText: "Human rights expert reports UK",
    reportTypeHref: "/report-types/human-rights-violation-reports",
  },
  {
    name: "Nigeria Expert",
    url: "https://www.nigeriaexpert.com",
    role: "Nigeria country reports",
    description:
      "Country condition expert reports for Nigerian asylum profiles, regional security, Boko Haram risk, and profile-specific analysis for UK immigration tribunals.",
    anchorText: "Nigeria expert reports UK",
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    name: "Pakistan Expert Reports",
    url: "https://www.pakistanexpertreports.com",
    role: "Pakistan expert reports",
    description:
      "Pakistan expert witness reports for asylum appeals covering Ahmadis, blasphemy, Shia Muslims, honour-based violence, LGBTQ+, and political persecution profiles.",
    anchorText: "Pakistan expert reports UK",
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    name: "Pakistan Country Expert",
    url: "https://www.pakistancountryexpert.com",
    role: "Pakistan country conditions",
    description:
      "Dedicated Pakistan country condition analysis for CPIN challenge, internal relocation, and profile-specific risk assessment in UK tribunal proceedings.",
    anchorText: "Pakistan country expert witness",
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    name: "Somalia Expert",
    url: "https://www.somaliaexpert.com",
    role: "Somalia country reports",
    description:
      "Somalia country expert reports covering clan structure, Al-Shabaab risk, Mogadishu security, and regional conditions for UK asylum and deportation cases.",
    anchorText: "Somalia expert reports UK",
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    name: "Africa Expert Witness",
    url: "https://www.africaexpertwitness.com",
    role: "Pan-African country reports",
    description:
      "Pan-African country and regional expert witness reports for asylum, immigration tribunals, and country guidance across the continent.",
    anchorText: "Africa expert witness reports",
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    name: "Albania Expert Witness",
    url: "https://www.albaniaexpertwitness.com",
    role: "Albania country reports",
    description:
      "Albania country expert reports for blood feuds, trafficking, LGBTQ+, and political persecution asylum claims in UK tribunals.",
    anchorText: "Albania expert witness reports",
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    name: "South Asia Expert",
    url: "https://www.southasiaexpert.com",
    role: "South Asia country reports",
    description:
      "South Asia regional expert witness network covering Afghanistan, Pakistan, India, Sri Lanka, and Bangladesh country condition analysis for UK tribunals.",
    anchorText: "South Asia expert reports UK",
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    name: "South Asia Reports",
    url: "https://www.southasiareports.com",
    role: "South Asia country reports",
    description:
      "Country condition reports and asylum profile analysis across South Asia jurisdictions for solicitors instructing expert evidence in immigration proceedings.",
    anchorText: "South Asia country reports UK",
    reportTypeHref: "/report-types/country-condition-reports",
  },
  {
    name: "Afghanistan Country Expert",
    url: "https://www.afghanistancountryexpert.com",
    role: "Afghanistan country reports",
    description:
      "Afghanistan country expert reports for Taliban risk, Hazara persecution, women's rights, and profile-specific return risk analysis for UK tribunals.",
    anchorText: "Afghanistan country expert reports",
    reportTypeHref: "/report-types/country-condition-reports",
  },
];
