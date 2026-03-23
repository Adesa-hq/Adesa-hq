import { Section } from "@/components/ui/section";
import ContactFormSection from "@/components/sections/contact/contact-form-section";
import { constructMetadata } from "@/lib/seo";
import GridLine from "@/components/ui/gridLine";
import LeftPanel from "@/components/sections/contact/LeftPanel";
import HeroSection from "@/components/sections/contact/hero-section";

export const metadata = constructMetadata({
  title: "Contact Us",
  description:
    "Get in touch with ADESA HQ for partnership opportunities, media inquiries, or general questions about our builder-operator approach to African enterprise.",
  path: "/contact", // canonical URL for contact page
});

export default function ContactPage() {
  return (
    <main role="main">
      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        Contact ADESA HQ - Partnership, Media Inquiries, and General Questions
      </h1>

      {/* HERO */}
      <HeroSection />

      {/* MAIN CONTACT ZONE */}
      <Section className="relative bg-transparent overflow-hidden">
        <GridLine />
        <div className="relative grid lg:grid-cols-2 gap-20 lg:gap-28">
          <LeftPanel />
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-adesa-800/30 blur-[80px] animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute inset-0 -translate-x-6 -translate-y-6 rounded-[32px] bg-gradient-to-tr from-adesa-700/20 via-gold-400/10 to-adesa-600/10 blur-[60px] pointer-events-none" />
            <ContactFormSection />
          </div>
        </div>
      </Section>

      {/* FINAL CALL BLOCK */}
      <Section className="relative overflow-hidden bg-adesa-900 text-adesa-100">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-adesa-700 rounded-full blur-[160px] opacity-40" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[180px] opacity-10" />
        </div>

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#B8860B_1px,transparent_1px),linear-gradient(to_bottom,#B8860B_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.08),transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto py-28 px-6 text-center">
          <div className="relative px-10 py-16 rounded-[32px] bg-adesa-800/60 backdrop-blur-xl border border-adesa-600 shadow-[0_0_80px_rgba(184,134,11,0.08)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.1] tracking-tight">
              <span className="block">Building Africa&apos;s</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                Future Together
              </span>
            </h2>

            <p className="mt-10 text-lg text-adesa-200 max-w-2xl mx-auto leading-relaxed">
              ADESA HQ is committed to transparent communication and meaningful
              engagement with all stakeholders. We look forward to hearing from
              you.
            </p>

            <div className="mt-12 flex justify-center gap-4">
              <div className="w-2 h-2 rounded-full bg-gold-400 opacity-70" />
              <div className="w-2 h-2 rounded-full bg-gold-400 opacity-50" />
              <div className="w-2 h-2 rounded-full bg-gold-400 opacity-30" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
