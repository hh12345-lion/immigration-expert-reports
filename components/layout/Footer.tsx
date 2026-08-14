import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper text-ink">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-9 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">{SITE_NAME}</p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-2 inline-flex min-h-[44px] items-center break-all text-sm text-body hover:text-signal"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
        >
          <Link href="/contact" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Contact
          </Link>
          <Link href="/how-to-instruct" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Instruct
          </Link>
          <Link href="/network" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Network
          </Link>
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
        </nav>
      </div>
      <p className="border-t border-border px-4 py-3 text-center text-[0.75rem] leading-relaxed text-muted sm:px-6">
        Network hub for UK tribunal expert evidence. Not a law firm — we do not give legal advice.
      </p>
    </footer>
  );
}
