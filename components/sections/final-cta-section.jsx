"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <Section
      dark
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 bg-adesa-900 text-adesa-50"
      aria-labelledby="cta-section-title"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 sm:-top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-adesa-700 rounded-full blur-[160px] sm:blur-[180px] opacity-40" />
        <div className="absolute bottom-[-150px] sm:bottom-[-200px] right-[-120px] sm:right-[-200px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gold-500 rounded-full blur-[140px] sm:blur-[160px] opacity-10" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="cta-section-title"
            className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15]"
          >
            <span className="block">Building Africa&apos;s Future,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
              One Institution at a Time
            </span>
          </h2>

          <p className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg text-adesa-200 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            ADESA HQ is committed to building businesses that create lasting
            value for shareholders, employees, partners, and the communities we
            serve.
          </p>

          <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full sm:w-auto"
            >
              <Button
                href="/contact"
                size="lg"
                className="w-full sm:w-auto relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full bg-gold-400 text-adesa-900 font-medium hover:bg-gold-300 shadow-[0_0_40px_rgba(212,160,23,0.35)]"
                aria-label="Contact ADESA HQ"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
                <span className="absolute inset-0 rounded-full border border-gold-300 opacity-40" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
