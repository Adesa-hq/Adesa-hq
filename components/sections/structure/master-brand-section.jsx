"use client";

import { motion } from "framer-motion";
import { Building2, Layers, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";
import Image from "next/image";

const responsibilities = [
  "Strategic planning and resource allocation",
  "Governance standards and oversight",
  "Capital deployment and monitoring",
  "Cross-subsidiary synergies",
  "Risk management and compliance",
];

export default function MasterBrandSection() {
  return (
    <Section
      className="relative overflow-hidden bg-adesa-900 text-white"
      aria-labelledby="master-brand-title"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-25%] left-[-15%] w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-adesa-800 rounded-full blur-[140px] sm:blur-[160px] opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gold-500 rounded-full blur-[120px] sm:blur-[140px] opacity-25" />
      </div>

      <GridLine />

      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center relative z-10">
        {/* Left */}
        <div>
          <SectionHeader
            eyebrow="Master Brand"
            title="ADESA HQ: The Holding Entity"
            dark
          />

          <h2 id="master-brand-title" className="sr-only">
            ADESA HQ: The Holding Entity
          </h2>

          <p className="mt-6 text-base sm:text-lg text-adesa-200 leading-relaxed">
            ADESA HQ serves as the master holding company, the institutional
            anchor that provides governance, strategic direction, capital
            allocation, and performance oversight across all operating
            subsidiaries.
          </p>

          <p className="mt-4 text-base sm:text-lg text-adesa-200 leading-relaxed">
            The "HQ" designation distinguishes the holding company from its
            operating entities, establishing separation between governance
            functions and day-to-day operations.
          </p>

          <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base text-adesa-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <figure className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12 rounded-[24px] sm:rounded-[32px] bg-adesa-800 shadow-[0_0_60px_rgba(184,196,217,0.08)] border border-adesa-700">
          {/* Rotating halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -inset-4 sm:-inset-6 border border-adesa-700 rounded-[30px] sm:rounded-[40px] opacity-20"
          />

          <div className="text-center relative z-10 flex flex-col items-center w-full">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-[10px] sm:rounded-[12px] mb-4 sm:mb-6 bg-adesa-100/90 backdrop-blur-sm">
              <Image
                src="/logo/Adesa-HQ.-logo.png"
                alt="adesa-hq-logo"
                width={70}
                height={70}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400"
              />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-medium mb-1">
              ADESA HQ
            </h3>

            <p className="text-xs sm:text-sm text-adesa-300 mb-6 sm:mb-8">
              Holding & Operating Group
            </p>

            <div className="w-px h-8 sm:h-12 bg-adesa-600 mx-auto mb-6 sm:mb-8" />

            <figcaption className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[320px]">
              {[
                {
                  name: "Adesa Media",
                  image: "/logo/Adesa-media-logo-white.png",
                },
                {
                  name: "Adesa Energy",
                  image: "/logo/Adesa-energy-logo.jpg",
                },
              ].map((sub, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-[10px] sm:rounded-xl border border-gold-400/40 bg-adesa-700 shadow-[0_0_20px_rgba(212,160,23,0.12)] flex flex-col items-center transition-all duration-300"
                >
                  <div className="relative w-8 h-8 rounded-full">
                    <Image
                      src={sub.image}
                      alt={sub.name}
                      width={50}
                      height={50}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400 mb-2"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium text-center">
                    {sub.name}
                  </p>
                  <span className="inline-block mt-2 px-2 sm:px-3 py-1 text-[10px] sm:text-xs bg-gold-500 text-adesa-900 rounded-[6px] font-medium">
                    Active
                  </span>
                </div>
              ))}
            </figcaption>
          </div>
        </figure>
      </div>
    </Section>
  );
}
