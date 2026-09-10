import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Clock3, ShieldCheck, Wallet } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import CTABand from "../components/CTABand";
import { bySlug } from "../lib/data";
import { useDocumentTitle } from "../lib/hooks";

const PROMISES = [
  { icon: Clock3, title: "Answered in minutes", text: "Our dispatch desk replies 24/7, including holidays." },
  { icon: Wallet, title: "All-inclusive price", text: "Tolls, taxes, airport fees and gratuity included in your quote." },
  { icon: ShieldCheck, title: "No prepayment", text: "Reserve now, pay after service. Free cancellation up to 24 h." },
  { icon: CheckCircle2, title: "Flight tracking", text: "We follow your landing time and adjust the pickup automatically." },
];

export default function Quote() {
  const [params] = useSearchParams();
  const pkg = bySlug(params.get("service"));
  const vehicle = params.get("vehicle");
  useDocumentTitle("Book Now | Blessed Journey Vacations");

  const defaultVehicle =
    vehicle === "suburban-high-country"
      ? "Chevrolet Suburban High Country (Black SUV)"
      : vehicle === "executive-sedan"
        ? "Executive Sedan — Mercedes S-Class / Cadillac CT6"
        : vehicle === "private-jet-charter"
          ? "Private Jet Charter"
          : undefined;

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title={pkg ? `Book: ${pkg.title}` : "Book now — or just ask"}
        subtitle={
          pkg
            ? `${pkg.subtitle}. Send your details and we confirm availability and your all-inclusive price within minutes.`
            : "Two taps to a confirmed price: complete the form, press send, and we take care of the rest."
        }
        image={pkg?.image ?? "/images/nyc-skyline.jpg"}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <QuoteForm
          id="reserve"
          eyebrow="Quick reservation & quote"
          title="Where are you going?"
          subtitle="Complete the form below and continue directly into WhatsApp with your trip details pre-filled."
          defaultService={pkg?.title}
          defaultVehicle={defaultVehicle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((item) => (
            <div key={item.title} className="lux-card p-6">
              <item.icon size={22} className="text-gold" />
              <h3 className="mt-4 font-display text-xl text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}