import { constructMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/legal/hero-section";
import PrivacyContentSection from "@/components/sections/legal/privacy-content-section";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "ADESA HQ's privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.",
  path: "/privacy", // ensures canonical URL is correct
  noIndex: false, // privacy pages usually should be indexed
});

export default function PrivacyPage() {
  return (
    <main role="main">
      <h1 className="sr-only">
        ADESA HQ Privacy Policy - How we handle your data
      </h1>

      {/* Hero Section */}
      <HeroSection />

      {/* Privacy Content */}
      <PrivacyContentSection />
    </main>
  );
}
