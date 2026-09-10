import { MotionReveal } from "@/components/motion/motion-reveal";
import { PageHero } from "@/components/ui/page-hero";

const standards = [
  ["Decision rights", "Clear ownership and escalation paths."],
  ["Performance oversight", "Consistent reporting and review."],
  ["Capital discipline", "Measured deployment and accountability."],
];

export default function GovernanceHeroSection() {
  return (
    <PageHero
      labelledBy="governance-hero-title"
      backgroundImage="/legacy-in-motion-story.webp"
      backgroundPosition="object-[22%_62%]"
      imageClassName="opacity-40 grayscale-[0.25]"
      treatment="right"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <MotionReveal direction="right">
          <p className="mb-5 text-sm font-semibold text-gold-300">Governance</p>
          <h1 id="governance-hero-title" className="max-w-[12ch] text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-adesa-50 sm:text-6xl lg:text-7xl">
            Standards that make growth more credible.
          </h1>
          <p className="mt-6 max-w-[54ch] text-base leading-7 text-adesa-200 sm:text-lg">
            Governance is an operating advantage when it makes accountability, risk, and performance easier to understand.
          </p>
        </MotionReveal>
        <div className="border-t border-white/12 lg:mt-8">
          {standards.map(([title, description], index) => (
            <MotionReveal key={title} className="border-b border-white/12 py-5" delay={index * 0.06}>
              <h2 className="font-sans text-base font-semibold text-adesa-50">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-adesa-400">{description}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </PageHero>
  );
}
