import type { Project } from "./types";

export const projekt04: Project = {
  slug: "rezerwacje-i-platnosci",
  number: "04",
  title: "Rezerwacje i płatności dla landing page'y sprzedażowych",
  description: "Strony sprzedażowe połączone z systemem rezerwacji i płatnościami online.",
  lead: "Landing page'e sprzedażowe potrzebowały czegoś więcej niż formularza. Połączyłem je z systemami rezerwacji i płatności, tak aby klient mógł od razu zarezerwować termin i zapłacić.",
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
    architecture: {"columns": [{"title": "Input", "items": ["Sales landing page"]}, {"title": "Integrations", "items": ["Booking system", "Stripe payments"]}, {"title": "Output", "items": ["Email confirmation", "Calendar booking"]}]},
    "sections": [
      {
        "type": "results",
        "title": "What was built",
        "metrics": [],
        "proofs": [
          "Sales landing pages connected to a booking system.",
          "Online payment in the same process as the booking."
        ]
      }
    ]
  },
  architecture: {"columns": [{"title": "Wejście", "items": ["Landing page sprzedażowy"]}, {"title": "Integracje", "items": ["System rezerwacji", "Płatności Stripe"]}, {"title": "Wynik", "items": ["Potwierdzenie e-mail", "Rezerwacja w kalendarzu"]}]},
  sections: [
    {
      "type": "results",
      "title": "Co powstało",
      "metrics": [],
      "proofs": [
        "Landing page'e sprzedażowe połączone z systemem rezerwacji.",
        "Płatność online w tym samym procesie co rezerwacja."
      ]
    }
  ],
};
