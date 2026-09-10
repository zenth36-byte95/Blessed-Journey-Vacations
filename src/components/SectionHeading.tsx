interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
      {align === "center" && <div className="hairline mx-auto mt-6 w-40" />}
      {subtitle && <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">{subtitle}</p>}
    </div>
  );
}