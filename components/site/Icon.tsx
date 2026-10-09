/**
 * Zestaw ikon liniowych rysowanych na jednej siatce 24×24, kreska 1.5 — jeden styl na całą stronę.
 * Kolor z currentColor.
 */
const PATHS = {
  chat: "M4 5h16v11H9l-5 4V5Z M8 9h8 M8 12h5",
  bolt: "M13 3 5 13h6l-1 8 8-10h-6l1-8Z",
  plug: "M9 3v5 M15 3v5 M6 8h12v3a6 6 0 0 1-12 0V8Z M12 17v4",
  pulse: "M3 12h4l2-5 4 10 2-5h6",
  cycle: "M20 12a8 8 0 0 1-14.3 4.9 M4 12a8 8 0 0 1 14.3-4.9 M18 3v4h-4 M6 21v-4h4",
  code: "M8 8l-4 4 4 4 M16 8l4 4-4 4 M14 5l-4 14",
  server: "M4 4h16v6H4V4Z M4 14h16v6H4v-6Z M8 7h.01 M8 17h.01",
  brain: "M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h1V4H9Z M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-1V4h1Z",
  check: "M5 12.5l4.5 4.5L19 7.5",
  handshake: "M3 12l4-4 4 3 3-3 4 1 3 3 M7 13l3 3a1.5 1.5 0 0 0 2-2 M12 15l2 2a1.5 1.5 0 0 0 2-2l-3-3",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
