"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { ADESA_SOLUTIONS, ADESA_DISTRIBUTION } from "@/config/brand";
import styles from "./hero-carousel.module.css";

const ASSETS = "/assets/adesa";
const DURATION = 6800;
const slides = [
  { id: "hq", name: "ADESA HQ", title: "Building African businesses that outlast cycles.", description: "A group committed to building, governing, and strengthening businesses for lasting impact.", cta: "Explore Our Group", href: "/structure", accent: "#bd881e" },
  { id: "media", background: "indrive", backgroundWidth: 1080, name: "ADESA Media", title: "Ideas that connect. Stories that influence.", description: "From strategic communications and brand development to digital campaigns, content production, and public relations, we bring brands closer to their audiences.", cta: "Visit ADESA Media", href: "https://adesamedia.com/", accent: "#00d8e8" },
  { id: "energy", name: "ADESA Energy", title: "Cleaner fuel. Lower cost. Greater impact.", description: "Driving sustainable mobility and energy solutions through Compressed Natural Gas (CNG) infrastructure, supply, and adoption for businesses and communities.", cta: "Visit ADESA Energy", href: "https://adesaenergy.com/", accent: "#ff8a1c" },
  { id: "solutions", name: "ADESA Solutions", title: "Designing spaces. Building possibilities.", description: "Delivering architectural and built-environment solutions, from design and planning to project execution and delivery.", cta: "Visit ADESA Solutions", href: ADESA_SOLUTIONS.href, accent: "#27b7ff" },
  { id: "distribution", name: "ADESA Distribution", title: "Connecting products, businesses and markets.", description: "A reliable distribution network that moves goods efficiently from suppliers to customers across key markets.", cta: "Visit ADESA Distribution", href: ADESA_DISTRIBUTION.href, accent: "#ffffff" },
];

// Each polygon masks the original full-resolution logo. No shapes or lettering are redrawn.
const pieces = ["roofNavy", "roofGold", "bar", "cyan", "orange", "navy", "lettering"];
function LogoAssembly({ active }) {
  return (
    <div className={`${styles.assembly} ${active ? styles.assembling : ""}`} role="img" aria-label="ADESA HQ multicolored house logo">
      {pieces.map((piece, index) => (
        <div key={piece} className={`${styles.piece} ${styles[piece]}`} style={{ "--delay": `${index * 0.38}s` }}>
          <Image src={`${ASSETS}/logos/adesa_hq.png`} alt="" fill sizes="(max-width: 767px) 65vw, 42vw" priority />
        </div>
      ))}
      <div className={styles.completed}><Image src={`${ASSETS}/logos/adesa_hq.png`} alt="" fill sizes="(max-width: 767px) 65vw, 42vw" priority /></div>
    </div>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touch = useRef(null);
  const stopped = hovered || focused || paused || hidden || reduced;
  const navigate = (index) => setCurrent((index + slides.length) % slides.length);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visibility = () => setHidden(document.hidden);
    const preference = () => setReduced(motion.matches);
    visibility();
    preference();
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", preference);
    return () => {
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", preference);
    };
  }, []);

  useEffect(() => {
    if (stopped) return;
    const timer = window.setTimeout(() => setCurrent((value) => (value + 1) % slides.length), DURATION);
    return () => window.clearTimeout(timer);
  }, [current, stopped]);

  return (
    <section className={styles.hero} aria-label="ADESA group companies" aria-roledescription="carousel"
      onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); navigate(current + (event.key === "ArrowRight" ? 1 : -1)); }
      }}
      onTouchStart={(event) => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
      onTouchEnd={(event) => {
        if (!touch.current) return;
        const dx = event.changedTouches[0].clientX - touch.current.x;
        const dy = event.changedTouches[0].clientY - touch.current.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) navigate(current + (dx < 0 ? 1 : -1));
        touch.current = null;
      }} onTouchCancel={() => { touch.current = null; }}>
      {slides.map((slide, index) => {
        const active = index === current;
        const background = slide.background || `adesa_${slide.id}`;
        const backgroundWidth = slide.backgroundWidth || 1672;
        return (
          <article key={slide.id} id={`hero-slide-${index}`} className={`${styles.slide} ${active ? styles.active : ""} ${index === 0 ? styles.hq : ""}`} style={{ "--accent": slide.accent }}
            role="group" aria-roledescription="slide" aria-label={`${index + 1} of 5: ${slide.name}`} aria-hidden={!active} inert={!active}>
            {index !== 0 && <div className={`${styles.background} ${slide.id === "media" ? styles.mediaBackground : ""}`} data-hero-background="true">
              <picture>
                <source type="image/webp" srcSet={`${ASSETS}/carousel/${background}-960.webp 960w, ${ASSETS}/carousel/${background}-${backgroundWidth}.webp ${backgroundWidth}w`} sizes="100vw" />
                <Image src={`${ASSETS}/carousel/${background}-${backgroundWidth}.webp`} alt="" fill sizes="100vw" loading="lazy" className={styles.photograph} />
              </picture>
            </div>}
            <div className={`site-container ${styles.layout}`}>
              <div className={styles.copy}>
                {index === 0 ? <p className={styles.eyebrow}>ADESA HQ / BUILT TO ENDURE</p> : <div className={styles.logoPlate} data-company={slide.id}>
                  <Image src={`${ASSETS}/logos/adesa_${slide.id}.png`} alt={`${slide.name} official logo`} width={200} height={110} loading="lazy" className={styles.subsidiaryLogo} />
                </div>}
                <span className={styles.accent} aria-hidden="true" />
                {index === 0 ? <h1 className={styles.title}>{slide.title}</h1> : <h2 className={styles.title}>{slide.title}</h2>}
                <p className={styles.description}>{slide.description}</p>
                <Link className={styles.cta} href={slide.href} target={index ? "_blank" : undefined} rel={index ? "noopener noreferrer" : undefined}>{slide.cta}<ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
              {index === 0 && <LogoAssembly active={active} />}
            </div>
          </article>
        );
      })}
      <div className={`site-container ${styles.controls}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <span className={styles.counter} aria-hidden="true">0{current + 1} <span>/ 05</span></span>
        <div className={styles.indicators} aria-label="Choose a slide">
          {slides.map((slide, index) => <button key={slide.id} className={styles.indicator} aria-label={`Show ${slide.name}`} aria-current={current === index ? "true" : undefined} aria-controls={`hero-slide-${index}`} onClick={() => navigate(index)}><span className={current === index ? styles.selected : ""} /></button>)}
        </div>
        <div className={styles.arrows}>
          <button aria-label={paused ? "Start slideshow" : "Pause slideshow"} aria-pressed={paused} onClick={() => { if (paused) { setHovered(false); setFocused(false); } setPaused(!paused); }}>{paused ? <Play size={17} /> : <Pause size={17} />}</button>
          <button aria-label="Previous slide" onClick={() => navigate(current - 1)}><ChevronLeft size={20} /></button>
          <button aria-label="Next slide" onClick={() => navigate(current + 1)}><ChevronRight size={20} /></button>
        </div>
      </div>
      <p className="sr-only" aria-live={stopped ? "polite" : "off"} aria-atomic="true">{slides[current].name}: {slides[current].title}</p>
    </section>
  );
}
