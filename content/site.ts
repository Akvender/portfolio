import type { Lang } from "./i18n";

/** Dane wspólne dla obu języków. */
export const site = {
  name: "Robert Świeboda",
  /** Pełny adres strony (sitemap, Open Graph). Ustaw NEXT_PUBLIC_SITE_URL przy buildzie. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io",
  email: "robert.swieboda.dev@gmail.com",
  github: "https://github.com/Akvender",
  /** Kod konta GoatCounter (np. „robertswieboda” z robertswieboda.goatcounter.com); pusty = licznik wyłączony. */
  goatcounter: "",
  /** Adres profilu LinkedIn; pusty = przycisk ukryty. */
  linkedin: "https://www.linkedin.com/in/robertswieboda/",
} as const;

const photo = "/images/portrait-robert.webp";
const cert = { src: "/images/cert-aidevs4.webp", width: 1600, height: 1131, badge: "/images/badge-aidevs4.webp" };

/** Treści strony głównej w obu językach. Ton: pokazuję, co umiem i co zbudowałem — bez sprzedawania. */
const content = {
  pl: {
    hero: {
      title: "Automatyzuję procesy, łączę systemy i buduję narzędzia z AI.",
      lead: "Jestem AI developerem i freelancerem. Pomagam, gdy w firmie dużo rzeczy robi się ręcznie, system czegoś nie potrafi albo kilka narzędzi trzeba spiąć w całość. Analizuję proces, buduję rozwiązanie i stawiam je na serwerze. Pracuję głównie w n8n, Pythonie i z API modeli językowych.",
      status: "Otwarty na zlecenia i współpracę B2B",
      photo,
      photoAlt: "Robert Świeboda — portret w ciepłym świetle na ciemnym tle",
    },
    about: {
      photo: "/images/photo-placeholder-praca.svg",
      photoAlt: "Miejsce na zdjęcie Roberta przy pracy",
      title: "Od klocków w Integromacie do własnych agentów AI.",
      paragraphs: [
        "Automatyzacjami zajmuję się od prawie pięciu lat. Zaczynałem, gdy Make nazywał się jeszcze Integromat: podstawowe integracje wyklikane z klocków, bez myślenia o serwerze. Potem doszły modele językowe, a dziś buduję własne serwery MCP, agentów AI i całe serwisy, które z nich korzystają.",
        "Najbardziej lubię spinać systemy i stawiać je na serwerach. Przykład: zgłoszenia z formularzy Meta i ze strony trafiają do CRM-u, a dalej same wysyłają SMS-y, maile i powiadomienia. Pod spodem jest VPS, monitoring i alerty o błędach, żeby wszystko działało także o północy. Tę aplikację zbudowałem sam w około dwa miesiące i nadal ją utrzymuję.",
        "Na co dzień pracuję na Linuksie, więc serwery i terminal to moje naturalne środowisko. Rozwiązania zamykam w kontenerach Dockera, a tam, gdzie n8n nie wystarcza, piszę własny kod i API. Większość projektów prowadzę sam, część w zespole. Jeśli klient chce, zostaję przy projekcie i dbam o aktualizacje i poprawki.",
      ],
      steps: [
        { title: "Analiza procesu", text: "Poznaję, jak dziś wygląda praca, i razem ustalamy, co ma się zmienić." },
        { title: "Prototyp", text: "Buduję działającą wersję na prawdziwych danych, żeby było co ocenić." },
        { title: "Wdrożenie", text: "Podłączam rozwiązanie do istniejących systemów, stawiam je na serwerze i przekazuję ludziom." },
        { title: "Utrzymanie", text: "Jeśli chcesz, zostaję przy projekcie: monitoring, aktualizacje i poprawki." },
      ],
    },
    proofs: [
      {
        ...cert,
        alt: "Certyfikat ukończenia kursu AI_devs 4: Builders wystawiony dla Roberta Świebody, 1 października 2026",
        title: "AI_devs 4: Builders",
        meta: "Certyfikat ukończenia · 2026",
        text: "5-tygodniowy kurs budowania produkcyjnych rozwiązań AI: LLM w kodzie, context engineering, ewaluacje i systemy wieloagentowe. W ramach kursu ponad 25 praktycznych zadań.",
      },
    ],
    courses: [
      {
        title: "Zero2Junior — kurs Daniela Rozieckiego",
        meta: "Kurs · 2022",
        text: "Kurs wejścia do programowania, z osobnym modułem o automatyzacjach: Integromat (dziś Make), Airtable i formularze w Tally.",
      },
    ],
  },
  en: {
    hero: {
      title: "I automate processes, connect systems and build AI-powered tools.",
      lead: "I'm an AI developer and freelancer. I help when a lot of work is still done by hand, a system can't do something, or several tools need to work as one. I analyse the process, build the solution and run it on a server. I work mainly with n8n, Python and language-model APIs.",
      status: "Open to contracts and B2B collaboration",
      photo,
      photoAlt: "Robert Świeboda — portrait in warm light on a dark background",
    },
    about: {
      photo: "/images/photo-placeholder-praca.svg",
      photoAlt: "Placeholder for a photo of Robert at work",
      title: "From drag-and-drop blocks in Integromat to my own AI agents.",
      paragraphs: [
        "I've been building automations for almost five years. I started when Make was still called Integromat: simple integrations clicked together from blocks, with no servers to worry about. Then language models arrived, and today I build my own MCP servers, AI agents and whole services around them.",
        "What I enjoy most is connecting systems and running them on servers. For example: leads from Meta and website forms land in the CRM, which then sends texts, emails and notifications by itself, on a VPS with monitoring and error alerts so it keeps working at midnight too. I built that application on my own in about two months and still maintain it.",
        "I work on Linux every day, so servers and the terminal feel like home. I package my solutions in Docker containers, and where n8n isn't enough I write my own code and APIs. I run most projects on my own and some as part of a team. If the client wants, I stay on to handle updates and fixes.",
      ],
      steps: [
        { title: "Process analysis", text: "I learn how the work is done today and we agree on what should change." },
        { title: "Prototype", text: "I build a working version on real data, so there's something to evaluate." },
        { title: "Deployment", text: "I connect it to existing systems, run it on a server and hand it over to the people using it." },
        { title: "Maintenance", text: "If you want, I stay on: monitoring, updates and fixes." },
      ],
    },
    proofs: [
      {
        ...cert,
        alt: "AI_devs 4: Builders course completion certificate issued to Robert Świeboda, 1 October 2026",
        title: "AI_devs 4: Builders",
        meta: "Certificate of completion · 2026",
        text: "A 5-week course on building production-ready AI solutions: LLMs in code, context engineering, evaluations and multi-agent systems. Over 25 hands-on tasks along the way.",
      },
    ],
    courses: [
      {
        title: "Zero2Junior — Daniel Roziecki's course",
        meta: "Course · 2022",
        text: "An entry-level programming course with a separate module on automation: Integromat (now Make), Airtable and Tally forms.",
      },
    ],
  },
} satisfies Record<Lang, unknown>;

export const getContent = (lang: Lang) => content[lang];
export type Proof = (typeof content)["pl"]["proofs"][number];
