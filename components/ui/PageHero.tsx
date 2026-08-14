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
    <section className="border-b border-border bg-paper py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="font-display mt-2 break-words text-2xl font-semibold tracking-tight text-ink min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <span className="mt-4 block h-[3px] w-14 bg-mark" aria-hidden />
        {subtitle && <p className="mt-4 max-w-3xl text-base text-body sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
