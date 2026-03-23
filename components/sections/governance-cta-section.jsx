"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GovernanceCTASection() {
  return (
    <Section
      as="section"
      aria-labelledby="governance-heading"
      className="relative overflow-hidden bg-[var(--color-adesa-900)] text-[var(--color-adesa-100)]"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-[-40%] left-[-20%] w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-[var(--color-adesa-700)] rounded-full blur-[120px] sm:blur-[140px] opacity-40" />
        <div className="absolute bottom-[-40%] right-[-20%] w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-[var(--color-gold-400)] rounded-full blur-[120px] sm:blur-[160px] opacity-10" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center 
                   py-20 sm:py-24 lg:py-28 
                   px-5 sm:px-6"
      >
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-[var(--color-gold-400)] mb-6 sm:mb-8">
          Governance
        </p>

        {/* Title */}
        <h2
          id="governance-heading"
          className="text-2xl sm:text-4xl lg:text-5xl font-medium leading-[1.15]"
        >
          <span className="block">Institutional</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-adesa-100)] to-[var(--color-adesa-300)]">
            Standards
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-[var(--color-adesa-300)] leading-relaxed max-w-xl mx-auto">
          Governance is not a constraint. It is our competitive advantage. We
          operate with standards designed for institutional longevity.
        </p>

        {/* CTA */}
        <div className="mt-10 sm:mt-12">
          <Button
            as="a"
            href="/governance"
            size="lg"
            className="group relative rounded-full 
                       px-6 sm:px-10 
                       py-3 sm:py-4
                       text-sm sm:text-base
                       bg-[var(--color-gold-400)] 
                       text-[var(--color-neutral-950)] 
                       hover:bg-[var(--color-gold-300)] 
                       transition-all duration-300"
            aria-label="Explore Our Governance Framework"
          >
            <span className="relative z-10 flex items-center justify-center">
              Our Governance Framework
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
