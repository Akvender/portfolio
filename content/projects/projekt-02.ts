import type { Project } from "./types";

/** Projekt 02 — opis do uzupełnienia. */
export const projekt02: Project = {
  slug: "projekt-02",
  number: "02",
  title: "Generator grafik produktowych dla e‑commerce",
  description: "Narzędzie, które z danych produktu tworzy grafiki do sklepu i reklam.",
  lead: "Lead realizacji — placeholder. Jedno–dwa zdania o kontekście i zakresie prac.",
  year: "2025",
  tags: ["E-commerce", "AI generatywne"],
  skills: ["imagegen", "llm", "python", "api"],
  flow: ["Dane produktu", "Model AI", "Gotowa grafika", "Sklep i reklamy"],
  featured: false,
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
  /** Wersja angielska: to, co widać na liście i w nagłówku. Szczegóły (sections) dojdą razem z opisami projektów. */
  en: {
    title: "Product image generator for e-commerce",
    description: "A tool that turns product data into images for the store and for ads.",
    lead: "Project lead — placeholder. One or two sentences about the context and scope.",
    tags: [
      "E-commerce",
      "Generative AI"
    ],
    flow: [
      "Product data",
      "AI model",
      "Finished image",
      "Store and ads"
    ],
    meta: {
      client: "Client name",
      role: "Role",
      status: "Status",
      stack: "Tech stack"
    }
  },
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
