import { useState } from "react";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { BUSINESS, WA_MESSAGES, waLink } from "../lib/config";
import { PACKAGES } from "../lib/data";

const VEHICLES = [
  "Chevrolet Suburban High Country (Black SUV)",
  "Executive Sedan — Mercedes S-Class / Cadillac CT6",
  "Private Tour Vehicle (SUV + Driver)",
  "Sprinter Van / Group Vehicle",
  "Private Jet Charter",
  "Not sure — please recommend",
];

interface Props {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  defaultService?: string;
  defaultVehicle?: string;
  className?: string;
}

export default function QuoteForm({
  id,
  eyebrow = "Quick Reservation",
  title = "Reserve your vehicle or request a quote",
  subtitle = "Two taps: complete the form and continue directly into WhatsApp with your details pre-filled. A specialist replies in minutes, 24/7.",
  defaultService,
  defaultVehicle,
  className = "",
}: Props) {
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: defaultVehicle ?? VEHICLES[0],
    passengers: "2",
    service: defaultService ?? "General quote",
  });
  const [sent, setSent] = useState(false);
  const [link, setLink] = useState("");

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Hello Blessed Journey Vacations! I would like to ${form.service === "General quote" ? "request a quote" : `reserve: ${form.service}`}.`,
      `Pick-up: ${form.pickup || "TBC"}`,
      form.dropoff ? `Drop-off: ${form.dropoff}` : "",
      `Date: ${form.date || "TBC"}${form.time ? ` at ${form.time}` : ""}`,
      `Vehicle: ${form.vehicle}`,
      `Passengers: ${form.passengers}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = waLink(message);
    setLink(url);
    setSent(true);
    window.open(url, "_blank", "noopener");
  };

  if (sent) {
    return (
      <div id={id} className={`lux-card p-8 text-center sm:p-10 ${className}`}>
        <CheckCircle2 size={44} className="mx-auto text-gold" />
        <h3 className="mt-5 font-display text-3xl text-white">Your request is on its way</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
          WhatsApp has opened with your trip details pre-filled — just press send. A Blessed Journey
          specialist replies with your confirmed price, usually within 10 minutes.
        </p>
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="wa-btn flex items-center justify-center gap-2 px-7 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.2em]"
          >
            <MessageCircle size={16} /> Continue in WhatsApp
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="btn-ghost flex items-center justify-center gap-2 px-7 py-3.5 text-[0.74rem] uppercase tracking-[0.2em]"
          >
            <Phone size={15} /> Call {BUSINESS.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="px-7 py-3.5 text-[0.74rem] uppercase tracking-[0.2em] text-white/60 underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={submit} className={`lux-card p-5 sm:p-8 ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">{subtitle}</p>}

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-1">
          <label className="field-label" htmlFor={`${id ?? "q"}-pickup`}>
            Pickup location
          </label>
          <input
            id={`${id ?? "q"}-pickup`}
            className="lux-input"
            placeholder="Hotel, address or airport"
            value={form.pickup}
            onChange={set("pickup")}
            required
          />
        </div>
        <div>
          <label className="field-label" htmlFor={`${id ?? "q"}-dropoff`}>
            Drop-off location
          </label>
          <input
            id={`${id ?? "q"}-dropoff`}
            className="lux-input"
            placeholder="JFK Terminal 4, Times Square…"
            value={form.dropoff}
            onChange={set("dropoff")}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="field-label" htmlFor={`${id ?? "q"}-date`}>
              Date
            </label>
            <input
              id={`${id ?? "q"}-date`}
              type="date"
              className="lux-input"
              value={form.date}
              onChange={set("date")}
              required
            />
          </div>
          <div>
            <label className="field-label" htmlFor={`${id ?? "q"}-time`}>
              Time
            </label>
            <input
              id={`${id ?? "q"}-time`}
              type="time"
              className="lux-input"
              value={form.time}
              onChange={set("time")}
            />
          </div>
        </div>
        <div className="sm:col-span-2 lg:col-span-2">
          <label className="field-label" htmlFor={`${id ?? "q"}-vehicle`}>
            Vehicle type
          </label>
          <select id={`${id ?? "q"}-vehicle`} className="lux-input" value={form.vehicle} onChange={set("vehicle")}>
            {VEHICLES.map((v) => (
              <option key={v} value={v} className="bg-jet">
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor={`${id ?? "q"}-passengers`}>
            Passengers
          </label>
          <input
            id={`${id ?? "q"}-passengers`}
            type="number"
            min={1}
            max={55}
            className="lux-input"
            value={form.passengers}
            onChange={set("passengers")}
            required
          />
        </div>
        <div className="sm:col-span-2 lg:col-span-3">
          <label className="field-label" htmlFor={`${id ?? "q"}-service`}>
            Service or tour
          </label>
          <select id={`${id ?? "q"}-service`} className="lux-input" value={form.service} onChange={set("service")}>
            <option value="General quote" className="bg-jet">
              General quote — help me choose
            </option>
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.title} className="bg-jet">
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="btn-gold px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.24em]"
        >
          Get Quote / Book Now
        </button>
        <p className="text-[0.72rem] leading-relaxed tracking-wide text-white/50">
          No prepayment · Free cancellation up to 24 h · Answered in minutes, 24/7
        </p>
      </div>
    </form>
  );
}