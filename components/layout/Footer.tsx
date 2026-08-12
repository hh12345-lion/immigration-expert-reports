import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="h-1 bg-gradient-to-r from-signal via-mark to-signal" aria-hidden />
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-9 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="min-w-0">
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.2em] text-signal">Pier Index</p>
          <p className="font-display mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">{SITE_NAME}</p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-3 inline-flex min-h-[44px] items-center break-all text-sm text-white/70 hover:text-mark"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/55"
        >
          <Link href="/contact" className="inline-flex min-h-[44px] items-center hover:text-mark">
            Contact
          </Link>
          <Link href="/how-to-instruct" className="inline-flex min-h-[44px] items-center hover:text-mark">
            Instruct
          </Link>
          <Link href="/network" className="inline-flex min-h-[44px] items-center hover:text-mark">
            Network
          </Link>
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-mark">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-mark">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-mark">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
        </nav>
      </div>
      <p className="border-t border-white/10 px-4 py-3 text-center text-[0.7rem] leading-relaxed text-white/40 sm:px-6">
        Network hub for UK tribunal expert evidence. Not a law firm — we do not give legal advice.
      </p>
    </footer>
  );
}
