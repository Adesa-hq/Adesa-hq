import Image from "next/image";
import Link from "next/link";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";
import { EditorialIntro, EditorialLedger } from "@/components/ui/editorial";
import Logo from "@/components/ui/logo";

const responsibilities = [
  { title: "Strategic direction", description: "Set group priorities, portfolio intent, and long-range institutional objectives." },
  { title: "Capital allocation", description: "Deploy, monitor, and reinvest capital against clear strategic and performance criteria." },
  { title: "Governance", description: "Establish board oversight, reporting standards, risk controls, and accountability mechanisms." },
  { title: "Shared capability", description: "Coordinate infrastructure, specialist support, and cross-company learning where it creates value." },
];

const operatingModel = [
  { title: "Subsidiary autonomy", description: "Operating companies retain control of market decisions, hiring, delivery, product development, and day-to-day execution." },
  { title: "HQ oversight", description: "ADESA HQ sets strategic direction, monitors performance, allocates capital, and maintains group governance standards." },
  { title: "Shared resources", description: "Finance, legal, people, technology, and specialist support can be shared where the model improves execution." },
];

const advantages = [
  ["Capital", "Efficient allocation across the portfolio"],
  ["Talent", "Development paths across operating companies"],
  ["Knowledge", "Shared learning and operating practice"],
  ["Networks", "Combined stakeholder relationships"],
];

export default function StructureEditorialSections() {
  return (
    <>
      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="holding-entity-title">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6"><p className="text-sm font-semibold text-gold-300">The holding entity</p><h2 id="holding-entity-title" className="mt-5 max-w-[14ch] text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-adesa-50 sm:text-5xl lg:text-6xl">Direction at the centre. Execution at the edge.</h2><p className="mt-7 max-w-[58ch] text-base leading-8 text-adesa-300">ADESA HQ provides governance, strategic direction, capital allocation, and performance oversight. Dedicated management teams lead each operating company with the focus their markets require.</p></div>
          <div className="border-y border-white/12 bg-adesa-950 px-6 py-10 lg:col-span-5 lg:col-start-8 lg:mt-14 lg:px-9"><div className="flex items-center gap-5"><Logo variant="secondary" width={68} height={68} priority /><div><p className="text-xs text-gold-300">Holding and operating group</p><h3 className="mt-1 text-2xl font-medium text-adesa-50">ADESA HQ</h3></div></div><dl className="mt-9 divide-y divide-white/12 border-t border-white/12">{responsibilities.map((item) => <div key={item.title} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr]"><dt className="text-sm font-medium text-adesa-100">{item.title}</dt><dd className="text-sm leading-6 text-adesa-400">{item.description}</dd></div>)}</dl></div>
        </div>
      </section>

      <section className="section-space bg-adesa-950 text-adesa-100" aria-labelledby="group-topology-title">
        <div className="site-container"><EditorialIntro kicker="Corporate topology" title="One governance core, four operating companies." description="The diagram reflects institutional accountability without collapsing distinct market responsibilities into one operating unit." titleId="group-topology-title" />
          <div className="mt-16"><div className="mx-auto w-full max-w-md border border-gold-400/45 bg-adesa-900 p-7 text-center"><div className="mx-auto w-fit"><Logo variant="secondary" width={52} height={52} /></div><p className="mt-4 text-xs text-gold-300">Governance core</p><h3 className="mt-1 text-2xl font-medium text-adesa-50">ADESA HQ</h3><p className="mt-2 text-xs leading-5 text-adesa-400">Strategy · governance · capital · oversight</p></div><div className="mx-auto hidden h-12 w-px bg-gold-400/50 lg:block" aria-hidden="true" />
            <div className="grid gap-4 border-t border-white/12 pt-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">{ACTIVE_SUBSIDIARIES.map((subsidiary) => <article key={subsidiary.name} className="group flex min-h-72 flex-col border-t border-white/15 bg-adesa-900 p-6 transition-colors hover:border-gold-400/60 hover:bg-adesa-800"><div className="relative h-12 w-12 overflow-hidden bg-white/5 p-1"><Image src={subsidiary.image} alt={`${subsidiary.name} logo`} fill sizes="48px" className="object-contain" /></div><h3 className="mt-8 text-xl font-medium text-adesa-50">{subsidiary.name}</h3><p className="mt-2 text-xs font-semibold text-gold-300">{subsidiary.sector}</p><p className="mt-4 flex-1 text-sm leading-6 text-adesa-400">{subsidiary.description}</p><a href={subsidiary.href} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-semibold text-adesa-200 underline decoration-white/20 underline-offset-6 transition-colors hover:text-gold-300">View operating company</a></article>)}</div>
          </div>
        </div>
      </section>

      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="operating-model-title"><div className="site-container"><EditorialIntro kicker="Operating model" title="Autonomy held inside a clear accountability system." titleId="operating-model-title" /><EditorialLedger items={operatingModel} className="mt-14 lg:ml-[25%]" /></div></section>
      <section className="section-space bg-adesa-950 text-adesa-100" aria-labelledby="group-advantages-title"><div className="site-container grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-sm font-semibold text-gold-300">Group-level advantages</p><h2 id="group-advantages-title" className="mt-5 text-4xl font-medium tracking-[-0.04em] text-adesa-50">Value that a standalone company cannot create alone.</h2></div><dl className="grid border-t border-white/12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">{advantages.map(([title, description], index) => <div key={title} className="min-h-52 border-b border-white/12 p-6 sm:border-r sm:p-8"><span className="text-xs tabular-nums text-gold-300">0{index + 1}</span><dt className="mt-10 text-3xl font-medium text-adesa-50">{title}</dt><dd className="mt-3 text-sm leading-6 text-adesa-400">{description}</dd></div>)}</dl></div></section>
      <section className="bg-adesa-900 py-20 text-adesa-100"><div className="site-container flex flex-col gap-8 border-t border-white/12 pt-8 sm:flex-row sm:items-end sm:justify-between"><h2 className="max-w-[19ch] text-3xl font-medium tracking-[-0.035em] text-adesa-50 sm:text-4xl">Structure creates clarity. Governance keeps it accountable.</h2><Link href="/governance" className="text-sm font-semibold text-gold-300 underline decoration-gold-400/50 underline-offset-8">Explore the governance framework</Link></div></section>
    </>
  );
}
