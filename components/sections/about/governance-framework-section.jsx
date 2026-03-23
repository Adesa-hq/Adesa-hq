"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShieldCheck, TrendingUp } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function GovernanceFrameworkSection() {
  const governancePoints = [
    "Board-level oversight for all operating subsidiaries",
    "Regular performance reviews and strategic planning cycles",
    "Financial controls and reporting standards",
    "Risk management frameworks across all entities",
    "Compliance programs aligned with international best practices",
  ];

  const capitalPoints = [
    "Thorough due diligence and market analysis",
    "Clear investment thesis and value creation plan",
    "Defined milestones and performance metrics",
    "Regular portfolio reviews and capital reallocation",
    "Exit strategies aligned with value realization",
  ];

  return (
    <section
      className="py-24 bg-adesa-50 dark:bg-adesa-900"
      aria-labelledby="governance-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2
              id="governance-heading"
              className="text-3xl font-serif font-medium text-adesa-900 dark:text-white mb-6"
            >
              Governance Framework
            </h2>
            <p className="text-lg text-neutral-600 dark:text-adesa-300 mb-6 leading-relaxed">
              Our governance framework is the backbone of our operations. It
              ensures that every subsidiary operates with accountability,
              transparency, and alignment to group standards.
            </p>
            <ul className="space-y-4 list-none">
              {governancePoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-adesa-900 dark:text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-adesa-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-adesa-800 rounded-none p-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            aria-labelledby="capital-heading"
          >
            <h3
              id="capital-heading"
              className="text-2xl font-serif font-medium text-adesa-900 dark:text-white mb-6"
            >
              Capital Allocation Discipline
            </h3>
            <p className="text-neutral-600 dark:text-adesa-300 mb-6">
              Our capital allocation process is rigorous and data-driven,
              ensuring that every investment decision supports our long-term
              strategic objectives.
            </p>
            <ul className="space-y-4 list-none">
              {capitalPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-adesa-900 dark:text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-adesa-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
