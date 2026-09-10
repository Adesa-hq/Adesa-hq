import Link from "next/link";
import { ArrowUpRight, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AwardProofSection() {
  return (
    <section className="section-rule bg-adesa-900" aria-labelledby="award-proof-title">
      <div className="site-container grid gap-6 py-8 md:grid-cols-[auto_1fr_auto] md:items-center md:py-10">
        <Award className="h-8 w-8 text-gold-400" strokeWidth={1.5} aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-gold-300">{siteConfig.award.programme}</p>
          <h2 id="award-proof-title" className="mt-1 font-sans text-xl font-semibold text-adesa-50 sm:text-2xl">
            {siteConfig.award.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-adesa-300">
            Independent recognition of ADESA HQ&apos;s multi-sector business-building work across Africa.
          </p>
        </div>
        <Link
          href={siteConfig.award.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-adesa-100 transition-colors duration-200 hover:text-gold-300"
        >
          View recognition
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
