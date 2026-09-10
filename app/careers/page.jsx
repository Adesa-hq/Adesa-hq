import HeroSection from "@/components/sections/career/hero-section";
import CareerEditorialSections from "@/components/sections/career/editorial-sections";
import { buildWebPageJsonLd, constructMetadata } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";
import { CAREER_SUBSIDIARIES } from "@/config/brand";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/careers"];

export const metadata = constructMetadata(pageSeo);

const careersJsonLd = buildWebPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
  hasPart: CAREER_SUBSIDIARIES.map((company) => ({
    "@type": "WebPage",
    name: `${company.name} careers`,
    url: company.careerHref,
  })),
});

export default function CareerPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={careersJsonLd} />
      <HeroSection />
      <CareerEditorialSections />
    </main>
  );
}
