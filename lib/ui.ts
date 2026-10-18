export const container = "mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-24";

export const sectionLabel = "text-[14px] font-semibold";

export const h1 =
  "font-display text-[clamp(40px,5.6vw,72px)] leading-[1.02] font-extrabold tracking-[-0.025em]";

export const h2 =
  "font-display text-[34px] lg:text-[48px] leading-[1.06] font-extrabold tracking-[-0.015em]";

export const h3 = "text-[20px] md:text-[22px] leading-[125%] font-semibold tracking-[-0.025em]";

export const body = "text-base leading-[155%]";

export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const sectionY = "py-16 md:py-20 lg:py-24";
