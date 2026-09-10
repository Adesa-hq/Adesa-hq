import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import HeroSection from "@/components/sections/legal/hero-section";
import PrivacyContentSection from "@/components/sections/legal/privacy-content-section";
import PageJsonLd from "@/components/seo/page-json-ld";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/privacy"];

export const metadata = constructMetadata(pageSeo);

const privacyJsonLd = buildWebPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
});

export default function PrivacyPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={privacyJsonLd} />
      {/* Hero Section */}
      <HeroSection />

      {/* Privacy Content */}
      <PrivacyContentSection />
    </main>
  );
}
