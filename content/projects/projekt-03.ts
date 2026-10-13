import type { Project } from "./types";

export const projekt03: Project = {
  slug: "formularze-crm-powiadomienia",
  number: "03",
  title: "Formularze, CRM i automatyczne powiadomienia",
  description: "Ponad 1000 zgłoszeń z formularzy Meta i ze strony trafiło do CRM-u. Klient od razu dostaje SMS, a maile i powiadomienia wysyłają się automatycznie.",
  lead: "Aplikacja, którą zbudowałem samodzielnie w ciągu około dwóch miesięcy i nadal utrzymuję. Łączy formularze z reklam Meta i ze strony internetowej z CRM-em, wysyłkę SMS-ów przez SMSAPI, mailingi i powiadomienia. Działa na skonfigurowanym przeze mnie VPS-ie z monitoringiem i powiadomieniami o błędach.",
  year: "",
  tags: ["Integracje", "CRM"],
  skills: ["crm", "meta", "smsapi", "mailerlite", "email", "n8n", "make", "api", "docker", "vps", "linux", "monitoring"],
  flow: ["Formularz Meta / www", "n8n i CRM", "SMSAPI i mailing", "Monitoring i alerty"],
  flowIcons: ["form", "cycle", "mail", "pulse"],
  featured: false,
  meta: {"client": "", "role": "Projekt, wdrożenie i utrzymanie — samodzielnie", "period": "ok. 2 miesiące budowy", "status": "Działa, utrzymywane", "stack": "n8n · SMSAPI · CRM · VPS · Docker"},
  metrics: [{"value": 1000, "suffix": "+", "label": "zgłoszeń w CRM"}],
  en: {
    "title": "Forms, CRM and automatic notifications",
    "description": "Over 1,000 leads from Meta and website forms have landed in the CRM. The customer gets a text right away, and emails and notifications go out automatically.",
    "lead": "An application I built on my own in about two months and still maintain. It connects Meta lead ads and website forms to the CRM, sends text messages through SMSAPI, and handles mailings and notifications. It runs on a VPS I configured, with monitoring and error alerts.",
    "tags": [
      "Integrations",
      "CRM"
    ],
    "flow": ["Meta / web form", "n8n and CRM", "SMSAPI and mailing", "Monitoring and alerts"],
    "meta": {
      "role": "Design, deployment and maintenance — solo",
      "period": "about 2 months to build",
      "status": "Live, maintained",
      "stack": "n8n · SMSAPI · CRM · VPS · Docker"
    },
    architecture: {"columns": [{"title": "Input", "items": ["Meta lead forms", "Website form"]}, {"title": "Automation", "items": ["n8n workflows"]}, {"title": "Systems", "items": ["CRM", "SMSAPI", "MailerLite / email"]}, {"title": "Monitoring", "items": ["Prometheus", "Grafana", "Error alerts"]}], "infra": "VPS, Docker, Linux"},
    "sections": [
      {
        "type": "results",
        "title": "What was built",
        "metrics": [{"value": 1000, "suffix": "+", "label": "leads in the CRM"}],
        "proofs": [
          "Leads from Meta and website forms land in the CRM automatically, with no retyping.",
          "The customer gets a text via SMSAPI right after submitting the form. Mailings and team notifications follow.",
          "VPS setup, monitoring and error alerts, so it keeps running at night too.",
          "The full cycle handled solo: design, build, deployment and ongoing maintenance."
        ]
      }
    ]
  },
  architecture: {"columns": [{"title": "Wejście", "items": ["Formularze Meta", "Formularz na stronie"]}, {"title": "Automatyzacja", "items": ["Workflowy n8n"]}, {"title": "Systemy", "items": ["CRM", "SMSAPI", "MailerLite / poczta"]}, {"title": "Nadzór", "items": ["Prometheus", "Grafana", "Alerty o błędach"]}], "infra": "VPS, Docker, Linux"},
  sections: [
    {
      "type": "results",
      "title": "Co powstało",
      "metrics": [{"value": 1000, "suffix": "+", "label": "zgłoszeń w CRM"}],
      "proofs": [
        "Zgłoszenia z formularzy Meta i ze strony trafiają prosto do CRM-u, bez przepisywania.",
        "Zaraz po wysłaniu formularza klient dostaje SMS przez SMSAPI. Do tego dochodzą mailingi i powiadomienia dla zespołu.",
        "Konfiguracja VPS, monitoring i powiadomienia o błędach, żeby całość działała także w nocy.",
        "Cały cykl wykonany samodzielnie: projekt, budowa, wdrożenie i bieżące utrzymanie."
      ]
    }
  ],
};
