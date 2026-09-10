import { MotionReveal } from "@/components/motion/motion-reveal";
import { PageHero } from "@/components/ui/page-hero";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";

export default function SubsidiariesHeroSection() {
  return (
    <PageHero
      labelledBy="subsidiaries-hero-title"
      backgroundImage="/adesa-brochure-showcase.webp"
      backgroundPosition="object-[76%_54%]"
      imageClassName="opacity-60 saturate-[0.92]"
      treatment="left"
    >
      <MotionReveal>
        <p className="mb-5 text-sm font-semibold text-gold-300">Operating companies</p>
        <h1 id="subsidiaries-hero-title" className="max-w-[14ch] text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-adesa-50 sm:text-6xl lg:text-7xl">
          Focused businesses within one accountable group.
        </h1>
        <p className="mt-6 max-w-[60ch] text-base leading-7 text-adesa-200 sm:text-lg">
          Each company addresses a distinct market need while operating within shared standards for governance, performance, and long-term value.
        </p>
      </MotionReveal>
      <div className="mt-12 grid grid-cols-2 gap-x-5 border-t border-white/12 sm:grid-cols-4">
        {ACTIVE_SUBSIDIARIES.map((company, index) => (
          <MotionReveal key={company.name} className="border-b border-white/12 py-5 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0" delay={index * 0.05}>
            <span className="font-sans text-sm font-semibold text-adesa-100">{company.name}</span>
          </MotionReveal>
        ))}
      </div>
    </PageHero>
  );
}
