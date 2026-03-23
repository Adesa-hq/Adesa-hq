"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <Section
      className="relative overflow-hidden bg-adesa-900 py-32"
      aria-labelledby="cta-section-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-adesa-700 to-adesa-500 opacity-40 blur-[150px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-gold-400 to-gold-300 opacity-20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <header>
          <p className="text-sm text-adesa-400 uppercase tracking-wide mb-2">
            Learn More
          </p>
          <h2
            id="cta-section-title"
            className="text-4xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent mb-4"
          >
            Explore Our Group Structure
          </h2>
          <p className="text-adesa-300 text-base max-w-xl mx-auto">
            Understand how ADESA HQ organizes and governs its portfolio of
            operating companies.
          </p>
        </header>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 inline-block"
        >
          <Button
            as="a"
            href="/structure"
            size="lg"
            className="bg-gold-500 hover:bg-gold-400 text-adesa-900 rounded-full px-8 py-4 shadow-lg shadow-gold-500/30 flex items-center justify-center"
          >
            View Group Structure
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
