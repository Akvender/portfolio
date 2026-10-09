/**
 * Zestaw ikon liniowych rysowanych na jednej siatce 24×24, kreska 1.5 — jeden styl na całą stronę.
 * Kolor z currentColor.
 */
export const PATHS = {
  chat: "M4 5h16v11H9l-5 4V5Z M8 9h8 M8 12h5",
  // Ikony kroków w schematach projektów (okładki „Jak to działa”).
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  tablet: "M5 3h14v18H5V3Z M11 18h2",
  factory: "M3 21V10l5 3v-3l5 3v-3l5 3V4h3v17H3Z M7 17h2 M12 17h2",
  document: "M6 3h9l4 4v14H6V3Z M14 3v5h5 M9 12h7 M9 16h7",
  box: "M3 7l9-4 9 4-9 4-9-4Z M3 7v10l9 4 9-4V7 M12 11v10",
  sparkles: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z",
  image: "M3 5h18v14H3V5Z M3 16l5-5 4 4 3-3 6 6 M15.5 9.5h.01",
  cart: "M3 4h2l2.5 11h11L21 7H6.5 M10 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z M19 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
  users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.5a3.5 3.5 0 0 1 0 6.5 M18 14a6 6 0 0 1 3.5 6",
  megaphone: "M3 10v4h3l7 5V5L6 10H3Z M17 9a4 4 0 0 1 0 6 M19.5 6.5a7.5 7.5 0 0 1 0 11",
  form: "M5 3h14v18H5V3Z M8 8h8 M8 12h8 M8 16h4",
  mic: "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z M5 11a7 7 0 0 0 14 0 M12 18v3",
  wave: "M3 12h1 M7 8v8 M11 4v16 M15 8v8 M19 10v4",
  note: "M4 4h16v12l-4 4H4V4Z M16 20v-4h4 M8 9h8 M8 13h5",
  tasks: "M4 6l1.5 1.5L8 5 M4 12l1.5 1.5L8 11 M4 18l1.5 1.5L8 17 M11 6h9 M11 12h9 M11 18h9",
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
