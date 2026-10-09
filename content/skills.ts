/**
 * Słownik umiejętności do interaktywnej mapy na stronie głównej (nazwy w obu językach).
 * Projekty wskazują umiejętności po `id`.
 */
export const skillGroups = [
  {
    title: { pl: "AI i modele językowe", en: "AI and language models" },
    icon: "brain",
    skills: [
      { id: "llm", label: { pl: "API OpenAI i Anthropic", en: "OpenAI and Anthropic APIs" } },
      { id: "agents", label: { pl: "Agenci AI", en: "AI agents" } },
      { id: "bots", label: { pl: "Chatboty i voiceboty", en: "Chatbots and voicebots" } },
      { id: "speech", label: { pl: "Transkrypcja rozmów", en: "Call transcription" } },
      { id: "imagegen", label: { pl: "Generowanie grafik", en: "Image generation" } },
    ],
  },
  {
    title: { pl: "Automatyzacje i integracje", en: "Automations and integrations" },
    icon: "cycle",
    skills: [
      { id: "n8n", label: { pl: "n8n", en: "n8n" } },
      { id: "make", label: { pl: "Make i Zapier", en: "Make and Zapier" } },
      { id: "crm", label: { pl: "Integracje CRM", en: "CRM integrations" } },
      { id: "erp", label: { pl: "Integracje ERP", en: "ERP integrations" } },
      { id: "api", label: { pl: "REST API", en: "REST APIs" } },
    ],
  },
  {
    title: { pl: "Komunikacja i płatności", en: "Messaging and payments" },
    icon: "chat",
    skills: [
      { id: "twilio", label: { pl: "Twilio", en: "Twilio" } },
      { id: "smsapi", label: { pl: "SMSAPI", en: "SMSAPI" } },
      { id: "whatsapp", label: { pl: "WhatsApp", en: "WhatsApp" } },
      { id: "mailerlite", label: { pl: "MailerLite", en: "MailerLite" } },
      { id: "email", label: { pl: "Integracje z pocztą (SMTP, IMAP)", en: "Email server integrations (SMTP, IMAP)" } },
      { id: "stripe", label: { pl: "Stripe", en: "Stripe" } },
    ],
  },
  {
    title: { pl: "Strony i marketing", en: "Web and marketing" },
    icon: "pulse",
    skills: [
      { id: "meta", label: { pl: "Meta (formularze, Pixel, Conversions API)", en: "Meta (lead forms, Pixel, Conversions API)" } },
      { id: "wordpress", label: { pl: "WordPress", en: "WordPress" } },
    ],
  },
  {
    title: { pl: "Kod i infrastruktura", en: "Code and infrastructure" },
    icon: "code",
    skills: [
      { id: "python", label: { pl: "Python", en: "Python" } },
      { id: "docker", label: { pl: "Docker i serwery VPS", en: "Docker and VPS servers" } },
      { id: "postgres", label: { pl: "PostgreSQL", en: "PostgreSQL" } },
      { id: "monitoring", label: { pl: "Monitoring: Prometheus i Grafana", en: "Monitoring: Prometheus and Grafana" } },
    ],
  },
] as const;

export type SkillId = (typeof skillGroups)[number]["skills"][number]["id"];
