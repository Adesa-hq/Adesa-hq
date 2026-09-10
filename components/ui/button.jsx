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
  disabled = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full border border-transparent font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-adesa-950 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-gold-400 text-adesa-950 hover:bg-gold-300 focus:ring-gold-400 shadow-[0_16px_40px_rgba(198,150,45,0.24)]",
    secondary:
      "bg-white text-adesa-950 hover:bg-adesa-100 focus:ring-adesa-200",
    outline:
      "border border-white/18 text-adesa-100 hover:border-gold-400 hover:bg-white/6 hover:text-gold-300 focus:ring-gold-400",
    ghost:
      "text-adesa-100 hover:bg-white/6 focus:ring-gold-400",
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
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </button>
  );
}
