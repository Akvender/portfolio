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
    title: "AI developer i freelancer",
    description:
      "Robert Świeboda, AI developer: agenci AI, integracje i automatyzacje. Umiejętności, projekty i certyfikaty. Zlecenia freelance i współpraca B2B.",
  },
  skipToContent: "Przejdź do treści",
  banner: "Strona w budowie — część treści to jeszcze wypełniacze.",
  nav: {
    label: "Nawigacja główna",
    home: "strona główna",
    skills: "Umiejętności i projekty",
    about: "O mnie",
    contact: "Napisz do mnie",
    contactShort: "Kontakt",
    menuOpen: "Otwórz menu",
    menuClose: "Zamknij menu",
    menu: "Menu",
    close: "Zamknij",
    switchTo: "English version",
  },
  rail: { label: "Kontakt i profile", contact: "Kontakt" },
  hero: {
    primary: "Zobacz, co potrafię",
    secondary: "Napisz do mnie",
    role: "AI developer · freelancer",
    toolsLabel: "Na co dzień pracuję z",
    scroll: "Przewiń dalej",
    pause: "Zatrzymaj przewijanie narzędzi",
    resume: "Wznów przewijanie narzędzi",
  },
  skills: {
    title: "Kliknij umiejętność. Pokażę, gdzie jej użyłem.",
    lead: "Każdy projekt obok to coś, co zbudowałem. Wybierz technologię, a projekty, w których grała rolę, przejdą na górę listy.",
    hint: "Wybierz umiejętność. Liczba obok to projekty, w których jej użyłem.",
    also: "Używam też:",
    all: (n: number) => `Wszystkie projekty (${n})`,
    matching: (skill: string, n: number, total: number) => `${skill}: ${n} z ${total} projektów`,
    showAll: "Pokaż wszystkie",
    details: "Szczegóły",
    flow: "Przepływ:",
    projects: (n: number): string => (n === 1 ? "projekt" : n < 5 ? "projekty" : "projektów"),
  },
  about: { howIWork: "Jak pracuję", step: "Krok", certs: "Certyfikaty i osiągnięcia" },
  cert: { open: "pokaż certyfikat i szczegóły", see: "Zobacz certyfikat", close: "Zamknij", full: "Otwórz w pełnej rozdzielczości" },
  contact: {
    title: "Szukasz kogoś do projektu albo do zespołu?",
    lead: "Biorę zlecenia jako freelancer i jestem otwarty na stałą współpracę B2B. Napisz kilka zdań o projekcie albo roli. Odpowiem i umówimy krótką rozmowę.",
    write: "Napisz wiadomość",
    copy: "Skopiuj adres",
    copied: "Skopiowano",
    topicsLabel: "Albo wybierz, o co chodzi:",
    topics: [
      { label: "Projekt lub zlecenie", subject: "Projekt" },
      { label: "Współpraca B2B lub rekrutacja", subject: "Współpraca B2B" },
      { label: "Pytanie o jeden z projektów", subject: "Pytanie o projekt" },
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
      "Robert Świeboda, AI developer: AI agents, integrations and automations. Skills, projects and certificates. Freelance work and B2B collaboration.",
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
    primary: "See what I can do",
    secondary: "Get in touch",
    role: "AI developer · freelancer",
    toolsLabel: "Tools I use every day",
    scroll: "Scroll down",
    pause: "Pause the tools ticker",
    resume: "Resume the tools ticker",
  },
  skills: {
    title: "Pick a skill. I'll show you where I used it.",
    lead: "Every project here is something I built. Choose a technology and the projects that use it move to the top of the list.",
    hint: "Pick a skill. The number shows how many projects use it.",
    also: "I also use:",
    all: (n: number) => `All projects (${n})`,
    matching: (skill: string, n: number, total: number) => `${skill}: ${n} of ${total} projects`,
    showAll: "Show all",
    details: "Details",
    flow: "Flow:",
    projects: (n: number) => (n === 1 ? "project" : "projects"),
  },
  about: { howIWork: "How I work", step: "Step", certs: "Certificates and achievements" },
  cert: { open: "show certificate and details", see: "View certificate", close: "Close", full: "Open in full resolution" },
  contact: {
    title: "Looking for someone for a project or your team?",
    lead: "I take on freelance work and I'm open to long-term B2B collaboration. Write a few sentences about the project or the role. I'll reply and we'll set up a short call.",
    write: "Write a message",
    copy: "Copy address",
    copied: "Copied",
    topicsLabel: "Or pick what it's about:",
    topics: [
      { label: "A project or a contract", subject: "Project" },
      { label: "B2B collaboration or hiring", subject: "B2B collaboration" },
      { label: "A question about one of the projects", subject: "Question about a project" },
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
    next: "Next project:",
    notTranslated: "The full case study is available in Polish for now; the English version is on its way.",
    dash: "The shop deliberately orders nothing",
  },
  notFound: { title: "This page doesn't exist.", back: "Back to the home page" },
};

export const ui: Record<Lang, UI> = { pl, en };
