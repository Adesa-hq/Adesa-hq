"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../ui/logo";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Group Structure", href: "/structure" },
  {
    name: "Subsidiaries",
    href: "/subsidiaries",
    children: [
      { name: "Adesa Media", href: "https://www.adesamedia.com/" },
      { name: "Adesa Energy", href: "https://www.adesaenergy.com/" },
    ],
  },
  { name: "Governance", href: "/governance" },
  { name: "Careers", href: "/careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "pointer-events-auto w-[92%] max-w-7xl transition-all duration-500",
          isScrolled ? "scale-[0.98]" : "scale-100",
        )}
      >
        <div className="relative rounded-2xl border border-adesa-700/60 bg-adesa-900/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

          <nav
            className="flex h-20 items-center justify-between px-8"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="ADESA HQ Home"
            >
              <Logo />
            </Link>

            <ul className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 text-sm tracking-wide transition-colors",
                      pathname === item.href ||
                        pathname.startsWith(item.href + "/")
                        ? "text-adesa-100"
                        : "text-adesa-300 hover:text-gold-400",
                    )}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={
                      item.children ? openDropdown === item.name : undefined
                    }
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.name && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {item.children && openDropdown === item.name && (
                    <AnimatePresence>
                      <motion.ul
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-4 w-56 rounded-xl border border-adesa-700 bg-adesa-800/95 backdrop-blur-xl shadow-2xl"
                      >
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              target={
                                child.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                child.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="block px-5 py-3 text-sm text-adesa-300 hover:text-gold-400 hover:bg-adesa-700/60 transition-colors"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="relative inline-flex items-center px-6 py-2.5 text-sm font-medium text-adesa-900 bg-gold-400 rounded-full hover:bg-gold-300 transition-colors"
              >
                Contact
              </Link>
            </div>

            <button
              className="lg:hidden text-adesa-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden overflow-hidden border-t border-adesa-700 bg-adesa-900"
                aria-label="Mobile navigation"
              >
                <ul className="px-8 py-6 space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-base text-adesa-200 hover:text-gold-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                target={
                                  child.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  child.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="block text-sm text-adesa-400 hover:text-gold-400"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}

                  <li className="pt-4">
                    <Link
                      href="/contact"
                      className="block text-center py-3 text-sm font-medium text-adesa-900 bg-gold-400 rounded-full"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  );
}
