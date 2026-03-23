import HeroSection from "@/components/sections/career/hero-section";
import JobListings from "@/components/sections/career/job-listings";
import ContactSection from "@/components/sections/career/contact-section";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Careers at Adesa HQ",
  description:
    "Join Adesa HQ and help shape the future of African businesses. Explore open positions and grow with a multi-sector investment group.",
  path: "/careers", // canonical URL for the careers page
});

export default function CareerPage() {
  return (
    <main role="main">
      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        Careers at Adesa HQ - Explore Open Positions and Grow with a
        Multi-Sector African Group
      </h1>

      {/* HERO */}
      <HeroSection />

      {/* OPEN POSITIONS */}
      <JobListings />

      {/* CONTACT */}
      <ContactSection />
    </main>
  );
}
