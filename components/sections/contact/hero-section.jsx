"use client";

import GridLine from "@/components/ui/gridLine";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 bg-adesa-900 text-white overflow-hidden"
      aria-labelledby="hero-contact-heading"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-adesa-700 rounded-full blur-[140px] sm:blur-[160px] opacity-40" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gold-400 rounded-full blur-[150px] sm:blur-[180px] opacity-10" />
      </div>

      <GridLine />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2
              id="hero-contact-heading"
              className="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-adesa-300 mb-6 sm:mb-8"
            >
              Contact
            </h2>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1]">
              <span className="block">Let&apos;s Start</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-white to-adesa-300">
                a Conversation
              </span>
            </h1>

            <p className="mt-8 sm:mt-10 text-base sm:text-lg lg:text-xl text-adesa-200 leading-relaxed max-w-2xl">
              Whether you&apos;re exploring partnership opportunities, media
              inquiries, or general questions about ADESA HQ, we welcome your
              outreach.
            </p>
          </motion.div>

    
        </div>
      </div>
    </section>
  );
}
