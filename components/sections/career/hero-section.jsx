"use client";
import GridLine from "@/components/ui/gridLine";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-32 sm:pt-32 pb-20 sm:pb-24 lg:pt-40 lg:pb-32 bg-adesa-900 text-adesa-50"
      aria-labelledby="hero-heading"
    >
      {/* Floating background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-gold-300/20 blur-[80px] sm:blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -right-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-adesa-500/20 blur-[120px] sm:blur-[150px] animate-[float2_25s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/3 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] rounded-full bg-adesa-400/10 blur-[70px] sm:blur-[100px] animate-[float3_30s_ease-in-out_infinite]" />
      </div>

      <GridLine show />

      <motion.div
        className="relative z-10 text-center max-w-[90%] sm:max-w-3xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
          Join Our Team
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-adesa-200 leading-relaxed">
          At Adesa Energy, we're shaping the future of sustainable fuel
          solutions. Explore our open positions and grow with us.
        </p>
        <div className="mt-6 sm:mt-10">
          <a
            href="#open-positions"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gold-500 hover:bg-gold-400 text-adesa-900 rounded-full text-base sm:text-lg font-medium shadow-[0_0_20px_rgba(184,134,11,0.35)] sm:shadow-[0_0_40px_rgba(184,134,11,0.35)] transition-all"
          >
            Explore Careers
          </a>
        </div>
      </motion.div>

      {/* Animated underline glow */}
      <motion.div
        className="absolute bottom-2 sm:bottom-0 left-1/2 w-32 sm:w-40 h-1 bg-gold-500/40 rounded-full -translate-x-1/2 animate-pulse"
        animate={{ scaleX: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </section>
  );
}
