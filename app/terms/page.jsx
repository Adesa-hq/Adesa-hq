import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import TermsContentSection from "@/components/sections/legal/terms-content-section";
import HeroSectionTerms from "@/components/sections/legal/hero-section-terms";
import PageJsonLd from "@/components/seo/page-json-ld";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/terms"];

export const metadata = constructMetadata(pageSeo);

const termsJsonLd = buildWebPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
});

export default function TermsPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={termsJsonLd} />
      {/* Hero Section */}
      <HeroSectionTerms />

      {/* Terms Content Section */}
      <TermsContentSection />
    </main>
  );
}
