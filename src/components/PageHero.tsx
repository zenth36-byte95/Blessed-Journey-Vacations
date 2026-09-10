interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden pt-[74px]">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/75 to-jet/45" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">{subtitle}</p>}
      </div>
    </section>
  );
}