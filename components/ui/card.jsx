"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({ children, className, hover = false, motionProps = {} }) {
  const baseStyles = "bg-white border border-neutral-200 p-6 rounded-none";
  const hoverStyles = hover
    ? "transition-shadow duration-300 hover:shadow-md hover:border-adesa-600 dark:hover:border-neutral-300"
    : "";

  return (
    <motion.article
      role="region"
      aria-label="Card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(baseStyles, hoverStyles, className)}
      {...motionProps}
    >
      {children}
    </motion.article>
  );
}

export function StatCard({ value, label, description, motionProps = {} }) {
  return (
    <motion.article
      role="region"
      aria-label={`Statistic card: ${label}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center p-8"
      {...motionProps}
    >
      <header>
        <p className="font-serif text-5xl lg:text-6xl font-medium text-adesa-900 tracking-tight dark:text-white">
          {value}
        </p>
        <p className="mt-4 text-sm font-semibold tracking-widest uppercase text-adesa-600 dark:text-adesa-300">
          {label}
        </p>
      </header>
      {description && (
        <p className="mt-2 text-sm text-neutral-600 dark:text-adesa-300">
          {description}
        </p>
      )}
    </motion.article>
  );
}
