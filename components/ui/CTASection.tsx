import Link from "next/link";

export function CTASection({
  title = "Ready to instruct an expert?",
  description = "Send a short case note — country, proceeding stage, and report type. We route to the right network specialist for UK tribunal work.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-border bg-surface py-12 sm:py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-l-4 border-signal pl-6 md:grid-cols-[1.4fr_auto] md:items-end md:gap-12">
          <div>
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl md:text-3xl">{title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="font-display inline-flex min-h-[44px] items-center justify-center bg-ink px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-white hover:bg-signal"
            >
              Contact
            </Link>
            <Link
              href="/how-to-instruct"
              className="font-display inline-flex min-h-[44px] items-center justify-center border border-ink px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink hover:border-signal hover:text-signal"
            >
              Instruct guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
