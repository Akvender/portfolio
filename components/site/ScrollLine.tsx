"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";

/** Linia osi procesu rysowana wraz z przewijaniem (scaleX). Reduced motion → pełna od razu. */
export function ScrollLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "start 35%"] });

  return (
    <div ref={ref} aria-hidden="true" className={`relative h-[2px] bg-border ${className}`}>
      <motion.div
        className="absolute inset-0 origin-left bg-accent-amber"
        style={{ scaleX: reduce ? 1 : scrollYProgress }}
      />
    </div>
  );
}
