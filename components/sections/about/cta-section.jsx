"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GridLine from "../../ui/gridLine";

export default function CTASsection() {
  return (
    <section
      className="relative py-32 overflow-hidden bg-[var(--color-adesa-900)] text-[var(--color-adesa-100)]"
      aria-labelledby="cta-section-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[var(--color-adesa-700)] opacity-30 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px] bg-[var(--color-gold-500)] opacity-10 blur-[160px] rounded-full" />
      </div>

      <GridLine />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-adesa-600)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-adesa-600)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-adesa-300)] mb-8">
            Learn More
          </p>

          <motion.h2
            id="cta-section-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1]"
          >
            Explore Our Structure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-lg text-[var(--color-adesa-300)] max-w-2xl mx-auto"
          >
            Discover how ADESA HQ organizes and governs its portfolio of
            operating companies.
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button
            href="/structure"
            size="lg"
            className="rounded-full px-10 bg-[var(--color-gold-500)] text-[var(--color-neutral-950)] hover:bg-[var(--color-gold-400)]"
            aria-label="View Group Structure"
          >
            View Group Structure
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-3 h-5 w-5"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Button>

          <Button
            href="/governance"
            size="lg"
            variant="outline"
            className="rounded-full px-10 border-[var(--color-adesa-500)] text-[var(--color-adesa-200)] hover:bg-[var(--color-adesa-800)]"
            aria-label="View Governance Framework"
          >
            Governance Framework
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
