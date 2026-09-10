import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    lang: "en-NG",
    dir: "ltr",
    categories: ["business", "corporate"],
    shortcuts: [
      {
        name: "About Adesa HQ",
        short_name: "About",
        description: "Learn about the ADESA builder-operator philosophy.",
        url: "/about",
      },
      {
        name: "Operating companies",
        short_name: "Companies",
        description: "Explore ADESA operating companies.",
        url: "/subsidiaries",
      },
      {
        name: "Contact Adesa HQ",
        short_name: "Contact",
        description: "Contact ADESA HQ.",
        url: "/contact",
      },
    ],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/adesa-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/adesa-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
