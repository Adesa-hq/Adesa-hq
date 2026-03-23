"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/section";

export default function VisionMissionSection() {
  return (
    <Section
      className="relative overflow-hidden bg-[var(--color-adesa-900)] text-[var(--color-adesa-100)] border-t border-[var(--color-adesa-700)]"
      aria-labelledby="vision-mission-heading"
    >
      <h1 id="vision-mission-heading" className="sr-only">
        Our Vision and Mission
      </h1>

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-[var(--color-adesa-700)] rounded-full blur-[140px] opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-[var(--color-gold-500)] rounded-full blur-[160px] opacity-10" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:80px_80px]"
        aria-hidden="true"
      />

      <div className="relative z-10 grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Vision */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[28px] bg-[var(--color-adesa-800)] border border-[var(--color-adesa-700)] backdrop-blur-xl"
        >
          <div
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-gold-400)] to-transparent"
            aria-hidden="true"
          />

          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[var(--color-neutral-400)] mb-4 sm:mb-6">
            Our Vision
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium tracking-tight leading-[1.15]">
            <span className="block text-[var(--color-adesa-50)]">
              To build Africa&apos;s most
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-300)] to-[var(--color-gold-500)]">
              disciplined holding structure
            </span>
          </h2>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--color-adesa-300)]">
            We envision a future where African enterprises are synonymous with
            institutional excellence, where governance is a competitive
            advantage, and where long-term value creation supersedes short-term
            gains.
          </p>
        </motion.article>

        {/* Mission */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[28px] bg-[var(--color-adesa-800)] border border-[var(--color-adesa-700)] backdrop-blur-xl"
        >
          <div
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-gold-400)] to-transparent"
            aria-hidden="true"
          />

          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[var(--color-neutral-400)] mb-4 sm:mb-6">
            Our Mission
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium tracking-tight leading-[1.15]">
            <span className="block text-[var(--color-adesa-50)]">
              Conceive, launch, and scale
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-300)] to-[var(--color-gold-500)]">
              sector-defining businesses
            </span>
          </h2>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--color-adesa-300)]">
            Through rigorous governance, strategic capital allocation, and
            operational discipline, we build businesses that create lasting
            value for stakeholders and communities across the continent.
          </p>
        </motion.article>
      </div>
    </Section>
  );
}
