import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";
import { MotionReveal } from "@/components/motion/motion-reveal";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function SubsidiariesSection() {
  return (
    <section className="section-rule bg-adesa-900 text-adesa-100" aria-labelledby="subsidiaries-title">
      <div className="site-container section-space">
        <MotionReveal>
          <h2 id="subsidiaries-title" className="max-w-[13ch] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-adesa-50 sm:text-5xl">
            Distinct companies. Shared standards.
          </h2>
          <p className="mt-5 max-w-[56ch] text-base leading-7 text-adesa-300">
            Each company owns a clear operating mandate while benefiting from group-level governance, capability, and strategic direction.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {ACTIVE_SUBSIDIARIES.map((subsidiary, index) => (
            <MotionReveal key={subsidiary.name} className={spans[index]} delay={index * 0.05}>
              <article className="group flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-adesa-850 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="relative h-16 w-20 overflow-hidden rounded-xl bg-black p-2">
                    <Image src={subsidiary.image} alt={`${subsidiary.name} logo`} fill sizes="80px" className="object-contain p-2" />
                  </div>
                  <span className="font-sans text-sm text-adesa-400">{subsidiary.sector}</span>
                </div>
                <div className="mt-16">
                  <h3 className="text-3xl font-medium text-adesa-50 sm:text-4xl">{subsidiary.name}</h3>
                  <p className="mt-4 max-w-[55ch] text-sm leading-6 text-adesa-300 sm:text-base">{subsidiary.description}</p>
                  <Link
                    href={subsidiary.href}
                    target={subsidiary.href.startsWith("http") ? "_blank" : undefined}
                    rel={subsidiary.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors duration-200 hover:text-gold-200"
                  >
                    Visit {subsidiary.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
