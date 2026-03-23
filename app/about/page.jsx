import { constructMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/about/hero-section";
import NarrativeSection from "@/components/sections/about/narrative-section";
import ValuesSection from "@/components/sections/about/values-section";
import TimelineSection from "@/components/sections/about/timeline-section";
import CTASsection from "@/components/sections/about/cta-section";
import PhilosophyPillarsSection from "@/components/sections/about/philosophy-pillars-section";

export const metadata = constructMetadata({
  title: "About ADESA HQ - Builder-Operator Philosophy",
  description:
    "Learn about ADESA HQ's builder-operator philosophy, governance framework, and commitment to long-term institutional value creation across Africa.",
  path: "/about", // ensures canonical URL points to About page
});

export default function AboutPage() {
  return (
    <main role="main">
      <h1 className="sr-only">
        About ADESA HQ - Builder-Operator Philosophy and Governance in Africa
      </h1>

      <HeroSection />
      <NarrativeSection />
      <PhilosophyPillarsSection />
      <ValuesSection />
      {/* <GovernanceFrameworkSection /> */}
      <TimelineSection />
      <CTASsection />
    </main>
  );
}
