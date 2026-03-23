import { constructMetadata } from "@/lib/seo";
import TermsContentSection from "@/components/sections/legal/terms-content-section";
import HeroSectionTerms from "@/components/sections/legal/hero-section-terms";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description:
    "ADESA HQ's terms of service outline the agreement for using our website and services, including intellectual property rights, limitations, and governing law.",
  path: "/terms-of-service", // ensures canonical URL is correct
  noIndex: false, // allow indexing, change to true if you want it hidden
});

export default function TermsPage() {
  return (
    <main role="main">
      <h1 className="sr-only">
        ADESA HQ Terms of Service - User agreement, intellectual property, and
        legal guidelines
      </h1>

      {/* Hero Section */}
      <HeroSectionTerms />

      {/* Terms Content Section */}
      <TermsContentSection />
    </main>
  );
}
