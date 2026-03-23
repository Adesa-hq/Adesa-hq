"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import Link from "next/link";
import Image from "next/image";

const subsidiaries = [
  {
    name: "Adesa Media",
    sector: "Media & Creative Services",
    description:
      "A full-spectrum media and creative services company delivering strategic communications, brand development, and content production for leading organizations across Africa.",
    status: "active",
    href: "https://www.adesamedia.com/",
    image: "/logo/Adesa-media-logo-white.png",
    services: [
      "Strategic Communications",
      "Brand Development",
      "Content Production",
      "Digital Media",
    ],
  },
  {
    name: "Adesa Energy",
    sector: "Renewable Energy Solutions",
    description:
      "Focused on renewable power solutions and critical infrastructure development to support sustainable growth across African markets.",
    status: "active",
    href: "https://adesaenergy.com/",
    image: "/logo/Adesa-energy-logo.jpg",
    services: [
      "Solar Infrastructure",
      "Grid Modernization",
      "Energy Consulting",
      "Sustainable Solutions",
    ],
  },
];

export default function ActiveSubsidiariesSection() {
  return (
    <Section className="bg-adesa-900 text-adesa-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-adesa-700 rounded-full blur-[140px] opacity-30" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold-500 rounded-full blur-[160px] opacity-10" />
      </div>

      <SectionHeader
        eyebrow="Active Operations"
        title="Current Portfolio"
        dark
        description="Fully operational subsidiaries delivering value across their respective sectors."
        className="relative z-10 text-adesa-100"
      />

      <div className="relative z-10 mt-16 space-y-12">
        {subsidiaries.map((subsidiary, index) => (
          <motion.section
            key={subsidiary.name}
            aria-labelledby={`subsidiary-${index}-title`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative border border-adesa-700 bg-adesa-800/60 backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 p-6 sm:p-8 lg:p-12">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-adesa-700 border border-adesa-600 flex items-center justify-center shrink-0">
                    <Image
                      src={subsidiary.image}
                      width={40}
                      height={40}
                      alt={`${subsidiary.name} Logo`}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      id={`subsidiary-${index}-title`}
                      className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-adesa-50"
                    >
                      {subsidiary.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-adesa-300 mt-1">
                      {subsidiary.sector}
                    </p>
                  </div>

                  <span className="self-start sm:ml-auto px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-gold-400 text-gold-400 whitespace-nowrap">
                    Active
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-adesa-200 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
                  {subsidiary.description}
                </p>

                {/* Services */}
                <ul
                  role="list"
                  className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10"
                  aria-label={`${subsidiary.name} Services`}
                >
                  {subsidiary.services.map((service) => (
                    <li
                      key={service}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs tracking-wide uppercase border border-adesa-600 text-adesa-300 bg-adesa-700/40"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  href={subsidiary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors"
                >
                  View Full Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Aside */}
              <aside className="bg-adesa-800 border-t lg:border-t-0 lg:border-l border-adesa-700 p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-500" />

                <h4 className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-gold-400 mb-6 sm:mb-8">
                  Quick Facts
                </h4>

                <ul
                  role="list"
                  className="space-y-4 sm:space-y-5"
                  aria-label={`${subsidiary.name} Quick Facts`}
                >
                  {[
                    "Part of ADESA HQ Group",
                    "Serves clients across Africa",
                    "Governance-first approach",
                    "Long-term partnerships focus",
                  ].map((fact) => (
                    <li key={fact} className="flex items-start">
                      <span className="w-2 h-2 bg-gold-400 mt-2 mr-3 sm:mr-4 shrink-0" />
                      <span className="text-adesa-300 text-xs sm:text-sm leading-relaxed">
                        {fact}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </motion.section>
        ))}
      </div>
    </Section>
  );
}
