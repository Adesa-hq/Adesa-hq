"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import GridLine from "../../ui/gridLine";

const pillars = [
  {
    icon: Shield,
    title: "Governance Framework",
    description:
      "Our governance model establishes clear accountability structures, performance oversight mechanisms, and ethical standards that ensure responsible stewardship across all operations.",
    points: [
      "Board-level oversight",
      "Performance metrics",
      "Ethical standards",
      "Risk management",
    ],
  },
  {
    icon: Scale,
    title: "Capital Discipline",
    description:
      "We allocate capital with strategic intent, not speculative hope. Every investment decision is evaluated against long-term value creation potential and alignment with group strategy.",
    points: [
      "Strategic allocation",
      "ROI accountability",
      "Portfolio balance",
      "Sustainable growth",
    ],
  },
  {
    icon: Clock,
    title: "Long-Term Strategy",
    description:
      "Our planning horizons extend beyond quarterly cycles. We build businesses designed to compound value over decades, with patience for the inevitable challenges of market building.",
    points: [
      "Decade-long planning",
      "Patient capital",
      "Market building",
      "Compounding value",
    ],
  },
];

export default function PhilosophyPillarsSection() {
  return (
    <Section className="relative bg-adesa-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-adesa-700 rounded-full blur-[160px] opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold-500 rounded-full blur-[140px] opacity-10" />
      </div>

      <GridLine />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <header className="text-center max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-adesa-300 mb-4 sm:mb-6">
            Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif text-adesa-50 leading-snug sm:leading-tight">
            Three Pillars of Institutional Excellence
          </h2>
        </header>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-gold-400 via-gold-300 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="ml-4 sm:ml-6 bg-adesa-800/80 backdrop-blur-xl border border-adesa-700 p-6 sm:p-8 lg:p-10 h-full">
                <header className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-adesa-700 border border-adesa-600 shrink-0">
                    <pillar.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gold-400" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-adesa-50 leading-snug">
                    {pillar.title}
                  </h3>
                </header>

                <p className="text-sm sm:text-base text-adesa-200 leading-relaxed mb-6 sm:mb-8">
                  {pillar.description}
                </p>

                <ul className="space-y-3 sm:space-y-4">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center text-xs sm:text-sm text-adesa-300"
                    >
                      <div className="w-4 sm:w-6 h-[1px] bg-gold-400 mr-3 sm:mr-4 opacity-70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
