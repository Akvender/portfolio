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
    title: "Connecting CRMs and integrating systems",
    description: "Customer data flows between the CRM and other systems without manual re-typing.",
    lead: "Project lead — placeholder. One or two sentences about the context and scope.",
    tags: [
      "Integrations",
      "CRM"
    ],
    flow: [
      "CRM",
      "Integration",
      "Other systems"
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
