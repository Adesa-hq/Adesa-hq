import Image from "next/image";
import { MotionReveal } from "@/components/motion/motion-reveal";

export default function BrochureShowcaseSection() {
  return (
    <section className="section-rule bg-adesa-950 text-adesa-100" aria-labelledby="brochure-showcase-heading">
      <div className="site-container section-space grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:gap-16">
        <MotionReveal direction="right">
          <figure>
            <div data-testid="brochure-media" className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-adesa-850">
              <Image
                src="/adesa-brochure-showcase.webp"
                alt="ADESA HQ portfolio and group services presentation"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption data-testid="brochure-caption" className="mt-4 grid gap-1 border-l border-gold-400 pl-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <span className="text-sm font-semibold text-adesa-100">The ADESA HQ portfolio</span>
              <span className="text-sm text-adesa-400">Media, energy, solutions, and distribution</span>
            </figcaption>
          </figure>
        </MotionReveal>

        <MotionReveal direction="left" delay={0.08}>
          <h2 id="brochure-showcase-heading" className="max-w-[12ch] text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-adesa-50 sm:text-5xl lg:text-6xl">
            One group. Four operating perspectives.
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-7 text-adesa-300 sm:text-lg">
            The group combines governance, operating support, and disciplined capital allocation while each company retains a clear market mandate.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
