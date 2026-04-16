export type Resource = {
  name: string;
  description: string;
  phone?: string;
  url?: string;
  address?: string;
};

export type Category = {
  slug: string;
  title: string;
  emoji: string;
  blurb: string;
  accent: "coral" | "violet" | "teal" | "amber" | "rose" | "lime";
  resources: Resource[];
};

export const categories: Category[] = [
  {
    slug: "mental-health",
    title: "Mental Health",
    emoji: "🧠",
    blurb: "Free & low-cost therapy, peer support, and crisis lines.",
    accent: "violet",
    resources: [
      {
        name: "Antioch Community Therapy Services (ACTS)",
        description: "Free & confidential telehealth counseling. Anxious, depressed, grieving, or overwhelmed? They can help.",
        phone: "(310) 862-1515",
        url: "https://actsla.org",
      },
      {
        name: "WILA",
        description: "Nonprofit affordable therapy clinic. No insurance? No problem — sliding fee scale.",
        phone: "(424) 371-5191",
      },
      {
        name: "Open Paths Counseling Center",
        description: "Sliding-scale counseling for LA residents facing financial, geographic, or cultural barriers.",
        phone: "(310) 258-9677",
      },
      {
        name: "UCLA Psychology Clinic",
        description: "Individual therapy $30–$150/hr (sliding scale). Group therapy $5–$10/session.",
        phone: "(310) 825-2305",
        url: "https://psychology.ucla.edu/psychology-clinic",
      },
      {
        name: "NAMI Urban LA",
        description: "Mental health resource hub for the LA community.",
        phone: "(323) 294-7814",
        url: "https://www.namiurbanla.org/",
      },
      {
        name: "West Central Family MHS",
        description: "Mental health, employment, and welfare-to-work support for adults in LA.",
        phone: "(323) 298-3680",
      },
      {
        name: "Augustus F. Hawkins Mental Health Center",
        description: "Outpatient mental health for adults, kids, older adults, and families. English, Spanish & more.",
        phone: "(310) 668-4271",
      },
      {
        name: "Hey Peers",
        description: "Online peer support — connect with people who get it.",
        url: "https://www.heypeers.com",
      },
      {
        name: "NAMI Connection",
        description: "Free weekly 90-minute peer support group for people living with mental illness.",
        phone: "(323) 294-7814",
        url: "https://www.nami.org/support-education/support-groups/nami-connection/",
      },
      {
        name: "California Peer-Run Warm Line (24/7)",
        description: "Non-emergency line for anyone in CA who needs to talk. Open 24/7.",
        phone: "(855) 845-7415",
      },
    ],
  },
  {
    slug: "medical",
    title: "Medical & Clinics",
    emoji: "🩺",
    blurb: "Free and low-cost clinics across LA County.",
    accent: "teal",
    resources: [
      {
        name: "St. John's Community Health",
        description: "Medical, mental health, and pediatric services for low-income, uninsured & under-insured Angelenos.",
        phone: "(323) 541-1411",
        url: "https://stjohnscommunityhealth.org",
      },
      {
        name: "Clínica Romero",
        description: "Quality, affordable, culturally-sensitive healthcare regardless of ability to pay.",
        phone: "(213) 989-7700",
        url: "https://clinicaromero.com/",
      },
      {
        name: "Saban Community Clinic",
        description: "Whole Person Care: medical, emotional, dental + insurance enrollment help.",
        phone: "(323) 653-1990",
        url: "https://www.sabancommunityclinic.org/",
      },
      {
        name: "Didi Hirsch Metro Center",
        description: "Comprehensive case management for kids, teens & families.",
        phone: "(888) 807-7250",
        url: "https://didihirsch.org",
      },
      {
        name: "International Collegiate Health Initiative (ICHI)",
        description: "220 Westwood Plaza, Los Angeles, CA 90024",
        phone: "(310) 596-2330",
      },
      {
        name: "John Tracy Clinic",
        description: "806 W Adams Blvd, Los Angeles, CA 90007",
        phone: "(213) 748-5481",
      },
      {
        name: "Complete Care Community Health Center",
        description: "2928 East Cesar Chavez Ave, Los Angeles, CA 90033",
        phone: "(323) 266-6700",
      },
      {
        name: "MLK Jr. Outpatient Center",
        description: "1670 East 120th Street, Los Angeles, CA 90059",
        phone: "(424) 338-1000",
      },
      {
        name: "Hollywood Sunset Free Clinic",
        description: "3324 W Sunset Blvd, Los Angeles, CA 90026",
        phone: "(323) 660-7959",
      },
      {
        name: "South Central Family Health Center",
        description: "1109 E. Vernon Avenue, Los Angeles, CA 90011",
        phone: "(323) 908-4200",
      },
      {
        name: "Free Clinics Directory",
        description: "Searchable directory of all free clinics in LA.",
        url: "https://www.freeclinics.com/cit/ca-los_angeles",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    emoji: "🚌",
    blurb: "Discounted rides, bikes, and on-demand transit.",
    accent: "amber",
    resources: [
      {
        name: "Metro LIFE Program",
        description: "Low-income riders get discounts on transit passes or 20 free rides on Metro & partner agencies.",
        phone: "(866) 827-8646",
        url: "https://www.metro.net/riding/life/",
      },
      {
        name: "Metro Bike Share",
        description: "Affordable short-trip bike rentals across LA. Great for first/last-mile.",
        url: "https://bikeshare.metro.net/",
      },
      {
        name: "Metro Vanpool",
        description: "Shared commute vans for groups traveling similar routes.",
        phone: "(213) 922-7003",
        url: "https://metrovan.ridematch.info/rp2/home/home",
      },
      {
        name: "Metro Micro",
        description: "On-demand rideshare in 8 LA County zones. Small-vehicle trips for first/last-mile.",
        phone: "(323) 466-4876",
        url: "https://www.metro.net/micro/",
      },
    ],
  },
  {
    slug: "housing",
    title: "Housing",
    emoji: "🏠",
    blurb: "Shelter, transitional housing, and Section 8 help.",
    accent: "coral",
    resources: [
      {
        name: "LAPL Homeless Resources",
        description: "Library-curated guide to shelters, services & support across LA.",
        url: "https://www.lapl.org/homeless-resources",
      },
      {
        name: "Section 8 Housing Choice Vouchers",
        description: "See if you qualify for federal rental assistance and apply.",
        phone: "(800) 955-2232",
        url: "https://www.hud.gov/topics/housing_choice_voucher_program_section_8",
      },
      {
        name: "LA Family Housing",
        description: "Helps people transition out of homelessness and into permanent housing.",
        url: "https://lafh.org",
      },
      {
        name: "Hillsides — Youth Moving On (YMO)",
        description: "Transition-aged youth 16–25: temporary housing, drop-in center, training & workforce dev.",
        phone: "(626) 765-6010",
        url: "https://www.hillsides.org",
      },
    ],
  },
  {
    slug: "food",
    title: "Food",
    emoji: "🍎",
    blurb: "Food benefits, pantries, and fresh groceries.",
    accent: "lime",
    resources: [
      {
        name: "CalFresh (SNAP)",
        description: "Monthly food benefits for low-income individuals and families.",
        phone: "(877) 847-3663",
        url: "https://www.cdss.ca.gov/calfresh",
      },
      {
        name: "LA Regional Food Bank",
        description: "Find a free food pantry near you across LA County.",
        url: "https://www.lafoodbank.org/find-food/",
      },
      {
        name: "Hunger Action Los Angeles",
        description: "CalFresh enrollment, food delivery, and Market Match support.",
        phone: "(213) 361-2075",
        url: "https://www.hungeractionla.org/",
      },
      {
        name: "Karsh Family Social Service Center",
        description: "Emergency food assistance and ongoing food pantry — dry goods, canned goods, and produce.",
        phone: "(213) 401-4651",
        url: "https://karshcenter.org/",
      },
    ],
  },
  {
    slug: "childcare",
    title: "Childcare & Early Ed",
    emoji: "👶",
    blurb: "No-cost and low-cost childcare programs.",
    accent: "rose",
    resources: [
      {
        name: "Connections for Children",
        description: "Directory of no-cost & low-cost childcare programs in LA.",
        url: "https://www.connectionsforchildren.org",
      },
      {
        name: "St. Anne's",
        description: "Supportive housing, early childhood education, mental health & family-based services.",
        phone: "(213) 381-2931",
        url: "https://stannes.org/",
      },
      {
        name: "Venice Family Clinic — Child First Early Head Start",
        description: "Early Head Start program for infants, toddlers, and pregnant moms.",
        phone: "(310) 392-8636",
      },
      {
        name: "Plaza Community Services",
        description: "Childcare, domestic violence services, family life ed, family preservation, and youth services.",
        phone: "(323) 267-9749",
        url: "http://www.plazacs.org/",
      },
    ],
  },
  {
    slug: "tech",
    title: "Tech & Internet",
    emoji: "💻",
    blurb: "Low-cost laptops, hotspots, and digital skills.",
    accent: "violet",
    resources: [
      {
        name: "Delete the Divide",
        description: "Low-cost internet, digital skills workshops, free laptop opportunities, and employment.",
        url: "https://www.deletethedivide.org/",
      },
      {
        name: "LAPL Tech Kiosk",
        description: "Library tech access points across LA.",
        url: "https://www.lapl.org/tech2go/techkiosk",
      },
      {
        name: "LAPL Tech2Go",
        description: "Chromebook + hotspot bundles for adults with a library card in good standing.",
        phone: "(213) 228-7160",
        url: "https://www.lapl.org/tech2go",
      },
    ],
  },
  {
    slug: "legal",
    title: "Legal Help",
    emoji: "⚖️",
    blurb: "Free legal advocacy and representation.",
    accent: "teal",
    resources: [
      {
        name: "Alliance for Children's Rights",
        description: "Free legal services for caregivers, adoptive parents, kids, and teens in LA.",
        phone: "(213) 368-6010",
        url: "https://allianceforchildrensrights.org/",
      },
      {
        name: "CASA of Los Angeles",
        description: "Connects youth (0–21) in foster care or juvenile justice with a trained court advocate.",
        phone: "(323) 859-2888",
        url: "https://casala.org/refer-a-child/",
      },
      {
        name: "Public Counsel",
        description: "Largest pro bono law firm in the U.S. — free legal help.",
        phone: "(213) 385-8112",
        url: "https://publiccounsel.org",
      },
      {
        name: "Neighborhood Legal Services of LA County (NLSLA)",
        description: "Individual representation, legal workshops, and high-impact litigation.",
        phone: "(800) 433-6251",
        url: "https://nlsla.org",
      },
    ],
  },
  {
    slug: "immigration",
    title: "Immigration",
    emoji: "🌎",
    blurb: "Free & low-cost immigration legal services.",
    accent: "amber",
    resources: [
      {
        name: "Immigration Advocates Network",
        description: "National directory of nonprofit immigration legal services. Search by state, county, or facility.",
        url: "https://www.immigrationadvocates.org/nonprofit/legaldirectory/",
      },
      {
        name: "LA County Bar Association",
        description: "Lawyer referrals and immigration legal resources.",
        url: "https://lacba.org/",
      },
      {
        name: "Immigrant Defenders Law Center",
        description: "Next-generation social justice law firm defending immigrant communities.",
        phone: "(213) 634-0999",
        url: "https://immdef.org",
      },
    ],
  },
  {
    slug: "foster-justice",
    title: "Foster & Justice-Impacted",
    emoji: "🤝",
    blurb: "Resources for youth impacted by foster care or the justice system.",
    accent: "rose",
    resources: [
      {
        name: "CASA of Los Angeles",
        description: "Court-appointed advocates for youth (0–21) in foster care or juvenile justice systems.",
        phone: "(323) 859-2888",
        url: "https://casala.org/refer-a-child/",
      },
      {
        name: "Hillsides — Youth Moving On",
        description: "Transition-aged youth 16–25: housing, drop-in center, training & workforce development.",
        phone: "(626) 765-6010",
      },
      {
        name: "Alliance for Children's Rights",
        description: "Free legal advocacy for kids and teens in foster care.",
        phone: "(213) 368-6010",
        url: "https://allianceforchildrensrights.org/",
      },
    ],
  },
  {
    slug: "general",
    title: "General Help & LGBTQ+",
    emoji: "💛",
    blurb: "Catch-all hubs and identity-affirming support.",
    accent: "coral",
    resources: [
      {
        name: "211 LA County",
        description: "One call connects you to health, human, and social services across LA County.",
        phone: "211",
        url: "https://www.211la.org",
      },
      {
        name: "One Degree",
        description: "Search 26,000+ free, up-to-date community resources. Text to search.",
        phone: "(844) 833-1334",
        url: "https://www.1degree.org",
      },
      {
        name: "LA LGBT Center — Crisis Support",
        description: "Crisis support resources, including for TGI/ENBY+ folks (Trans, Gender Non-Conforming, Intersex & Non-Binary).",
        phone: "(323) 860-3799",
        url: "https://community.lalgbtcenter.org/tgi-enby-resource-index/crisis-support/",
      },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
