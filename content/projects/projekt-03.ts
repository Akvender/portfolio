import type { Project } from "./types";

/** Projekt 03 — opis do uzupełnienia. */
export const projekt03: Project = {
  slug: "projekt-03",
  number: "03",
  title: "Połączenie CRM-ów i integracje systemów",
  description: "Dane klientów płyną między CRM-em a innymi systemami bez ręcznego przepisywania.",
  lead: "Lead realizacji — placeholder. Jedno–dwa zdania o kontekście i zakresie prac.",
  year: "2024",
  tags: ["Integracje", "CRM"],
  skills: ["crm", "n8n", "api"],
  flow: ["CRM", "Integracja", "Pozostałe systemy"],
  featured: false,
  cover: "/images/cover-projekt-03.svg",
  coverAlt: "Połączenie CRM-ów i integracje systemów — okładka (placeholder)",
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
