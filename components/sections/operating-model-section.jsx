"use client";

import { motion } from "framer-motion";
import { Target, Layers, Shield, TrendingUp } from "lucide-react";

const modelSteps = [
  {
    icon: Target,
    title: "Conceive",
    description: "Identify sector opportunities with structural tailwinds",
  },
  {
    icon: Layers,
    title: "Launch",
    description: "Deploy capital with operational expertise",
  },
  {
    icon: Shield,
    title: "Govern",
    description: "Establish institutional standards and oversight",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Grow with discipline and long-term focus",
  },
];

export default function OperatingModelSection() {
  return (
    <section
      className="relative py-32 bg-[var(--color-adesa-900)] text-[var(--color-adesa-100)] overflow-hidden"
      aria-labelledby="operating-model-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[var(--color-adesa-700)] opacity-30 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-gold-500)] opacity-10 blur-[160px] rounded-full" />
      </div>

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <header className="max-w-3xl mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-adesa-300)] mb-6">
            Operating Model
          </p>
          <h2
            id="operating-model-heading"
            className="text-4xl sm:text-5xl font-medium leading-tight"
          >
            Builder-Operator Philosophy
          </h2>
          <p className="mt-8 text-lg text-[var(--color-adesa-300)] leading-relaxed">
            We don't just invest. We conceive, build, and operate businesses
            with the discipline and patience required for generational success.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-[var(--color-gold-400)] to-transparent opacity-40 hidden lg:block" />

          <ul className="space-y-20">
            {modelSteps.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "lg:[&>div:first-child]:order-2"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-[var(--color-adesa-50)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-adesa-300)] leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>

                <div className="relative flex justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-[var(--color-adesa-800)] border border-[var(--color-adesa-600)] backdrop-blur-xl shadow-[0_0_60px_rgba(184,134,11,0.15)]" />
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-[-10px] rounded-2xl border border-[var(--color-gold-400)] opacity-30"
                    />
                    <item.icon
                      className="relative w-10 h-10 text-[var(--color-gold-400)]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
