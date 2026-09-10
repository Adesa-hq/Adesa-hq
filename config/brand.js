export const ADESA_INSTAGRAM_URL =
  "https://www.instagram.com/adesasolution?igsh=YTU2ZnFhYTNvZTll&utm_source=qr";

export const ADESA_MEDIA = {
  name: "Adesa Media",
  sector: "Media & Creative Services",
  description:
    "A full-spectrum media and creative services company delivering strategic communications, brand development, and content production for leading organizations across Africa.",
  href: "https://www.adesamedia.com/",
  careerHref: "https://www.adesamedia.com/careers",
  image: "/logo/Adesa-media-logo-white.png",
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
  sector: "Renewable Energy Solutions",
  description:
    "Focused on renewable power solutions and critical infrastructure development to support sustainable growth across African markets.",
  href: "https://www.adesaenergy.com/",
  careerHref: "https://www.adesaenergy.com/careers",
  image: "/logo/Adesa-energy-logo.jpg",
  badge: "AE",
  services: [
    "Solar Infrastructure",
    "Grid Modernization",
    "Energy Consulting",
    "Sustainable Solutions",
  ],
  quickFacts: [
    "Clean energy infrastructure builder",
    "Focus on grid modernization",
    "Sustainable power generation",
    "Supports commercial & industrial sectors",
  ],
};

export const ADESA_SOLUTIONS = {
  name: "Adesa Solutions",
  sector: "Business Systems & Operational Support",
  description:
    "A solutions-led arm focused on practical systems, execution support, and operational problem solving across the ADESA group.",
  href: ADESA_INSTAGRAM_URL,
  image: "/logo/Adesa-solution.jpg",
  badge: "AS",
  services: [
    "Process Design",
    "Implementation Support",
    "Business Operations",
    "Systems Advisory",
  ],
  quickFacts: [
    "Enterprise process engineering",
    "Practical execution support",
    "Optimizes group-wide resources",
    "Business systems advisory",
  ],
};

export const ADESA_DISTRIBUTION = {
  name: "Adesa Distribution",
  sector: "Market Access, Distribution & Supply Chain",
  description:
    "A market access, distribution, and supply chain company connecting manufacturers and suppliers with retailers, institutions, and consumers across Africa.",
  href: "https://www.instagram.com/adesadistribution?igsh=MTM0c3BvajlxaW80bg%3D%3D&utm_source=qr",
  image: "/logo/Adesa-distribution-logo.jpg",
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
