import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="group min-h-[44px] min-w-0 break-words">
          <h3 className="font-display font-semibold text-ink group-hover:text-signal">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
