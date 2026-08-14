import Link from "next/link";

export function CTASection({
  title = "Ready to instruct an expert?",
  description = "Send a short case note — country, proceeding stage, and report type. We route to the right network specialist for UK tribunal work.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-surface py-12 sm:py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[6px] border border-border bg-paper px-6 py-8 sm:px-8 sm:py-10 md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">{title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">{description}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-0">
            <Link
              href="/contact"
              className="font-display inline-flex min-h-[44px] items-center justify-center rounded-[6px] bg-signal px-6 py-3 text-sm font-semibold text-white hover:bg-signal-hover"
            >
              Contact
            </Link>
            <Link
              href="/how-to-instruct"
              className="font-display inline-flex min-h-[44px] items-center justify-center rounded-[6px] border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-signal hover:text-signal"
            >
              Instruct guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
