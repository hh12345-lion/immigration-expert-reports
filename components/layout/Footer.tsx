import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_SCOPE_LINE } from "@/lib/constants";
import { reportTypes } from "@/data/report-types";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-[#CBD5E1] bg-[#1E3A5F] text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-[#B8860B]">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="inline-flex min-h-[44px] items-center hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B8860B]">Report Types</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {reportTypes.slice(0, 5).map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/report-types/${r.slug}`}
                    className="inline-flex min-h-[44px] items-center hover:text-white"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/report-types" className="text-[#B8860B] hover:underline">
                  View all report types
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B8860B]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/report-standards" className="inline-flex min-h-[44px] items-center hover:text-white">Report Standards</Link></li>
              <li><Link href="/cpin-and-country-guidance" className="inline-flex min-h-[44px] items-center hover:text-white">CPIN & Country Guidance</Link></li>
              <li><Link href="/guides" className="inline-flex min-h-[44px] items-center hover:text-white">Solicitor Guides</Link></li>
              <li><Link href="/how-to-instruct" className="inline-flex min-h-[44px] items-center hover:text-white">How to Instruct</Link></li>
              <li><Link href="/network" className="inline-flex min-h-[44px] items-center hover:text-white">Network Directory</Link></li>
              <li><Link href="/qualifications" className="inline-flex min-h-[44px] items-center hover:text-white">Qualifications</Link></li>
              <li><Link href="/glossary" className="inline-flex min-h-[44px] items-center hover:text-white">Glossary</Link></li>
              <li><Link href="/what-is-an-immigration-expert-report" className="inline-flex min-h-[44px] items-center hover:text-white">What is an Expert Report?</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B8860B]">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="break-all hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/contact" className="font-semibold text-[#0E7490] hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          Immigration Expert Reports is the network master hub for immigration expert evidence in United Kingdom
          tribunal proceedings. {SITE_SCOPE_LINE} We coordinate report standards and instruction across specialist
          network sites. We are not a law firm and do not provide legal advice.
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookie Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <span aria-hidden="true">·</span>
          <CookieSettingsButton variant="footer" />
        </p>
      </div>
    </footer>
  );
}
