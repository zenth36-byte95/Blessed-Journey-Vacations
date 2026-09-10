import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Timer, Wallet } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import SectionHeading from "../components/SectionHeading";
import PackageCard from "../components/PackageCard";
import CTABand from "../components/CTABand";
import { FLEET, PACKAGES, SERVICE_CARDS, byCategory } from "../lib/data";
import { useDocumentTitle } from "../lib/hooks";

const TRUST = [
  { icon: Timer, text: "Chauffeur dispatched in 60 minutes" },
  { icon: Wallet, text: "Flat all-inclusive rates" },
  { icon: ShieldCheck, text: "Licensed, insured fleet" },
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Home() {
  useDocumentTitle(
    "Blessed Journey Vacations | Luxury Transfers, Private Tours & Jet Charters in New York",
  );

  const transfers = byCategory("airport-transfers");
  const tours = [
    ...byCategory("private-tours"),
    ...byCategory("seasonal-tours"),
    ...byCategory("experiences"),
  ];
  const dayTrips = byCategory("day-trips");
  const christmas = PACKAGES.find((p) => p.slug === "christmas-lights-tour")!;

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-[94vh] items-center overflow-hidden pt-[74px]">
        <img
          src="/images/hero-chauffeur.jpg"
          alt="Chauffeur beside a black luxury Suburban in New York at night"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jet via-jet/85 to-jet/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-jet/60" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-44 pt-24 sm:px-6 sm:pb-40 lg:px-8 lg:pb-56">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="eyebrow">New York City · Tri-State · 24 / 7</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Travel New York in
              <span className="gold-text block">absolute luxury</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Black Chevrolet Suburbans, executive sedans, private tours and private jet connections —
              chauffeured by people who know every terminal, pier and bridge in this city.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="btn-gold px-8 py-4 text-center text-[0.76rem] font-medium uppercase tracking-[0.24em]"
              >
                Book Now
              </Link>
              <a
                href="#reserve"
                className="btn-ghost px-8 py-4 text-center text-[0.76rem] uppercase tracking-[0.24em]"
              >
                Get a Quote
              </a>
              <Link
                to="/fleet"
                className="px-8 py-4 text-center text-[0.76rem] uppercase tracking-[0.24em] text-white/70 underline-offset-8 transition-colors hover:text-gold hover:underline"
              >
                View the Fleet
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST.map((item) => (
                <span key={item.text} className="flex items-center gap-2 text-[0.78rem] text-white/65">
                  <item.icon size={15} className="text-gold" /> {item.text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Quick reservation form (first section) ─────────── */}
      <section id="reserve" className="relative z-10 -mt-32 sm:-mt-28 lg:-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>

      {/* ── Core services ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Core Services"
          subtitle="Six ways to move through New York — every one of them private, punctual and chauffeured."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((service, i) => (
            <motion.div key={service.to} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
              <Link
                to={service.to}
                className="lux-card group relative block overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/40 to-transparent" />
                </div>
                <div className="relative -mt-16 p-5 sm:p-6">
                  <h3 className="font-display text-2xl text-white transition-colors duration-300 group-hover:text-gold-light">
                    {service.label}
                  </h3>
                  <p className="mt-2 text-sm text-white/65">{service.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                    Explore <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Airport transfers ──────────────────────────────── */}
      <section className="border-y border-gold/15 bg-jet-2 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Airport transfers"
            title="Flat rates to every New York airport"
            subtitle="Tolls, taxes and gratuity already included. Track your flight, meet & greet inside arrivals, 60 minutes of free wait time."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {transfers.map((pkg, i) => (
              <motion.div key={pkg.slug} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-[0.78rem] leading-relaxed text-white/55">
            <span className="text-gold">2026 market check:</span> private SUV transfers to JFK typically run
            $200 – $270 all-in with NYC operators — our promotional flat rate starts at $120. Helicopter
            flights and Manhattan excursions are listed under{" "}
            <a href="#tours" className="text-gold underline-offset-4 hover:underline">
              Signature Experiences
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Signature tours ───────────────────────────────── */}
      <section id="tours" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Private & seasonal"
          title="Signature Tours"
          subtitle="Your own vehicle, your own driver, your own pace — plus the December experience everyone asks for."
        />

        <motion.div {...fadeUp} className="mt-12">
          <Link
            to={`/experience/${christmas.slug}`}
            className="lux-card group grid overflow-hidden lg:grid-cols-2"
          >
            <div className="relative aspect-[3/2] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <img
                src={christmas.image}
                alt={christmas.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jet/70 to-transparent lg:bg-gradient-to-r" />
              <span className="absolute left-5 top-5 border border-gold/60 bg-jet/85 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                {christmas.badge}
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="eyebrow">Seasonal · December only</p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-white transition-colors duration-300 group-hover:text-gold-light sm:text-4xl">
                {christmas.title}
              </h3>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {christmas.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-white/70">
                    <Check size={15} className="mt-0.5 shrink-0 text-gold" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-end gap-6">
                <div>
                  <p className="text-xs text-white/55 line-through">$285.00</p>
                  <p className="font-display text-4xl leading-none text-gold">$250.00</p>
                </div>
                <span className="text-[0.72rem] uppercase tracking-[0.22em] text-gold">
                  View itinerary →
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tours
            .filter((p) => p.slug !== "christmas-lights-tour")
            .map((pkg, i) => (
              <motion.div key={pkg.slug} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
        </div>
      </section>

      {/* ── Day trips ─────────────────────────────────────── */}
      <section className="border-y border-gold/15 bg-jet-2 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Beyond the city"
            title="Private Day Trips"
            subtitle="Philadelphia, Amish Country and Washington D. C. — door to door in your own Suburban."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {dayTrips.map((pkg, i) => (
              <motion.div key={pkg.slug} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fleet ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="The fleet"
          title="Black. Immaculate. Yours."
          subtitle="Every vehicle in our fleet is black, late-model and detailed before each service."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {FLEET.map((vehicle, i) => (
            <motion.div key={vehicle.slug} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
              <Link to="/fleet" className="lux-card group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet/80 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow">{vehicle.type}</p>
                  <h3 className="mt-2 font-display text-2xl text-white transition-colors duration-300 group-hover:text-gold-light">
                    {vehicle.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{vehicle.year}</p>
                  <div className="mt-auto flex items-center justify-between pt-5 text-[0.78rem] text-white/65">
                    <span>{vehicle.passengers}</span>
                    <span className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">Details →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}