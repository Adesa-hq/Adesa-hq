"use client";

import { motion } from "framer-motion";
import { BarChart3, Eye, Users, AlertTriangle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";

const metrics = [
  {
    icon: BarChart3,
    title: "Financial Performance",
    description:
      "Revenue, profitability, cash flow, and capital efficiency metrics",
  },
  {
    icon: Eye,
    title: "Operational Excellence",
    description:
      "Quality, efficiency, customer satisfaction, and process metrics",
  },
  {
    icon: Users,
    title: "Talent Development",
    description:
      "Team growth, retention, capability building, and culture health",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "Risk identification, mitigation, and contingency planning",
  },
];

const reviewTypes = [
  {
    title: "Quarterly Reviews",
    description:
      "Every subsidiary undergoes quarterly performance reviews against established KPIs, with direct accountability to ADESA HQ leadership.",
  },
  {
    title: "Annual Strategic Assessment",
    description:
      "Comprehensive annual reviews evaluate strategic progress, market positioning, competitive dynamics, and long-term value creation trajectory.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "Real-time dashboards and regular check-ins ensure early identification of challenges and opportunities for intervention or support.",
  },
];

export default function PerformanceOversightSection() {
  return (
    <Section dark className="relative overflow-hidden bg-adesa-900">
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-adesa-700 rounded-full blur-[120px] opacity-50 animate-[blob_20s_infinite]"></div>
      <div className="absolute bottom-[-150px] right-[-80px] w-[400px] h-[400px] bg-gold-400 rounded-full blur-[100px] opacity-30 animate-[blob_25s_infinite]"></div>

      <GridLine />
      <SectionHeader
        eyebrow="Performance Oversight"
        title="Accountability Through Measurement"
        description="Clear metrics, regular reviews, and honest assessment drive continuous improvement across all subsidiaries."
        centered
        dark
      />

      {/* Metrics */}
      <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {metrics.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-adesa-800 border border-adesa-700 p-8 rounded-[20px] shadow-[0_0_40px_rgba(184,196,217,0.1)] hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 bg-gradient-to-br from-adesa-600 to-adesa-500">
              <item.icon className="w-8 h-8 text-gold-400" aria-hidden="true" />
            </div>
            <h3 className="font-medium text-white mb-3">{item.title}</h3>
            <p className="text-adesa-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ul>

      {/* Review Types */}
      <ul className="mt-20 grid lg:grid-cols-3 gap-10 relative z-10">
        {reviewTypes.map((item) => (
          <li
            key={item.title}
            className="bg-adesa-800 border border-adesa-700 p-8 rounded-[24px] shadow-[0_0_60px_rgba(184,196,217,0.05)] hover:translate-y-[-5px] transition-transform"
          >
            <h4 className="text-white text-lg font-medium mb-4">
              {item.title}
            </h4>
            <p className="text-adesa-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes blob_20s_infinite {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        @keyframes blob_25s_infinite {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-25px, 20px) scale(0.95);
          }
          66% {
            transform: translate(20px, -30px) scale(1.05);
          }
        }
      `}</style>
    </Section>
  );
}
