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
      title: "Automatyzuję procesy, łączę systemy i buduję narzędzia z AI.",
      lead: "Pomagam firmom ograniczać ręczną pracę i łączyć narzędzia, które dziś działają osobno. Analizuję proces, buduję rozwiązanie i zajmuję się jego wdrożeniem.",
      status: "Otwarty na pracę (UoP, UZ, B2B) i zlecenia",
      photo,
      photoAlt: "Robert Świeboda — portret na ciemnym tle",
    },
    about: {
      /** Zdjęcie przy pracy; pusty = sekcja w jednej kolumnie. */
      photo: "",
      photoAlt: "",
      title: "Od klocków w Integromacie do własnych agentów AI.",
      paragraphs: [
        "Zaczynałem od automatyzacji w czasach, gdy Make nazywał się jeszcze Integromat: proste integracje składane z gotowych klocków, bez własnego serwera. Potem doszły modele językowe, a dziś buduję też własne serwery MCP i agentów AI.",
        "Najlepiej czuję się w projektach, w których trzeba połączyć kilka systemów i doprowadzić rozwiązanie do działania na serwerze. Buduję automatyzacje w n8n, a gdy gotowe integracje nie wystarczają, piszę własny kod i API. Większość projektów prowadzę samodzielnie, część w zespole. Od 2026 r. współprowadzę też dwuosobową firmę IT, która łączy systemy w firmach produkcyjnych, m.in. z Comarch Optima. Po wdrożeniu mogę zajmować się utrzymaniem i rozwojem rozwiązania.",
        "Na co dzień pracuję na Linuksie, a rozwiązania zamykam w kontenerach Dockera. Przykładem jest system formularzy i CRM opisany w projektach: działa na VPS-ie, a monitoring i alerty pomagają wykrywać błędy również poza godzinami pracy. Uczę się też bezpieczeństwa na TryHackMe, bo to, co buduję, działa na serwerach dostępnych z internetu.",
      ],
      steps: [
        { title: "Analiza procesu", text: "Poznaję, jak dziś wygląda praca, i razem ustalamy, co ma się zmienić." },
        { title: "Prototyp", text: "Buduję działającą wersję na prawdziwych danych, żeby było co ocenić." },
        { title: "Wdrożenie", text: "Podłączam rozwiązanie do istniejących systemów, wdrażam je na serwerze i przekazuję zespołowi." },
        { title: "Utrzymanie", text: "Jeśli chcesz, zostaję przy projekcie: monitoring, aktualizacje i poprawki." },
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
      title: "I automate processes, connect systems and build AI-powered tools.",
      lead: "I help companies cut down on manual work and connect tools that currently run separately. I analyze the process, build the solution and take care of deploying it. I work mainly with n8n, Python and language-model APIs.",
      status: "Open to employment and contract work",
      photo,
      photoAlt: "Robert Świeboda — portrait on a dark background",
    },
    about: {
      photo: "",
      photoAlt: "",
      title: "From drag-and-drop blocks in Integromat to my own AI agents.",
      paragraphs: [
        "I started with automation back when Make was still called Integromat: simple integrations clicked together from ready-made blocks, with no server of my own. Then language models arrived, and today I also build my own MCP servers and AI agents.",
        "I do my best work on projects that need several systems connected and a solution taken all the way to running on a server. I build automations in n8n, and when off-the-shelf integrations aren't enough, I write my own code and APIs. I run most projects on my own and some as part of a team. Since 2026 I have also co-run a two-person IT company that connects systems for manufacturing businesses, including Comarch Optima. After deployment, I can stay on to maintain and develop the solution.",
        "I work on Linux every day and package my solutions in Docker containers. One example is the forms and CRM system in my projects: it runs on a VPS, and monitoring and alerts help catch errors outside working hours too. I'm also learning security on TryHackMe, because the systems I build run on internet-facing servers.",
      ],
      steps: [
        { title: "Process analysis", text: "I learn how the work is done today and we agree on what should change." },
        { title: "Prototype", text: "I build a working version on real data, so there's something to evaluate." },
        { title: "Deployment", text: "I connect it to existing systems, deploy it on a server and hand it over to your team." },
        { title: "Maintenance", text: "If you want, I stay on: monitoring, updates and fixes." },
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
