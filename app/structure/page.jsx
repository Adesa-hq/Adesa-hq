import StructureEditorialSections from "@/components/sections/structure/editorial-sections";
import HeroSection from "@/components/sections/structure/hero-section";
import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/structure"];

export const metadata = constructMetadata(pageSeo);

const structureJsonLd = buildWebPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
});

export default function GroupStructurePage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={structureJsonLd} />
      {/* Hero - Server Component */}
      <HeroSection />

      <StructureEditorialSections />
    </main>
  );
}
