"use client";

import GridLine from "@/components/ui/gridLine";
import { motion } from "framer-motion";

const systems = [
  {
    title: "Documentation Standards",
    description:
      "Comprehensive documentation of processes, decisions, and institutional knowledge ensures continuity and enables knowledge transfer.",
  },
  {
    title: "Succession Planning",
    description:
      "Proactive development of leadership pipelines and succession plans at both HQ and subsidiary levels.",
  },
  {
    title: "Process Codification",
    description:
      "Key processes are documented, standardized, and continuously improved based on operational learnings.",
  },
  {
    title: "Knowledge Management",
    description:
      "Systematic capture and sharing of institutional knowledge, best practices, and lessons learned.",
  },
  {
    title: "Culture Preservation",
    description:
      "Active stewardship of organizational values, ensuring cultural continuity through growth and change.",
  },
  {
    title: "Technology Infrastructure",
    description:
      "Investment in systems and tools that enable efficient operations and institutional memory.",
  },
];

export default function InstitutionalSystemsSection() {
  return (
    <section
      className="relative bg-[var(--color-adesa-900)] py-32 overflow-hidden"
      aria-labelledby="institutional-systems-heading"
    >
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[var(--color-adesa-700)] rounded-full blur-[180px] opacity-40" />
      <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-[var(--color-gold-500)] rounded-full blur-[150px] opacity-15" />
      <GridLine />

      <header className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-300)] mb-4">
          Institutional Systems
        </p>
        <h2
          id="institutional-systems-heading"
          className="text-4xl sm:text-5xl font-serif font-medium text-[var(--color-adesa-50)] leading-tight"
        >
          Built for Permanence
        </h2>
        <p className="mt-4 text-[var(--color-adesa-200)] text-lg leading-relaxed">
          We build systems—processes, standards, and practices—that ensure
          institutional continuity beyond any individual.
        </p>
      </header>

      <div className="relative z-10 mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {systems.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 40, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative"
            aria-label={item.title}
          >
            <div className="relative bg-[var(--color-adesa-800)] p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-gold-300)] via-[var(--color-gold-400)] to-[var(--color-gold-500)] opacity-10 rounded-3xl blur-[100px] pointer-events-none group-hover:opacity-20 transition-all duration-500" />

              <h3 className="text-lg font-medium text-[var(--color-adesa-50)] mb-3 z-10 relative">
                {item.title}
              </h3>
              <p className="text-[var(--color-adesa-200)] text-sm leading-relaxed z-10 relative">
                {item.description}
              </p>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 + idx * 0.2 }}
                className="absolute top-4 right-4 w-2 h-2 bg-[var(--color-gold-400)] rounded-full opacity-70"
              />
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 + idx * 0.1 }}
                className="absolute bottom-6 left-6 w-3 h-3 bg-[var(--color-adesa-400)] rounded-full opacity-60"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
