import { Link } from "react-router-dom";
import { Clock3, Users } from "lucide-react";
import { formatPrice } from "../lib/config";
import { CATEGORIES, packagePriceLabel, type TourPackage } from "../lib/data";

export default function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <Link
      to={`/experience/${pkg.slug}`}
      className="lux-card group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/25 to-transparent" />
        {pkg.badge && (
          <span className="absolute left-4 top-4 border border-gold/60 bg-jet/85 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            {pkg.badge}
          </span>
        )}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            {pkg.compareAt && (
              <p className="text-xs text-white/55 line-through">{formatPrice(pkg.compareAt)}</p>
            )}
            <p className={`font-display text-3xl leading-none text-gold ${pkg.quoteOnly ? "text-xl" : ""}`}>
              {packagePriceLabel(pkg)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="eyebrow">{CATEGORIES[pkg.category].label}</p>
        <h3 className="mt-2 font-display text-2xl leading-snug text-white transition-colors duration-300 group-hover:text-gold-light">
          {pkg.title}
        </h3>
        <p className="mt-1.5 text-[0.82rem] text-white/55">{pkg.subtitle}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/70">{pkg.summary}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-[0.72rem] text-white/55">
          {pkg.duration && (
            <span className="flex items-center gap-1.5">
              <Clock3 size={13} className="text-gold" /> {pkg.duration}
            </span>
          )}
          {pkg.capacity && (
            <span className="flex items-center gap-1.5">
              <Users size={13} className="text-gold" /> {pkg.capacity}
            </span>
          )}
          <span className="ml-auto text-[0.7rem] uppercase tracking-[0.2em] text-gold transition-transform duration-300 group-hover:translate-x-1">
            Details →
          </span>
        </div>
      </div>
    </Link>
  );
}