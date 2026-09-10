export const BUSINESS = {
  name: "Blessed Journey Vacations",
  tagline: "Luxury Travel · Private Tours · Private Aviation",
  phoneDisplay: "+1 (917) 555-0142",
  phoneHref: "tel:+19175550142",
  whatsappNumber: "19175550142",
  email: "reservations@blessedjourneyvacations.com",
  area: "New York City · JFK · LGA · EWR · HPN · Tri-State",
  hours: "Open 24 / 7 — reservations recommended 24 hours in advance",
} as const;

/** Builds a wa.me deep link with a pre-filled message (2-tap booking). */
export function waLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  quote:
    "Hello Blessed Journey Vacations! I would like a free quote. Pick-up: __, Drop-off: __, Date: __, Passengers: __.",
  rates:
    "Hello! Could you please send me your current rates for luxury transfers and private tours in New York?",
  reserve:
    "Hello! I would like to reserve a vehicle with Blessed Journey Vacations. Date: __, Time: __, Pick-up: __, Passengers: __.",
  reservation:
    "Hello! I just submitted a reservation request on your website and I would like to confirm the details.",
} as const;

export function formatPrice(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}