"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./back-to-top.module.css";

export function BackToTop() {
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    const control = button.current;
    const firstSection = document.querySelector("main section");
    const header = document.querySelector("header");
    let frame = 0;

    function update() {
      frame = 0;
      // Pages without a hero (such as 404) use a viewport as their first screen.
      const boundary = firstSection?.getBoundingClientRect().bottom ?? window.innerHeight - window.scrollY;
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      const visible = window.scrollY > 0 && boundary <= headerBottom;
      if (control.dataset.visible !== String(visible)) {
        control.dataset.visible = String(visible);
        control.inert = !visible;
        control.setAttribute("aria-hidden", String(!visible));
      }
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Recalculate if the responsive hero, navigation, or font metrics change size.
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    if (firstSection) observer?.observe(firstSection);
    if (header) observer?.observe(header);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  function scrollToTop() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduced ? "instant" : "smooth" });
    // Return keyboard users to the start as well, without introducing a URL hash.
    document.querySelector('header a[href="/"]')?.focus({ preventScroll: true });
  }

  return (
    <button key={pathname} ref={button} type="button" className={styles.control} data-visible="false" inert aria-hidden="true" aria-label="Back to top" onClick={scrollToTop}>
      <Image src="/assets/ui/back-to-top.png" alt="" width={512} height={512} sizes="52px" className={styles.icon} />
    </button>
  );
}
