"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { MotionReveal } from "@/components/motion/motion-reveal";
import styles from "./team-section.module.css";

const MAX_PLAYS = 5;
const REVEAL_AND_HOLD_MS = 860;
const team = [
  { id: "oluwafemi-adeleye", name: "Oluwafemi Adeleye", title: "MD", image: "/assets/team/oluwafemi-adeleye.png", position: "50% 25%" },
  { id: "blessing-gbadeyan", name: "Blessing Gbadeyan", title: "Group Chief Operating Officer", image: "/assets/team/blessing-gbadeyan.png", position: "50% 25%" },
  { id: "osasenaga-aigiomwan", name: "Osasenaga Aigiomwan", title: "Group Human Resources Manager", image: "/assets/team/osasenaga-aigiomwan.jpg", position: "50% 20%" },
  { id: "anthonia-dike", name: "Anthonia Dike", title: "Group Brand Manager", image: "/assets/team/anthonia-dike.jpg", position: "50% 20%" },
  { id: "joyce-osemudiamen", name: "Joyce Osemudiamen", title: "Legal and Compliance Executive", image: "/assets/team/joyce-osemudiamen.jpg", position: "50% 25%" },
  { id: "christian-samuel", name: "Christian Samuel", title: "IT Support Executive", image: "/assets/team/christian-samuel.png", position: "50% 22%" },
];

export default function TeamSection() {
  const section = useRef(null);
  const plays = useRef(0);

  useEffect(() => {
    const root = section.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const cards = Array.from(root.querySelectorAll("[data-team-member]"));
    const visible = new Set();
    let current = -1;
    let inside = false;
    let running = false;
    let stopped = false;
    let timer = 0;
    let releaseImage = () => {};

    function finishValues() {
      window.clearTimeout(timer);
      releaseImage();
      running = false;
      cards.forEach((card) => { card.dataset.state = "complete"; });
      root.dataset.sequence = "complete";
    }

    function startNext() {
      const next = current + 1;
      if (stopped || !inside || running || next >= cards.length) return;
      if (!cards.slice(next).some((card) => visible.has(card))) return;
      if (next === 0 && plays.current >= MAX_PLAYS) return;
      running = true;
      current = next;
      const card = cards[current];
      const image = card.querySelector("img");
      // A fast scroll must not strand the sequence behind an offscreen lazy image.
      if (image && !image.complete) image.loading = "eager";

      function reveal() {
        releaseImage();
        if (stopped || !inside) return;
        if (current === 0) {
          plays.current += 1;
          root.dataset.plays = String(plays.current);
        }
        card.dataset.state = "active";
        timer = window.setTimeout(() => {
          card.dataset.state = "complete";
          running = false;
          if (current === cards.length - 1) {
            root.dataset.sequence = "complete";
            if (plays.current >= MAX_PLAYS) {
              cardObserver.disconnect();
              sectionObserver.disconnect();
            }
          } else startNext();
        }, REVEAL_AND_HOLD_MS);
      }

      // The next portrait waits for its image, then fully settles before handoff.
      if (!image || image.complete) reveal();
      else {
        image.addEventListener("load", reveal, { once: true });
        image.addEventListener("error", reveal, { once: true });
        releaseImage = () => {
          image.removeEventListener("load", reveal);
          image.removeEventListener("error", reveal);
          releaseImage = () => {};
        };
      }
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) visible.add(target);
        else visible.delete(target);
      });
      startNext();
    }, { threshold: 0.35 });
    cards.forEach((card) => cardObserver.observe(card));

    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (stopped || entry.isIntersecting === inside) return;
      inside = entry.isIntersecting;
      if (inside && plays.current < MAX_PLAYS) {
        current = -1;
        running = false;
        root.dataset.sequence = "running";
        cards.forEach((card) => { card.dataset.state = "pending"; });
        startNext();
      } else if (!inside) {
        finishValues();
        if (plays.current >= MAX_PLAYS) {
          cardObserver.disconnect();
          sectionObserver.disconnect();
        }
      }
    }, { threshold: 0 });
    sectionObserver.observe(root);

    function finishForReducedMotion() {
      if (!preference.matches) return;
      stopped = true;
      cardObserver.disconnect();
      sectionObserver.disconnect();
      finishValues();
    }
    preference.addEventListener("change", finishForReducedMotion);

    return () => {
      stopped = true;
      window.clearTimeout(timer);
      releaseImage();
      cardObserver.disconnect();
      sectionObserver.disconnect();
      preference.removeEventListener("change", finishForReducedMotion);
    };
  }, []);

  return (
    <section ref={section} className={`section-rule bg-adesa-950 text-adesa-100 ${styles.section}`} aria-labelledby="team-title">
      <div className="site-container section-space">
        <MotionReveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gold-300">OUR PEOPLE</p>
          <h2 id="team-title" className="text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-adesa-50 sm:text-5xl lg:text-6xl">Meet The Team</h2>
        </MotionReveal>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.id} data-team-member className={styles.member}>
              <article aria-labelledby={`${member.id}-name`} className={styles.card}>
                <div className={styles.portrait}>
                  <Image src={member.image} alt={member.name} fill sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 45vw, 23vw" loading="lazy" className={styles.image} style={{ objectPosition: member.position }} />
                </div>
                <div className={styles.caption}>
                  <h3 id={`${member.id}-name`} className="text-xl font-medium leading-snug tracking-[-0.02em] text-adesa-50">{member.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gold-300">{member.title}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
