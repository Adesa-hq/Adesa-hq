"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";

const autonomyPoints = [
  {
    title: "Subsidiary Autonomy",
    description:
      "Operating companies maintain control over day-to-day decisions, hiring, product development, and market strategy.",
  },
  {
    title: "HQ Oversight",
    description:
      "ADESA HQ provides strategic guidance, performance monitoring, capital allocation decisions, and governance standards.",
  },
  {
    title: "Shared Resources",
    description:
      "Where beneficial, subsidiaries leverage shared services including finance, legal, HR, and technology infrastructure.",
  },
];

const valueMetrics = [
  { metric: "Capital", description: "Efficient allocation across portfolio" },
  { metric: "Talent", description: "Cross-subsidiary development paths" },
  { metric: "Knowledge", description: "Shared learnings and best practices" },
  { metric: "Networks", description: "Combined stakeholder relationships" },
];

export default function OperatingModelSection() {
  return (
    <Section
      className="relative bg-adesa-900 text-adesa-100 overflow-hidden"
      aria-label="ADESA Operating Model and Value Creation"
    >
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#E5B83222_1px,transparent_1px),linear-gradient(to_bottom,#E5B83222_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <GridLine />

      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-gold-400 opacity-10 blur-[120px] sm:blur-[140px] rounded-full" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-14 sm:gap-16 lg:gap-28">
        {/* LEFT COLUMN */}
        <div>
          <SectionHeader
            eyebrow="Operating Model"
            title="Autonomy with Accountability"
            className="text-adesa-100"
            dark
          />

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-adesa-300 leading-relaxed max-w-xl">
            Each subsidiary operates with significant autonomy led by dedicated
            management teams empowered to make market-specific decisions. This
            autonomy is balanced by clear accountability to ADESA HQ standards.
          </p>

          <dl className="mt-8 sm:mt-12 space-y-8 sm:space-y-10">
            {autonomyPoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                <div className="absolute left-0 top-1 w-[2px] h-full bg-gold-400" />
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gold-400 rounded-full shadow-[0_0_15px_#D4A017]" />

                <dt className="text-base sm:text-lg font-medium text-adesa-100 mb-1 sm:mb-2">
                  {item.title}
                </dt>
                <dd className="text-xs sm:text-sm text-adesa-300 leading-relaxed">
                  {item.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <SectionHeader
            eyebrow="Value Creation"
            title="Group-Level Advantages"
            className="text-adesa-100"
            dark
          />

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-adesa-300 leading-relaxed max-w-xl">
            The holding structure enables value creation mechanisms that
            standalone businesses cannot achieve independently.
          </p>

          <dl className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {valueMetrics.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-5 sm:p-8 bg-adesa-800 border border-adesa-700"
              >
                <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-gold-400" />

                <dt className="text-xl sm:text-2xl font-serif text-gold-300 mb-2 sm:mb-3 tracking-wide">
                  {item.metric}
                </dt>
                <dd className="text-xs sm:text-sm text-adesa-300 leading-relaxed">
                  {item.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
