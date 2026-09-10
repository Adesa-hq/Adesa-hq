import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { constructMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/heading";
import { Footer } from "@/components/layout/footer";
import AppShell from "./AppShell";
import { StructuredData } from "@/components/seo/structured-data";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { FirstVisitIntro } from "@/components/brand/first-visit-intro";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const playfair = localFont({
  src: [
    {
      path: "../public/fonts/playfair-display-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/playfair-display-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/playfair-display-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/playfair-display-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/playfair-display-800.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/playfair-display-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});


export const metadata = constructMetadata();

export const viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.locale.replace("_", "-")} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-[100dvh] bg-adesa-950 font-sans text-adesa-100 antialiased",
          inter.variable,
          playfair.variable,
        )}
      >
        <a href="#main-content" className="fixed left-4 top-4 z-[var(--layer-modal)] -translate-y-24 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-adesa-950 transition-transform focus:translate-y-0">Skip to content</a>
        <FirstVisitIntro />
        <StructuredData />
        <AppShell>
          <div className="relative flex min-h-[100dvh] flex-col">
            <Header />
            <div id="main-content" className="contents">{children}</div>
            <Footer />
          </div>
        </AppShell>
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
