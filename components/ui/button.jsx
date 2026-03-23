"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  external = false,
  type = "button",
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-none border-adesa-400 ";

  const variants = {
    primary: "bg-adesa-900 text-white hover:bg-adesa-800 focus:ring-adesa-900",
    secondary:
      "bg-white text-adesa-900 hover:bg-neutral-50 focus:ring-adesa-900 dark:bg-adesa-800 dark:text-white",
    outline:
      "border-2 border-adesa-900 text-adesa-900 hover:bg-adesa-900 hover:text-white focus:ring-adesa-900 dark:border-neutral-300 dark:text-neutral-300 dark:hover:bg-neutral-800",
    ghost:
      "text-adesa-900 hover:bg-neutral-50 focus:ring-adesa-900 dark:text-neutral-300 dark:hover:bg-neutral-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  // External link with semantic HTML
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {children}
      </a>
    );
  }

  // Internal link with semantic HTML
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {children}
      </Link>
    );
  }

  // Native button element
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </button>
  );
}
