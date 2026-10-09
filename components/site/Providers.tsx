"use client";

import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "motion/react";
import Lenis from "lenis";

/**
 * Lenis (płynne przewijanie) + MotionConfig.
 * Lenis wyłączony przy prefers-reduced-motion; reducedMotion="user" ogranicza
 * animacje transform w całym drzewie — zostają krótkie fade'y (opacity).
 */
export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ anchors: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
