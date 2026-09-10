import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { BUSINESS, WA_MESSAGES, waLink } from "../lib/config";
import { CATEGORIES } from "../lib/data";
import { useLockBodyScroll } from "../lib/hooks";

const SERVICE_LINKS: { label: string; to: string }[] = [
  { label: CATEGORIES["airport-transfers"].label, to: "/services/airport-transfers" },
  { label: CATEGORIES["private-tours"].label, to: "/services/private-tours" },
  { label: CATEGORIES["seasonal-tours"].label, to: "/services/seasonal-tours" },
  { label: CATEGORIES["day-trips"].label, to: "/services/day-trips" },
  { label: CATEGORIES.experiences.label, to: "/services/experiences" },
  { label: CATEGORIES["executive-transportation"].label, to: "/services/executive-transportation" },
  { label: CATEGORIES["cruise-terminal-transfers"].label, to: "/services/cruise-terminal-transfers" },
  { label: CATEGORIES["chauffeur-service"].label, to: "/services/chauffeur-service" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-[0.78rem] uppercase tracking-[0.22em] transition-colors duration-200 ${
    isActive ? "text-gold" : "text-white/75 hover:text-gold"
  }`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-gold/25 bg-jet/95 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-jet/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Blessed Journey Vacations — home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center border border-gold/60 font-display text-xl font-semibold text-gold">
            BJ
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-wide text-white sm:text-xl">
              Blessed Journey
            </span>
            <span className="mt-1 block text-[0.58rem] tracking-[0.42em] text-gold">VACATIONS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/fleet" className={linkClass}>
            Fleet
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[0.78rem] uppercase tracking-[0.22em] text-white/75 transition-colors duration-200 hover:text-gold"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180 text-gold" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 border border-gold/30 bg-charcoal/98 py-2 shadow-2xl shadow-black/60 backdrop-blur-md">
                {SERVICE_LINKS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block border-l-2 border-transparent px-5 py-2.5 text-sm text-white/80 transition-all duration-200 hover:border-gold hover:bg-gold/10 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 border border-gold/45 px-4 py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-gold transition-colors duration-200 hover:bg-gold/10 md:flex"
          >
            <Phone size={14} />
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            to="/quote"
            className="btn-gold hidden px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] sm:block"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center border border-gold/40 text-gold lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="max-h-[calc(100vh-74px)] overflow-y-auto border-t border-gold/20 bg-jet px-4 pb-8 pt-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col">
            <NavLink to="/" end className={linkClass}>
              <span className="block border-b border-white/10 py-3.5">Home</span>
            </NavLink>
            <NavLink to="/fleet" className={linkClass}>
              <span className="block border-b border-white/10 py-3.5">Fleet</span>
            </NavLink>
            <p className="pb-2 pt-5 text-[0.68rem] uppercase tracking-[0.3em] text-gold">Services</p>
            {SERVICE_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-white/10 py-3 text-sm text-white/80 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <NavLink to="/contact" className={linkClass}>
              <span className="block py-3.5">Contact</span>
            </NavLink>
          </nav>

          <div className="mt-5 grid gap-3">
            <Link
              to="/quote"
              className="btn-gold px-6 py-3.5 text-center text-[0.75rem] font-medium uppercase tracking-[0.24em]"
            >
              Book Now
            </Link>
            <a
              href={waLink(WA_MESSAGES.quote)}
              target="_blank"
              rel="noreferrer"
              className="wa-btn px-6 py-3.5 text-center text-[0.75rem] font-medium uppercase tracking-[0.24em]"
            >
              WhatsApp a Quote
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="btn-ghost px-6 py-3.5 text-center text-[0.75rem] uppercase tracking-[0.24em]"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
