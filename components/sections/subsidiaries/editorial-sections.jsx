import Image from "next/image";
import Link from "next/link";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";
import { EditorialIntro } from "@/components/ui/editorial";

const pipeline = [
  { sector: "Technology", status: "In development", description: "Platforms supporting digital commerce, fintech integrations, and business-process automation across emerging markets." },
  { sector: "Real estate", status: "Planned", description: "Commercial and light-industrial infrastructure supporting logistics, warehousing, and operating scale." },
  { sector: "Financial services", status: "Planned", description: "Trade-finance and capital solutions intended to support cross-border commerce and group synergies." },
];

export default function SubsidiariesEditorialSections() {
  return (
    <>
      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="portfolio-dossiers-title">
        <div className="site-container"><EditorialIntro kicker="Operating portfolio" title="Distinct companies. One institutional standard." description="Each operating company has a focused mandate, dedicated market responsibilities, and access to the group’s governance and shared capability." titleId="portfolio-dossiers-title" />
          <div className="mt-16 space-y-8 lg:space-y-12">
            {ACTIVE_SUBSIDIARIES.map((subsidiary, index) => <article key={subsidiary.name} className="grid overflow-hidden border-t border-white/15 bg-adesa-950 lg:grid-cols-12">
              <div className={`flex min-h-72 flex-col justify-between p-7 sm:p-10 lg:col-span-4 lg:p-12 ${index % 2 ? "lg:order-2" : ""}`}><div><span className="text-xs tabular-nums text-gold-300">Portfolio {String(index + 1).padStart(2, "0")}</span><div className="relative mt-10 h-20 w-20 bg-white/5 p-2"><Image src={subsidiary.image} alt={`${subsidiary.name} logo`} fill sizes="80px" className="object-contain" /></div></div><div><h2 className="text-3xl font-medium text-adesa-50 sm:text-4xl">{subsidiary.name}</h2><p className="mt-2 text-sm font-semibold text-gold-300">{subsidiary.sector}</p></div></div>
              <div className={`grid gap-10 border-t border-white/12 p-7 sm:p-10 lg:col-span-8 lg:grid-cols-[1.15fr_0.85fr] lg:border-l lg:border-t-0 lg:p-12 ${index % 2 ? "lg:order-1 lg:border-l-0 lg:border-r" : ""}`}><div><p className="max-w-[55ch] text-base leading-8 text-adesa-300">{subsidiary.description}</p><h3 className="mt-10 text-xs font-semibold text-adesa-500">Operating services</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2">{subsidiary.services.map((service) => <li key={service} className="border-l border-gold-400/50 pl-3 text-sm text-adesa-200">{service}</li>)}</ul><a href={subsidiary.href} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-gold-300 underline decoration-gold-400/50 underline-offset-8">Visit {subsidiary.name}</a></div><aside className="border-t border-white/12 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><h3 className="text-xs font-semibold text-adesa-500">Operating profile</h3><ul className="mt-5 space-y-5">{subsidiary.quickFacts.map((fact) => <li key={fact} className="grid grid-cols-[1.5rem_1fr] text-sm leading-6 text-adesa-400"><span className="text-gold-300">+</span><span>{fact}</span></li>)}</ul></aside></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-adesa-950 text-adesa-100" aria-labelledby="pipeline-focus-title"><div className="site-container grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-sm font-semibold text-gold-300">Pipeline focus areas</p><h2 id="pipeline-focus-title" className="mt-5 max-w-[13ch] text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-5xl">Expansion remains deliberate.</h2><p className="mt-6 text-base leading-7 text-adesa-300">These areas describe portfolio development interests. They are not presented as active operating companies.</p></div><ol className="border-t border-white/12 lg:col-span-7 lg:col-start-6">{pipeline.map((item, index) => <li key={item.sector} className="grid gap-5 border-b border-white/12 py-8 sm:grid-cols-[2rem_9rem_1fr]"><span className="text-xs tabular-nums text-gold-300">0{index + 1}</span><div><h3 className="text-xl font-medium text-adesa-50">{item.sector}</h3><p className="mt-1 text-xs text-gold-300">{item.status}</p></div><p className="text-sm leading-7 text-adesa-400">{item.description}</p></li>)}</ol></div></section>

      <section className="bg-adesa-900 py-20 text-adesa-100"><div className="site-container flex flex-col gap-8 border-t border-white/12 pt-8 sm:flex-row sm:items-end sm:justify-between"><h2 className="max-w-[22ch] text-3xl font-medium tracking-[-0.035em] text-adesa-50 sm:text-4xl">Depth before breadth. Capability before expansion.</h2><Link href="/contact" className="text-sm font-semibold text-gold-300 underline decoration-gold-400/50 underline-offset-8">Discuss a strategic partnership</Link></div></section>
    </>
  );
}
