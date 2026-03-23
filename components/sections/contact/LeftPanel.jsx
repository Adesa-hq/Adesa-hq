"use client";

import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LeftPanel() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden text-white px-4 sm:px-6 lg:px-16 py-20 sm:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 max-w-5xl mx-auto space-y-10 sm:space-y-14 lg:space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-3"
        >
          <p className="text-xs sm:text-sm tracking-widest uppercase text-adesa-400">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-adesa-50"
          >
            We're Here to Help
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-xl"
        >
          ADESA HQ maintains open communication with stakeholders, partners, and
          those interested in learning more about our approach to building
          institutional businesses across Africa.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Email */}
          <ContactInfoCard
            Icon={Mail}
            label="Email"
            value="info@adesahq.com"
            href="mailto:info@adesahq.com"
          />

          {/* Location */}
          <ContactInfoCard
            Icon={MapPin}
            label="Location"
            value="2 Isheri Road, Ojudu-Berger, Lagos"
            extraInfo="Operating across Africa"
          />
        </motion.div>

        {/* Inquiry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative p-6 sm:p-8 lg:p-10 bg-adesa-800 rounded-2xl sm:rounded-3xl border border-adesa-700 shadow-[0_0_60px_rgba(184,196,217,0.15)]"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-adesa-400 to-gold-400 rounded-t-full" />
          <h3 className="text-adesa-50 text-base sm:text-lg font-medium mb-4 sm:mb-6">
            Inquiry Types
          </h3>

          <ul className="space-y-3 sm:space-y-4">
            {[
              "Partnership & Investment Inquiries",
              "Media & Press Relations",
              "Subsidiary Services",
              "General Information",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start text-adesa-300 text-sm sm:text-base"
              >
                <span className="w-2 h-2 bg-gold-400 mt-2 mr-3 rounded-full flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="space-y-6 sm:space-y-8"
        >
          <h3 className="text-adesa-50 text-xl sm:text-2xl font-medium text-center">
            Follow Us
          </h3>

          <div className="flex justify-center gap-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61551745417738&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-adesa-300 hover:text-gold-400 transition-colors"
            >
              <Facebook className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400" />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/adesagroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-adesa-300 hover:text-gold-400 transition-colors"
            >
              <Twitter className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/adesahq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-adesa-300 hover:text-gold-400 transition-colors"
            >
              <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/adesa-hq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-adesa-300 hover:text-gold-400 transition-colors"
            >
              <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Info Card Component
function ContactInfoCard({ Icon, label, value, href, extraInfo }) {
  return (
    <div className="group flex items-start gap-4 sm:gap-6">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-adesa-800 border border-adesa-600 flex items-center justify-center rounded-lg transition-all group-hover:border-gold-400">
        <Icon className="text-gold-400 w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div>
        <h3 className="text-adesa-50 text-sm sm:text-base font-medium mb-1">
          {label}
        </h3>
        <address className="text-adesa-300 not-italic text-sm sm:text-base break-all">
          {href ? (
            <a
              href={href}
              className="hover:text-gold-400 transition-colors duration-300"
            >
              {value}
            </a>
          ) : (
            value
          )}
          {extraInfo && (
            <p className="text-adesa-400 text-xs sm:text-sm mt-1">
              {extraInfo}
            </p>
          )}
        </address>
      </div>
    </div>
  );
}
