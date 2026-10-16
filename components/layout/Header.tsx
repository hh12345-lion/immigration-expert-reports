"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, Sweep } from "@/components/brand/Brand";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  reportTypesNavLinks,
  resourcesNavLinks,
  servicesNavLinks,
  tribunalProcessNavLinks,
} from "@/data/navigation";

type Item = { label: string; href: string };
type Entry = { label: string; href: string; items: Item[] };

const entries: Entry[] = [
  { label: "Reports", href: "/report-types", items: reportTypesNavLinks },
  { label: "Tribunal", href: "/tribunal-process", items: tribunalProcessNavLinks },
  { label: "Cases", href: "/case-types", items: caseTypesNavLinks },
  { label: "Services", href: "/services", items: servicesNavLinks },
  { label: "Guides", href: "/guides", items: resourcesNavLinks },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function entryActive(pathname: string, entry: Entry): boolean {
  return isActive(pathname, entry.href) || entry.items.some((i) => isActive(pathname, i.href));
}

export function Header() {
  const pathname = usePathname() || "/";
  const onContact = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 w-full bg-navy shadow-[0_12px_30px_-22px_rgba(0,0,0,0.7)]">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" aria-label="Immigration Expert Reports home" className="shrink-0">
          <Logo light className="h-9 w-auto sm:h-10 lg:h-11" />
        </Link>

        <nav aria-label="Main" className="hidden h-full items-stretch lg:flex">
          {entries.map((entry) => {
            const active = entryActive(pathname, entry);
            return (
              <div key={entry.href} className="group relative flex items-stretch">
                <Link
                  href={entry.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-1.5 px-3.5 text-[0.98rem] font-bold transition-colors xl:px-4 ${
                    active ? "text-white" : "text-cream/75 hover:text-white"
                  }`}
                >
                  {entry.label}
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-60 transition group-hover:rotate-180" aria-hidden>
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  {active && <span aria-hidden className="absolute bottom-0 left-3 right-3 h-1 rounded-tl-full bg-orange" />}
                </Link>
                <div className="invisible absolute left-0 top-full z-[60] w-[22rem] opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-b-xl bg-surface shadow-lift">
                    <span aria-hidden className="block h-1 bg-orange" />
                    <div className="p-3">
                      <Link
                        href={entry.href}
                        className="font-display mb-1 flex items-center justify-between px-3 py-2 text-lg text-ink hover:text-signal"
                      >
                        All {entry.label.toLowerCase()}
                        <Sweep className="h-4 w-auto text-blue" />
                      </Link>
                      <ul className="max-h-[min(60vh,22rem)] overflow-y-auto">
                        {entry.items.map((item) => {
                          const current = pathname === item.href;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                aria-current={current ? "page" : undefined}
                                className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[0.95rem] ${
                                  current ? "bg-paper font-bold text-ink" : "text-body hover:bg-paper hover:text-ink"
                                }`}
                              >
                                <span aria-hidden className={`h-1.5 w-1.5 shrink-0 rounded-full ${current ? "bg-orange" : "bg-border"}`} />
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            aria-current={onContact ? "page" : undefined}
            className={`hidden min-h-[44px] items-center rounded-full px-5 font-bold transition sm:inline-flex ${
              onContact ? "bg-orange text-white" : "bg-blue text-white hover:bg-orange"
            }`}
          >
            Contact us
          </Link>

          {/* Mobile menu: a native disclosure, reset on each navigation. */}
          <details key={pathname} className="group/menu lg:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-cream/30 text-cream [&::-webkit-details-marker]:hidden"
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-open/menu:hidden" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg viewBox="0 0 24 24" className="hidden h-5 w-5 group-open/menu:block" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-cream/10 bg-navy pb-6 shadow-lift"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <MobileLink href="/" label="Home" active={pathname === "/"} />
                {mobileNavGroups.map((group) => {
                  const open = group.links.some((l) => isActive(pathname, l.href));
                  return (
                    <details key={group.title} open={open} className="group/sec border-t border-cream/10">
                      <summary className="font-display flex min-h-[54px] cursor-pointer list-none items-center justify-between text-xl text-cream [&::-webkit-details-marker]:hidden">
                        {group.title}
                        <span aria-hidden className="text-2xl leading-none text-orange transition group-open/sec:rotate-45">
                          +
                        </span>
                      </summary>
                      <ul className="mb-3 border-l-2 border-blue pl-4">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <MobileLink href={link.href} label={link.label} active={pathname === link.href} small />
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                })}
                <div className="border-t border-cream/10">
                  <MobileLink href="/contact" label="Contact" active={onContact} />
                </div>
                <Link href="/contact" className="mt-4 flex min-h-[48px] items-center justify-center rounded-full bg-blue font-bold text-white">
                  Contact us
                </Link>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function MobileLink({ href, label, active, small = false }: { href: string; label: string; active: boolean; small?: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-2.5 ${small ? "min-h-[44px] text-base" : "font-display min-h-[54px] text-xl"} ${
        active ? "font-bold text-white" : small ? "text-cream/75" : "text-cream"
      }`}
    >
      {active && <span aria-hidden className="h-2 w-2 rounded-full bg-orange" />}
      {label}
    </Link>
  );
}
