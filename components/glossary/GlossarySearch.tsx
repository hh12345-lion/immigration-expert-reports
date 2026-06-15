"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { glossaryAnchorId } from "@/lib/glossary";
import type { GlossaryTerm } from "@/data/glossary";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query)
    );
  }, [q, terms]);

  return (
    <>
      <label htmlFor="glossary-search" className="sr-only">
        Search glossary
      </label>
      <input
        id="glossary-search"
        type="search"
        placeholder="Search terms…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="mb-8 w-full max-w-md rounded-[4px] border border-[#CBD5E1] px-4 py-3 min-h-[44px] focus:border-[#1E3A5F] focus:outline-none focus:ring-1 focus:ring-[#1E3A5F]"
      />
      <dl className="space-y-6">
        {filtered.map((t) => {
          const slug = glossaryAnchorId(t.term);
          return (
            <div key={slug} id={slug} className="scroll-mt-24 rounded-[8px] border border-[#CBD5E1] bg-white p-5">
              <dt className="font-semibold text-[#1E3A5F]">{t.term}</dt>
              <dd className="mt-2 text-[#374151] leading-relaxed">
                {t.definition}
                {t.link && (
                  <>
                    {" "}
                    <Link href={t.link} className="text-[#0E7490] hover:underline">
                      Learn more →
                    </Link>
                  </>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </>
  );
}
