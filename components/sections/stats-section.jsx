"use client";

import { useEffect, useRef } from "react";
import { MotionReveal } from "@/components/motion/motion-reveal";
import styles from "./stats-section.module.css";

const MAX_PLAYS = 5;

const stats = [
  { value: "4", start: 0, target: 4, duration: 1200, label: "Operating sectors", note: "A focused, multi-sector portfolio." },
  { value: "1", start: 0, target: 1, duration: 650, label: "Group standard", note: "Shared governance and reporting discipline." },
  { value: "100%", start: 1, target: 100, suffix: "%", duration: 1800, label: "African focus", note: "Built around regional context and opportunity." },
  { value: "Long", duration: 750, label: "Time horizon", note: "Decisions measured beyond the next cycle." },
];

export default function StatsSection() {
  const section = useRef(null);
  const plays = useRef(0);

  useEffect(() => {
    const root = section.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Render the finished values without JavaScript, reduced motion, or observer support.
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const cards = Array.from(root.querySelectorAll("[data-stat]"));
    const visible = new Set();
    let current = -1;
    let running = false;
    let inside = false;
    let stopped = false;
    let frame = 0;
    let timer = 0;

    function prepareSequence() {
      current = -1;
      running = false;
      root.dataset.sequence = "running";
      cards.forEach((card, index) => {
        card.dataset.state = "pending";
        card.style.setProperty("--progress", "0");
        const number = card.querySelector("[data-stat-number]");
        if (number) number.textContent = `${stats[index].start}${stats[index].suffix || ""}`;
      });
    }

    function finishValues() {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      running = false;
      cards.forEach((card, index) => {
        card.dataset.state = "complete";
        card.style.setProperty("--progress", "1");
        const number = card.querySelector("[data-stat-number]");
        if (number) number.textContent = stats[index].value;
      });
      root.dataset.sequence = "complete";
    }

    function startNext() {
      const next = current + 1;
      if (stopped || !inside || running || next >= stats.length) return;
      // A fast scroll to a later item still lets its predecessors finish in order.
      if (!cards.slice(next).some((card) => visible.has(card))) return;
      if (next === 0) {
        if (plays.current >= MAX_PLAYS) return;
        plays.current += 1;
        root.dataset.plays = String(plays.current);
      }
      running = true;
      current = next;
      const card = cards[current];
      const stat = stats[current];
      const number = card.querySelector("[data-stat-number]");
      let started;
      card.dataset.state = "active";

      function tick(now) {
        if (stopped) return;
        started ??= now;
        const leadIn = number ? 280 : 0;
        const progress = Math.min(Math.max((now - started - leadIn) / stat.duration, 0), 1);
        // Small counts are deliberately stepped; the percentage gently eases to 100.
        const eased = stat.target === 100 ? 1 - (1 - progress) ** 2 : progress;
        if (number) {
          const value = Math.floor(stat.start + (stat.target - stat.start) * eased);
          const text = `${value}${stat.suffix || ""}`;
          if (number.textContent !== text) number.textContent = text;
        }
        card.style.setProperty("--progress", String(progress));
        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          card.dataset.state = "complete";
          if (current === stats.length - 1) {
            root.dataset.sequence = "complete";
            if (plays.current >= MAX_PLAYS) {
              observer.disconnect();
              sectionObserver.disconnect();
            }
          } else {
            // A short beat lets each completed value land before handing off.
            timer = window.setTimeout(() => { running = false; startNext(); }, 240);
          }
        }
      }
      frame = window.requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) visible.add(target);
        else visible.delete(target);
      });
      startNext();
    }, { threshold: 0.45 });
    cards.forEach((card) => observer.observe(card));

    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (stopped || entry.isIntersecting === inside) return;
      inside = entry.isIntersecting;
      if (inside && plays.current < MAX_PLAYS) {
        prepareSequence();
        startNext();
      } else if (!inside) {
        // Leave readable final values behind; replay only on a distinct re-entry.
        finishValues();
        if (plays.current >= MAX_PLAYS) {
          observer.disconnect();
          sectionObserver.disconnect();
        }
      }
    }, { threshold: 0 });
    sectionObserver.observe(root);

    function finishForReducedMotion() {
      if (!preference.matches) return;
      stopped = true;
      observer.disconnect();
      sectionObserver.disconnect();
      finishValues();
    }
    preference.addEventListener("change", finishForReducedMotion);

    return () => {
      stopped = true;
      observer.disconnect();
      sectionObserver.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      preference.removeEventListener("change", finishForReducedMotion);
    };
  }, []);

  return (
    <section ref={section} className={`section-rule bg-adesa-900 text-adesa-100 ${styles.section}`} aria-labelledby="stats-title">
      <div className="site-container section-space">
        <MotionReveal>
          <h2 id="stats-title" className="max-w-[14ch] text-3xl font-medium tracking-[-0.035em] text-adesa-50 sm:text-4xl">
            Scope matters. Discipline matters more.
          </h2>
        </MotionReveal>
        <dl className="mt-12 grid grid-cols-1 border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} data-stat className={`${styles.stat} border-b border-white/12 py-8 sm:px-6 sm:first:pl-0 lg:border-r lg:last:border-r-0`}>
              <dt className="text-sm font-semibold text-adesa-300">{stat.label}</dt>
              <dd>
                <span className="sr-only">{stat.value}</span>
                <span aria-hidden="true" className={`${styles.value} mt-4 block font-serif text-5xl font-medium tracking-[-0.05em] text-gold-300 sm:text-6xl`}>
                  {stat.target === undefined ? (
                    <span className={styles.word}>{Array.from(stat.value).map((letter, index) => <span key={index} style={{ "--letter-delay": `${index * 85}ms` }}>{letter}</span>)}</span>
                  ) : <span data-stat-number>{stat.value}</span>}
                </span>
                <p className="mt-4 max-w-[26ch] text-sm leading-6 text-adesa-400">{stat.note}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
