import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/motion/motion-reveal";

export default function PhilosophySection() {
  return (
    <section className="section-rule bg-adesa-950 text-adesa-100" aria-labelledby="philosophy-title">
      <div className="site-container section-space grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <MotionReveal className="lg:col-span-7" direction="right">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-adesa-850">
              <Image
                src="/legacy-in-motion-story.webp"
                alt="ADESA HQ legacy in motion brand composition"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </figure>
        </MotionReveal>

        <MotionReveal className="lg:col-span-5 lg:pl-8" direction="left" delay={0.08}>
          <h2 id="philosophy-title" className="max-w-[10ch] text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-adesa-50 sm:text-5xl lg:text-6xl">
            Staying power over noise.
          </h2>
          <p className="mt-6 max-w-[44ch] text-base leading-7 text-adesa-300">
            We build institutions, not short-lived portfolios. Governance creates accountability, while patient capital protects the ability to make sound decisions.
          </p>
          <Link href="/governance" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors duration-200 hover:text-gold-200">
            Our governance framework
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
}
