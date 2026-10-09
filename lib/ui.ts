/** Wspólne klasy typograficzne (tokeny z Figmy). */

export const container = "mx-auto w-full max-w-[1248px] px-6 md:px-8";

/** Etykieta sekcji: IBM Plex Mono 500, 12–13 px, uppercase, letter-spacing 1.5 px. */
export const sectionLabel =
  "font-mono text-[12.5px] font-medium uppercase tracking-[1.5px]";

export const h1 =
  "text-[clamp(34px,5vw,52px)] leading-[112%] font-extrabold tracking-[-0.01em]";

export const h2 =
  "text-[clamp(26px,3.5vw,34px)] leading-[120%] font-extrabold tracking-[-0.01em]";

export const h3 = "text-[20px] md:text-[22px] leading-[130%] font-semibold";

export const body = "text-base leading-[155%]";

/** Ścieżka do pliku z public/ z basePath — next/image (unoptimized) nie dokleja go sam. */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

/** Padding sekcji: 96 desktop → 64 tablet → 48 mobile. */
export const sectionY = "py-12 md:py-16 lg:py-24";
