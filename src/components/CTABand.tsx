import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS, WA_MESSAGES, waLink } from "../lib/config";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/nyc-skyline.jpg"
        alt="New York City skyline at night"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-jet/85" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <p className="eyebrow">Blessed Journey Vacations</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
          Your car is waiting. <span className="gold-text">So are we.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Airport at 5 AM, a private tour, a cruise pier or a private jet at Teterboro — one message
          confirms everything.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <Link
            to="/quote"
            className="btn-gold px-8 py-4 text-[0.76rem] font-medium uppercase tracking-[0.24em]"
          >
            Book Now
          </Link>
          <a
            href={waLink(WA_MESSAGES.quote)}
            target="_blank"
            rel="noreferrer"
            className="wa-btn flex items-center justify-center gap-2 px-8 py-4 text-[0.76rem] font-medium uppercase tracking-[0.24em]"
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 text-[0.76rem] uppercase tracking-[0.24em]"
          >
            <Phone size={15} /> {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}