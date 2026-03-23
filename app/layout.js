import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { constructMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/heading";
import { Footer } from "@/components/layout/footer";
import AppShell from "./AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
                  "min-h-screen bg-neutral-50 font-sans antialiased",
        "dark:bg-adesa-900 dark:text-neutral-50",
          inter.variable,
          playfair.variable,
        )}
        
      >
        <AppShell>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main role="main" className="flex-1">{children}</main>

            <Footer />
          </div>
        </AppShell>
      </body>
    </html>
  );
}
