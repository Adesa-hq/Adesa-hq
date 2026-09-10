"use client";

import { useEffect, useState } from "react";
import { BrandLoader } from "./brand-loader";

const SESSION_KEY = "adesa-hq-intro-seen";

export function FirstVisitIntro() {
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.sessionStorage.setItem(SESSION_KEY, "true");
    const showFrame = window.requestAnimationFrame(() => setPhase("visible"));

    const exitTimer = window.setTimeout(
      () => setPhase("leaving"),
      reduceMotion ? 180 : 920,
    );
    const removeTimer = window.setTimeout(
      () => setPhase("idle"),
      reduceMotion ? 320 : 1180,
    );

    return () => {
      window.cancelAnimationFrame(showFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "idle") return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-adesa-950 transition-opacity duration-200 ${
        phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ zIndex: "var(--layer-modal)" }}
      aria-hidden={phase === "leaving"}
    >
      <BrandLoader label="Entering ADESA HQ" />
    </div>
  );
}
