import type { Lang } from "./i18n";

const pl = {
  nav: { work: "Realizacje", skills: "Umiejętności", about: "O mnie" },
  hero: {
    primary: "Zobacz realizacje",
    secondary: "Porozmawiajmy",
    leadShort: "Ograniczam ręczną pracę i łączę narzędzia, które dziś działają osobno: od analizy procesu po wdrożenie.",
    statusShort: "Otwarty na zlecenia B2B",
    stats: {
      calls: "rozmów przeanalizowanych przez AI",
      leads: "zgłoszeń w CRM w ok. miesiąc",
      images: "grafik produktowych z danych",
      projects: "realizacji, 3 wdrożone",
    },
  },
  eyebrow: {
    work: "Wybrane realizacje",
    skills: "Umiejętności",
    demo: "Zobacz automatyzację w akcji",
    about: "O mnie",
    contact: "Kontakt",
  },
  featured: {
    title: "Trzy projekty, od których warto zacząć.",
    lead: "Trzy projekty, od których warto zacząć. Pozostałe opisuję niżej, razem z umiejętnościami, których w nich użyłem.",
    open: "Zobacz projekt",
    all: (n: number) => `Wszystkie projekty (${n})`,
    caseStudy: "Case study",
    dairyMetric: { value: "5 → 1", label: "krok zamiast pięciu" },
  },
  status: "Status",
  tools: { llm: "API modeli językowych" },
  skills: {
    lead: "Pięć obszarów. Liczba przy pozycji to liczba realizacji, w których tego użyłem.",
    reorder: "Projekty z tą umiejętnością są na górze listy. Pozostałe zostają niżej, przygaszone.",
    others: "Pozostałe projekty",
    expand: "Rozwiń grupę umiejętności",
  },
  about: {
    summary: "Zaczynałem od automatyzacji, gdy Make nazywał się Integromat. Dziś buduję w n8n, a gdy gotowe integracje nie wystarczają, piszę własny kod, API i serwery MCP. Rozwiązania zamykam w Dockerze na Linuksie, z monitoringiem i alertami.",
  },
  contactCompact: {
    lead: "Napisz, co chcesz usprawnić i z jakich systemów korzystasz, a ustalimy pierwszy krok.",
  },
  story: {
    title: "Bez ręcznego przepisywania.",
    subtitle: "Kliknij i uruchom przepływ sam",
    backgroundWord: "AUTOMATYZACJA",
    cards: [
      { title: "Formularz", meta: "Gotowe", text: "Walidacja: dane poprawne" },
      { title: "CRM", meta: "Gotowe", text: "Kontakt: nowy" },
      { title: "SMS", meta: "Gotowe", text: "Wiadomość: w kolejce" },
    ],
  },
};

export type UIExtra = typeof pl;

const en: UIExtra = {
  nav: { work: "Projects", skills: "Skills", about: "About" },
  hero: {
    primary: "See projects",
    secondary: "Let's talk",
    leadShort: "I reduce manual work and connect tools that currently run separately, from process analysis to deployment.",
    statusShort: "Open to B2B contracts",
    stats: {
      calls: "calls analyzed by AI",
      leads: "leads in the CRM in about a month",
      images: "product images generated from data",
      projects: "projects, 3 deployed",
    },
  },
  eyebrow: {
    work: "Selected work",
    skills: "Skills",
    demo: "See an automation in action",
    about: "About me",
    contact: "Contact",
  },
  featured: {
    title: "Three projects worth starting with.",
    lead: "Three projects worth starting with. The full list is below, together with the skills I used in them.",
    open: "View project",
    all: (n: number) => `All projects (${n})`,
    caseStudy: "Case study",
    dairyMetric: { value: "5 → 1", label: "step instead of five" },
  },
  status: "Status",
  tools: { llm: "Language-model APIs" },
  skills: {
    lead: "Five areas. The number beside each item shows how many projects use it.",
    reorder: "Projects with this skill are at the top of the list. The others stay below, dimmed.",
    others: "Other projects",
    expand: "Expand skill group",
  },
  about: {
    summary: "I started with automation when Make was still called Integromat. Today I build in n8n, and when ready-made integrations are not enough, I write my own code, APIs and MCP servers. I package solutions in Docker on Linux, with monitoring and alerts.",
  },
  contactCompact: {
    lead: "Tell me what you want to improve and which systems you use, and we'll agree on a first step.",
  },
  story: {
    title: "No more manual retyping.",
    subtitle: "Click and run the flow yourself",
    backgroundWord: "AUTOMATION",
    cards: [
      { title: "Form", meta: "Done", text: "Validation: data is correct" },
      { title: "CRM", meta: "Done", text: "Contact: new" },
      { title: "Text", meta: "Done", text: "Message: queued" },
    ],
  },
};

export const uiExtra: Record<Lang, UIExtra> = { pl, en };
