import { siteConfig } from "@/config/site";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizePath(path = "") {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function formatTitle(title) {
  const normalizedTitle = title.trim();
  const includesBrand = normalizedTitle
    .toLocaleLowerCase("en")
    .includes(siteConfig.name.toLocaleLowerCase("en"));

  return includesBrand
    ? normalizedTitle
    : `${normalizedTitle} | ${siteConfig.name}`;
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image,
  imageAlt = `${siteConfig.name} social preview`,
  keywords = [],
  noIndex = false,
  path = "",
  type = "website",
} = {}) {
  const canonicalPath = normalizePath(path);
  const url = new URL(canonicalPath, siteConfig.url).toString();
  const socialImage = image || `/api/og?path=${encodeURIComponent(canonicalPath)}`;
  const imageUrl = new URL(socialImage, siteConfig.url).toString();
  const pageTitle = formatTitle(title);
  const otherVerification = Object.fromEntries(
    [
      [
        "msvalidate.01",
        process.env.BING_SITE_VERIFICATION || siteConfig.verification?.bing,
      ],
      [
        "p:domain_verify",
        process.env.PINTEREST_SITE_VERIFICATION || siteConfig.verification?.pinterest,
      ],
      [
        "facebook-domain-verification",
        process.env.FACEBOOK_DOMAIN_VERIFICATION || siteConfig.verification?.facebook,
      ],
    ].filter(([, value]) => Boolean(value)),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: pageTitle,
    description,
    keywords: unique([...siteConfig.keywords, ...keywords]),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "business",
    referrer: "strict-origin-when-cross-origin",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
      site: siteConfig.socialHandles.twitter,
      creator: siteConfig.socialHandles.twitter,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icons/adesa-192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [
        { url: "/icons/adesa-192.png", type: "image/png", sizes: "192x192" },
      ],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    verification: {
      google:
        process.env.GOOGLE_SITE_VERIFICATION ||
        siteConfig.verification?.google ||
        undefined,
      yahoo:
        process.env.YAHOO_SITE_VERIFICATION ||
        siteConfig.verification?.yahoo ||
        undefined,
      yandex:
        process.env.YANDEX_SITE_VERIFICATION ||
        siteConfig.verification?.yandex ||
        undefined,
      me: unique([
        siteConfig.links.linkedin,
        siteConfig.links.twitter,
        siteConfig.links.instagram,
      ]),
      other: Object.keys(otherVerification).length ? otherVerification : undefined,
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: new URL(siteConfig.logo, siteConfig.url).toString(),
      contentUrl: new URL(siteConfig.logo, siteConfig.url).toString(),
      caption: `${siteConfig.name} logo`,
    },
    image: [
      new URL(siteConfig.logo, siteConfig.url).toString(),
      new URL(siteConfig.ogImage, siteConfig.url).toString(),
    ],
    description: siteConfig.description,
    slogan: "Legacy in Motion",
    foundingDate: "2021",
    award: siteConfig.award?.title,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Place", name: "Africa" },
    ],
    knowsAbout: [
      "Corporate governance",
      "Capital allocation",
      "Institution building",
      "Media and creative services",
      "Renewable energy infrastructure",
      "Business systems",
      "Distribution and supply chain",
    ],
    sameAs: unique([
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
    ]),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "general enquiries",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        areaServed: "NG",
        availableLanguage: ["en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 Isheri Road, Ojudu-Berger",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    subOrganization: ACTIVE_SUBSIDIARIES.map((company) => ({
      "@type": "Organization",
      name: company.name,
      description: company.description,
      url: company.href,
      parentOrganization: {
        "@id": `${siteConfig.url}#organization`,
      },
    })),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    about: {
      "@id": `${siteConfig.url}#organization`,
    },
    inLanguage: "en-NG",
  };
}

export function buildContactPageJsonLd(page = {}) {
  return buildWebPageJsonLd({
    type: "ContactPage",
    name: `Contact ${siteConfig.name}`,
    title: `Contact ${siteConfig.name}`,
    description:
      "Get in touch with ADESA HQ for partnership opportunities, media inquiries, investor questions, or general questions about our builder-operator approach.",
    path: "/contact",
    ...page,
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "general enquiries",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      areaServed: "NG",
      availableLanguage: ["en"],
    },
  });
}

export function buildWebPageJsonLd({
  title,
  name = title,
  description,
  path,
  type = "WebPage",
  mainEntity,
  hasPart,
}) {
  const canonicalPath = normalizePath(path);
  const pageUrl =
    canonicalPath === "/"
      ? siteConfig.url
      : new URL(canonicalPath, siteConfig.url).toString();
  const pageId = `${pageUrl}#webpage`;
  const page = {
    "@type": type,
    "@id": pageId,
    url: pageUrl,
    name,
    headline: title,
    description,
    inLanguage: "en-NG",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: new URL(
        `/api/og?path=${encodeURIComponent(canonicalPath)}`,
        siteConfig.url,
      ).toString(),
    },
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    about: {
      "@id": `${siteConfig.url}#organization`,
    },
    ...(mainEntity ? { mainEntity } : {}),
    ...(hasPart ? { hasPart } : {}),
  };

  const graph = [page];

  if (canonicalPath !== "/") {
    const breadcrumbId = `${pageUrl}#breadcrumb`;
    page.breadcrumb = { "@id": breadcrumbId };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: pageUrl,
        },
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
