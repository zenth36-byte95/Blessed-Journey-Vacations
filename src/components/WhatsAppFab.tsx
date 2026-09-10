import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Car, CalendarCheck, Phone, Tag, X } from "lucide-react";
import { BUSINESS, WA_MESSAGES, waLink } from "../lib/config";

const ACTIONS = [
  { icon: CalendarCheck, label: "Reserve a vehicle", detail: "Pick date & pickup in 2 taps", message: WA_MESSAGES.reserve },
  { icon: Car, label: "Get a free quote", detail: "Custom route, answered in minutes", message: WA_MESSAGES.quote },
  { icon: Tag, label: "Send me your rates", detail: "Full rate list for all services", message: WA_MESSAGES.rates },
];

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-[86px] right-3 left-3 z-50 lux-card p-4 shadow-2xl shadow-black/70 sm:left-auto sm:w-[340px] md:bottom-24 md:right-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="wa-btn grid h-10 w-10 shrink-0 place-items-center rounded-full">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.470 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
                    <path d="M12.04 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.48 0 9.94-4.45 9.94-9.93 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.24 8.22z" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-lg leading-tight text-white">Concierge</p>
                  <p className="text-[0.7rem] tracking-[0.16em] text-gold">REPLIES IN MINUTES · 24/7</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat widget"
                onClick={() => setOpen(false)}
                className="text-white/50 transition-colors hover:text-gold"
              >
                <X size={18} />
              </button>
            </div>

            <div className="hairline my-3.5" />

            <p className="mb-3 text-sm leading-relaxed text-white/70">
              Tell us what you need — we answer with a confirmed price and a vehicle.
            </p>

            <div className="grid gap-2">
              {ACTIONS.map((action) => (
                <a
                  key={action.label}
                  href={waLink(action.message)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border border-gold/25 bg-jet/60 px-3 py-3 transition-all duration-200 hover:border-gold/70 hover:bg-gold/10"
                >
                  <action.icon size={18} className="shrink-0 text-gold" />
                  <span>
                    <span className="block text-sm text-white">{action.label}</span>
                    <span className="block text-[0.72rem] text-white/50">{action.detail}</span>
                  </span>
                </a>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 border border-gold/25 px-3 py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
              >
                <Phone size={13} /> Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: full-width action bar */}
      <div className="safe-bottom fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-gold/25 bg-jet/95 px-3 py-2.5 backdrop-blur-md md:hidden">
        <a
          href={BUSINESS.phoneHref}
          className="btn-ghost flex h-12 flex-1 items-center justify-center gap-2 text-[0.72rem] uppercase tracking-[0.2em]"
        >
          <Phone size={15} /> Call
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="wa-btn flex h-12 flex-[1.6] items-center justify-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em]"
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.75 1.21c5.48 0 9.94-4.45 9.94-9.93 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.24 8.22z" />
          </svg>
          {open ? "Close" : "Reserve · Quote"}
        </button>
      </div>

      {/* Desktop: floating pill */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp concierge"
        className="wa-btn fixed bottom-6 right-6 z-50 hidden items-center gap-3 px-6 py-4 text-[0.74rem] font-medium uppercase tracking-[0.2em] shadow-2xl shadow-black/60 transition-transform duration-200 hover:-translate-y-0.5 md:flex"
      >
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.75 1.21c5.48 0 9.94-4.45 9.94-9.93 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.24 8.22z" />
        </svg>
        Reserve on WhatsApp
      </button>
    </>
  );
}