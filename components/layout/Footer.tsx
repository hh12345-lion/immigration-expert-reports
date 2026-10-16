import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { Logo, Mark } from "@/components/brand/Brand";
import { SITE_EMAIL } from "@/lib/constants";
import { reportTypesNavLinks, resourcesNavLinks, tribunalProcessNavLinks } from "@/data/navigation";

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="min-w-0">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <ul className="mt-4 space-y-0.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="group flex min-h-[36px] items-center gap-2.5 text-[0.97rem] text-body hover:text-signal">
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-border transition group-hover:bg-orange" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-paper">
      {/* The base of the monogram: a navy sweep that curves across the top edge of the footer. */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full sm:h-16" aria-hidden>
        <path d="M0 0 H1440 V18 C1080 18 760 80 0 70 Z" fill="#192431" />
        <path d="M0 70 C760 80 1080 18 1440 18 V26 C1080 26 780 84 0 78 Z" fill="#D17500" />
      </svg>
      <Mark className="pointer-events-none absolute -bottom-16 -right-12 h-[28rem] w-auto opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-border pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Immigration Expert Reports home" className="inline-block">
              <Logo className="h-11 w-auto" />
            </Link>
            <p className="mt-6 leading-relaxed text-body">
              Network hub for UK tribunal expert evidence: country, persecution and human rights reports for immigration
              and asylum proceedings.
            </p>
            <a href={`mailto:${SITE_EMAIL}`} className="mt-5 inline-block break-all font-bold text-signal hover:underline">
              {SITE_EMAIL}
            </a>
            <Link
              href="/contact"
              className="mt-7 flex min-h-[48px] w-fit items-center rounded-full bg-blue px-7 font-bold text-white transition hover:bg-orange"
            >
              Contact us
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <Column title="Reports" links={reportTypesNavLinks} />
            <Column title="Tribunal process" links={tribunalProcessNavLinks} />
            <Column title="Resources" links={resourcesNavLinks} />
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
          Not a law firm. We do not give legal advice; expert evidence is prepared for instructing solicitors and
          tribunals.
        </p>
        <div className="mt-5 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Immigration Expert Reports</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1" aria-label="Legal">
            <Link href="/blog" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Blog
            </Link>
            <Link href="/network" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Network
            </Link>
            <Link href="/privacy" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Cookies
            </Link>
            <Link href="/terms" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Terms
            </Link>
            <Link href="/image-credits" className="inline-flex min-h-[40px] items-center hover:text-ink">
              Image credits
            </Link>
            <CookieSettingsButton variant="footer" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
