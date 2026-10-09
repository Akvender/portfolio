/** Dane strony głównej — placeholdery w jednym miejscu, łatwe do podmiany. */

export const site = {
  name: "Robert Świeboda",
  /** Pełny adres strony (sitemap, Open Graph). Ustaw NEXT_PUBLIC_SITE_URL przy buildzie. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io",
  email: "robert.swieboda.dev@gmail.com",
  github: "https://github.com/Akvender",
  /** Adres profilu LinkedIn; pusty = przycisk ukryty. */
  linkedin: "",
} as const;

/** Narzędzia, z którymi pracuję na co dzień — pasek pod nagłówkiem (nazwy, nie logotypy). */
export const tools = ["n8n", "OpenAI", "Anthropic", "Python", "Docker", "Make", "Zapier", "Meta CAPI"] as const;

export const hero = {
  title: "Buduję rozwiązania AI, które pracują w prawdziwych firmach.",
  lead: "Jestem AI developerem i freelancerem. Łączę modele językowe, agentów i automatyzacje z systemami, których firma już używa: CRM-em, ERP, telefonią, sklepem. Całą drogę przechodzę sam: od pomysłu, przez kod, po wdrożenie i utrzymanie.",
  status: "Przyjmuję nowe projekty",
  photo: "/images/portrait-placeholder.svg",
  photoAlt: "Miejsce na zdjęcie portretowe Roberta Świebody",
} as const;

/** Sekcja „O mnie”. */
export const about = {
  photo: "/images/photo-placeholder-praca.svg",
  photoAlt: "Miejsce na zdjęcie Roberta przy pracy",
  title: "Jeden człowiek na całą drogę: od pomysłu do działającego systemu.",
  paragraphs: [
    "Na co dzień buduję integracje z API OpenAI i Anthropic, agentów AI, chatboty i voiceboty, a do automatyzacji używam głównie n8n. Piszę w Pythonie, łączę systemy przez REST API i stawiam rozwiązania na własnych serwerach w Dockerze.",
    "Samodzielnie zbudowałem i utrzymuję aplikację produkcyjną: od projektu, przez wdrożenie, po bieżącą opiekę, w około dwa miesiące. Rozumiem też stronę biznesową: wyceniam projekty, negocjuję i rozliczam się bezpośrednio z klientem.",
  ],
  steps: [
    { title: "Rozmowa", text: "Poznaję proces i ustalam, co ma się zmienić i jak to zmierzymy." },
    { title: "Prototyp", text: "Szybko buduję działającą wersję na Twoich danych, żeby było co ocenić." },
    { title: "Wdrożenie", text: "Podłączam rozwiązanie do Twoich systemów i przekazuję je ludziom." },
    { title: "Utrzymanie", text: "Monitoruję działanie, łapię błędy i rozwijam to, co już działa." },
  ],
} as const;

/** Certyfikaty i osiągnięcia. Nowy wpis = nowy obiekt w tablicy. */
export const proofs = [
  {
    src: "/images/cert-aidevs4.webp",
    width: 1600,
    height: 1131,
    alt: "Certyfikat ukończenia kursu AI_devs 4: Builders wystawiony dla Roberta Świebody, 1 października 2026",
    title: "AI_devs 4: Builders",
    meta: "Certyfikat ukończenia · 2026",
    text: "5-tygodniowy kurs budowania produkcyjnych rozwiązań AI: LLM w kodzie, context engineering, ewaluacje i systemy wieloagentowe. W ramach kursu ponad 25 praktycznych zadań.",
    badge: "/images/badge-aidevs4.webp",
  },
] as const;
