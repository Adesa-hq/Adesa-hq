import HeroSection from "@/components/sections/subsidiaries/hero-section";
import ActiveSubsidiariesSection from "@/components/sections/subsidiaries/active-subsidiaries-section";
import PipelineSection from "@/components/sections/subsidiaries/pipeline-section";
import CTASection from "@/components/sections/subsidiaries/cta-section";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Subsidiaries",
  description:
    "Explore ADESA HQ's operating companies, including active subsidiaries and planned portfolio expansion across key African sectors.",
  path: "/subsidiaries", // ensures canonical URL points to this page
});

export default function SubsidiariesPage() {
  return (
    <main role="main">
      <h1 className="sr-only">
        ADESA HQ Subsidiaries - Active and Planned Companies Across Africa
      </h1>

      <HeroSection />
      <ActiveSubsidiariesSection />
      <PipelineSection />
      <CTASection />
    </main>
  );
}
