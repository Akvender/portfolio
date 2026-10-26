import type { Lang } from "./i18n";

/** Dane wspólne dla obu języków. */
export const site = {
  name: "Robert Świeboda",
  /** Pełny adres strony (sitemap, Open Graph). Ustaw NEXT_PUBLIC_SITE_URL przy buildzie. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://akvender.github.io",
  email: "robert.swieboda.dev@gmail.com",
  github: "https://github.com/Akvender",
  /** Kod konta GoatCounter (np. „robertswieboda” z robertswieboda.goatcounter.com); pusty = licznik wyłączony. */
  goatcounter: "",
  /** Adres profilu LinkedIn; pusty = przycisk ukryty. */
  linkedin: "https://www.linkedin.com/in/robertswieboda/",
  /** Publiczny profil TryHackMe; pusty = link ukryty. */
  tryhackme: "https://tryhackme.com/p/akvenderyt",
} as const;

const photo = "/images/portrait-robert.webp";
const cert = { src: "/images/cert-aidevs4.webp", width: 1600, height: 1131, badge: "/images/badge-aidevs4.webp" };

/** Treści strony głównej w obu językach. Ton: pokazuję, co umiem i co zbudowałem — bez sprzedawania. */
const content = {
  pl: {
    hero: {
      title: "Buduję automatyzacje i integracje, a potem je utrzymuję.",
      lead: "Zgłoszenia z reklam Meta, które same trafiają do CRM-u. Analiza ponad 5000 rozmów w call center. Cyfrowa karta zamówień dla mleczarni, z której dokumenty WZ trafią do Comarch Optima bez przepisywania. Najczęściej pracuję w n8n, a gdy to nie wystarcza, piszę w TypeScripcie albo Pythonie. Łódź lub zdalnie.",
      status: "Otwarty na pracę (UoP, UZ, B2B) i zlecenia",
      photo,
      photoAlt: "Robert Świeboda — portret na ciemnym tle",
    },
    about: {
      /** Zdjęcie przy pracy; pusty = sekcja w jednej kolumnie. */
      photo: "",
      photoAlt: "",
      title: "Student informatyki, wdrożenia od 2025 roku.",
      paragraphs: [
        "Pierwsze automatyzacje składałem w 2022 roku na kursie Zero2Junior, jeszcze w Integromacie (dziś Make). Komercyjnie pracuję od 2025 roku: najpierw ponad rok w call center, gdzie budowałem transkrypcję i analizę rozmów, od lipca 2026 roku w agencji marketingowej, a obok mam własne zlecenia. Równolegle studiuję informatykę na Politechnice Łódzkiej.",
        "Najwięcej nauczył mnie jeden błąd. W systemie dla klinik dentystycznych, który utrzymuję, SMS-y follow-up przez trzy miesiące nie wychodziły i nikt tego nie widział. Dziś przy każdym wdrożeniu od razu planuję, jak sprawdzę, że system naprawdę robi swoje.",
        "Z agentami AI pracuję codziennie, ale na krótkiej smyczy: kolejne instancje systemu dla klinik odtwarzają na stagingu, a produkcję uruchamiam sam. Kod pisany z Claude Code traktuję jak własny: każda zmiana przechodzi przez pull request i osobny przegląd. Serwery stawiam na Linuksie i w Dockerze, a bezpieczeństwa uczę się na TryHackMe, bo wszystko, co wdrażam, jest dostępne z internetu.",
      ],
      steps: [
        { title: "Analiza procesu", text: "Zaczynam od prawdziwych dokumentów. W mleczarni pierwszym krokiem była analiza 41 dokumentów WZ." },
        { title: "Prototyp", text: "Pierwsza wersja ma szybko sprawdzić pomysł. W call center powstała na Make i Twilio, wersja docelowa już na n8n i PostgreSQL." },
        { title: "Wdrożenie", text: "Własny VPS i Docker. Workflow ponawia nieudane kroki, a deduplikacja pilnuje, żeby to samo zgłoszenie nie trafiło do CRM-u dwa razy." },
        { title: "Utrzymanie", text: "Prometheus, Grafana i alerty o błędach. System dla klinik dentystycznych utrzymuję od startu." },
      ],
    },
    proofs: [
      {
        ...cert,
        alt: "Certyfikat ukończenia kursu AI_devs 4: Builders wystawiony dla Roberta Świebody, 1 października 2026",
        title: "AI_devs 4: Builders",
        meta: "Certyfikat ukończenia · 2026",
        text: "5-tygodniowy kurs budowania produkcyjnych rozwiązań AI: LLM w kodzie, context engineering, ewaluacje i systemy wieloagentowe. W trakcie kursu wykonałem ponad 25 praktycznych zadań.",
      },
    ],
    courses: [
      {
        title: "Wyróżnienie w konkursie „Dziś Uczeń – Jutro Student”",
        meta: "Politechnika Świętokrzyska · 2024",
        text: "Kategoria Informatyka.",
      },
      {
        title: "Zero2Junior — kurs Daniela Rozieckiego",
        meta: "Kurs · 2022",
        text: "Kurs wprowadzający do programowania z osobnym modułem o automatyzacjach: Integromat (dziś Make), Airtable i formularze w Tally.",
      },
      {
        title: "TryHackMe",
        meta: "Nauka bezpieczeństwa · od 2024",
        text: "Ćwiczenia z bezpieczeństwa sieci, Linuksa i aplikacji webowych. Pomagają mi lepiej zabezpieczać serwery i integracje, które stawiam.",
        more: "Szczegóły",
        details: ["Ukończona ścieżka Pre Security", "Odznaki: OWASP Top 10, Wireshark, Networking Nerd, World Wide Web, Webbed, cat linux.txt"],
        link: { label: "Profil na TryHackMe", href: "https://tryhackme.com/p/akvenderyt" },
      },
    ],
  },
  en: {
    hero: {
      title: "I build automations and integrations, then keep them running.",
      lead: "Leads from Meta ads that land in the CRM on their own. Analysis of over 5,000 call-center calls. A digital order card for a dairy that will send delivery notes to Comarch Optima with no retyping. I mostly work in n8n, and when that's not enough, I write TypeScript or Python. Based in Łódź, Poland, open to remote work.",
      status: "Open to work (employment, contract, B2B) and freelance projects",
      photo,
      photoAlt: "Robert Świeboda — portrait on a dark background",
    },
    about: {
      photo: "",
      photoAlt: "",
      title: "Computer science student, shipping since 2025.",
      paragraphs: [
        "I put together my first automations in 2022 on the Zero2Junior course, still in Integromat (now Make). I've worked commercially since 2025: first for over a year at a call center, where I built call transcription and analysis, since July 2026 at a marketing agency, plus my own freelance projects. I'm also studying computer science at Lodz University of Technology.",
        "One bug taught me the most. In the dental-clinic system I maintain, follow-up texts didn't go out for three months and nobody noticed. Now, on every deployment, I plan from the start how I'll check that the system actually does its job.",
        "I work with AI agents every day, but on a short leash: they recreate new instances of the clinic system on staging, and I launch production myself. I treat code written with Claude Code as my own: every change goes through a pull request and a separate review. I run servers on Linux and Docker, and I'm learning security on TryHackMe, because everything I deploy is reachable from the internet.",
      ],
      steps: [
        { title: "Process analysis", text: "I start with real documents. At the dairy, the first step was analyzing 41 delivery notes." },
        { title: "Prototype", text: "The first version is there to test the idea quickly. At the call center it ran on Make and Twilio; the final version moved to n8n and PostgreSQL." },
        { title: "Deployment", text: "My own VPS and Docker. The workflow retries failed steps, and deduplication keeps the same lead from landing in the CRM twice." },
        { title: "Maintenance", text: "Prometheus, Grafana and error alerts. I've maintained the dental-clinic system since launch." },
      ],
    },
    proofs: [
      {
        ...cert,
        alt: "AI_devs 4: Builders course completion certificate issued to Robert Świeboda, 1 October 2026",
        title: "AI_devs 4: Builders",
        meta: "Certificate of completion · 2026",
        text: "A 5-week course on building production-ready AI solutions: LLMs in code, context engineering, evaluations and multi-agent systems. I completed over 25 hands-on assignments during the course.",
      },
    ],
    courses: [
      {
        title: "Honorable mention in the “Dziś Uczeń – Jutro Student” competition",
        meta: "Kielce University of Technology · 2024",
        text: "Computer science category.",
      },
      {
        title: "Zero2Junior — Daniel Roziecki's course",
        meta: "Course · 2022",
        text: "An introductory programming course with a dedicated automation module: Integromat (now Make), Airtable and Tally forms.",
      },
      {
        title: "TryHackMe",
        meta: "Security training · since 2024",
        text: "Hands-on exercises in network, Linux and web application security. They help me secure the servers and integrations I set up.",
        more: "Details",
        details: ["Completed the Pre Security path", "Badges: OWASP Top 10, Wireshark, Networking Nerd, World Wide Web, Webbed, cat linux.txt"],
        link: { label: "TryHackMe profile", href: "https://tryhackme.com/p/akvenderyt" },
      },
    ],
  },
} satisfies Record<Lang, unknown>;

export const getContent = (lang: Lang) => content[lang];
export type Proof = (typeof content)["pl"]["proofs"][number];
