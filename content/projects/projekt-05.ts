import type { Project } from "./types";

/** Projekt 05 — opis do uzupełnienia. */
export const projekt05: Project = {
  slug: "projekt-05",
  number: "05",
  title: "Call-center wspomagane transkrypcją i AI",
  description: "Rozmowy są transkrybowane, a AI robi z nich notatki i wskazuje kolejne kroki.",
  lead: "Lead realizacji — placeholder. Jedno–dwa zdania o kontekście i zakresie prac.",
  year: "2023",
  tags: ["Call-center", "AI"],
  skills: ["speech", "llm", "bots", "n8n"],
  flow: ["Rozmowa", "Transkrypcja", "Notatka AI", "Kolejne kroki"],
  flowIcons: ["mic", "wave", "note", "tasks"],
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
    title: "Call center supported by transcription and AI",
    description: "Calls are transcribed, and AI turns them into notes and suggests the next steps.",
    lead: "Project lead — placeholder. One or two sentences about the context and scope.",
    tags: [
      "Call center",
      "AI"
    ],
    flow: [
      "Call",
      "Transcription",
      "AI note",
      "Next steps"
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
