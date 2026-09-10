import { Link } from "react-router-dom";
import { Check, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import CTABand from "../components/CTABand";
import { WA_MESSAGES, waLink } from "../lib/config";
import { FLEET } from "../lib/data";
import { useDocumentTitle } from "../lib/hooks";

export default function Fleet() {
  useDocumentTitle("The Fleet | Blessed Journey Vacations");

  return (
    <>
      <PageHero
        eyebrow="The Fleet"
        title="Black. Immaculate. Yours."
        subtitle="Late-model black vehicles, detailed before every service, chauffeured by professionals in suit."
        image="/images/fleet-suburban.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-14">
          {FLEET.map((vehicle, i) => (
            <article
              key={vehicle.slug}
              className={`lux-card grid overflow-hidden lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-jet/60 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="eyebrow">{vehicle.type}</p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">{vehicle.name}</h2>
                <p className="mt-1.5 text-sm text-white/55">{vehicle.year}</p>
                <p className="mt-5 text-sm leading-relaxed text-white/75">{vehicle.blurb}</p>

                <ul className="mt-6 grid gap-2.5">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check size={15} className="mt-0.5 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-5 text-[0.78rem] text-white/65">
                  <span>{vehicle.passengers}</span>
                  <span>{vehicle.luggage}</span>
                  {vehicle.from !== undefined && (
                    <span className="text-gold">From ${vehicle.from}</span>
                  )}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={`/quote?vehicle=${vehicle.slug}`}
                    className="btn-gold px-7 py-3.5 text-center text-[0.74rem] font-medium uppercase tracking-[0.22em]"
                  >
                    Reserve this vehicle
                  </Link>
                  <a
                    href={waLink(
                      `Hello! I would like a quote for the ${vehicle.name} (${vehicle.type}). Date: __. Pick-up: __.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="wa-btn flex items-center justify-center gap-2 px-7 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.2em]"
                  >
                    <MessageCircle size={15} /> Ask on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <QuoteForm
          id="reserve"
          eyebrow="Quick reservation"
          title="Reserve your vehicle"
          subtitle="Pick the vehicle, the date and the route — we confirm availability and your flat rate within minutes."
        />
      </section>

      <CTABand />
    </>
  );
}