import Link from "next/link";
import { EditorialIntro, EditorialLedger } from "@/components/ui/editorial";

const standards = [
  { title: "Ethical conduct", description: "Zero tolerance for corruption, fraud, conflicts of interest, or conduct that compromises stakeholder trust. Supported by anti-corruption policies, reporting channels, and protected escalation." },
  { title: "Transparency and reporting", description: "Clear financial, operational, and stakeholder reporting against established standards, with audit compliance and visible accountability." },
  { title: "Board oversight", description: "Board-level review keeps subsidiary strategy, performance, and material decisions aligned with group responsibilities." },
  { title: "Regulatory compliance", description: "Operations are expected to meet applicable legal, tax, labour, industry, and jurisdictional requirements." },
];

const reviewCycle = [
  { title: "Continuous monitoring", description: "Regular operating check-ins and reporting identify emerging risks, execution gaps, and opportunities early." },
  { title: "Quarterly review", description: "Subsidiary performance is reviewed against financial, operating, talent, and risk indicators." },
  { title: "Annual assessment", description: "A wider strategic review examines positioning, competitive dynamics, portfolio fit, and the long-term value-creation trajectory." },
];

const capitalSteps = [
  { title: "Criteria", description: "Test market opportunity, competitive position, return potential, risk, and strategic fit." },
  { title: "Approval", description: "Apply staged review and appropriate due diligence to significant deployment decisions." },
  { title: "Deployment", description: "Release capital against agreed purpose, milestones, ownership, and reporting expectations." },
  { title: "Monitoring", description: "Track actual outcomes against projections and hold decision owners accountable." },
];

const systems = [
  { title: "Documentation standards", description: "Decisions, processes, and institutional knowledge are recorded in repeatable formats." },
  { title: "Succession planning", description: "Critical responsibilities are supported by leadership depth and continuity planning." },
  { title: "Process codification", description: "Effective operating practice is made teachable, measurable, and less dependent on individuals." },
  { title: "Knowledge management", description: "Lessons and context move across teams instead of remaining isolated inside one company." },
  { title: "Culture preservation", description: "Growth is managed without losing the conduct and decision standards expected across the group." },
  { title: "Technology infrastructure", description: "Shared systems support control, visibility, collaboration, and scalable execution." },
];

export default function GovernanceEditorialSections() {
  return (
    <>
      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="governance-charter-title"><div className="site-container"><EditorialIntro kicker="The charter" title="Standards that apply before performance is celebrated." description="Governance begins with conduct and clarity. These clauses define the minimum institutional standard expected throughout the group." titleId="governance-charter-title" /><EditorialLedger items={standards} className="mt-14 lg:ml-[25%]" /></div></section>

      <section className="section-space bg-adesa-950 text-adesa-100" aria-labelledby="oversight-cycle-title"><div className="site-container grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-sm font-semibold text-gold-300">Performance oversight</p><h2 id="oversight-cycle-title" className="mt-5 max-w-[13ch] text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-5xl">Review is a cycle, not an event.</h2><p className="mt-6 max-w-[42ch] text-base leading-7 text-adesa-300">Financial performance, operating quality, talent, and risk are reviewed together so one strong metric cannot hide institutional weakness.</p></div><ol className="relative border-l border-gold-400/40 lg:col-span-7 lg:col-start-6">{reviewCycle.map((item, index) => <li key={item.title} className="relative border-b border-white/12 py-9 pl-8 sm:pl-12"><span className="absolute -left-3 top-9 flex h-6 w-6 items-center justify-center bg-gold-400 text-[10px] font-bold text-adesa-950">{index + 1}</span><h3 className="text-2xl font-medium text-adesa-50">{item.title}</h3><p className="mt-3 max-w-[54ch] text-sm leading-7 text-adesa-300">{item.description}</p></li>)}</ol></div></section>

      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="capital-path-title"><div className="site-container"><EditorialIntro kicker="Capital discipline" title="Strategic allocation, with accountability at every handoff." description="Capital is treated as a finite institutional resource. The process makes purpose, ownership, risk, and results explicit." titleId="capital-path-title" /><ol className="mt-16 grid border-t border-white/12 lg:grid-cols-4">{capitalSteps.map((step, index) => <li key={step.title} className="min-h-64 border-b border-white/12 p-6 lg:border-r lg:p-8"><span className="text-xs tabular-nums text-gold-300">0{index + 1}</span><h3 className="mt-16 text-2xl font-medium text-adesa-50">{step.title}</h3><p className="mt-4 text-sm leading-6 text-adesa-300">{step.description}</p></li>)}</ol><dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-l border-gold-400/50 pl-5 text-sm"><div><dt className="text-adesa-500">Evaluation</dt><dd className="mt-1 text-adesa-100">Risk-adjusted return</dd></div><div><dt className="text-adesa-500">Lens</dt><dd className="mt-1 text-adesa-100">Long-term value</dd></div><div><dt className="text-adesa-500">Condition</dt><dd className="mt-1 text-adesa-100">Strategic fit</dd></div></dl></div></section>

      <section className="section-space bg-adesa-950 text-adesa-100" aria-labelledby="institutional-systems-title"><div className="site-container grid gap-12 lg:grid-cols-12"><div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"><p className="text-sm font-semibold text-gold-300">Institutional systems</p><h2 id="institutional-systems-title" className="mt-5 text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-5xl">Make the standard repeatable.</h2><p className="mt-6 text-base leading-7 text-adesa-300">Processes, practices, and shared infrastructure protect quality as the group grows.</p></div><div className="grid border-t border-white/12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">{systems.map((system, index) => <article key={system.title} className="min-h-52 border-b border-white/12 p-6 sm:border-r sm:p-8"><span className="text-xs tabular-nums text-gold-300">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-9 text-xl font-medium text-adesa-50">{system.title}</h3><p className="mt-3 text-sm leading-6 text-adesa-400">{system.description}</p></article>)}</div></div></section>

      <section className="bg-adesa-900 py-20 text-adesa-100"><div className="site-container grid gap-8 border-t border-white/12 pt-8 sm:grid-cols-[1fr_auto] sm:items-end"><h2 className="max-w-[22ch] text-3xl font-medium tracking-[-0.035em] text-adesa-50 sm:text-4xl">Governance is how long-term ambition survives day-to-day pressure.</h2><Link href="/contact" className="text-sm font-semibold text-gold-300 underline decoration-gold-400/50 underline-offset-8">Make an institutional inquiry</Link></div></section>
    </>
  );
}
