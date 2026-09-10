import { MotionReveal } from "@/components/motion/motion-reveal";

const stats = [
  { value: "4", label: "Operating sectors", note: "A focused, multi-sector portfolio." },
  { value: "1", label: "Group standard", note: "Shared governance and reporting discipline." },
  { value: "100%", label: "African focus", note: "Built around regional context and opportunity." },
  { value: "Long", label: "Time horizon", note: "Decisions measured beyond the next cycle." },
];

export default function StatsSection() {
  return (
    <section className="section-rule bg-adesa-900 text-adesa-100" aria-labelledby="stats-title">
      <div className="site-container section-space">
        <MotionReveal>
          <h2 id="stats-title" className="max-w-[14ch] text-3xl font-medium tracking-[-0.035em] text-adesa-50 sm:text-4xl">
            Scope matters. Discipline matters more.
          </h2>
        </MotionReveal>
        <dl className="mt-12 grid grid-cols-1 border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <MotionReveal key={stat.label} as="div" delay={index * 0.05} className="border-b border-white/12 py-8 sm:px-6 sm:first:pl-0 lg:border-r lg:last:border-r-0">
              <dt className="text-sm font-semibold text-adesa-300">{stat.label}</dt>
              <dd className="mt-4 font-serif text-5xl font-medium tracking-[-0.05em] text-gold-300 sm:text-6xl">{stat.value}</dd>
              <p className="mt-4 max-w-[26ch] text-sm leading-6 text-adesa-400">{stat.note}</p>
            </MotionReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
