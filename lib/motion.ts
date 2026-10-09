/** Wspólne wartości animacji — charakter: precyzyjny, inżynierski, spokojny. */

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Czasy trwania (s): mikro 150–200 ms, elementy 500–700 ms, duże 800–1000 ms */
export const DURATION = {
  micro: 0.18,
  element: 0.6,
  large: 0.9,
} as const;

/** Stagger dzieci: 60–80 ms */
export const STAGGER = 0.07;

/** Płynne pojawienie się przy przewijaniu: przenikanie + krótki wjazd. Bez JS treść jest widoczna (noscript w layout.tsx). */
export const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.element, ease: EASE_OUT },
  },
} as const;

export const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER } },
} as const;

/** Opcje whileInView — reveal przy przewijaniu, raz */
export const inViewOptions = { once: true, amount: 0.2 } as const;
