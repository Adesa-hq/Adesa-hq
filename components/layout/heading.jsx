"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../ui/logo";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Group Structure", href: "/structure" },
  {
    name: "Subsidiaries",
    href: "/subsidiaries",
    children: ACTIVE_SUBSIDIARIES.map(({ name, href }) => ({ name, href })),
  },
  { name: "Governance", href: "/governance" },
  { name: "Careers", href: "/careers" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSubsidiaries, setShowSubsidiaries] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.dataset.menuOpen = String(isMobileMenuOpen);
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      delete document.body.dataset.menuOpen;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6"
      style={{ zIndex: "var(--layer-navigation)" }}
    >
      <div className="adesa-shell-surface mx-auto max-w-[86rem] rounded-2xl">
        <nav className="flex h-16 items-center justify-between gap-4 px-3 sm:px-5" aria-label="Main navigation">
          <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="ADESA HQ home">
            <Logo variant="secondary" width={42} height={42} priority />
            <span className="min-w-0 font-serif text-lg font-medium text-adesa-50 sm:text-xl">
              ADESA <span className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-400">HQ</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-4 lg:flex xl:gap-7">
            {navigation.map((item) => (
              <li key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-11 items-center gap-1 whitespace-nowrap text-xs font-semibold text-adesa-200 transition-colors duration-200 hover:text-adesa-50",
                    (pathname === item.href || pathname.startsWith(`${item.href}/`)) && "text-gold-300",
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                </Link>

                {item.children && (
                  <ul className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-white/10 bg-adesa-900 p-2 opacity-0 shadow-[0_18px_50px_rgba(1,5,14,0.45)] transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <Link
                          href={child.href}
                          target={child.href.startsWith("http") ? "_blank" : undefined}
                          rel={child.href.startsWith("http") ? "noreferrer" : undefined}
                          className="block rounded-lg px-3 py-2.5 text-sm text-adesa-200 transition-colors duration-200 hover:bg-white/5 hover:text-gold-300"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden min-h-10 items-center gap-2 whitespace-nowrap rounded-full bg-gold-400 px-5 text-xs font-semibold text-adesa-950 transition-[background-color,transform] duration-150 hover:bg-gold-300 active:translate-y-px lg:inline-flex"
          >
            Contact HQ
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-adesa-100 transition-colors duration-200 hover:border-gold-400 hover:text-gold-300 lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(-10px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(-10px)" }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="adesa-shell-surface mx-auto mt-2 max-h-[calc(100dvh-6rem-env(safe-area-inset-bottom))] max-w-[86rem] overflow-y-auto overscroll-contain rounded-2xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul>
              {navigation.map((item) => (
                <li key={item.name} className="border-b border-white/8 last:border-0">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex min-h-14 flex-1 items-center text-base font-medium text-adesa-100",
                        pathname === item.href && "text-gold-300",
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-full text-adesa-200"
                        onClick={() => setShowSubsidiaries((open) => !open)}
                        aria-label="Toggle subsidiary links"
                        aria-expanded={showSubsidiaries}
                      >
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", showSubsidiaries && "rotate-180")} />
                      </button>
                    )}
                  </div>
                  {item.children && showSubsidiaries && (
                    <ul className="mb-3 border-l border-gold-400/35 pl-4">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            target={child.href.startsWith("http") ? "_blank" : undefined}
                            rel={child.href.startsWith("http") ? "noreferrer" : undefined}
                            className="flex min-h-11 items-center text-sm text-adesa-300 hover:text-gold-300"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-gold-400 px-6 text-sm font-semibold text-adesa-950"
            >
              Contact HQ
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
