import HeroSection from "@/components/sections/hero-section";
import AwardProofSection from "@/components/sections/award-proof-section";
import VisionMissionSection from "@/components/sections/vision-mission-section";
import OperatingModelSection from "@/components/sections/operating-model-section";
import StatsSection from "@/components/sections/stats-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import BrochureShowcaseSection from "@/components/sections/brochure-showcase-section";
import SubsidiariesSection from "@/components/sections/subsidiaries-section";
import FinalCTASection from "@/components/sections/final-cta-section";
import { buildWebPageJsonLd, constructMetadata } from "@/lib/seo";
import SubscribeCard from "@/components/sections/SubscribeCard";
import PageJsonLd from "@/components/seo/page-json-ld";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/"];

export const metadata = constructMetadata(pageSeo);

const pageJsonLd = buildWebPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
});

export default function Home() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={pageJsonLd} />
      <HeroSection />
      <AwardProofSection />
      <BrochureShowcaseSection />
      <VisionMissionSection />
      <OperatingModelSection />
      <StatsSection />
      <PhilosophySection />
      <SubsidiariesSection />
      <SubscribeCard
        buttonText="Subscribe on LinkedIn"
        className="w-full"
      />
      <FinalCTASection />
    </main>
  );
}
