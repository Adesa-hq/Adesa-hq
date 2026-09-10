import { MotionReveal } from "@/components/motion/motion-reveal";
import { PageHero } from "@/components/ui/page-hero";

const structure = ["Group direction", "Operating autonomy", "Shared standards"];

export default function StructureHeroSection() {
  return (
    <PageHero
      labelledBy="structure-hero-title"
      backgroundImage="/adesa-brochure-showcase.webp"
      backgroundPosition="object-[76%_62%]"
      imageClassName="opacity-45 saturate-[0.62]"
      treatment="left"
    >
      <MotionReveal>
        <p className="mb-5 text-sm font-semibold text-gold-300">Group structure</p>
        <h1 id="structure-hero-title" className="max-w-[16ch] text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-adesa-50 sm:text-6xl lg:text-7xl">
          Clarity at the centre. Autonomy at the edge.
        </h1>
        <p className="mt-6 max-w-[60ch] text-base leading-7 text-adesa-200 sm:text-lg">
          The group defines governance and strategic direction while operating companies retain the focus required to execute in their markets.
        </p>
      </MotionReveal>
      <div className="mt-12 grid border-t border-white/12 sm:grid-cols-3">
        {structure.map((item, index) => (
          <MotionReveal key={item} className="border-b border-white/12 py-5 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0" delay={index * 0.05}>
            <span className="text-sm font-semibold text-adesa-100">{item}</span>
          </MotionReveal>
        ))}
      </div>
    </PageHero>
  );
}
