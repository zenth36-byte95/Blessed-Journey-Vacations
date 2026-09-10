import { Link, useParams } from "react-router-dom";
import { Check, Clock3, MessageCircle, Phone, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import PackageCard from "../components/PackageCard";
import CTABand from "../components/CTABand";
import NotFound from "./NotFound";
import { BUSINESS, WA_MESSAGES, formatPrice, waLink } from "../lib/config";
import { CATEGORIES, bySlug, relatedTo } from "../lib/data";
import { useDocumentTitle } from "../lib/hooks";

export default function PackageDetail() {
  const { slug } = useParams();
  const pkg = bySlug(slug);
  useDocumentTitle(pkg ? `${pkg.title} | Blessed Journey Vacations` : "Experience | Blessed Journey Vacations");

  if (!pkg) return <NotFound />;

  const meta = CATEGORIES[pkg.category];
  const related = relatedTo(pkg, 3);
  const waMessage = `Hello Blessed Journey Vacations! I would like to book "${pkg.title}"${
    pkg.price ? ` (${formatPrice(pkg.price)})` : ""
  }. Date: __. Passengers: __.`;

  return (
    <>
      <PageHero eyebrow={meta.label} title={pkg.title} subtitle={pkg.subtitle} image={pkg.image} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">{pkg.summary}</p>

          <h2 className="mt-12 font-display text-3xl text-white">Highlights</h2>
          <div className="hairline mt-3 w-24" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {pkg.highlights.map((h) => (
              <li key={h} className="lux-card flex items-start gap-3 p-4 text-sm leading-relaxed text-white/80">
                <Check size={16} className="mt-0.5 shrink-0 text-gold" /> {h}
              </li>
            ))}
          </ul>

          {pkg.itinerary && (
            <>
              <h2 className="mt-12 font-display text-3xl text-white">Itinerary</h2>
              <div className="hairline mt-3 w-24" />
              <ol className="mt-6 border-l border-gold/30">
                {pkg.itinerary.map((stop) => (
                  <li key={stop.time} className="relative pb-8 pl-6 last:pb-0">
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-gold bg-gold/30" />
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-gold">{stop.time}</p>
                    <h3 className="mt-1 font-display text-xl text-white">{stop.title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/70">{stop.detail}</p>
                  </li>
                ))}
              </ol>
            </>
          )}

          <h2 className="mt-12 font-display text-3xl text-white">What's included</h2>
          <div className="hairline mt-3 w-24" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {pkg.includes.map((inc) => (
              <li key={inc} className="flex items-start gap-3 text-sm text-white/75">
                <Check size={15} className="mt-0.5 shrink-0 text-gold" /> {inc}
              </li>
            ))}
          </ul>
        </div>

        {/* Booking card */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="lux-card p-6 sm:p-7">
            {pkg.compareAt && <p className="text-sm text-white/50 line-through">Regular {formatPrice(pkg.compareAt)}</p>}
            <p className="mt-1 font-display text-5xl leading-none text-gold">
              {pkg.quoteOnly ? "On request" : formatPrice(pkg.price ?? 0)}
            </p>
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.2em] text-white/55">
              {pkg.quoteOnly ? "Solicite cotización" : pkg.fromPrice ? "From — all-inclusive" : "All-inclusive private rate"}
            </p>

            <div className="hairline my-6" />

            <ul className="space-y-3 text-sm text-white/75">
              {pkg.duration && (
                <li className="flex items-center gap-3">
                  <Clock3 size={15} className="text-gold" /> {pkg.duration}
                </li>
              )}
              {pkg.capacity && (
                <li className="flex items-center gap-3">
                  <Users size={15} className="text-gold" /> {pkg.capacity}
                </li>
              )}
              <li className="flex items-center gap-3">
                <Check size={15} className="text-gold" /> Free cancellation up to 24 h
              </li>
            </ul>

            <Link
              to={`/quote?service=${pkg.slug}`}
              className="btn-gold mt-7 block px-6 py-4 text-center text-[0.76rem] font-medium uppercase tracking-[0.24em]"
            >
              Book Now
            </Link>
            <a
              href={waLink(waMessage)}
              target="_blank"
              rel="noreferrer"
              className="wa-btn mt-3 flex items-center justify-center gap-2 px-6 py-4 text-[0.76rem] font-medium uppercase tracking-[0.2em]"
            >
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="btn-ghost mt-3 flex items-center justify-center gap-2 px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.2em]"
            >
              <Phone size={14} /> {BUSINESS.phoneDisplay}
            </a>
            <p className="mt-4 text-center text-[0.7rem] leading-relaxed text-white/45">
              Instant confirmation · No prepayment required
            </p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <QuoteForm
          id="book"
          eyebrow="Reserve this experience"
          title="Check availability"
          subtitle="Send us the details and continue into WhatsApp — a specialist confirms your vehicle and price in minutes."
          defaultService={pkg.title}
          defaultVehicle={
            pkg.category === "day-trips" || pkg.category === "private-tours" || pkg.category === "seasonal-tours"
              ? "Private Tour Vehicle (SUV + Driver)"
              : undefined
          }
        />
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">You may also like</h2>
          <div className="hairline mt-3 w-24" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <PackageCard key={item.slug} pkg={item} />
            ))}
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}