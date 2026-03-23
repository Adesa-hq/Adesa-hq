"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Section } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";

export default function FinalStatementSection() {
  return (
    <Section
      dark
      className="relative overflow-hidden py-32 bg-adesa-900"
      aria-label="Final statement on governance"
    >
      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-adesa-700 rounded-full blur-[160px] opacity-40" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] bg-gold-400 rounded-full blur-[140px] opacity-20" />
      </div>

      <GridLine />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Emblem, decorative */}
          <div className="relative mx-auto w-24 h-24 mb-8" aria-hidden="true">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-0 border-2 border-gold-400 rounded-[12px] shadow-[0_0_60px_rgba(184,196,217,0.2)]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-adesa-800/50 rounded-[12px] backdrop-blur-md">
              <Shield className="w-12 h-12 text-gold-400" />
            </div>
          </div>

          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-adesa-50 tracking-tight">
            Governance as Competitive Advantage
          </h2>

          <p className="mt-8 text-lg text-adesa-200 max-w-2xl mx-auto leading-relaxed">
            In markets where governance is often an afterthought, ADESA
            HQ&apos;s commitment to institutional standards differentiates our
            businesses and builds the trust necessary for long-term success.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
