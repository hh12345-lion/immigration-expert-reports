import type { FAQ } from "@/lib/schema";

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  id = "faqs",
}: {
  faqs: FAQ[];
  title?: string;
  id?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section id={id} className="scroll-mt-24 py-12" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="font-display mb-8 text-2xl font-bold text-ink">
        {title}
      </h2>
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <h3 className="font-display text-lg font-bold text-ink">{faq.question}</h3>
            <p className="mt-3 leading-relaxed text-body">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
