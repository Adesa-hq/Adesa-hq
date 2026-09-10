import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-adesa-950 pb-14 pt-24 text-adesa-50 sm:pb-20"
      aria-labelledby="home-hero-title"
    >
      <div className="absolute inset-0 -z-30" data-hero-background="true" aria-hidden="true">
        <Image
          src="/adesa-brochure-showcase.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[66%_68%] opacity-25 saturate-[0.72]"
        />
      </div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,8,20,0.98)_0%,rgba(2,8,20,0.86)_48%,rgba(2,8,20,0.56)_100%)]" aria-hidden="true" />
      <div className="adesa-grid-texture absolute inset-0 -z-10 opacity-35" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-[linear-gradient(to_top,rgba(20,32,57,0.72),transparent)]"
        aria-hidden="true"
      />

      <div className="site-container grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
        <MotionReveal className="relative z-10 max-w-2xl">
          <Link
            href={siteConfig.award.url}
            target="_blank"
            rel="noreferrer"
            className="mb-5 inline-flex max-w-full items-center gap-2 border-b border-gold-400/45 pb-2 text-xs font-semibold text-gold-300 transition-colors duration-200 hover:text-gold-200 sm:text-sm"
          >
            <span>{siteConfig.award.title}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>

          <h1
            id="home-hero-title"
            className="max-w-[12ch] text-[clamp(2.55rem,6vw,5.9rem)] font-medium leading-[0.98] tracking-[-0.045em]"
          >
            Building African businesses that outlast cycles.
          </h1>

          <p className="mt-6 max-w-[54ch] text-base leading-7 text-adesa-200 sm:text-lg">
            ADESA HQ builds, governs, and strengthens companies designed for lasting relevance across Africa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold-400 px-6 text-sm font-semibold text-adesa-950 transition-[transform,background-color] duration-150 hover:bg-gold-300 active:translate-y-px"
            >
              Our approach
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/structure"
              className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-6 text-sm font-semibold text-adesa-100 transition-[border-color,color,transform] duration-150 hover:border-gold-400 hover:text-gold-300 active:translate-y-px"
            >
              Group structure
            </Link>
          </div>
        </MotionReveal>

        <MotionReveal
          className="relative mx-auto w-full max-w-[760px] lg:translate-x-[5%]"
          delay={0.08}
        >
          <div className="absolute inset-x-[12%] bottom-[4%] h-[22%] rounded-[50%] bg-gold-400/15 blur-3xl" aria-hidden="true" />
          <picture className="relative block">
            <source
              type="image/avif"
              srcSet="/legacy-in-motion-hero-960.avif 960w, /legacy-in-motion-hero-1600.avif 1600w"
              sizes="(max-width: 1023px) 92vw, 56vw"
            />
            <Image
              src="/legacy-in-motion-hero-1600.webp"
              width={1600}
              height={1337}
              priority
              sizes="(max-width: 1023px) 92vw, 56vw"
              alt="ADESA HQ house architecture bringing Adesa Media, Energy, Solutions, and Distribution under one group"
              className="relative h-auto w-full object-contain drop-shadow-[0_28px_42px_rgba(1,5,14,0.55)]"
            />
          </picture>
        </MotionReveal>
      </div>
    </section>
  );
}
