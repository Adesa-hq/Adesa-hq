"use client";
import { motion } from "framer-motion";

export default function HeroSectionTerms() {
  const lastUpdated = new Date();

  return (
    <section
      className="relative overflow-hidden pt-28 pb-12 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-24 bg-adesa-900 text-adesa-100"
      aria-labelledby="terms-heading"
      role="region"
    >
      {/* Decorative backgrounds */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[700px] lg:h-[700px] bg-adesa-700 rounded-full blur-[120px] sm:blur-[150px] lg:blur-[160px] opacity-40" />
        <div className="absolute bottom-[-25%] right-[-20%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gold-500 rounded-full blur-[140px] sm:blur-[160px] lg:blur-[180px] opacity-10" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,var(--color-adesa-500)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-adesa-500)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:60px_60px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Glass slab decorative */}
          <div
            className="absolute inset-0 bg-adesa-800/40 backdrop-blur-2xl border border-adesa-700 rounded-2xl sm:rounded-3xl shadow-[0_0_120px_rgba(184,134,11,0.08)]"
            aria-hidden="true"
          />

          <div className="relative p-6 sm:p-8 lg:p-14">
            <header>
              <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold-400 mb-6 sm:mb-8">
                Legal
              </p>

              <h1
                id="terms-heading"
                className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium leading-[1.15]"
              >
                <span className="block text-adesa-50">Terms of Service</span>
                <span className="block h-1 w-14 sm:w-20 bg-gold-400 mt-4 sm:mt-6 rounded-full" />
              </h1>

              <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-adesa-300">
                Last updated:{" "}
                <time dateTime={lastUpdated.toISOString()}>
                  {lastUpdated.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </p>
            </header>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
