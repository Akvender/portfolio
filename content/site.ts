import type { Lang } from "./i18n";

/** Dane wspólne dla obu języków. */
export const site = {
  name: "Robert Świeboda",
  /** Pełny adres strony (sitemap, Open Graph). Ustaw NEXT_PUBLIC_SITE_URL przy buildzie. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io",
  email: "robert.swieboda.dev@gmail.com",
  github: "https://github.com/Akvender",
  /** Adres profilu LinkedIn; pusty = przycisk ukryty. */
  linkedin: "",
} as const;

const photo = "/images/portrait-robert.webp";
const cert = { src: "/images/cert-aidevs4.webp", width: 1600, height: 1131, badge: "/images/badge-aidevs4.webp" };

/** Treści strony głównej w obu językach. Ton: pokazuję, co umiem i co zbudowałem — bez sprzedawania. */
const content = {
  pl: {
    hero: {
      title: "Buduję rozwiązania AI, które pracują w prawdziwych firmach.",
      lead: "Jestem AI developerem i freelancerem. Łączę modele językowe, agentów i automatyzacje z systemami, których firmy już używają: CRM-em, ERP, telefonią, sklepem. Prowadzę projekt od pomysłu, przez kod, po wdrożenie i utrzymanie.",
      status: "Otwarty na projekty i współpracę B2B",
      photo,
      photoAlt: "Robert Świeboda — portret w ciepłym świetle na ciemnym tle",
    },
    about: {
      photo: "/images/photo-placeholder-praca.svg",
      photoAlt: "Miejsce na zdjęcie Roberta przy pracy",
      title: "Jeden człowiek na całą drogę: od pomysłu do działającego systemu.",
      paragraphs: [
        "Na co dzień buduję integracje z API OpenAI i Anthropic, agentów AI, chatboty i voiceboty, a do automatyzacji używam głównie n8n. Piszę w Pythonie, łączę systemy przez REST API i stawiam rozwiązania na własnych serwerach w Dockerze.",
        "Samodzielnie zbudowałem i utrzymuję aplikację produkcyjną: od projektu, przez wdrożenie, po bieżącą opiekę, w około dwa miesiące. Rozumiem też stronę biznesową: wyceniam projekty, negocjuję i rozliczam się bezpośrednio z klientem.",
      ],
      steps: [
        { title: "Rozmowa", text: "Poznaję proces i ustalam, co ma się zmienić i jak to zmierzymy." },
        { title: "Prototyp", text: "Szybko buduję działającą wersję na prawdziwych danych, żeby było co ocenić." },
        { title: "Wdrożenie", text: "Podłączam rozwiązanie do istniejących systemów i przekazuję je ludziom." },
        { title: "Utrzymanie", text: "Monitoruję działanie, łapię błędy i rozwijam to, co już działa." },
      ],
    },
    proofs: [
      {
        ...cert,
        alt: "Certyfikat ukończenia kursu AI_devs 4: Builders wystawiony dla Roberta Świebody, 1 października 2026",
        title: "AI_devs 4: Builders",
        meta: "Certyfikat ukończenia · 2026",
        text: "5-tygodniowy kurs budowania produkcyjnych rozwiązań AI: LLM w kodzie, context engineering, ewaluacje i systemy wieloagentowe. W ramach kursu ponad 25 praktycznych zadań.",
      },
    ],
  },
  en: {
    hero: {
      title: "I build AI solutions that work inside real companies.",
      lead: "I'm an AI developer and freelancer. I connect language models, agents and automations with the systems companies already use: CRM, ERP, phone systems, online stores. I take a project from the idea, through the code, to deployment and maintenance.",
      status: "Open to projects and B2B collaboration",
      photo,
      photoAlt: "Robert Świeboda — portrait in warm light on a dark background",
    },
    about: {
      photo: "/images/photo-placeholder-praca.svg",
      photoAlt: "Placeholder for a photo of Robert at work",
      title: "One person for the whole journey: from idea to a working system.",
      paragraphs: [
        "Day to day I build integrations with the OpenAI and Anthropic APIs, AI agents, chatbots and voicebots, and I automate mostly with n8n. I write Python, connect systems through REST APIs and run solutions on my own servers with Docker.",
        "I built and maintain a production application on my own: from design, through deployment, to ongoing support, in about two months. I also understand the business side: I price projects, negotiate and work directly with clients.",
      ],
      steps: [
        { title: "Conversation", text: "I learn the process and agree on what should change and how we'll measure it." },
        { title: "Prototype", text: "I quickly build a working version on real data, so there's something to evaluate." },
        { title: "Deployment", text: "I connect the solution to existing systems and hand it over to the people using it." },
        { title: "Maintenance", text: "I monitor how it runs, catch errors and develop what already works." },
      ],
    },
    proofs: [
      {
        ...cert,
        alt: "AI_devs 4: Builders course completion certificate issued to Robert Świeboda, 1 October 2026",
        title: "AI_devs 4: Builders",
        meta: "Certificate of completion · 2026",
        text: "A 5-week course on building production-ready AI solutions: LLMs in code, context engineering, evaluations and multi-agent systems. Over 25 hands-on tasks along the way.",
      },
    ],
  },
} satisfies Record<Lang, unknown>;

export const getContent = (lang: Lang) => content[lang];
export type Proof = (typeof content)["pl"]["proofs"][number];
