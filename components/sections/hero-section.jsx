"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../ui/logo";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F19] text-white"
      aria-label="Hero Section - ADESA HQ"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#151E47] rounded-full blur-[160px] opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#FFA205] rounded-full blur-[140px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-8">
              Multi-Sector Holding Group • Africa
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05]">
              <span className="block">Building</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Sector-Defining
              </span>
              <span className="block">African Businesses</span>
            </h1>

            <p className="mt-10 text-lg text-white/70 max-w-xl leading-relaxed">
              ADESA HQ is a builder–operator group focused on conceiving,
              launching, governing, and scaling businesses designed for
              generational impact.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Button
                href="/about"
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8"
                role="link"
                aria-label="Discover Our Approach"
              >
                Discover Our Approach
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                href="/structure"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                role="link"
                aria-label="Group Structure"
              >
                Group Structure
              </Button>
            </div>
          </motion.div>

          {/* Right Flow / Tree */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2 }}
            className="relative flex items-center justify-center w-full"
          >
            <div className="relative w-[90%] max-w-[420px] sm:w-[420px] aspect-square">
              <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_120px_rgba(255,162,5,0.15)]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-[-20px] sm:inset-[-30px] rounded-[50px] sm:rounded-[60px] border border-white/10"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute inset-[-8px] sm:inset-[-12px] rounded-[40px] sm:rounded-[50px] border border-white/5"
              />

              <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 text-center">
                <div className="flex flex-col items-center">
                  <Logo aria-label="Adesa HQ Logo" />
                  <p className="text-sm sm:text-xl font-medium tracking-wide">
                    Adesa HQ
                  </p>
                </div>

                <div className="w-px h-8 sm:h-10 bg-white/20 my-2 sm:my-4" />

                <div className="relative w-full flex justify-center mb-4 sm:mb-6">
                  <div className="absolute top-1/2 w-[70%] h-px bg-white/20" />
                </div>

                <div className="flex justify-between w-full max-w-[240px] sm:max-w-[280px]">
                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-2xl bg-white/10 flex items-center justify-center mb-2 sm:mb-3">
                      <Image
                        src="/logo/Adesa-energy-logo.jpg"
                        alt="Adesa Energy Logo"
                        width={40}
                        height={40}
                        loading="lazy"
                        className="w-20 h-12 sm:w-16 sm:h-16 absolute"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-white/60 font-medium text-center">
                      Adesa Energy
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-2xl bg-white/10 flex items-center justify-center mb-2 sm:mb-3">
                      <Image
                        src="/logo/Adesa-media-logo-white.png"
                        alt="Adesa Media Logo"
                        width={80}
                        height={40}
                        loading="lazy"
                        className="w-12 h-8 sm:w-20 sm:h-10 absolute"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-white/60 font-medium text-center">
                      Adesa Media
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
