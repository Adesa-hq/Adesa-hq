"use client";
import GridLine from "@/components/ui/gridLine";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-adesa-900 text-adesa-50"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-225 bg-adesa-700 rounded-full blur-[180px] opacity-40" />
        <div className="absolute -bottom-50 -right-50 w-150 h-150 bg-gold-500 rounded-full blur-[160px] opacity-10" />
      </div>

      <GridLine />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 py-32 lg:py-40">
        <header className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-6">
              Governance
            </p>

            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]"
            >
              <span className="block">Institutional Standards</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-adesa-50 to-gold-400">
                for Generational Success
              </span>
            </h1>

            <p className="mt-8 text-xl text-adesa-200 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Governance is not a constraint—it&apos;s our competitive
              advantage. We operate with standards designed for institutional
              longevity and stakeholder trust.
            </p>
          </motion.div>
        </header>
      </div>
    </section>
  );
}
