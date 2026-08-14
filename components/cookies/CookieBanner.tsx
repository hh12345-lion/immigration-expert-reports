"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "font-display inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] bg-mark px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-mark focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto";
const btnSecondary =
  "font-display inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] border border-white/35 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto";
const btnGhost =
  "font-display inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] px-4 py-2.5 text-sm font-medium text-white/90 underline-offset-2 transition hover:text-mark hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto";

export function CookieBanner() {
  const { status, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (status === "pending") {
      acceptRef.current?.focus();
    }
  }, [status]);

  if (status !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 animate-[slideUp_0.45s_cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[6px] border border-white/10 bg-ink shadow-[0_-4px_40px_rgba(0,0,0,0.35)]">
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-mark">Privacy &amp; compliance</p>
              <h2 id="cookie-banner-title" className="font-display mt-1.5 text-lg font-semibold text-white sm:text-xl">
                Cookie choices
              </h2>
              <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-white/80">
                We use cookies to run this site securely, understand how practitioners use our resources, and measure
                marketing performance. Non-essential cookies load only with your consent. Read our{" "}
                <Link href="/cookie-policy" className="font-semibold text-mark hover:underline">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-semibold text-mark hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:max-w-md lg:shrink-0 lg:justify-end">
              <button ref={acceptRef} type="button" onClick={acceptAll} className={btnPrimary}>
                Accept all
              </button>
              <button type="button" onClick={rejectNonEssential} className={btnSecondary}>
                Reject non-essential
              </button>
              <button type="button" onClick={openPreferences} className={btnGhost}>
                Customise
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
