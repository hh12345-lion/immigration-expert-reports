import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14 md:py-16">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-signal/20 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.2em] text-mark">
          Immigration Expert Reports
        </p>
        <h1 className="font-display mt-3 break-words text-2xl font-bold tracking-tight text-white min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-3xl text-base text-white/70 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
