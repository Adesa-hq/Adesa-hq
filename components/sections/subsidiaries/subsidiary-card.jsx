"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SubsidiaryCard({
  name,
  description,
  services,
  href,
  featured = false,
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`relative h-full p-6 sm:p-8 lg:p-12 border transition-colors ${
        featured
          ? "bg-[var(--color-adesa-800)] border-[var(--color-gold-500)]"
          : "bg-[var(--color-adesa-800)] border-[var(--color-adesa-700)] hover:border-[var(--color-adesa-500)]"
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-gold-500)]" />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <header>
          {featured && (
            <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[var(--color-gold-400)] mb-4 sm:mb-6">
              Featured Subsidiary
            </p>
          )}

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--color-adesa-50)] mb-4 sm:mb-6 leading-snug">
            {name}
          </h3>
        </header>

        <p className="text-sm sm:text-base text-[var(--color-adesa-300)] leading-relaxed mb-6 sm:mb-10">
          {description}
        </p>

        {services && (
          <ul className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10">
            {services.map((service) => (
              <li
                key={service}
                className="px-3 sm:px-4 py-1 text-[10px] sm:text-xs tracking-wide border border-[var(--color-adesa-600)] text-[var(--color-adesa-300)] whitespace-nowrap"
              >
                {service}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <Link
            href={href}
            className={`inline-flex items-center text-xs sm:text-sm tracking-wide transition-colors ${
              featured
                ? "text-[var(--color-gold-400)] hover:text-[var(--color-gold-300)]"
                : "text-[var(--color-adesa-200)] hover:text-[var(--color-adesa-50)]"
            }`}
            aria-label={`Learn more about ${name}`}
          >
            Learn More
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
