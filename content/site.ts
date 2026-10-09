/** Dane strony głównej — placeholdery w jednym miejscu, łatwe do podmiany. */

export const site = {
  name: "Robert Świeboda",
  /** Pełny adres strony (sitemap, Open Graph). Ustaw NEXT_PUBLIC_SITE_URL przy buildzie. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io",
  email: "robert.swieboda.dev@gmail.com",
  /** Placeholder — podmień na profil. */
  linkedin: "https://www.linkedin.com/",
  /** Link do prezentacji PDF — placeholder. */
  pdf: "#",
} as const;

export const hero = {
  label: "AI & automatyzacje dla firm produkcyjnych",
  title: "Nagłówek pozycjonujący zespół w jednym zdaniu.",
  lead: "2–3 zdania: kim jesteśmy, dla kogo pracujemy i czym się różnimy.",
  photo: "/images/hero-team.svg",
  photoAlt: "Zdjęcie zespołu (placeholder)",
} as const;

/** Placeholdery z Figmy („00”) — podmień na prawdziwe liczby. */
export const highlights = [
  { value: 0, suffix: "", label: "wdrożeń" },
  { value: 0, suffix: "", label: "branż" },
  { value: 0, suffix: "", label: "zautomatyzowanych procesów" },
  { value: 0, suffix: "", label: "lat doświadczenia" },
] as const;

export const services = [
  { title: "Analiza procesów", text: "Opis usługi w 2–3 zdaniach.", items: ["narzędzie", "narzędzie", "narzędzie"] },
  { title: "Automatyzacje i AI", text: "Opis usługi w 2–3 zdaniach.", items: ["narzędzie", "narzędzie", "narzędzie"] },
  { title: "Systemy i integracje", text: "Opis usługi w 2–3 zdaniach.", items: ["narzędzie", "narzędzie", "narzędzie"] },
] as const;

export const processSteps = [
  { title: "Obserwacja pracy", text: "Krótki opis kroku." },
  { title: "Mapa procesu", text: "Krótki opis kroku." },
  { title: "Dobór technologii", text: "Krótki opis kroku." },
  { title: "Wdrożenie etapami", text: "Krótki opis kroku." },
  { title: "Szkolenie zespołu", text: "Krótki opis kroku." },
] as const;

export const team = [
  {
    name: "Robert Świeboda",
    role: "Biznes · procesy · automatyzacje i warstwa AI",
    skills: ["n8n, Make, Python", "API OpenAI i Anthropic", "Wycena i negocjacje B2B"],
    photo: "/images/team-01.svg",
  },
  {
    name: "Mateusz Zarzycki",
    role: "Full-stack · integracje ERP i IoT",
    skills: ["Node.js / TypeScript, PWA", "Comarch ERP Optima (XML)", "Wagi przemysłowe (RS232, TCP/IP)"],
    photo: "/images/team-02.svg",
  },
] as const;

export const proofs = [
  { src: "/images/proof-cert.svg", alt: "Certyfikat ukończenia szkolenia z AI (placeholder)" },
  { src: "/images/proof-warsztat.svg", alt: "Zdjęcie z pracy (placeholder)" },
] as const;
