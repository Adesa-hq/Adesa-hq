"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Scale,
} from "lucide-react";
import GridLine from "../../ui/gridLine";

const values = [
  {
    icon: Compass,
    title: "Integrity",
    description:
      "We operate with transparency and ethical standards that build trust with all stakeholders.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue operational excellence in every subsidiary, accepting nothing less than institutional standards.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We grow deliberately, prioritizing sustainable expansion over rapid but fragile scaling.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description:
      "We hold ourselves accountable to clear metrics, honest reporting, and responsible stewardship.",
  },
  {
    icon: Clock,
    title: "Patience",
    description:
      "We embrace the long view, understanding that generational value requires generational patience.",
  },
  {
    icon: Scale,
    title: "Discipline",
    description:
      "We maintain financial discipline, capital efficiency, and strategic focus in all operations.",
  },
];

export default function ValuesSection() {
  return (
    <section
      className="relative py-32 bg-adesa-900 text-adesa-100 overflow-hidden"
      aria-labelledby="values-section-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-adesa-900 via-adesa-800 to-neutral-950" />
      <GridLine />
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-adesa-400 mb-6">
            Core Values
          </p>
          <h2
            id="values-section-title"
            className="text-4xl lg:text-5xl font-medium leading-tight"
          >
            What Guides Our Decisions
          </h2>
          <p className="mt-6 text-adesa-300 leading-relaxed">
            Every decision at ADESA HQ is filtered through these foundational
            principles.
          </p>
        </header>

        {/* Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, i) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-adesa-800/60 backdrop-blur-xl border border-adesa-700 transition-all duration-500 group-hover:border-gold-400/40 group-hover:bg-adesa-700/70">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-adesa-700 border border-adesa-600 group-hover:border-gold-400/50 transition-colors duration-500 mb-6">
                  <value.icon className="w-6 h-6 text-gold-400" />
                </div>

                <h3 className="text-xl font-medium text-adesa-100 mb-3">
                  {value.title}
                </h3>
                <p className="text-adesa-300 leading-relaxed">
                  {value.description}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_80px_rgba(184,134,11,0.15)]" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
