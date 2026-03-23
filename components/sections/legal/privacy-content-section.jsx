"use client";

import { motion } from "framer-motion";

export default function PrivacyContentSection() {
  return (
    <section
      className="relative pt-16 sm:pt-24 pb-20 sm:pb-32 bg-adesa-900 text-adesa-100 overflow-hidden"
      role="main"
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-20%] w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-adesa-700 rounded-full blur-[120px] sm:blur-[160px] opacity-30" />
        <div className="absolute bottom-[-25%] right-[-20%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gold-500 rounded-full blur-[100px] sm:blur-[140px] opacity-10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12 sm:space-y-20"
        >
          <section className="relative pl-4 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-xl sm:text-3xl text-gold-400 mb-4 sm:mb-6">
              Introduction
            </h2>
            <p className="text-adesa-200 leading-relaxed text-sm sm:text-lg">
              ADESA HQ ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or engage with our services.
            </p>
          </section>

          <section className="relative pl-4 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-xl sm:text-3xl text-gold-400 mb-4 sm:mb-6">
              Information We Collect
            </h2>
            <p className="text-adesa-200 leading-relaxed text-sm sm:text-lg mb-4 sm:mb-6">
              We may collect information about you in various ways, including:
            </p>
            <ul className="space-y-2 sm:space-y-3 text-adesa-300 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full" />
                Personal data you voluntarily provide (name, email,
                organization)
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full" />
                Automatically collected data (IP address, browser type, device
                information)
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full" />
                Cookies and tracking technologies
              </li>
            </ul>
          </section>

          <section className="relative pl-4 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-xl sm:text-3xl text-gold-400 mb-4 sm:mb-6">
              Use of Your Information
            </h2>
            <p className="text-adesa-200 leading-relaxed text-sm sm:text-lg mb-4 sm:mb-6">
              We may use information collected about you to:
            </p>
            <ul className="space-y-2 sm:space-y-3 text-adesa-300 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full" />
                Respond to your inquiries and communications
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full" />
                Improve our website and services
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full" />
                Send administrative information and updates
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full" />
                Comply with legal obligations
              </li>
            </ul>
          </section>

          <section className="relative pl-4 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-xl sm:text-3xl text-gold-400 mb-4 sm:mb-6">
              Disclosure of Your Information
            </h2>
            <p className="text-adesa-200 leading-relaxed text-sm sm:text-lg">
              We do not sell or rent your personal information to third parties.
              We may share your information with service providers who assist in
              our operations, or when required by law.
            </p>
          </section>

          <section className="relative pl-4 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-xl sm:text-3xl text-gold-400 mb-4 sm:mb-6">
              Security
            </h2>
            <p className="text-adesa-200 leading-relaxed text-sm sm:text-lg">
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no
              electronic transmission or storage method is 100% secure.
            </p>
          </section>

          <section className="relative pl-4 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-xl sm:text-3xl text-gold-400 mb-4 sm:mb-6">
              Contact Us
            </h2>
            <p className="text-adesa-200 leading-relaxed text-sm sm:text-lg">
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href="mailto:contact@adesahq.com"
                className="text-gold-400 underline"
              >
                contact@adesahq.com
              </a>
              .
            </p>
          </section>
        </motion.article>
      </div>
    </section>
  );
}
