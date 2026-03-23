"use client";

import { motion } from "framer-motion";
import { Section } from "../../ui/section";
import GridLine from "../../ui/gridLine";

export default function NarrativeSection() {
  return (
    <Section
      className="relative py-32 bg-[var(--color-adesa-900)] text-[var(--color-adesa-100)] overflow-hidden"
      aria-labelledby="narrative-heading"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(45,58,92,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.08),transparent_60%)]" />
      </div>

      {/* Grid overlay */}
      <GridLine />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-gold-400)] mb-6">
              Our Story
            </p>

            <h2
              id="narrative-heading"
              className="text-4xl sm:text-5xl font-medium leading-tight"
            >
              Beyond the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-adesa-100)] to-[var(--color-adesa-300)]">
                Investment Thesis
              </span>
            </h2>

            <div className="mt-10 w-16 h-[2px] bg-[var(--color-gold-500)]" />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 text-[var(--color-adesa-300)]"
          >
            <article>
              <p className="text-lg leading-relaxed">
                ADESA HQ was founded on a simple observation: Africa&apos;s most
                pressing challenges require businesses built for decades, not
                exits. While the continent has seen waves of investment, few
                enterprises have been constructed with the institutional rigor
                necessary for generational success.
              </p>

              <p className="text-lg leading-relaxed">
                We are not venture capitalists seeking rapid returns. We are not
                private equity managers optimizing for financial engineering. We
                are builders and operators who conceive, launch, govern, and
                scale businesses with the patience and discipline that lasting
                institutions demand.
              </p>

              <p className="text-lg leading-relaxed">
                Our approach combines active operational involvement with
                holding company governance, ensuring each subsidiary benefits
                from group-level standards while maintaining the autonomy to
                compete in its specific market.
              </p>
            </article>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
