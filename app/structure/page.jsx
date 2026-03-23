import MasterBrandSection from "@/components/sections/structure/master-brand-section";
import CorporateHierarchySection from "@/components/sections/structure/corporate-hierarchy-section";
import OperatingModelSection from "@/components/sections/structure/operating-model-section";
import CTASection from "@/components/sections/structure/cta-section";
import HeroSection from "@/components/sections/structure/hero-section";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Group Structure",
  description:
    "Explore ADESA HQ's master brand architecture, corporate hierarchy, and operating model designed for governance and growth across Africa.",
  path: "/structure", // ensures canonical URL is correct
});

export default function GroupStructurePage() {
  return (
    <main role="main">
      <h1 className="sr-only">
        ADESA HQ Group Structure - Master Brand, Corporate Hierarchy, and
        Operating Model
      </h1>

      {/* Hero - Server Component */}
      <HeroSection />

      {/* Master Brand Explanation - Client Component */}
      <MasterBrandSection />

      {/* Corporate Hierarchy - Client Component */}
      <CorporateHierarchySection />

      {/* Operating Model - Client Component */}
      <OperatingModelSection />

      {/* CTA - Client Component */}
      <CTASection />
    </main>
  );
}
