import type { Project } from "./types";

/** Projekt 04 — placeholder zgodnie z Figmą („Tytuł realizacji”, „00”). */
export const projekt04: Project = {
  slug: "projekt-04",
  number: "04",
  title: "Tytuł realizacji",
  description: "Krótki opis realizacji — placeholder.",
  lead: "Lead realizacji — placeholder. Jedno–dwa zdania o kontekście i zakresie prac.",
  year: "2024",
  tags: ["Branża", "Typ systemu"],
  featured: false,
  cover: "/images/cover-projekt-04.svg",
  coverAlt: "Okładka projektu 04 (placeholder)",
  meta: {
    client: "Nazwa klienta",
    role: "Rola zespołu",
    period: "00.0000–00.0000",
    status: "Status",
    stack: "Stack technologiczny",
  },
  metrics: [
    { value: 0, label: "Metryka placeholderowa" },
    { value: 0, label: "Metryka placeholderowa" },
    { value: 0, label: "Metryka placeholderowa" },
  ],
  sections: [
    {
      type: "problem",
      title: "Problem",
      steps: [
        { title: "Krok problemu", text: "Treść placeholderowa — uzupełnij w pliku projektu." },
        { title: "Krok problemu", text: "Treść placeholderowa — uzupełnij w pliku projektu." },
      ],
    },
    {
      type: "solution",
      title: "Rozwiązanie",
      modules: [
        { title: "Moduł", text: "Treść placeholderowa." },
        { title: "Moduł", text: "Treść placeholderowa." },
      ],
    },
    {
      type: "approach",
      title: "Podejście",
      quote: "Cytat placeholderowy — uzupełnij w pliku projektu.",
      quoteAuthor: "Zespół projektowy (placeholder)",
      cards: [
        { title: "Karta", text: "Treść placeholderowa." },
        { title: "Karta", text: "Treść placeholderowa." },
      ],
    },
  ],
};
