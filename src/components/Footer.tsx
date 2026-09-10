import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, WA_MESSAGES, waLink } from "../lib/config";


const columns: { heading: string; links: { label: string; to: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Airport Transfers", to: "/services/airport-transfers" },
      { label: "Executive Transportation", to: "/services/executive-transportation" },
      { label: "Professional Chauffeur", to: "/services/chauffeur-service" },
      { label: "Cruise Terminal Transfers", to: "/services/cruise-terminal-transfers" },
      { label: "Private Jet Charters", to: "/fleet" },
    ],
  },
  {
    heading: "Tours & Day Trips",
    links: [
      { label: "Christmas Lights Tour", to: "/experience/christmas-lights-tour" },
      { label: "Flavor of New York", to: "/experience/contrast-flavor-of-new-york" },
      { label: "Contrastes de New York", to: "/experience/contrastes-de-new-york" },
      { label: "Philadelphia & Amish", to: "/experience/philadelphia-amish" },
      { label: "Washington VIP", to: "/experience/washington-vip-bible-museum" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-jet-2 pb-28 pt-16 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border border-gold/60 font-display text-xl font-semibold text-gold">
                BJ
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-semibold text-white">Blessed Journey</span>
                <span className="mt-1 block text-[0.58rem] tracking-[0.42em] text-gold">VACATIONS</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
              Luxury black-car transportation, private tours and private aviation connections across New
              York City and the Tri-State area.
            </p>
            <a
              href={waLink(WA_MESSAGES.rates)}
              target="_blank"
              rel="noreferrer"
              className="wa-btn mt-6 inline-flex px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em]"
            >
              Request our rates
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">{col.heading}</h3>
              <div className="hairline mt-3 w-16" />
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/80 transition-colors duration-200 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">Reservations</h3>
            <div className="hairline mt-3 w-16" />
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold">
                  <Phone size={15} className="shrink-0 text-gold" /> {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 break-all transition-colors hover:text-gold"
                >
                  <Mail size={15} className="shrink-0 text-gold" /> {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold" /> {BUSINESS.area}
              </li>
              <li className="text-white/60">{BUSINESS.hours}</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[0.72rem] tracking-wide text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Blessed Journey Vacations. All rights reserved.</p>
          <p className="text-white/45">Licensed & insured · Fully insured fleet · Serving New York since day one</p>
        </div>
      </div>
    </footer>
  );
}