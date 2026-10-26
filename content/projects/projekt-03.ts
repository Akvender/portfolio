import type { Project } from "./types";

/** Kliniki dentystyczne: Meta → CRM → SMS i mailing, informacja o pacjentach wraca do Meta. Wdrożony i utrzymywany; 1000+ zgłoszeń w około miesiąc. */
export const projekt03: Project = {
  slug: "formularze-crm-powiadomienia",
  number: "01",
  title: "Zgłoszenia z Meta, CRM i powiadomienia dla klinik dentystycznych",
  description: "Wdrożony i utrzymywany system dla klinik dentystycznych: zgłoszenia z reklam Meta trafiają do CRM-u, pacjent od razu dostaje SMS, a informacja, czy kontakt został pacjentem, wraca do Meta.",
  lead: "System, który zbudowałem samodzielnie w około dwa miesiące i nadal utrzymuję. Zgłoszenia z reklam Meta i z formularza na stronie trafiają do CRM-u i systemu kliniki, a pacjent i zespół dostają automatyczne wiadomości. Informacja, czy kontakt został pacjentem, wraca do Meta jako sygnał do optymalizacji reklam.",
  year: "",
  tags: ["Integracje", "CRM"],
  skills: ["crm", "meta", "smsapi", "mailerlite", "email", "n8n", "make", "api", "docker", "vps", "linux", "monitoring"],
  flow: ["Formularz Meta / www", "n8n i CRM", "SMSAPI i mailing", "Monitoring i alerty"],
  flowIcons: ["form", "cycle", "mail", "pulse"],
  featured: true,
  meta: {
    client: "Kliniki dentystyczne",
    role: "Projekt, budowa, wdrożenie i utrzymanie, samodzielnie",
    period: "ok. 2 miesiące budowy, potem utrzymanie",
    status: "Wdrożony, utrzymywany",
    stack: "n8n · SMSAPI · CRM · VPS · Docker",
  },
  metrics: [{ value: 1000, suffix: "+", label: "zgłoszeń w CRM w około miesiąc" }],
  architecture: {
    columns: [
      { title: "Wejście", items: ["Formularze Meta", "Formularz na stronie"] },
      { title: "Automatyzacja", items: ["Workflowy n8n"] },
      { title: "Systemy", items: ["CRM", "System kliniki", "SMSAPI", "MailerLite / poczta", "Meta: informacja o pacjentach"] },
      { title: "Nadzór", items: ["Prometheus", "Grafana", "Alerty o błędach"] },
    ],
    infra: "VPS, Docker, Linux",
  },
  sections: [
    {
      type: "impact",
      title: "Cały cykl po mojej stronie.",
      text: "Klient przyszedł z procesem: od reklamy do wizyty pacjenta. Technologie i dostawców dobrałem sam. Projekt, budowa, konfiguracja serwera i wdrożenie zajęły mi około dwóch miesięcy, a od tego czasu utrzymuję cały system.",
    },
    {
      type: "impact",
      title: "SMS-y, które nie wychodziły przez trzy miesiące.",
      text: "Przy poprawkach u tego klienta zauważyłem, że SMS-y follow-up od trzech miesięcy nie wychodziły i nikt tego nie widział. Potem dodałem obsługę błędów w każdym węźle oraz monitoring w Prometheusie i Grafanie z alertami o błędach.",
    },
    {
      type: "impact",
      title: "Kolejne instancje odtwarzają agenci.",
      text: "Ten sam system wdrażam u kolejnych klientów. Instancje odtwarzają agenci AI w Claude Code na podstawie skryptów. Mają dostęp tylko do stagingu i tam robią testy, produkcję uruchamiam sam.",
    },
    {
      type: "results",
      title: "Co działa dziś.",
      intro: "Liczba zgłoszeń pokazuje skalę, w jakiej system pracuje. Nie jest miarą oszczędności ani sprzedaży.",
      metrics: [{ value: 1000, suffix: "+", label: "zgłoszeń w CRM w około miesiąc" }],
      proofs: [
        "Zgłoszenia z formularzy reklam Meta i ze strony trafiają do CRM-u bez ręcznego przepisywania.",
        "Zaraz po wysłaniu formularza klient dostaje SMS przez SMSAPI. Mailingi i powiadomienia dla zespołu wysyłają się automatycznie.",
        "Przy błędzie po drodze workflow ponawia próbę, a deduplikacja pilnuje, żeby to samo zgłoszenie nie trafiło do CRM-u dwa razy.",
        "Prometheus i Grafana pokazują stan systemu, a alerty o błędach przychodzą także poza godzinami pracy.",
      ],
    },
  ],
  // Wersja angielska
  en: {
    title: "Meta leads, CRM and notifications for dental clinics",
    description: "A live, maintained system for dental clinics: leads from Meta ads land in the CRM, the patient gets a text right away, and whether a lead became a patient goes back to Meta.",
    lead: "A system I built on my own in about two months and still maintain. Leads from Meta ads and the website form land in the CRM and the clinic's system, and both the patient and the team get automatic messages. Whether a lead became a patient goes back to Meta as a signal for ad optimization.",
    tags: ["Integrations", "CRM"],
    flow: ["Meta / web form", "n8n and CRM", "SMSAPI and mailing", "Monitoring and alerts"],
    meta: {
      role: "Design, build, deployment and maintenance, solo",
      period: "about 2 months to build, then ongoing maintenance",
      status: "Live, maintained",
      stack: "n8n · SMSAPI · CRM · VPS · Docker",
    },
    architecture: {
      columns: [
        { title: "Input", items: ["Meta lead forms", "Website form"] },
        { title: "Automation", items: ["n8n workflows"] },
        { title: "Systems", items: ["CRM", "Clinic system", "SMSAPI", "MailerLite / email", "Meta: patient feedback"] },
        { title: "Monitoring", items: ["Prometheus", "Grafana", "Error alerts"] },
      ],
      infra: "VPS, Docker, Linux",
    },
    sections: [
      {
        type: "impact",
        title: "The whole cycle on my side.",
        text: "The client came with a process: from the ad to the patient's visit. I picked the technologies and vendors myself. Design, build, server setup and deployment took me about two months, and I have maintained the whole system since.",
      },
      {
        type: "impact",
        title: "Texts that didn't go out for three months.",
        text: "While making fixes for this client, I noticed that follow-up texts hadn't been going out for three months and nobody had seen it. After that I added error handling to every node, plus Prometheus and Grafana monitoring with error alerts.",
      },
      {
        type: "impact",
        title: "New instances are recreated by agents.",
        text: "I deploy the same system for further clients. AI agents in Claude Code recreate the instances from scripts. They only have access to staging and run their tests there; I launch production myself.",
      },
      {
        type: "results",
        title: "What runs today.",
        intro: "The number of leads shows the scale the system works at. It is not a measure of savings or sales.",
        metrics: [{ value: 1000, suffix: "+", label: "leads in the CRM in about a month" }],
        proofs: [
          "Leads from Meta ad forms and the website land in the CRM with no retyping.",
          "Right after submitting the form, the customer gets a text via SMSAPI. Mailings and team notifications go out automatically.",
          "If a step fails, the workflow retries it, and deduplication keeps the same lead from landing in the CRM twice.",
          "Prometheus and Grafana show the state of the system, and error alerts come in outside working hours too.",
        ],
      },
    ],
  },
};
