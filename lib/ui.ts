/** Wspólne klasy typograficzne (tokeny z Figmy). */

export const container = "mx-auto w-full max-w-[1248px] px-6 md:px-8";

/** Drobny opis nad treścią (case study): krótki, bez wersalików. */
export const sectionLabel =
  "text-[14px] font-semibold";

export const h1 =
  "font-display text-[clamp(38px,5.6vw,72px)] leading-[1.02] font-extrabold tracking-[-0.04em]";

export const h2 =
  "font-display text-[clamp(30px,4vw,48px)] leading-[1.05] font-extrabold tracking-[-0.035em]";

export const h3 = "text-[20px] md:text-[22px] leading-[125%] font-semibold tracking-[-0.025em]";

export const body = "text-base leading-[155%]";

/** Ścieżka do pliku z public/ z basePath — next/image (unoptimized) nie dokleja go sam. */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

/** Padding sekcji: 96 desktop → 64 tablet → 48 mobile. */
export const sectionY = "py-12 md:py-16 lg:py-24";
