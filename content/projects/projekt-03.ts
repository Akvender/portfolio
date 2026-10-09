import type { Project } from "./types";

export const projekt03: Project = {
  slug: "projekt-03",
  number: "03",
  title: "Formularze, CRM i automatyczne powiadomienia",
  description: "Zgłoszenia z formularzy Meta i ze strony trafiają do CRM-u, a dalej same wysyłają SMS-y, maile i powiadomienia.",
  lead: "Aplikacja, którą zbudowałem samodzielnie w około dwa miesiące i którą nadal utrzymuję. Łączy formularze z reklam Meta i ze strony internetowej z CRM-em, wysyłkę SMS-ów przez SMSAPI, mailingi i powiadomienia. Pod spodem jest skonfigurowany VPS, monitoring i powiadomienia o błędach.",
  year: "",
  tags: ["Integracje", "CRM"],
  skills: ["crm", "leads", "meta", "n8n", "api", "docker", "monitoring"],
  flow: ["Formularz Meta / www", "CRM", "SMS i mailing", "Powiadomienia"],
  flowIcons: ["form", "users", "mail", "bolt"],
  featured: false,
  meta: {"client": "", "role": "Projekt, wdrożenie i utrzymanie — samodzielnie", "period": "ok. 2 miesiące budowy", "status": "Działa, utrzymywane", "stack": "n8n · SMSAPI · CRM · VPS · Docker"},
  metrics: [],
  en: {
    "title": "Forms, CRM and automatic notifications",
    "description": "Leads from Meta and website forms go straight into the CRM, which then sends texts, emails and notifications on its own.",
    "lead": "An application I built on my own in about two months and still maintain. It connects Meta lead ads and website forms with the CRM, sends text messages through SMSAPI, runs mailings and notifications, and sits on a configured VPS with monitoring and error alerts.",
    "tags": [
      "Integrations",
      "CRM"
    ],
    "flow": [
      "Meta / web form",
      "CRM",
      "Texts and emails",
      "Notifications"
    ],
    "meta": {
      "role": "Design, deployment and maintenance — solo",
      "period": "about 2 months to build",
      "status": "Live, maintained",
      "stack": "n8n · SMSAPI · CRM · VPS · Docker"
    },
    "sections": [
      {
        "type": "results",
        "title": "What was built",
        "metrics": [],
        "proofs": [
          "Leads from Meta and website forms land in the CRM automatically, with no retyping.",
          "Automatic text messages via SMSAPI, mailings and team notifications.",
          "VPS setup, monitoring and error alerts, so it keeps running at night too.",
          "The full cycle done solo: design, build, deployment and ongoing maintenance."
        ]
      }
    ]
  },
  sections: [
    {
      "type": "results",
      "title": "Co powstało",
      "metrics": [],
      "proofs": [
        "Zgłoszenia z formularzy Meta i ze strony trafiają prosto do CRM-u, bez przepisywania.",
        "Automatyczne SMS-y przez SMSAPI, mailingi i powiadomienia dla zespołu.",
        "Konfiguracja VPS, monitoring i powiadomienia o błędach, żeby całość działała także w nocy.",
        "Pełen cykl zrobiony samodzielnie: projekt, budowa, wdrożenie i bieżące utrzymanie."
      ]
    }
  ],
};
