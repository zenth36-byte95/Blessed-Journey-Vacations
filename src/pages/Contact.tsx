import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import CTABand from "../components/CTABand";
import { BUSINESS, WA_MESSAGES, waLink } from "../lib/config";
import { useDocumentTitle } from "../lib/hooks";

const AREAS = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
  "Newark / NJ",
  "Westchester",
  "Long Island",
  "Greenwich CT",
  "Teterboro TEB",
];

export default function Contact() {
  useDocumentTitle("Contact & Reservations | Blessed Journey Vacations");

  const items = [
    { icon: Phone, label: "Call us", value: BUSINESS.phoneDisplay, href: BUSINESS.phoneHref },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with a specialist",
      href: waLink(WA_MESSAGES.quote),
      external: true,
    },
    { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
    { icon: Clock3, label: "Availability", value: BUSINESS.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We answer in minutes"
        subtitle="Call, message or send the form — a Blessed Journey specialist handles the rest, day or night."
        image="/images/hero-chauffeur.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const content = (
              <>
                <item.icon size={22} className="text-gold" />
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.24em] text-gold">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-white">{item.value}</p>
              </>
            );
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="lux-card block p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="lux-card p-6">
                {content}
              </div>
            );
          })}
        </div>

        <div className="lux-card mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-1 shrink-0 text-gold" />
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Service area</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {AREAS.map((area) => (
                  <span key={area} className="text-sm text-white/75">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <QuoteForm
          id="reserve"
          eyebrow="Reservation request"
          title="Send us your trip"
          subtitle="We reply with a confirmed all-inclusive price — usually within 10 minutes."
        />
      </section>

      <CTABand />
    </>
  );
}