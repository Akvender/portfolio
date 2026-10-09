import type { Project } from "./types";

/** Projekt 03 — placeholder zgodnie z Figmą („Tytuł realizacji”, „00”). */
export const projekt03: Project = {
  slug: "projekt-03",
  number: "03",
  title: "Tytuł realizacji",
  description: "Krótki opis realizacji — placeholder.",
  lead: "Lead realizacji — placeholder. Jedno–dwa zdania o kontekście i zakresie prac.",
  year: "2024",
  tags: ["Branża", "Typ systemu"],
  featured: false,
  cover: "/images/cover-projekt-03.svg",
  coverAlt: "Okładka projektu 03 (placeholder)",
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
      type: "results",
      title: "Wyniki",
      metrics: [
        { value: 0, label: "Metryka placeholderowa" },
        { value: 0, label: "Metryka placeholderowa" },
      ],
      proofs: ["Dowód placeholderowy.", "Dowód placeholderowy."],
    },
  ],
};
