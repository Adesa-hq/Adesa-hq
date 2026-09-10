import { MotionReveal } from "@/components/motion/motion-reveal";
import { PageHero } from "@/components/ui/page-hero";

const inquiryTypes = ["Partnerships", "Media", "Operating opportunities", "General enquiries"];

export default function ContactHeroSection() {
  return (
    <PageHero
      labelledBy="contact-hero-title"
      backgroundImage="/adesa-brochure-showcase.webp"
      backgroundPosition="object-[26%_78%]"
      imageClassName="opacity-45 saturate-[0.7]"
      treatment="right"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <MotionReveal direction="right">
          <p className="mb-5 text-sm font-semibold text-gold-300">Contact</p>
          <h1 id="contact-hero-title" className="max-w-[13ch] text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-adesa-50 sm:text-6xl lg:text-7xl">
            Bring us a clear, relevant conversation.
          </h1>
          <p className="mt-6 max-w-[56ch] text-base leading-7 text-adesa-200 sm:text-lg">
            ADESA HQ welcomes thoughtful enquiries connected to the group, its operating companies, and long-term partnerships.
          </p>
        </MotionReveal>
        <MotionReveal className="border-t border-white/12 pt-5 lg:mt-8" direction="left" delay={0.08}>
          <h2 className="font-sans text-sm font-semibold text-gold-300">Relevant enquiries</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4">
            {inquiryTypes.map((type) => <li key={type} className="text-sm text-adesa-300">{type}</li>)}
          </ul>
        </MotionReveal>
      </div>
    </PageHero>
  );
}
