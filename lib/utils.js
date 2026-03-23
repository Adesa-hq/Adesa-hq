import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// JSON-LD Generator
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "ADESA HQ",
    "url": "https://adesahq.com",
    "logo": "https://adesahq.com/logo.png",
    "description": "A multi-sector African holding and operating group focused on governance and long-term institutional value.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://linkedin.com/company/adesa-hq"
    ]
  };
}