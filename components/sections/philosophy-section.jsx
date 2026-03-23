"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Users, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Shield,
    title: "Governance First",
    description: "Institutional standards before growth",
  },
  {
    icon: BarChart3,
    title: "Capital Discipline",
    description: "Strategic allocation, not speculation",
  },
  {
    icon: Users,
    title: "Stakeholder Value",
    description: "Long-term value for all parties",
  },
  {
    icon: Building2,
    title: "System Building",
    description: "Generational businesses, not exits",
  },
];

export default function PhilosophySection() {
  return (
    <Section
      className="relative overflow-hidden bg-[var(--color-adesa-900)] text-[var(--color-adesa-100)]"
      aria-labelledby="philosophy-section-title"
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[var(--color-adesa-700)] rounded-full blur-[160px] opacity-40" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[var(--color-gold-500)] rounded-full blur-[180px] opacity-10" />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-gold-400)] mb-6">
            Philosophy
          </p>

          <h2
            id="philosophy-section-title"
            className="text-4xl sm:text-5xl font-medium leading-tight"
          >
            Beyond Short-Term Gains
          </h2>

          <p className="mt-8 text-lg text-[var(--color-adesa-200)] leading-relaxed max-w-xl">
            ADESA HQ exists beyond quarterly pressures and trend cycles. We are
            designed to build generational systems, businesses that outlast
            their founders and create compounding value over decades.
          </p>

          <p className="mt-6 text-lg text-[var(--color-adesa-200)] leading-relaxed max-w-xl">
            Our philosophy centers on governance that ensures accountability,
            capital discipline that ensures sustainability, and operational
            excellence that ensures competitiveness.
          </p>

          <div className="mt-12">
            <Link href="/about" passHref>
              <Button
                as="a"
                variant="outline"
                className="border-[var(--color-gold-400)] text-[var(--color-gold-400)] hover:bg-[var(--color-gold-400)] hover:text-[var(--color-adesa-900)] rounded-full px-8"
              >
                Learn More About Our Philosophy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right structure grid with glass + ambient rings */}
        <div className="relative w-full flex items-center justify-center">
          {/* Rotating ambient ring */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-[var(--color-adesa-700)] opacity-40"
          />

          {/* Subtle inner ring */}
          <motion.div
            aria-hidden
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-[var(--color-adesa-700)] opacity-30"
          />

          <div
            role="list"
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[320px] sm:max-w-[520px]"
          >
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                role="listitem"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group p-5 sm:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-[var(--color-adesa-700)] hover:border-[var(--color-gold-400)] transition-all duration-300"
              >
                {/* Hover top line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold-400)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-gold-400)] mb-4 sm:mb-6" />

                <h3 className="text-base sm:text-lg font-semibold text-[var(--color-adesa-100)] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--color-adesa-300)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
