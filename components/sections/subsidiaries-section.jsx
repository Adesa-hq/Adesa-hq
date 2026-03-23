"use client";

import { motion } from "framer-motion";
import SubsidiaryCard from "./subsidiaries/subsidiary-card";

export default function SubsidiariesSection() {
  return (
    <section
      className="relative py-20 sm:py-24 lg:py-32 bg-[var(--color-adesa-900)] overflow-hidden"
      aria-labelledby="subsidiaries-section-title"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 sm:-top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-adesa-700 rounded-full blur-[140px] sm:blur-[180px] opacity-40" />
        <div className="absolute bottom-[-150px] sm:bottom-[-200px] right-[-150px] sm:right-[-200px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gold-500 rounded-full blur-[120px] sm:blur-[160px] opacity-10" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-[var(--color-adesa-300)] mb-4 sm:mb-6">
            Group Companies
          </p>

          <h2
            id="subsidiaries-section-title"
            className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[var(--color-adesa-50)] leading-tight"
          >
            Operating Subsidiaries
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[var(--color-adesa-300)] leading-relaxed">
            Each subsidiary operates with autonomy while adhering to group-level
            governance standards and strategic alignment.
          </p>
        </header>

        {/* Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <SubsidiaryCard
              name="Adesa Media"
              description="A full-spectrum media and creative services company delivering strategic communications, brand development, and content production for leading organizations across Africa."
              services={[
                "Strategic Communications",
                "Brand Development",
                "Content Production",
                "Digital Media",
              ]}
              href="/subsidiaries/media"
              featured
            />
          </motion.article>

          {/* Secondary */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <SubsidiaryCard
              name="Portfolio Expansion"
              description="Additional operating companies in development. Our expansion follows deliberate sector analysis and opportunity assessment."
              href="/structure"
            />
          </motion.article>
        </div>
      </div>
    </section>
  );
}
