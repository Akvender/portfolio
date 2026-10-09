import type { Project } from "./types";

/** Projekt 04 — opis do uzupełnienia. */
export const projekt04: Project = {
  slug: "projekt-04",
  number: "04",
  title: "Lejki leadów połączone z automatyzacjami",
  description: "Lead z reklamy trafia do CRM, dostaje odpowiedź i zadanie dla handlowca automatycznie.",
  lead: "Lead realizacji — placeholder. Jedno–dwa zdania o kontekście i zakresie prac.",
  year: "2024",
  tags: ["Marketing", "Automatyzacje"],
  skills: ["leads", "n8n", "crm", "meta"],
  flow: ["Reklama", "Formularz", "CRM", "Odpowiedź i zadanie"],
  featured: false,
  cover: "/images/cover-projekt-04.svg",
  coverAlt: "Lejki leadów połączone z automatyzacjami — okładka (placeholder)",
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
    title: "Lead funnels connected to automations",
    description: "A lead from an ad lands in the CRM and gets a reply and a task for the sales rep automatically.",
    lead: "Project lead — placeholder. One or two sentences about the context and scope.",
    tags: [
      "Marketing",
      "Automations"
    ],
    flow: [
      "Ad",
      "Form",
      "CRM",
      "Reply and task"
    ],
    coverAlt: "Lead funnels connected to automations — cover (placeholder)",
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
      quote: "Cytat placeholderowy — uzupełnij w pliku projektu.",
      quoteAuthor: "Zespół projektowy (placeholder)",
      cards: [
        { title: "Karta", text: "Treść placeholderowa." },
        { title: "Karta", text: "Treść placeholderowa." },
      ],
    },
  ],
};
