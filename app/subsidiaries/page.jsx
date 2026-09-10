import HeroSection from "@/components/sections/subsidiaries/hero-section";
import SubsidiariesEditorialSections from "@/components/sections/subsidiaries/editorial-sections";
import { buildWebPageJsonLd, constructMetadata } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/subsidiaries"];

export const metadata = constructMetadata(pageSeo);

const subsidiariesJsonLd = buildWebPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
  mainEntity: {
    "@type": "ItemList",
    name: "ADESA operating companies",
    numberOfItems: ACTIVE_SUBSIDIARIES.length,
    itemListElement: ACTIVE_SUBSIDIARIES.map((company, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: company.name,
        description: company.description,
        url: company.href,
      },
    })),
  },
});

export default function SubsidiariesPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={subsidiariesJsonLd} />
      <HeroSection />
      <SubsidiariesEditorialSections />
    </main>
  );
}
