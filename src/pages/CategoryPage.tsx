import { Link, useParams } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import PackageCard from "../components/PackageCard";
import CTABand from "../components/CTABand";
import NotFound from "./NotFound";
import { WA_MESSAGES, waLink } from "../lib/config";
import { CATEGORIES, byCategory, type Category } from "../lib/data";
import { useDocumentTitle } from "../lib/hooks";

export default function CategoryPage() {
  const { slug } = useParams();
  const meta = slug && slug in CATEGORIES ? CATEGORIES[slug as Category] : undefined;
  useDocumentTitle(meta ? `${meta.label} | Blessed Journey Vacations` : "Service | Blessed Journey Vacations");

  if (!meta || !slug) return <NotFound />;

  const packages = byCategory(slug as Category);

  return (
    <>
      <PageHero eyebrow={meta.label} title={meta.title} subtitle={meta.intro} image={meta.heroImage} />

      {meta.bullets && (
        <section className="mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {meta.bullets.map((b) => (
              <div key={b.title} className="lux-card p-5">
                <h3 className="font-display text-xl text-gold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{b.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {packages.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="lux-card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="font-display text-3xl text-white">Bespoke arrangements</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                This service is quoted individually — tell us the date, the route and the number of
                travellers and we will send a confirmed all-inclusive price within minutes.
              </p>
            </div>
            <a
              href={waLink(WA_MESSAGES.quote)}
              target="_blank"
              rel="noreferrer"
              className="wa-btn flex shrink-0 items-center gap-2 px-7 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.2em]"
            >
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <QuoteForm
          id="reserve"
          eyebrow="Reservation"
          title={`Book ${meta.label.toLowerCase()}`}
          subtitle="Complete the form and continue directly into WhatsApp with your details pre-filled. Prefer to talk? Call us any time."
        />
      </section>

      <CTABand />
    </>
  );
}