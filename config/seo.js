export const SEO_PAGES = {
  "/": {
    path: "/",
    title: "ADESA HQ | Builder-Operator Group in Africa",
    schemaName: "ADESA HQ",
    schemaType: "WebPage",
    description:
      "ADESA HQ is a governance-led holding group that builds and strengthens enduring African businesses across strategic sectors.",
    keywords: [
      "builder-operator group Africa",
      "African holding company",
      "ADESA HQ",
      "Legacy in Motion",
      "corporate governance Africa",
    ],
    imageHeadline: "Building enduring African businesses",
    imageSummary: "Governance, capital discipline, and operating strength under one group.",
    changeFrequency: "monthly",
    priority: 1,
  },
  "/about": {
    path: "/about",
    title: "About ADESA HQ | Builder-Operator Philosophy in Africa",
    schemaName: "About ADESA HQ",
    schemaType: "AboutPage",
    description:
      "Learn about ADESA HQ's builder-operator philosophy, governance framework, and long-term institutional value creation strategy across Africa.",
    keywords: [
      "about ADESA HQ",
      "builder-operator philosophy",
      "governance framework Africa",
      "institution building Africa",
    ],
    imageHeadline: "Built for decades, not exits",
    imageSummary: "The philosophy, mandate, and institutional thinking behind ADESA HQ.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/structure": {
    path: "/structure",
    title: "Group Structure | ADESA HQ Governance & Operating Model",
    schemaName: "ADESA HQ Group Structure",
    schemaType: "WebPage",
    description:
      "Explore ADESA HQ's master brand architecture, corporate hierarchy, and operating model designed for governance, capital discipline, and growth across Africa.",
    keywords: [
      "ADESA group structure",
      "African corporate hierarchy",
      "holding company operating model",
      "capital allocation Africa",
    ],
    imageHeadline: "One group, clear operating accountability",
    imageSummary: "How ADESA HQ connects governance, shared capability, and operating companies.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/governance": {
    path: "/governance",
    title: "Governance | ADESA HQ Board Oversight & Capital Discipline",
    schemaName: "ADESA HQ Governance",
    schemaType: "WebPage",
    description:
      "Learn about ADESA HQ's institutional standards, performance oversight, capital discipline, and systems designed for generational success across Africa.",
    keywords: [
      "corporate governance Africa",
      "board oversight Nigeria",
      "capital discipline",
      "institutional standards Africa",
    ],
    imageHeadline: "Governance that strengthens performance",
    imageSummary: "Institutional standards, oversight, and capital discipline for long-term value.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  "/subsidiaries": {
    path: "/subsidiaries",
    title:
      "Subsidiaries | Adesa Media, Adesa Energy, Adesa Solutions & Adesa Distribution",
    schemaName: "ADESA HQ Subsidiaries",
    schemaType: "CollectionPage",
    description:
      "Explore ADESA HQ's operating companies, including Adesa Media, Adesa Energy, Adesa Solutions, and Adesa Distribution across key African sectors.",
    keywords: [
      "Adesa Media",
      "Adesa Energy",
      "Adesa Solutions",
      "Adesa Distribution",
      "ADESA operating companies",
    ],
    imageHeadline: "Operating companies across priority sectors",
    imageSummary: "Media, renewable energy, business systems, and distribution across Africa.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/careers": {
    path: "/careers",
    title: "Careers Across ADESA Operating Companies | ADESA HQ",
    schemaName: "Careers across ADESA operating companies",
    schemaType: "CollectionPage",
    description:
      "Find career opportunities at eligible ADESA operating companies and continue to each subsidiary's website to review roles and apply.",
    keywords: [
      "ADESA careers",
      "Adesa Media careers",
      "Adesa Energy careers",
      "jobs in Africa",
      "corporate careers Nigeria",
    ],
    imageHeadline: "Build your career across the ADESA group",
    imageSummary: "Explore opportunities managed by ADESA operating companies.",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  "/contact": {
    path: "/contact",
    title: "Contact ADESA HQ | Partnership, Media & General Inquiries",
    schemaName: "Contact ADESA HQ",
    schemaType: "ContactPage",
    description:
      "Get in touch with ADESA HQ for partnership opportunities, media inquiries, investor questions, or general questions about our builder-operator approach to African enterprise.",
    keywords: [
      "contact ADESA HQ",
      "partnership inquiries Africa",
      "media inquiries ADESA",
      "ADESA HQ Lagos",
    ],
    imageHeadline: "Start a conversation with ADESA HQ",
    imageSummary: "Partnership, media, investor, and general corporate inquiries.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy | ADESA HQ",
    schemaName: "ADESA HQ Privacy Policy",
    schemaType: "WebPage",
    description:
      "ADESA HQ's privacy policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage with our services.",
    keywords: ["ADESA HQ privacy policy", "data protection", "website privacy Nigeria"],
    imageHeadline: "Privacy at ADESA HQ",
    imageSummary: "How we collect, use, disclose, and safeguard information.",
    changeFrequency: "yearly",
    priority: 0.4,
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Service | ADESA HQ",
    schemaName: "ADESA HQ Terms of Service",
    schemaType: "WebPage",
    description:
      "ADESA HQ's terms of service explain the agreement for using our website and services, including intellectual property, limitations, and governing law.",
    keywords: ["ADESA HQ terms of service", "website terms Nigeria", "user agreement"],
    imageHeadline: "ADESA HQ terms of service",
    imageSummary: "The terms governing use of this website and its content.",
    changeFrequency: "yearly",
    priority: 0.4,
  },
};

export const INDEXABLE_ROUTES = Object.values(SEO_PAGES);

export function getSeoPage(path = "/") {
  return SEO_PAGES[path] || SEO_PAGES["/"];
}
