import type { Project } from "./types";

/** Formularze → CRM → SMS i mailing. Wdrożony i utrzymywany; liczba zgłoszeń bez potwierdzonego okresu pomiaru. */
export const projekt03: Project = {
  slug: "formularze-crm-powiadomienia",
  number: "01",
  title: "Formularze, CRM i automatyczne powiadomienia",
  description: "Wdrożony i utrzymywany system: zgłoszenia z formularzy Meta i ze strony trafiają do CRM-u, klient od razu dostaje SMS, a mailingi i powiadomienia wysyłają się automatycznie.",
  lead: "System, który zbudowałem samodzielnie w około dwa miesiące i nadal utrzymuję. Zgłoszenia z reklam Meta i z formularza na stronie trafiają do CRM-u, a klient i zespół dostają automatyczne wiadomości.",
  year: "",
  tags: ["Integracje", "CRM"],
  skills: ["crm", "meta", "smsapi", "mailerlite", "email", "n8n", "make", "api", "docker", "vps", "linux", "monitoring"],
  flow: ["Formularz Meta / www", "n8n i CRM", "SMSAPI i mailing", "Monitoring i alerty"],
  flowIcons: ["form", "cycle", "mail", "pulse"],
  featured: true,
  meta: {
    client: "",
    role: "Projekt, budowa, wdrożenie i utrzymanie, samodzielnie",
    period: "ok. 2 miesiące budowy, potem utrzymanie",
    status: "Wdrożony, utrzymywany",
    stack: "n8n · SMSAPI · CRM · VPS · Docker",
  },
  metrics: [{ value: 1000, suffix: "+", label: "zgłoszeń w CRM" }],
  architecture: {
    columns: [
      { title: "Wejście", items: ["Formularze Meta", "Formularz na stronie"] },
      { title: "Automatyzacja", items: ["Workflowy n8n"] },
      { title: "Systemy", items: ["CRM", "SMSAPI", "MailerLite / poczta"] },
      { title: "Nadzór", items: ["Prometheus", "Grafana", "Alerty o błędach"] },
    ],
    infra: "VPS, Docker, Linux",
  },
  sections: [
    {
      type: "impact",
      title: "Cały cykl po mojej stronie.",
      text: "Projekt, budowa, konfiguracja serwera i wdrożenie zajęły mi około dwóch miesięcy. Od tego czasu utrzymuję system: serwer, monitoring i workflowy, które łączą formularze z CRM-em i wysyłką wiadomości.",
    },
    {
      type: "results",
      title: "Co działa dziś.",
      intro: "Liczba zgłoszeń pokazuje skalę, w jakiej system pracuje. Nie jest miarą oszczędności ani sprzedaży.",
      metrics: [{ value: 1000, suffix: "+", label: "zgłoszeń w CRM" }],
      proofs: [
        "Zgłoszenia z formularzy reklam Meta i ze strony trafiają do CRM-u bez ręcznego przepisywania.",
        "Zaraz po wysłaniu formularza klient dostaje SMS przez SMSAPI. Mailingi i powiadomienia dla zespołu wysyłają się automatycznie.",
        "Monitoring i alerty pomagają wykrywać błędy również poza godzinami pracy.",
      ],
    },
  ],
  // Wersja angielska
  en: {
    title: "Forms, CRM and automatic notifications",
    description: "A live, maintained system: leads from Meta and website forms land in the CRM, the customer gets a text right away, and mailings and notifications go out automatically.",
    lead: "A system I built on my own in about two months and still maintain. Leads from Meta ads and the website form land in the CRM, and both the customer and the team get automatic messages.",
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
        { title: "Systems", items: ["CRM", "SMSAPI", "MailerLite / email"] },
        { title: "Monitoring", items: ["Prometheus", "Grafana", "Error alerts"] },
      ],
      infra: "VPS, Docker, Linux",
    },
    sections: [
      {
        type: "impact",
        title: "The whole cycle on my side.",
        text: "Design, build, server setup and deployment took me about two months. Since then I have been maintaining the system: the server, the monitoring and the workflows that connect the forms to the CRM and to outgoing messages.",
      },
      {
        type: "results",
        title: "What runs today.",
        intro: "The number of leads shows the scale the system works at. It is not a measure of savings or sales.",
        metrics: [{ value: 1000, suffix: "+", label: "leads in the CRM" }],
        proofs: [
          "Leads from Meta ad forms and the website land in the CRM with no retyping.",
          "Right after submitting the form, the customer gets a text via SMSAPI. Mailings and team notifications go out automatically.",
          "Monitoring and alerts help catch errors outside working hours too.",
        ],
      },
    ],
  },
};
