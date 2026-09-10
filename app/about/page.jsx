import { buildWebPageJsonLd, constructMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/about/hero-section";
import AboutEditorialSections from "@/components/sections/about/editorial-sections";
import PageJsonLd from "@/components/seo/page-json-ld";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/about"];

export const metadata = constructMetadata(pageSeo);

const aboutJsonLd = buildWebPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
});

export default function AboutPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={aboutJsonLd} />
      <HeroSection />
      <AboutEditorialSections />
    </main>
  );
}
