"use client";

import { motion } from "framer-motion";
import { Shield, FileCheck, Users, Scale, CheckCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";

const standards = [
  {
    icon: Shield,
    title: "Ethical Conduct",
    description:
      "All operations adhere to strict ethical guidelines. We maintain zero tolerance for corruption, fraud, or conduct that compromises stakeholder trust.",
    standards: [
      "Anti-corruption policies",
      "Conflict of interest protocols",
      "Whistleblower protections",
      "Ethical decision frameworks",
    ],
  },
  {
    icon: FileCheck,
    title: "Transparency & Reporting",
    description:
      "We maintain clear, honest communication with all stakeholders. Financial and operational reporting follows established standards.",
    standards: [
      "Regular financial reporting",
      "Performance dashboards",
      "Stakeholder communications",
      "Audit compliance",
    ],
  },
  {
    icon: Users,
    title: "Board Oversight",
    description:
      "Each subsidiary benefits from board-level oversight, ensuring strategic alignment and accountability to ADESA HQ standards.",
    standards: [
      "Independent oversight",
      "Regular board reviews",
      "Strategic alignment checks",
      "Performance accountability",
    ],
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "Full compliance with all applicable laws, regulations, and industry standards across every jurisdiction of operation.",
    standards: [
      "Legal compliance",
      "Industry regulations",
      "Tax obligations",
      "Labor standards",
    ],
  },
];

export default function CoreStandardsSection() {
  return (
    <Section
      className="relative py-32 bg-adesa-900 text-white overflow-hidden"
      aria-labelledby="core-standards-title"
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-adesa-500 opacity-20 blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gold-400 opacity-25 blur-[140px]"
        aria-hidden="true"
      />

      <GridLine />

      <SectionHeader
        eyebrow="Corporate Standards"
        title="The Foundation of Our Operations"
        dark
        description="Every subsidiary operates under ADESA HQ governance standards, ensuring consistency, accountability, and institutional excellence."
      />

      <div className="mt-16 grid lg:grid-cols-2 gap-12">
        {standards.map((standard, index) => (
          <motion.article
            key={standard.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="relative bg-adesa-800 border border-adesa-700 p-10 rounded-3xl backdrop-blur-sm shadow-lg"
          >
            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-8 left-10 w-14 h-14 flex items-center justify-center bg-adesa-600 rounded-full shadow-md"
              aria-hidden="true"
            >
              <standard.icon className="w-6 h-6 text-adesa-50" />
            </motion.div>

            <h3 className="mt-6 font-serif text-2xl font-semibold text-adesa-50 mb-4">
              {standard.title}
            </h3>
            <p className="text-adesa-200 leading-relaxed mb-6">
              {standard.description}
            </p>

            <ul role="list" className="space-y-3">
              {standard.standards.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-adesa-100 text-sm"
                >
                  <CheckCircle
                    className="w-4 h-4 text-gold-400 mr-3 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="absolute -inset-1 rounded-3xl border border-gold-400/20 animate-pulse opacity-50 pointer-events-none"
              aria-hidden="true"
            />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
