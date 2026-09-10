import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="section-rule bg-adesa-900 text-adesa-100" aria-labelledby="final-cta-title">
      <div className="site-container section-space">
        <div className="max-w-4xl">
          <h2 id="final-cta-title" className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-adesa-50 sm:text-5xl lg:text-6xl">
            Serious businesses deserve serious operating conversations.
          </h2>
          <p className="mt-6 max-w-[54ch] text-base leading-7 text-adesa-300 sm:text-lg">
            We welcome relevant conversations with founders, operators, partners, and institutions aligned with long-term value creation.
          </p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold-400 px-6 text-sm font-semibold text-adesa-950 transition-[background-color,transform] duration-150 hover:bg-gold-300 active:translate-y-px">
            Contact HQ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
