import { Section } from "@/components/ui/section";
import ContactFormSection from "@/components/sections/contact/contact-form-section";
import { constructMetadata, buildContactPageJsonLd } from "@/lib/seo";
import LeftPanel from "@/components/sections/contact/LeftPanel";
import HeroSection from "@/components/sections/contact/hero-section";
import PageJsonLd from "@/components/seo/page-json-ld";
import { SEO_PAGES } from "@/config/seo";

const pageSeo = SEO_PAGES["/contact"];

export const metadata = constructMetadata(pageSeo);

const contactJsonLd = buildContactPageJsonLd({
  ...pageSeo,
  name: pageSeo.schemaName,
  type: pageSeo.schemaType,
});

export default function ContactPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={contactJsonLd} />
      <HeroSection />

      <Section className="bg-adesa-900">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
          <LeftPanel />
          </div>
          <div className="border-t border-white/12 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-8">
            <ContactFormSection />
          </div>
        </div>
      </Section>
    </main>
  );
}
