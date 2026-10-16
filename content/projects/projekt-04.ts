import type { Project } from "./types";

/** Krótka forma dodatkowej realizacji. Narzędzia rezerwacji i płatności, rola i status do potwierdzenia. */
export const projekt04: Project = {
  slug: "rezerwacje-i-platnosci",
  number: "06",
  title: "Rezerwacje i płatności na stronach sprzedażowych",
  description: "Połączyłem strony sprzedażowe z systemem rezerwacji i płatnościami online, aby użytkownik mógł zarezerwować termin i zapłacić w jednym procesie.",
  lead: "Strony sprzedażowe potrzebowały czegoś więcej niż formularza. Połączyłem je z systemem rezerwacji i płatnościami online, aby użytkownik mógł zarezerwować termin i zapłacić w jednym procesie.",
  year: "",
  tags: ["Integracje", "Sprzedaż online"],
  skills: ["stripe", "wordpress", "meta", "email", "n8n", "api"],
  flow: ["Strona sprzedażowa", "Rezerwacja terminu", "Płatność online"],
  flowIcons: ["megaphone", "tasks", "cart"],
  featured: false,
  meta: { client: "", role: "", period: "", status: "", stack: "Integracje API" },
  metrics: [],
  architecture: {
    columns: [
      { title: "Wejście", items: ["Strona sprzedażowa"] },
      { title: "Integracje", items: ["System rezerwacji", "Płatności online"] },
      { title: "Wynik", items: ["Termin zarezerwowany i opłacony w jednym procesie"] },
    ],
  },
  sections: [],
  // Wersja angielska
  en: {
    title: "Bookings and payments on sales pages",
    description: "I connected sales pages to a booking system and online payments, so a visitor can book a slot and pay in one process.",
    lead: "The sales pages needed more than a contact form. I connected them to a booking system and online payments, so a visitor can book a slot and pay in one process.",
    tags: ["Integrations", "Online sales"],
    flow: ["Sales page", "Slot booking", "Online payment"],
    meta: { stack: "API integrations" },
    architecture: {
      columns: [
        { title: "Input", items: ["Sales page"] },
        { title: "Integrations", items: ["Booking system", "Online payments"] },
        { title: "Output", items: ["A slot booked and paid for in one process"] },
      ],
    },
    sections: [],
  },
};
