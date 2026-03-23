"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";

const plannedSubsidiaries = [
  { sector: "Technology", status: "In Development" },
  { sector: "Real Estate", status: "Planned" },
  { sector: "Financial Services", status: "Planned" },
];

export default function PipelineSection() {
  return (
    <Section
      className="relative bg-adesa-900 overflow-hidden py-24"
      aria-labelledby="pipeline-section-title"
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-adesa-500 rounded-full blur-[200px] opacity-30"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-gold-400 rounded-full blur-[180px] opacity-20"
          aria-hidden="true"
        />
      </div>

      <GridLine />

      <SectionHeader
        eyebrow="Growth Pipeline"
        title="Future Portfolio Development"
        description="Strategic expansion into sectors with structural tailwinds and alignment with ADESA HQ's long-term vision."
        centered
        dark
        className="relative z-10 text-adesa-50"
      />

      <div
        className="mt-16 grid sm:grid-cols-3 gap-8 relative z-10"
        role="list"
      >
        {plannedSubsidiaries.map((item, index) => (
          <motion.article
            key={item.sector}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative bg-adesa-800 border border-adesa-700 p-8 rounded-3xl text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            role="listitem"
          >
            <div className="w-16 h-16 bg-adesa-700/40 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-adesa-600">
              <Building2 className="w-8 h-8 text-gold-400" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-adesa-50 mb-2 text-xl">
              {item.sector}
            </h3>
            <p className="text-sm text-adesa-300">{item.status}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 text-center relative z-10 max-w-2xl mx-auto">
        <p className="text-adesa-300 text-base leading-relaxed">
          Our expansion follows deliberate sector analysis and opportunity
          assessment. We prioritize depth over breadth and sustainable growth
          over rapid scaling.
        </p>
      </div>
    </Section>
  );
}
