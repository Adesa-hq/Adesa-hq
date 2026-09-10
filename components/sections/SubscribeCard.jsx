import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export default function SubscribeCard({ buttonText = "Follow on LinkedIn", className }) {
  return (
    <section className={cn("section-rule bg-adesa-950", className)} aria-labelledby="adesa-lens-title">
      <div className="site-container grid gap-7 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-16">
        <div>
          <h2 id="adesa-lens-title" className="text-3xl font-medium tracking-[-0.035em] text-adesa-50 sm:text-4xl">{siteConfig.newsletter.title}</h2>
          <p className="mt-3 max-w-[58ch] text-base leading-7 text-adesa-300">{siteConfig.newsletter.description}</p>
        </div>
        <Link
          href={siteConfig.newsletter.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/18 px-6 text-sm font-semibold text-adesa-100 transition-[border-color,color,transform] duration-150 hover:border-gold-400 hover:text-gold-300 active:translate-y-px"
        >
          {buttonText}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
