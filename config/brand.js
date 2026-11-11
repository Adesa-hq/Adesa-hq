export const ADESA_INSTAGRAM_URL =
  "https://www.instagram.com/adesasolution?igsh=YTU2ZnFhYTNvZTll&utm_source=qr";

export const ADESA_MEDIA = {
  name: "Adesa Media",
  sector: "Media & Creative Services",
  description:
    "A full-spectrum media and creative services company delivering strategic communications, brand development, and content production for leading organizations across Africa.",
  href: "https://www.adesamedia.com/",
  careerHref: "https://www.adesamedia.com/careers",
  image: "/assets/adesa/logos/adesa_media.png",
  badge: "AM",
  services: [
    "Strategic Communications",
    "Brand Development",
    "Content Production",
    "Digital Media",
  ],
  quickFacts: [
    "Creative & communication strategy",
    "Full-spectrum content production",
    "Serves leading African organizations",
    "Digital media infrastructure focus",
  ],
};

export const ADESA_ENERGY = {
  name: "Adesa Energy",
  sector: "CNG Energy for Mobility",
  description:
    "A CNG energy company advancing wider adoption of gas as a form of energy for mobility.",
  href: "https://www.adesaenergy.com/",
  careerHref: "https://www.adesaenergy.com/careers",
  image: "/assets/adesa/logos/adesa_energy.png",
  badge: "AE",
  services: [
    "CNG Energy Solutions",
    "Gas for Mobility",
    "CNG Adoption",
  ],
  quickFacts: [
    "CNG-focused energy company",
    "Gas as an energy source for mobility",
    "Advancing wider CNG adoption",
  ],
};

export const ADESA_SOLUTIONS = {
  name: "Adesa Solutions",
  sector: "Construction, Electrical & Mechanical Engineering",
  description:
    "An engineering company serving the construction, electrical, and mechanical industries.",
  href: ADESA_INSTAGRAM_URL,
  image: "/assets/adesa/logos/adesa_solutions.png",
  badge: "AS",
  services: [
    "Construction Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
  ],
  quickFacts: [
    "Engineering-led operating company",
    "Construction industry expertise",
    "Electrical and mechanical engineering focus",
  ],
};

export const ADESA_DISTRIBUTION = {
  name: "Adesa Distribution",
  sector: "Market Access, Distribution & Supply Chain",
  description:
    "A market access, distribution, and supply chain company connecting manufacturers and suppliers with retailers, institutions, and consumers across Africa.",
  href: "https://www.instagram.com/adesadistribution?igsh=MTM0c3BvajlxaW80bg%3D%3D&utm_source=qr",
  image: "/assets/adesa/logos/adesa_distribution.png",
  badge: "AD",
  services: [
    "Market Access",
    "Distribution Services",
    "Supply Chain Solutions",
    "Last-Mile Coordination",
  ],
  quickFacts: [
    "Africa-focused market access",
    "Supports manufacturers and brands",
    "Technology-enabled operations",
    "Integrated distribution networks",
  ],
};

export const ACTIVE_SUBSIDIARIES = [
  {
    ...ADESA_MEDIA,
  },
  {
    ...ADESA_ENERGY,
  },
  {
    ...ADESA_SOLUTIONS,
  },
  {
    ...ADESA_DISTRIBUTION,
  },
];

export const CAREER_SUBSIDIARIES = [ADESA_MEDIA, ADESA_ENERGY];
