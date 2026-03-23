"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const lastUpdated = new Date();
  const formattedDate = lastUpdated.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const datetime = lastUpdated.toISOString();

  return (
    <section
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-adesa-900 text-adesa-100"
      aria-labelledby="privacy-policy-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-adesa-700 rounded-full blur-[120px] sm:blur-[160px] opacity-40" />
        <div className="absolute bottom-[-150px] right-[-120px] sm:bottom-[-200px] sm:right-[-150px] w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] bg-gold-500 rounded-full blur-[140px] sm:blur-[200px] opacity-10" />
      </div>

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#B8C4D9_1px,transparent_1px),linear-gradient(to_bottom,#B8C4D9_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <article className="relative backdrop-blur-xl bg-adesa-800/40 border border-adesa-600/40 rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-[0_0_120px_rgba(184,134,11,0.08)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60" />

            <p
              className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-adesa-300 mb-6 sm:mb-8"
              aria-label="Section type"
            >
              Legal
            </p>

            <h1
              id="privacy-policy-heading"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-adesa-50 leading-[1.1]"
            >
              Privacy Policy
            </h1>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-adesa-300">
              Last updated <time dateTime={datetime}>{formattedDate}</time>
            </p>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
