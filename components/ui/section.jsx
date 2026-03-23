"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({ children, className, dark = false, id, title }) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={cn(
        "py-24 md:py-32",
        dark ? "bg-adesa-900 text-white" : "bg-neutral-50 text-adesa-900",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
  motionProps = {},
  id,
}) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        motionProps.className,
      )}
      {...motionProps}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold tracking-widest uppercase mb-4",
            dark ? "text-gold-400" : "text-adesa-600",
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          id={titleId}
          className={cn(
            "font-serif text-4xl lg:text-5xl font-medium tracking-tight",
            dark ? "text-white" : "text-adesa-900",
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            dark ? "text-adesa-200" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
