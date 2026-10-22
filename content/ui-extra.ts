import type { Lang } from "./i18n";

/** Dodatkowe etykiety interfejsu (wyróżnione realizacje, status, krótki kontakt, mapa umiejętności). */
const pl = {
  featured: {
    title: "Wybrane realizacje",
    lead: "Trzy projekty, od których warto zacząć. Pozostałe opisuję niżej, razem z umiejętnościami, których w nich użyłem.",
    open: "Zobacz projekt",
    all: (n: number) => `Wszystkie projekty (${n})`,
  },
  status: "Status",
  tools: { llm: "API modeli językowych" },
  skills: {
    reorder: "Projekty z tą umiejętnością są na górze listy. Pozostałe zostają niżej, przygaszone.",
    others: "Pozostałe projekty",
  },
  contactCompact: {
    lead: "Napisz, co chcesz usprawnić i z jakich systemów korzystasz, a ustalimy pierwszy krok.",
  },
};

export type UIExtra = typeof pl;

const en: UIExtra = {
  featured: {
    title: "Selected work",
    lead: "Three projects worth starting with. The full list is below, together with the skills I used in them.",
    open: "View project",
    all: (n: number) => `All projects (${n})`,
  },
  status: "Status",
  tools: { llm: "Language-model APIs" },
  skills: {
    reorder: "Projects with this skill are at the top of the list. The others stay below, dimmed.",
    others: "Other projects",
  },
  contactCompact: {
    lead: "Tell me what you want to improve and which systems you use, and we'll agree on a first step.",
  },
};

export const uiExtra: Record<Lang, UIExtra> = { pl, en };
