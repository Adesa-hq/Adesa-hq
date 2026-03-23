import { siteConfig } from "@/config/site";

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  path = "", // relative path for canonical
} = {}) {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "African holding company",
      "Investment holding group Africa",
      "Multi-sector group Nigeria",
      "Corporate Governance Africa",
      "ADESA HQ",
      "adesa hq",
      "adesahq"
    ],
    authors: [{ name: "ADESA HQ" }],
    creator: "ADESA HQ",
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@adesahq",
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    // JSON-LD structured data for better indexing
    additionalMetaTags: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#151E47", // your brand blue
      },
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.ogImage,
      sameAs: [
        "https://twitter.com/adesahq",
        "https://www.linkedin.com/company/adesahq",
      ],
    },
  };
}
