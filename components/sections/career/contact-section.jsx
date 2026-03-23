"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import GridLine from "@/components/ui/gridLine";

export default function ContactSection() {
  return (
    <section className="relative py-16 sm:py-28 bg-adesa-900 overflow-hidden">
      {/* Background glow shapes */}
      <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] rounded-full bg-adesa-700 blur-[180px] opacity-40" />
      <div className="absolute bottom-[-25%] right-[-15%] w-[500px] h-[500px] rounded-full bg-[#FFA205] blur-[140px] opacity-25" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
      <GridLine />

      <h2 className="relative z-10 text-center text-3xl sm:text-4xl font-semibold text-adesa-50 mb-12 sm:mb-16">
        Contact Us
      </h2>

      <div className="relative z-10 mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        {[
          { Icon: MapPin, label: "2 Isheri Road, Ojudu-Berger, Lagos" },
          { Icon: Phone, label: "+234 701 2345 154" },
          { Icon: Mail, label: "info@adesahq.com" },
          {
            Icon: Globe,
            label: (
              <a
                href="https://www.adesahq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFA205] hover:text-[#FFC240] transition-colors"
              >
                www.adesahq.com
              </a>
            ),
          },
        ].map(({ Icon, label }, idx) => (
          <motion.div
            key={idx}
            className="relative text-center p-6 sm:p-8 rounded-2xl bg-adesa-800/30 backdrop-blur-md border border-adesa-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-adesa-700/50 border border-[#FFA205] shadow-[0_0_15px_rgba(184,196,217,0.25)] mb-3 sm:mb-4">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFA205]" />
            </div>
            <p className="text-adesa-200 text-xs sm:text-sm break-words">
              {label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Social Media Section */}
      <h2 className="relative z-10 text-center text-3xl sm:text-4xl font-semibold text-adesa-50 mt-16 mb-8">
        Follow Us
      </h2>

      <div className="relative z-10 mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8">
        <motion.a
          href="https://www.facebook.com/profile.php?id=61551745417738&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 sm:p-8 rounded-2xl bg-adesa-700/30 backdrop-blur-md border border-adesa-700 hover:bg-adesa-600 transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-adesa-700/50 border border-[#FFA205] shadow-[0_0_15px_rgba(184,196,217,0.25)] mb-3 sm:mb-4">
            <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFA205]" />
          </div>
          <p className="text-adesa-200 text-xs sm:text-sm">Facebook</p>
        </motion.a>

        <motion.a
          href="https://x.com/adesagroup"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 sm:p-8 rounded-2xl bg-adesa-700/30 backdrop-blur-md border border-adesa-700 hover:bg-adesa-600 transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-adesa-700/50 border border-[#FFA205] shadow-[0_0_15px_rgba(184,196,217,0.25)] mb-3 sm:mb-4">
            <Twitter className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFA205]" />
          </div>
          <p className="text-adesa-200 text-xs sm:text-sm">X</p>
        </motion.a>

        <motion.a
          href="https://www.instagram.com/adesahq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 sm:p-8 rounded-2xl bg-adesa-700/30 backdrop-blur-md border border-adesa-700 hover:bg-adesa-600 transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-adesa-700/50 border border-[#FFA205] shadow-[0_0_15px_rgba(184,196,217,0.25)] mb-3 sm:mb-4">
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFA205]" />
          </div>
          <p className="text-adesa-200 text-xs sm:text-sm">Instagram</p>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/company/adesa-hq/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 sm:p-8 rounded-2xl bg-adesa-700/30 backdrop-blur-md border border-adesa-700 hover:bg-adesa-600 transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-adesa-700/50 border border-[#FFA205] shadow-[0_0_15px_rgba(184,196,217,0.25)] mb-3 sm:mb-4">
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFA205]" />
          </div>
          <p className="text-adesa-200 text-xs sm:text-sm">LinkedIn</p>
        </motion.a>
      </div>
    </section>
  );
}
