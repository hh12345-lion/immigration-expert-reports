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
        className="form-field mb-8 max-w-md"
      />
      <dl className="divide-y divide-border border-y border-border">
        {filtered.map((t) => {
          const slug = glossaryAnchorId(t.term);
          return (
            <div key={slug} id={slug} className="scroll-mt-24 py-5">
              <dt className="font-display font-bold text-ink">{t.term}</dt>
              <dd className="mt-2 leading-relaxed text-body">
                {t.definition}
                {t.link && (
                  <>
                    {" "}
                    <Link href={t.link} className="text-signal hover:underline">
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
