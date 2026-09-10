import { MotionReveal } from "@/components/motion/motion-reveal";
import { PageHero } from "@/components/ui/page-hero";

export default function AboutHeroSection() {
  return (
    <PageHero
      labelledBy="about-hero-title"
      backgroundImage="/legacy-in-motion-story.webp"
      backgroundPosition="object-[68%_48%]"
      treatment="left"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
        <MotionReveal direction="right">
          <p className="mb-5 text-sm font-semibold text-gold-300">About ADESA HQ</p>
          <h1 id="about-hero-title" className="max-w-[13ch] text-5xl font-medium leading-[1.01] tracking-[-0.045em] text-adesa-50 sm:text-6xl lg:text-7xl">
            Built to create companies with staying power.
          </h1>
        </MotionReveal>
        <MotionReveal className="border-l border-gold-400 pl-5 lg:mb-2" direction="left" delay={0.08}>
          <p className="max-w-[44ch] text-base leading-7 text-adesa-200 sm:text-lg">
            ADESA HQ conceives, launches, governs, and strengthens operating companies built for long-term relevance across Africa.
          </p>
        </MotionReveal>
      </div>
    </PageHero>
  );
}
