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
    title: "AI developer od automatyzacji i integracji",
    description:
      "Robert Świeboda, AI developer od automatyzacji i integracji: automatyzacje procesów, integracje systemów i narzędzia z AI. Projekty, umiejętności i kontakt.",
  },
  skipToContent: "Przejdź do treści",
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
    secondary: "Porozmawiajmy o współpracy",
    role: "AI developer od automatyzacji i integracji",
    toolsLabel: "Technologie i integracje, z których korzystam",
    scroll: "Przewiń dalej",
    pause: "Zatrzymaj przewijanie narzędzi",
    resume: "Wznów przewijanie narzędzi",
  },
  skills: {
    title: "Co umiem i gdzie tego użyłem.",
    lead: "Moje projekty i umiejętności, których w nich użyłem. Kliknij umiejętność, a projekty, w których była potrzebna, przesuną się na górę listy.",
    hint: "Wybierz umiejętność. Liczba obok oznacza, w ilu projektach jej użyłem.",
    also: "Pracuję też z:",
    all: (n: number) => `Wszystkie projekty (${n})`,
    matching: (skill: string, n: number, total: number) => `${skill}: ${n} z ${total} projektów`,
    showAll: "Pokaż wszystkie",
    flow: "Przepływ:",
    projects: (n: number): string => (n === 1 ? "projekt" : n < 5 ? "projekty" : "projektów"),
  },
  about: { howIWork: "Jak pracuję", step: "Krok", certs: "Certyfikaty i kursy" },
  cert: { open: "pokaż certyfikat i szczegóły", see: "Zobacz certyfikat", close: "Zamknij", full: "Otwórz w pełnej rozdzielczości" },
  contact: {
    title: "Porozmawiajmy o współpracy.",
    lead: "Masz proces do usprawnienia albo szukasz developera do zespołu? Napisz, co chcesz zrobić i z jakich systemów korzystasz. Ustalimy, czy mogę pomóc i jaki powinien być pierwszy krok.",
    write: "Napisz wiadomość",
    copy: "Skopiuj adres",
    copied: "Skopiowano",
    team: [
      { label: "Formy współpracy", value: "Realizacja projektu albo dołączenie do zespołu na zasadach B2B" },
      { label: "Zakres", value: "Automatyzacje, integracje i aplikacje wspierające procesy w firmie" },
      { label: "Czego nie robię", value: "Samych stron i landing page'y, za którymi nie stoi żaden system" },
    ],
    topicsLabel: "Albo wybierz, o co chodzi:",
    topics: [
      { label: "Realizacja projektu", subject: "Realizacja projektu", hint: "Co chcesz usprawnić? Jakie systemy już działają i co ma się dziać automatycznie?" },
      { label: "Dołączenie do zespołu", subject: "Dołączenie do zespołu (B2B)", hint: "Jaka rola, jaki zespół i od kiedy?" },
      { label: "Pytanie o jeden z projektów", subject: "Pytanie o projekt", hint: "Który projekt i co chcesz o nim wiedzieć?" },
    ],
  },
  contactForm: {
    title: "Napisz do mnie",
    lead: "Kilka zdań wystarczy. Strona przygotuje z nich e-mail do otwarcia w Twojej aplikacji pocztowej, a resztę ustalimy w krótkiej rozmowie.",
    topic: "O co chodzi?",
    message: "Wiadomość",
    name: "Imię lub firma (opcjonalnie)",
    submit: "Otwórz w aplikacji pocztowej",
    readyTitle: "Wiadomość jest gotowa.",
    readyText: "Strona próbowała otworzyć ją w Twojej aplikacji pocztowej. Jeśli się otworzyła, sprawdź treść i wyślij ją stamtąd. Jeśli nie, skopiuj wiadomość i wyślij ją na adres:",
    copyMessage: "Skopiuj wiadomość",
    edit: "Wróć do edycji",
    or: "Wolisz inaczej?",
    close: "Zamknij",
    empty: "Napisz choć jedno zdanie.",
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
    architecture: "Jak to jest zbudowane",
    infra: "Infrastruktura",
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
    title: "AI developer for automation and integrations",
    description:
      "Robert Świeboda, AI developer for automation and integrations: process automation, system integrations and AI-powered tools. Projects, skills and contact.",
  },
  skipToContent: "Skip to content",
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
    secondary: "Let's talk about working together",
    role: "AI developer for automation and integrations",
    toolsLabel: "Technologies and integrations I work with",
    scroll: "Scroll down",
    pause: "Pause the tools ticker",
    resume: "Resume the tools ticker",
  },
  skills: {
    title: "What I can do and where I've used it.",
    lead: "My projects and the skills behind them. Pick a skill and the projects that needed it move to the top of the list.",
    hint: "Pick a skill. The number shows how many of my projects use it.",
    also: "I also work with:",
    all: (n: number) => `All projects (${n})`,
    matching: (skill: string, n: number, total: number) => `${skill}: ${n} of ${total} projects`,
    showAll: "Show all",
    flow: "Flow:",
    projects: (n: number) => (n === 1 ? "project" : "projects"),
  },
  about: { howIWork: "How I work", step: "Step", certs: "Certificates and courses" },
  cert: { open: "show certificate and details", see: "View certificate", close: "Close", full: "Open in full resolution" },
  contact: {
    title: "Let's talk about working together.",
    lead: "Have a process to improve, or looking for a developer to join your team? Tell me what you want to do and which systems you use. We'll figure out whether I can help and what the first step should be.",
    write: "Write a message",
    copy: "Copy address",
    copied: "Copied",
    team: [
      { label: "How we can work", value: "Project delivery, or joining your team on a B2B contract basis" },
      { label: "Scope", value: "Automations, integrations and applications that support business processes" },
      { label: "What I don't take on", value: "Standalone websites or landing pages with no system behind them" },
    ],
    topicsLabel: "Or pick what it's about:",
    topics: [
      { label: "Project delivery", subject: "Project delivery", hint: "What would you like to improve? Which systems are already in place and what should happen automatically?" },
      { label: "Joining your team (B2B contract)", subject: "Joining your team (B2B contract)", hint: "What role, what team and from when?" },
      { label: "A question about one of the projects", subject: "Question about a project", hint: "Which project, and what would you like to know?" },
    ],
  },
  contactForm: {
    title: "Get in touch",
    lead: "A few sentences are enough. The site turns them into an email you can open in your mail app, and we'll sort out the rest on a short call.",
    topic: "What is it about?",
    message: "Message",
    name: "Name or company (optional)",
    submit: "Open in your mail app",
    readyTitle: "Your message is ready.",
    readyText: "The site tried to open it in your mail app. If it opened, review it and send it from there. If not, copy the message and send it to:",
    copyMessage: "Copy message",
    edit: "Back to editing",
    or: "Prefer another way?",
    close: "Close",
    empty: "Write at least one sentence.",
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
    architecture: "How it's built",
    infra: "Infrastructure",
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
