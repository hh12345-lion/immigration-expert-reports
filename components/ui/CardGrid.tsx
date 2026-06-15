import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group min-h-[44px] min-w-0 break-words rounded-[8px] border border-[#CBD5E1] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] transition hover:border-[#0E7490]"
        >
          <h3 className="font-semibold text-[#1E3A5F] group-hover:text-[#0E7490]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#374151]">{item.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-[#B8860B]">Learn more →</span>
        </Link>
      ))}
    </div>
  );
}
