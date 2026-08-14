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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-paper/95 text-ink backdrop-blur-md">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 shrink">
          <span className="font-display block truncate text-lg font-semibold leading-tight tracking-tight text-ink min-[375px]:text-xl">
            Immigration Expert Reports
          </span>
          <span className="mt-0.5 block text-[0.75rem] text-muted">UK tribunal evidence</span>
        </Link>

        <nav className="hidden items-center gap-0.5 overflow-visible lg:flex" aria-label="Main">
          <NavDropdown label="Reports" href="/report-types" items={reportTypesNavLinks} scrollable />
          <NavDropdown label="Tribunal" href="/tribunal-process" items={tribunalProcessNavLinks} scrollable />
          <NavDropdown label="Cases" href="/case-types" items={caseTypesNavLinks} scrollable />
          <NavDropdown label="Services" href="/services" items={servicesNavLinks} scrollable />
          <NavDropdown label="Guides" href="/guides" items={resourcesNavLinks} scrollable />
          <Link
            href="/contact"
            className="font-display ml-3 inline-flex min-h-[44px] items-center rounded-[6px] bg-signal px-4 py-2 text-sm font-semibold text-white transition hover:bg-signal-hover"
          >
            Contact
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-[6px] border border-border lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-6 w-6 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="icon-close hidden h-6 w-6 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-t border-border bg-paper peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-5">
              <p className="font-display mb-1 text-sm font-semibold text-ink">{group.title}</p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="inline-flex min-h-[44px] w-full items-center text-sm text-body hover:text-signal"
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
            className="font-display inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] bg-signal px-4 py-3 text-sm font-semibold text-white"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
