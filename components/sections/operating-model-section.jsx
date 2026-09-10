import { MotionReveal } from "@/components/motion/motion-reveal";

const stages = [
  ["Select", "Focus on sectors where demand, timing, and execution can support durable growth."],
  ["Build", "Pair early capital with practical systems, operating structure, and accountable leadership."],
  ["Govern", "Establish reporting discipline, oversight, and clear decision rights from the start."],
  ["Strengthen", "Reinvest selectively, share capability, and preserve long-term strategic flexibility."],
];

export default function OperatingModelSection() {
  return (
    <section className="section-rule bg-adesa-950 text-adesa-100" aria-labelledby="operating-model-title">
      <div className="site-container section-space grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <MotionReveal direction="right">
          <h2 id="operating-model-title" className="max-w-[10ch] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-adesa-50 sm:text-5xl">
            How the group builds.
          </h2>
          <p className="mt-5 max-w-[38ch] text-base leading-7 text-adesa-300">
            ADESA HQ remains involved from formation through growth, adding structure where it creates leverage.
          </p>
        </MotionReveal>

        <ol className="space-y-0">
          {stages.map(([title, description], index) => (
            <MotionReveal key={title} as="li" delay={index * 0.05} className="grid gap-3 border-t border-white/12 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-start sm:gap-6">
              <span className="font-sans text-sm font-semibold tabular-nums text-gold-400">0{index + 1}</span>
              <h3 className="font-sans text-xl font-semibold text-adesa-50">{title}</h3>
              <p className="max-w-[48ch] text-sm leading-6 text-adesa-300 sm:text-base">{description}</p>
            </MotionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
