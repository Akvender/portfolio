/**
 * Dwie wersje językowe. Polski jest pod głównymi adresami (/, /projekty/…),
 * angielski pod /en/. Tu są teksty interfejsu; treści (hero, o mnie, projekty) są w content/.
 */
export const langs = ["pl", "en"] as const;
export type Lang = (typeof langs)[number];

/** Ścieżka w danym języku: localePath("en", "/projekty/x/") → "/en/projekty/x/". */
export const localePath = (lang: Lang, path: string) => (lang === "pl" ? path : `/en${path}`);

/** Ta sama strona w drugim języku (do przełącznika PL / EN). */
export const switchPath = (pathname: string, to: Lang) => {
  const base = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localePath(to, base);
};

const pl = {
  htmlLang: "pl",
  ogLocale: "pl_PL",
  meta: {
    title: "AI developer i freelancer",
    description:
      "Robert Świeboda, AI developer i freelancer: automatyzacje procesów, integracje systemów i narzędzia z AI. Projekty, umiejętności i kontakt.",
  },
  skipToContent: "Przejdź do treści",
  banner: "Strona w budowie — część treści to jeszcze wypełniacze.",
  nav: {
    label: "Nawigacja główna",
    home: "strona główna",
    skills: "Umiejętności i projekty",
    about: "O mnie",
    contact: "Napisz do mnie",
    contactShort: "Kontakt",
    menuOpen: "Otwórz menu",
    menuClose: "Zamknij menu",
    menu: "Menu",
    close: "Zamknij",
    switchTo: "English version",
  },
  rail: { label: "Kontakt i profile", contact: "Kontakt" },
  hero: {
    primary: "Zobacz projekty",
    secondary: "Napisz do mnie",
    role: "AI developer · freelancer",
    toolsLabel: "Na co dzień pracuję z",
    scroll: "Przewiń dalej",
    pause: "Zatrzymaj przewijanie narzędzi",
    resume: "Wznów przewijanie narzędzi",
  },
  skills: {
    title: "Co umiem i gdzie tego użyłem.",
    lead: "Projekty i umiejętności, których w nich użyłem. Kliknij umiejętność, a projekty, w których była potrzebna, przejdą na górę listy.",
    hint: "Wybierz umiejętność. Liczba obok to projekty, w których jej użyłem.",
    also: "Pracuję też z:",
    all: (n: number) => `Wszystkie projekty (${n})`,
    matching: (skill: string, n: number, total: number) => `${skill}: ${n} z ${total} projektów`,
    showAll: "Pokaż wszystkie",
    details: "Szczegóły",
    flow: "Przepływ:",
    projects: (n: number): string => (n === 1 ? "projekt" : n < 5 ? "projekty" : "projektów"),
  },
  about: { howIWork: "Jak pracuję", step: "Krok", certs: "Certyfikaty i kursy" },
  cert: { open: "pokaż certyfikat i szczegóły", see: "Zobacz certyfikat", close: "Zamknij", full: "Otwórz w pełnej rozdzielczości" },
  contact: {
    title: "Masz proces do usprawnienia albo szukasz AI developera do zespołu?",
    lead: "Biorę zlecenia jako freelancer i chętnie dołączę do zespołu na zasadach B2B. Napisz kilka zdań o projekcie albo roli, a odpowiem i umówimy krótką rozmowę.",
    write: "Napisz wiadomość",
    copy: "Skopiuj adres",
    copied: "Skopiowano",
    team: [
      { label: "Forma współpracy", value: "Zlecenia freelance albo współpraca B2B w zespole" },
      { label: "Najlepiej czuję się w", value: "automatyzacjach, integracjach systemów i stawianiu ich na serwerach" },
      { label: "Nie biorę", value: "samych stron i landing page'y bez systemu za nimi" },
    ],
    topicsLabel: "Albo wybierz, o co chodzi:",
    topics: [
      { label: "Projekt lub zlecenie", subject: "Projekt" },
      { label: "Współpraca B2B lub rekrutacja", subject: "Współpraca B2B" },
      { label: "Pytanie o jeden z projektów", subject: "Pytanie o projekt" },
    ],
  },
  footer: { top: "Wróć na górę" },
  case: {
    back: "Wszystkie projekty",
    client: "Klient",
    role: "Rola",
    period: "Okres",
    status: "Status",
    stack: "Stack",
    orderCard: "Karta zamówień dla jednej trasy",
    sampleData: "Dane przykładowe",
    modules: "Moduły systemu",
    flowCaption: "Jak to działa",
    flowStart: "Start",
    flowEnd: "Efekt",
    next: "Następny projekt:",
    notTranslated: "",
    dash: "Sklep świadomie nie zamawia",
  },
  notFound: { title: "Tej strony nie ma.", back: "Wróć na stronę główną" },
};

export type UI = typeof pl;

const en: UI = {
  htmlLang: "en",
  ogLocale: "en_US",
  meta: {
    title: "AI developer and freelancer",
    description:
      "Robert Świeboda, AI developer and freelancer: process automation, system integrations and AI-powered tools. Projects, skills and contact.",
  },
  skipToContent: "Skip to content",
  banner: "Work in progress — some content is still placeholder.",
  nav: {
    label: "Main navigation",
    home: "home page",
    skills: "Skills and projects",
    about: "About",
    contact: "Get in touch",
    contactShort: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menu: "Menu",
    close: "Close",
    switchTo: "Wersja polska",
  },
  rail: { label: "Contact and profiles", contact: "Contact" },
  hero: {
    primary: "See projects",
    secondary: "Get in touch",
    role: "AI developer · freelancer",
    toolsLabel: "Tools I use every day",
    scroll: "Scroll down",
    pause: "Pause the tools ticker",
    resume: "Resume the tools ticker",
  },
  skills: {
    title: "What I can do and where I've used it.",
    lead: "My projects and the skills behind them. Pick a skill and the projects that needed it move to the top of the list.",
    hint: "Pick a skill. The number shows how many projects use it.",
    also: "I also work with:",
    all: (n: number) => `All projects (${n})`,
    matching: (skill: string, n: number, total: number) => `${skill}: ${n} of ${total} projects`,
    showAll: "Show all",
    details: "Details",
    flow: "Flow:",
    projects: (n: number) => (n === 1 ? "project" : "projects"),
  },
  about: { howIWork: "How I work", step: "Step", certs: "Certificates and courses" },
  cert: { open: "show certificate and details", see: "View certificate", close: "Close", full: "Open in full resolution" },
  contact: {
    title: "Got a process to improve, or looking for an AI developer for your team?",
    lead: "I take on freelance work and I'm happy to join a team on a B2B basis. Write a few sentences about the project or the role, and I'll reply so we can set up a short call.",
    write: "Write a message",
    copy: "Copy address",
    copied: "Copied",
    team: [
      { label: "How we can work", value: "Freelance contracts or B2B collaboration in your team" },
      { label: "What I enjoy most", value: "Automations, system integrations and running them on servers" },
      { label: "What I don't take on", value: "Standalone websites or landing pages with no system behind them" },
    ],
    topicsLabel: "Or pick what it's about:",
    topics: [
      { label: "A project or a contract", subject: "Project" },
      { label: "B2B collaboration or hiring", subject: "B2B collaboration" },
      { label: "A question about one of the projects", subject: "Question about a project" },
    ],
  },
  footer: { top: "Back to top" },
  case: {
    back: "All projects",
    client: "Client",
    role: "Role",
    period: "Period",
    status: "Status",
    stack: "Stack",
    orderCard: "Order card for one delivery route",
    sampleData: "Sample data",
    modules: "System modules",
    flowCaption: "How it works",
    flowStart: "Start",
    flowEnd: "Result",
    next: "Next project:",
    notTranslated: "The full case study is available in Polish for now; the English version is on its way.",
    dash: "The shop deliberately orders nothing",
  },
  notFound: { title: "This page doesn't exist.", back: "Back to the home page" },
};

export const ui: Record<Lang, UI> = { pl, en };
