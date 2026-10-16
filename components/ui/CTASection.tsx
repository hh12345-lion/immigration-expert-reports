import Link from "next/link";
import { Mark } from "@/components/brand/Brand";

export function CTASection({
  title = "Ready to instruct an expert?",
  description = "Send a short case note with the country, proceeding stage and report type. We route it to the right network specialist for UK tribunal work.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <span aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-orange" />
      <Mark className="pointer-events-none absolute -bottom-20 right-0 h-96 w-auto opacity-[0.1]" orange="#F4F2EC" blue="#F4F2EC" base="#F4F2EC" />
      <div className="relative mx-auto flex min-w-0 max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-cream sm:text-[2.6rem] sm:leading-tight">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/75">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue px-7 font-bold text-white transition hover:bg-orange"
          >
            Contact us
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-cream/40 px-7 font-bold text-cream transition hover:bg-cream/10"
          >
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
