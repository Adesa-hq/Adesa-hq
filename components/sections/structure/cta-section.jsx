"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GridLine from "@/components/ui/gridLine";

export default function CTASection() {
  return (
    <Section
      className="relative overflow-hidden bg-adesa-900 text-adesa-100 py-20 sm:py-28 lg:py-32"
      aria-labelledby="cta-section-title"
    >
      {/* Atmospheric depth layers */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-adesa-700 rounded-full blur-[140px] sm:blur-[160px] opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-gold-500 rounded-full blur-[120px] sm:blur-[140px] opacity-10" />
      </div>

      <GridLine />

      {/* Gold pulse line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-gold-400 to-transparent origin-left"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-gold-400 mb-6 sm:mb-8"
        >
          Explore Further
        </motion.p>

        <motion.h2
          id="cta-section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl lg:text-5xl font-medium leading-snug sm:leading-tight"
        >
          Discover Our Governance Framework
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 text-sm sm:text-lg text-adesa-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
        >
          Learn how ADESA HQ establishes and maintains institutional standards
          across all operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 flex justify-center"
        >
          <Button
            href="/governance"
            size="lg"
            className="relative group bg-gold-400 text-adesa-900 hover:bg-gold-300 px-6 sm:px-10 py-4 sm:py-6 rounded-full font-medium transition-all duration-300 text-sm sm:text-base"
            aria-label="View Governance Framework"
          >
            <span className="relative z-10 flex items-center">
              View Governance Framework
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            <div className="absolute inset-0 rounded-full blur-xl bg-gold-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
