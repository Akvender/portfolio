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
  mail: "M3 6h18v12H3V6Z M3 7l9 6 9-6",
  github: "M9 19c-4 1.5-4-2-6-2.5 M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.5 5.5 2.8 5.5 2.8a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.2c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21",
  linkedin: "M4 9h4v11H4V9Z M6 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z M11 9h4v1.6c.6-1 1.8-1.8 3.4-1.8 2.6 0 3.6 1.7 3.6 4.4V20h-4v-6c0-1.2-.4-2-1.6-2s-1.8.9-1.8 2v6h-3.6V9Z",
  check: "M5 12.5l4.5 4.5L19 7.5",
  pointer: "M9 11V5.5a1.5 1.5 0 0 1 3 0V10 M12 10V8.5a1.5 1.5 0 0 1 3 0V11 M15 11v-1a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.6-2.2L4 15.5a1.5 1.5 0 0 1 2.2-2L9 16V11",
  expand: "M14 4h6v6 M20 4l-7 7 M10 20H4v-6 M4 20l7-7",
  close: "M6 6l12 12 M18 6L6 18",
  copy: "M9 9h11v11H9V9Z M5 15H4V4h11v1",
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
