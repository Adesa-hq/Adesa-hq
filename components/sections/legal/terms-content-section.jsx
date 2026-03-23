"use client";

import { motion } from "framer-motion";

export default function TermsContentSection() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-adesa-900 text-adesa-100 overflow-hidden"
      aria-labelledby="terms-heading"
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] sm:top-[-200px] left-[-100px] sm:left-[-150px] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-adesa-700 rounded-full blur-[120px] sm:blur-[160px] opacity-40" />
        <div className="absolute bottom-[-120px] sm:bottom-[-200px] right-[-100px] sm:right-[-150px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold-500 rounded-full blur-[100px] sm:blur-[140px] opacity-10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10 sm:space-y-14 lg:space-y-16"
        >
          <article className="relative pl-5 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gold-300 tracking-wide">
              Agreement to Terms
            </h2>
            <p className="text-sm sm:text-base text-adesa-200 leading-relaxed">
              By accessing or using the ADESA HQ website, you agree to be bound
              by these Terms of Service. If you disagree with any part of these
              terms, you may not access the website.
            </p>
          </article>

          <article className="relative pl-5 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gold-300 tracking-wide">
              Intellectual Property
            </h2>
            <p className="text-sm sm:text-base text-adesa-200 leading-relaxed">
              The website and its original content, features, and functionality
              are owned by ADESA HQ and are protected by international
              copyright, trademark, and other intellectual property laws.
            </p>
          </article>

          <article className="relative pl-5 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gold-300 tracking-wide">
              Use License
            </h2>
            <p className="text-sm sm:text-base text-adesa-200 leading-relaxed mb-4 sm:mb-6">
              Permission is granted to temporarily view the materials on ADESA
              HQ&apos;s website for personal, non-commercial transitory viewing
              only. This is the grant of a license, not a transfer of title, and
              under this license you may not:
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-adesa-300 list-disc list-inside">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>
                Attempt to reverse engineer any software contained on the
                website
              </li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>
          </article>

          <article className="relative pl-5 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gold-300 tracking-wide">
              Disclaimer
            </h2>
            <p className="text-sm sm:text-base text-adesa-200 leading-relaxed">
              The materials on ADESA HQ&apos;s website are provided on an
              &apos;as is&apos; basis. ADESA HQ makes no warranties, expressed
              or implied, and hereby disclaims all other warranties including
              implied warranties of merchantability, fitness for a particular
              purpose, or non-infringement.
            </p>
          </article>

          <article className="relative pl-5 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gold-300 tracking-wide">
              Limitations
            </h2>
            <p className="text-sm sm:text-base text-adesa-200 leading-relaxed">
              In no event shall ADESA HQ or its suppliers be liable for any
              damages arising out of the use or inability to use the materials
              on the website.
            </p>
          </article>

          <article className="relative pl-5 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gold-300 tracking-wide">
              Governing Law
            </h2>
            <p className="text-sm sm:text-base text-adesa-200 leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws of Nigeria.
            </p>
          </article>

          <article className="relative pl-5 sm:pl-8 border-l border-gold-400/40">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gold-300 tracking-wide">
              Contact Information
            </h2>
            <address className="text-sm sm:text-base text-adesa-200 leading-relaxed not-italic break-words">
              Questions about the Terms of Service should be sent to
              <a
                href="mailto:contact@adesahq.com"
                className="text-gold-400 hover:underline"
              >
                contact@adesahq.com
              </a>
              .
            </address>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
