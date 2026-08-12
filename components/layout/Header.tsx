"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  reportTypesNavLinks,
  resourcesNavLinks,
  servicesNavLinks,
  tribunalProcessNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-ink text-white">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6 lg:px-8">
          <p className="font-display truncate text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/45">
            UK Immigration &amp; Asylum Chamber · Expert evidence index
          </p>
          <Link
            href="/contact"
            className="font-display hidden shrink-0 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-mark hover:text-white sm:inline"
          >
            Instruct →
          </Link>
        </div>
      </div>

      <div className="header-bar mx-auto flex max-w-7xl items-end justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group min-w-0 shrink">
          <span className="font-display block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-signal">
            Pier Index
          </span>
          <span className="font-display mt-0.5 block truncate text-lg font-bold leading-tight tracking-tight text-white min-[375px]:text-xl sm:text-2xl">
            Immigration
            <span className="text-mark"> Expert </span>
            Reports
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 overflow-visible lg:flex" aria-label="Main">
          <NavDropdown label="Reports" href="/report-types" items={reportTypesNavLinks} scrollable />
          <NavDropdown label="Tribunal" href="/tribunal-process" items={tribunalProcessNavLinks} scrollable />
          <NavDropdown label="Cases" href="/case-types" items={caseTypesNavLinks} scrollable />
          <NavDropdown label="Services" href="/services" items={servicesNavLinks} scrollable />
          <NavDropdown label="Guides" href="/guides" items={resourcesNavLinks} scrollable />
          <Link
            href="/contact"
            className="font-display ml-3 inline-flex min-h-[44px] items-center border border-mark bg-mark px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-white hover:border-white"
          >
            Contact
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-white/25 lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="icon-close hidden h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-t border-white/10 bg-ink peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-5 border-l-2 border-signal pl-3">
              <p className="font-display mb-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-mark">
                {group.title}
              </p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="inline-flex min-h-[44px] w-full items-center text-sm text-white/80 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="font-display inline-flex min-h-[44px] w-full items-center justify-center border border-mark bg-mark px-4 py-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-ink"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
