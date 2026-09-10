import { Link } from "react-router-dom";
import { useDocumentTitle } from "../lib/hooks";

export default function NotFound() {
  useDocumentTitle("Page not found | Blessed Journey Vacations");

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-[74px] text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl text-white">This route doesn't exist</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
        But our fleet does — and we're available 24/7. Head back home or request a quote in under a minute.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-gold px-7 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.22em]">
          Back home
        </Link>
        <Link to="/quote" className="btn-ghost px-7 py-3.5 text-[0.74rem] uppercase tracking-[0.22em]">
          Get a quote
        </Link>
      </div>
    </section>
  );
}