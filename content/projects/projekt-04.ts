import type { Project } from "./types";

export const projekt04: Project = {
  slug: "rezerwacje-i-platnosci",
  number: "04",
  title: "Rezerwacje i płatności dla landing page'y sprzedażowych",
  description: "Strony sprzedażowe połączone z systemem rezerwacji i płatnościami online.",
  lead: "Landing page'e sprzedażowe potrzebowały czegoś więcej niż formularza. Połączyłem je z systemami rezerwacji i płatności, tak żeby klient mógł od razu zarezerwować termin i zapłacić.",
  year: "",
  tags: ["Integracje", "Sprzedaż online"],
  skills: ["stripe", "wordpress", "meta", "email", "n8n", "api"],
  flow: ["Landing page", "System rezerwacji", "Płatność online", "Potwierdzenie"],
  flowIcons: ["megaphone", "tasks", "cart", "check"],
  featured: false,
  meta: {"client": "", "role": "", "period": "", "status": "", "stack": "Integracje API"},
  metrics: [],
  en: {
    "title": "Bookings and payments for sales landing pages",
    "description": "Sales pages connected to a booking system and online payments.",
    "lead": "Sales landing pages needed more than a contact form. I connected them to booking and payment systems, so a customer can book a slot and pay right away.",
    "tags": [
      "Integrations",
      "Online sales"
    ],
    "flow": ["Landing page", "Booking system", "Online payment", "Confirmation"],
    "meta": {
      "stack": "API integrations"
    },
    "sections": [
      {
        "type": "results",
        "title": "What was built",
        "metrics": [],
        "proofs": [
          "Sales landing pages connected to a booking system.",
          "Online payments in the same flow."
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
        "Połączenie landing page'y sprzedażowych z systemem rezerwacji.",
        "Płatności online w tym samym przepływie."
      ]
    }
  ],
};
