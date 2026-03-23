"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import GridLine from "@/components/ui/gridLine";

const criteria = [
  {
    title: "Investment Criteria",
    description:
      "Clear standards for capital deployment including market opportunity, competitive positioning, return potential, and strategic fit.",
  },
  {
    title: "Approval Process",
    description:
      "Multi-stage review process for significant capital decisions, ensuring thorough due diligence and alignment with group strategy.",
  },
  {
    title: "Performance Monitoring",
    description:
      "Ongoing tracking of capital deployment outcomes against projections, with clear accountability for investment decisions.",
  },
];

const metrics = [
  { metric: "ROI Focus", value: "Every Investment Evaluated" },
  { metric: "Risk-Adjusted", value: "Returns Considered" },
  { metric: "Long-Term", value: "Value Creation Lens" },
  { metric: "Strategic Fit", value: "Alignment Required" },
];

export default function CapitalDisciplineSection() {
  return (
    <Section
      className="relative overflow-hidden bg-adesa-900 text-white py-24 sm:py-28 lg:py-32"
      aria-labelledby="capital-discipline-title"
    >
      <GridLine show />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <header>
            <p className="text-gold-400 uppercase tracking-widest text-xs sm:text-sm mb-2">
              Capital Discipline
            </p>
            <h2
              id="capital-discipline-title"
              className="text-3xl sm:text-4xl font-semibold text-white leading-tight"
            >
              Strategic Allocation, Not Speculation
            </h2>
          </header>

          <p className="mt-4 sm:mt-6 text-adesa-200 text-base sm:text-lg leading-relaxed max-w-xl">
            Capital is a sacred resource at ADESA HQ. Every allocation decision
            is evaluated against rigorous criteria, ensuring resources flow to
            opportunities that align with our long-term value creation mandate.
          </p>

          <ul className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
            {criteria.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-7 sm:pl-8"
              >
                <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gold-400 animate-pulse sm:top-1" />
                <h3 className="font-medium text-adesa-100 mb-1 text-sm sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-adesa-200 text-xs sm:text-sm leading-snug">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <dl className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {metrics.map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="bg-adesa-800 hover:scale-[1.03] transition-transform rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col">
                <dt className="text-gold-400 text-[9px] sm:text-xs tracking-widest uppercase mb-1 sm:mb-2">
                  {item.metric}
                </dt>
                <dd className="text-adesa-50 text-sm sm:text-lg font-semibold">
                  {item.value}
                </dd>
              </Card>
            </motion.div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
