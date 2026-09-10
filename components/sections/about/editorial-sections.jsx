import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { EditorialIntro, EditorialLedger } from "@/components/ui/editorial";

const philosophy = [
  { title: "Governance framework", description: "Clear accountability, performance oversight, ethical standards, and risk controls create the conditions for responsible stewardship." },
  { title: "Capital discipline", description: "Every allocation is tested against strategic fit, long-term value creation, portfolio balance, and accountable returns." },
  { title: "Long-term strategy", description: "Planning horizons extend beyond quarterly cycles so each business can build capability, relevance, and durable market value." },
];

const values = [
  { title: "Integrity", description: "Transparent decisions and ethical conduct that earn stakeholder trust." },
  { title: "Excellence", description: "Institutional standards applied consistently across every operating company." },
  { title: "Growth", description: "Deliberate expansion built on sound systems rather than fragile scale." },
  { title: "Accountability", description: "Clear metrics, honest reporting, and responsible stewardship." },
  { title: "Patience", description: "The long view required to build businesses that remain useful across generations." },
  { title: "Discipline", description: "Financial rigour, capital efficiency, and focus in execution." },
];

const milestones = [
  { year: "2021", title: "Foundation", description: "ADESA HQ was established with a mandate to build enduring African businesses." },
  { year: "2022", title: "First subsidiary", description: "Adesa Media launched, marking the group’s first operating-company entry." },
  { year: "2024", title: "Expansion", description: "The group broadened its strategic interests into additional priority sectors." },
  { year: "2025", title: "Portfolio development", description: "ADESA HQ continued strengthening its multi-sector operating-company structure." },
];

export default function AboutEditorialSections() {
  return (
    <>
      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="about-origin-title">
        <div className="site-container grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <MotionReveal className="lg:col-span-6">
            <p className="text-sm font-semibold text-gold-300">Origin and purpose</p>
            <h2 id="about-origin-title" className="mt-5 max-w-[14ch] text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-adesa-50 sm:text-5xl lg:text-6xl">Built beyond the investment thesis.</h2>
            <div className="mt-8 max-w-[62ch] space-y-6 text-base leading-8 text-adesa-300">
              <p>ADESA HQ was established on a conviction that Africa’s critical sectors require enterprises built for decades, not opportunistic exits.</p>
              <p>We are active builder-operators who conceive, launch, govern, and strengthen businesses with the patience that lasting institutions demand.</p>
              <p>Our model connects hands-on operating leadership with holding-company governance, giving each subsidiary both practical support and uncompromised standards.</p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08} className="lg:col-span-5 lg:col-start-8 lg:pt-14">
            <figure className="border-l border-gold-400/60 pl-4 sm:pl-6">
              <div className="relative aspect-[6/5] overflow-hidden bg-adesa-950"><Image src="/legacy-in-motion-story.webp" alt="Legacy in Motion artwork presenting the ADESA HQ group" fill sizes="(max-width: 1023px) 92vw, 42vw" className="object-cover" /></div>
              <figcaption className="grid gap-2 border-b border-white/12 py-5 sm:grid-cols-[8rem_1fr]"><span className="text-xs font-semibold text-gold-300">Mandate</span><span className="text-sm leading-6 text-adesa-300">Architect enduring African enterprises designed for generational relevance.</span></figcaption>
            </figure>
          </MotionReveal>
        </div>
      </section>

      <section className="section-space bg-adesa-950 text-adesa-100" aria-labelledby="about-philosophy-title">
        <div className="site-container">
          <EditorialIntro kicker="Institutional philosophy" title="Three disciplines shape how the group builds." description="These are operating commitments, not decorative values. They influence ownership, review, capital, and time horizons." titleId="about-philosophy-title" />
          <EditorialLedger items={philosophy} className="mt-14 lg:ml-[25%]" />
        </div>
      </section>

      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="about-values-title">
        <div className="site-container">
          <EditorialIntro kicker="Decision standard" title="What guides the work when choices become difficult." titleId="about-values-title" />
          <div className="mt-14 grid border-t border-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => <article key={value.title} className="min-h-52 border-b border-white/12 p-6 sm:border-r sm:p-8 lg:min-h-60"><span className="text-xs tabular-nums text-gold-300">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-10 text-2xl font-medium text-adesa-50">{value.title}</h3><p className="mt-3 max-w-[34ch] text-sm leading-6 text-adesa-300">{value.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-adesa-950 text-adesa-100" aria-labelledby="about-timeline-title">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"><p className="text-sm font-semibold text-gold-300">Company record</p><h2 id="about-timeline-title" className="mt-5 text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-5xl">A young group with a long horizon.</h2></div>
          <ol className="border-t border-white/12 lg:col-span-7 lg:col-start-6">
            {milestones.map((item, index) => <li key={item.year} className="grid gap-4 border-b border-white/12 py-8 sm:grid-cols-[5rem_1fr]"><time className="text-sm tabular-nums text-gold-300" dateTime={item.year}>{item.year}</time><div><h3 className="text-2xl font-medium text-adesa-50">{item.title}</h3><p className="mt-3 max-w-[48ch] text-sm leading-7 text-adesa-300">{item.description}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="bg-adesa-900 py-20 text-adesa-100 sm:py-24">
        <div className="site-container grid gap-8 border-t border-white/12 pt-8 lg:grid-cols-12 lg:items-end"><h2 className="max-w-[18ch] text-3xl font-medium tracking-[-0.035em] text-adesa-50 sm:text-4xl lg:col-span-7">The philosophy becomes useful when it shapes structure and accountability.</h2><div className="flex flex-wrap gap-6 lg:col-span-4 lg:col-start-9 lg:justify-end"><Link href="/structure" className="text-sm font-semibold text-gold-300 underline decoration-gold-400/50 underline-offset-8">Explore group structure</Link><Link href="/governance" className="text-sm font-semibold text-adesa-200 underline decoration-white/20 underline-offset-8">Read governance standards</Link></div></div>
      </section>
    </>
  );
}
