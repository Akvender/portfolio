import type { Project } from "./types";

/** Projekt 02 — placeholder zgodnie z Figmą („Tytuł realizacji”, „00”). */
export const projekt02: Project = {
  slug: "projekt-02",
  number: "02",
  title: "Generator grafik produktowych dla e‑commerce",
  description: "Narzędzie, które z danych produktu tworzy grafiki do sklepu i reklam.",
  lead: "Lead realizacji — placeholder. Jedno–dwa zdania o kontekście i zakresie prac.",
  year: "2025",
  tags: ["E-commerce", "AI generatywne"],
  // Opis i przypisane umiejętności do potwierdzenia przez Roberta.
  skills: ["imagegen", "llm", "python", "api"],
  flow: ["Dane produktu", "Model AI", "Gotowa grafika", "Sklep i reklamy"],
  featured: false,
  cover: "/images/cover-projekt-02.svg",
  coverAlt: "Generator grafik produktowych dla e‑commerce — okładka (placeholder)",
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
        { title: "Krok problemu", text: "Treść placeholderowa — uzupełnij w pliku projektu." },
        { title: "Krok problemu", text: "Treść placeholderowa — uzupełnij w pliku projektu." },
        { title: "Krok problemu", text: "Treść placeholderowa — uzupełnij w pliku projektu." },
      ],
    },
    {
      type: "solution",
      title: "Rozwiązanie",
      modules: [
        { title: "Moduł", text: "Treść placeholderowa." },
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
        { value: 0, label: "Metryka placeholderowa" },
        { value: 0, label: "Metryka placeholderowa" },
      ],
      proofs: ["Dowód placeholderowy.", "Dowód placeholderowy.", "Dowód placeholderowy."],
    },
    {
      type: "impact",
      title: "Wpływ",
      text: "Blok opcjonalny — placeholder. Renderowany tylko, gdy projekt go zawiera.",
    },
  ],
};
