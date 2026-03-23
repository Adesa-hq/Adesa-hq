"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-adesa-900 text-adesa-50"
      aria-label="Hero section showcasing ADESA HQ Group Structure"
    >
      {/* Decorative gradients */}
      <div role="presentation" className="absolute inset-0">
        <div className="absolute top-[-30%] left-[-15%] w-[900px] h-[900px] bg-adesa-700 rounded-full blur-[200px] opacity-60 animate-blob1" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[700px] bg-gold-400 rounded-full blur-[180px] opacity-25 animate-blob2" />
      </div>

      {/* Subtle grid overlay */}
      <div
        role="presentation"
        className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold-400 mb-8">
            Group Structure
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-adesa-50 via-adesa-200 to-adesa-400">
            Master Brand & Operating Architecture
          </h1>

          <p className="mt-10 text-xl text-adesa-300 leading-relaxed max-w-3xl">
            Understanding how ADESA HQ organizes, governs, and creates value
            across its portfolio of sector-defining businesses.
          </p>

          {/* Gold accent line */}
          <div
            className="mt-16 h-[2px] w-40 bg-gradient-to-r from-gold-500 to-transparent"
            role="presentation"
          />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -40px) scale(1.08);
          }
        }
        @keyframes blob2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 25px) scale(1.05);
          }
        }
        .animate-blob1 {
          animation: blob1 14s infinite ease-in-out;
        }
        .animate-blob2 {
          animation: blob2 18s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
