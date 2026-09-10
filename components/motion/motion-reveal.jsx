"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const directions = {
  up: "translateY(24px)",
  left: "translate3d(0,24px,0)",
  right: "translate3d(0,24px,0)",
  none: "translate3d(0,0,0)",
};

export function MotionReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  amount = 0.2,
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  const Component = m[as] || m.div;

  return (
    <LazyMotion features={domAnimation} strict>
      <Component
        initial={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, transform: directions[direction] }
        }
        whileInView={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        viewport={{ once: true, amount }}
        transition={{
          duration: reduceMotion ? 0.2 : 0.65,
          delay,
          ease: [0.23, 1, 0.32, 1],
        }}
        className={cn(className)}
      >
        {children}
      </Component>
    </LazyMotion>
  );
}
