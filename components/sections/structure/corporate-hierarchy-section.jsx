"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";
import Image from "next/image";

export default function CorporateHierarchySection() {
  return (
    <Section
      className="relative bg-adesa-900 text-adesa-100 overflow-hidden"
      aria-labelledby="corporate-hierarchy-title"
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-adesa-700 rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gold-400 rounded-full blur-[160px] opacity-10" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          eyebrow="Corporate Hierarchy"
          title="Structured for Governance & Growth"
          description="Our organizational design ensures clear accountability while enabling operational autonomy at the subsidiary level."
          centered
          dark
        />

        <div className="mt-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative border border-adesa-700 bg-adesa-800/60 backdrop-blur-xl rounded-xl overflow-hidden"
          >
            {/* Holding Core */}
            <div className="relative px-5 py-10 sm:p-12 text-center border-b border-adesa-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-10 sm:h-12 bg-gradient-to-b from-gold-400 to-transparent" />

              <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-adesa-300 mb-3 sm:mb-4">
                Holding Company
              </p>

              <h2
                id="corporate-hierarchy-title"
                className="text-xl sm:text-3xl font-serif font-medium text-adesa-50"
              >
                ADESA HQ
              </h2>

              <p className="text-adesa-300 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
                Strategic Direction • Governance • Capital Allocation
              </p>
            </div>

            {/* Subsidiary Layer */}
            <div className="px-5 py-10 sm:p-12">
              <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-adesa-400 mb-8 sm:mb-10 text-center">
                Operating Subsidiaries
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                {/* Card */}
                <article className="group relative border border-adesa-700 bg-adesa-800 p-5 sm:p-8 transition-all duration-500 hover:border-gold-400 rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-400/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-lg" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-adesa-700 flex items-center justify-center border border-adesa-600 group-hover:border-gold-400 transition">
                        <Image
                          src="/logo/Adesa-media-logo-white.png"
                          alt="Adesa Media"
                          fill
                          className="w-4 h-4 sm:w-5 sm:h-5 text-adesa-200 group-hover:text-gold-300 transition"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-adesa-50 text-sm sm:text-base">
                          Adesa Media
                        </h3>
                        <p className="text-[11px] sm:text-xs text-adesa-400">
                          Media & Creative Services
                        </p>
                      </div>
                    </div>

                    <a
                      href="/subsidiaries/media"
                      className="text-xs sm:text-sm text-gold-300 hover:text-gold-400 flex items-center"
                    >
                      View details
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </article>

                {/* Card */}
                <article className="group relative border border-adesa-700 bg-adesa-800 p-5 sm:p-8 transition-all duration-500 hover:border-gold-400 rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-400/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-lg" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-adesa-700 flex items-center justify-center border border-adesa-600 group-hover:border-gold-400 transition">
                        <Image
                          src="/logo/Adesa-energy-logo.jpg"
                          alt="Adesa Energy"
                          fill
                          className="w-4 h-4 sm:w-5 sm:h-5 text-adesa-200 group-hover:text-gold-300 transition"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-adesa-50 text-sm sm:text-base">
                          Adesa Energy
                        </h3>
                        <p className="text-[11px] sm:text-xs text-adesa-400">
                          Renewable Energy Solutions
                        </p>
                      </div>
                    </div>

                    <a
                      href="/subsidiaries/energy"
                      className="text-xs sm:text-sm text-gold-300 hover:text-gold-400 flex items-center"
                    >
                      View details
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </article>

                {/* Development */}
                <article className="relative border border-adesa-700 bg-adesa-800/40 p-5 sm:p-8 opacity-60 rounded-lg">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-adesa-700 flex items-center justify-center border border-adesa-600">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-adesa-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-adesa-400 text-sm sm:text-base">
                        In Development
                      </h3>
                      <p className="text-[11px] sm:text-xs text-adesa-500">
                        Sector TBD
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-adesa-500">
                    Coming soon
                  </p>
                </article>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
