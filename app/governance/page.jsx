import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import HeroSection from "@/components/sections/governance/hero-section";
import GovernanceEditorialSections from "@/components/sections/governance/editorial-sections";
import PageJsonLd from "@/components/seo/page-json-ld";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/governance"];

export const metadata = constructMetadata(pageSeo);

const governanceJsonLd = buildWebPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
});

export default function GovernancePage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={governanceJsonLd} />
      <HeroSection />
      <GovernanceEditorialSections />
    </main>
  );
}
