import type { Project } from "./types";

export const projekt06: Project = {
  slug: "projekt-06",
  number: "06",
  title: "Agenci AI do pracy na co dzień",
  description: "Agenci, którzy z nagrań głosowych robią plan tygodnia, a ze zmian w kodzie piszą dokumentację.",
  lead: "Agentów AI używam tam, gdzie powtarzalna praca polega na czytaniu i porządkowaniu informacji. Jeden analizuje nagrania głosowe i układa z nich plan tygodnia. Drugi śledzi zmiany w kodzie i na ich podstawie tworzy dokumentację programistyczną.",
  year: "",
  tags: ["Agenci AI", "Narzędzia wewnętrzne"],
  skills: ["agents", "llm", "speech"],
  flow: ["Nagranie lub zmiany w kodzie", "Agent AI", "Plan tygodnia lub dokumentacja"],
  flowIcons: ["mic", "brain", "note"],
  featured: false,
  meta: { client: "", role: "", period: "", status: "Używane na co dzień", stack: "API modeli językowych · agenci AI" },
  metrics: [],
  en: {
    title: "AI agents for everyday work",
    description: "Agents that turn voice recordings into a weekly plan and code changes into documentation.",
    lead: "I use AI agents where repetitive work means reading and organising information. One analyses voice recordings and builds a weekly plan from them. Another follows code changes and writes developer documentation based on them.",
    tags: ["AI agents", "Internal tools"],
    flow: ["Recording or code changes", "AI agent", "Weekly plan or documentation"],
    meta: { status: "Used every day", stack: "Language-model APIs · AI agents" },
    sections: [
      {
        type: "results",
        title: "What they do",
        metrics: [],
        proofs: [
          "An agent that analyses voice recordings and turns them into a weekly plan.",
          "An agent that writes developer documentation from changes in the code.",
        ],
      },
    ],
  },
  sections: [
    {
      type: "results",
      title: "Co robią",
      metrics: [],
      proofs: [
        "Agent, który analizuje nagrania głosowe i układa z nich plan tygodnia.",
        "Agent, który na podstawie zmian w kodzie tworzy dokumentację programistyczną.",
      ],
    },
  ],
};
