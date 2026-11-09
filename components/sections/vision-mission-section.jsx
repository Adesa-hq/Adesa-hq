import { Compass, Target } from "lucide-react";
import { MotionReveal } from "@/components/motion/motion-reveal";
import styles from "./vision-mission.module.css";

export default function VisionMissionSection() {
  return (
    <section className="section-rule bg-adesa-900 text-adesa-100" aria-labelledby="vision-mission-title">
      <div className="site-container section-space">
        <MotionReveal>
          <h2 id="vision-mission-title" className="max-w-[17ch] text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-adesa-50 sm:text-5xl lg:text-6xl">
            Companies should be built to withstand scrutiny.
          </h2>
        </MotionReveal>

        <div className={`mt-12 lg:mt-20 ${styles.cards}`}>
          <MotionReveal direction="right">
            <article className={`${styles.card} ${styles.vision}`} tabIndex={0} aria-labelledby="our-vision-title">
              <Compass className="h-6 w-6 text-gold-400" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3 id="our-vision-title" className="text-2xl font-medium text-adesa-50 sm:text-3xl">Our vision</h3>
                <p className="mt-4 max-w-[46ch] text-base leading-7 text-adesa-300">
                  To develop a portfolio of trusted, well-governed operating companies with the discipline to create value over time.
                </p>
              </div>
            </article>
          </MotionReveal>

          <MotionReveal direction="left" delay={0.06}>
            <article className={`${styles.card} ${styles.mission}`} tabIndex={0} aria-labelledby="our-mission-title">
              <Target className="h-6 w-6 text-gold-400" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3 id="our-mission-title" className="text-2xl font-medium text-adesa-50 sm:text-3xl">Our mission</h3>
                <p className="mt-4 max-w-[46ch] text-base leading-7 text-adesa-300">
                  Conceive, launch, and strengthen businesses through clear oversight, practical operating support, and patient decision-making.
                </p>
              </div>
            </article>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
