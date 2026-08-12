"use client";

import Link from "next/link";
import { useState } from "react";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
};

export function NavDropdown({ label, href, items, scrollable }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={href}
        className={`font-display inline-flex min-h-[44px] items-center gap-1.5 px-2.5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-colors ${
          open ? "text-mark" : "text-white/75 hover:text-white"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors ${open ? "bg-mark" : "bg-signal"}`}
          aria-hidden
        />
        {label}
      </Link>

      <div
        className={`absolute left-1/2 top-full z-[60] w-[min(92vw,28rem)] -translate-x-1/2 pt-3 ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        } transition-opacity duration-150`}
      >
        <div className="nav-panel overflow-hidden border border-white/10 bg-ink">
          <div className="flex">
            <div className="w-1.5 shrink-0 bg-signal" aria-hidden />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-mark">
                  Index · {label}
                </p>
                <Link
                  href={href}
                  className="font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] text-signal hover:text-white"
                >
                  Open hub →
                </Link>
              </div>
              <ul
                className={`grid gap-0 py-1 ${scrollable ? "max-h-[min(70vh,22rem)] overflow-y-auto" : ""} ${
                  items.length > 6 ? "sm:grid-cols-2" : "grid-cols-1"
                }`}
                role="menu"
              >
                {items.map((item) => (
                  <li key={item.href} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="block border-b border-white/[0.04] px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white focus:outline-none"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
