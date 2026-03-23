import { constructMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/governance/hero-section";
import CoreStandardsSection from "@/components/sections/governance/core-standards-section";
import PerformanceOversightSection from "@/components/sections/governance/performance-oversight-section";
import CapitalDisciplineSection from "@/components/sections/governance/capital-discipline-section";
import InstitutionalSystemsSection from "@/components/sections/governance/institutional-systems-section";
import FinalStatementSection from "@/components/sections/governance/final-statement-section";

export const metadata = constructMetadata({
  title: "Governance Framework",
  description:
    "Learn about ADESA HQ's institutional standards, performance oversight, capital discipline, and systems designed for generational success across Africa.",
  path: "/governance", // ensures canonical URL points to this page
});

export default function GovernancePage() {
  return (
    <main role="main">
      <h1 className="sr-only">
        ADESA HQ Governance Framework - Institutional standards, oversight, and
        systems for African success
      </h1>

      <HeroSection />

      <CoreStandardsSection />

      <PerformanceOversightSection />

      <CapitalDisciplineSection />

      <InstitutionalSystemsSection />

      <FinalStatementSection />
    </main>
  );
}
