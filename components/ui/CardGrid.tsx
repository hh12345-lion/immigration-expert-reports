import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="index-row group min-h-[44px] min-w-0 break-words !border-b-0"
        >
          <h3 className="font-display font-bold text-ink group-hover:text-signal">{item.title}</h3>
          <p className="text-sm leading-relaxed text-body">{item.description}</p>
          <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] text-muted group-hover:text-mark">
            Open
          </span>
        </Link>
      ))}
    </div>
  );
}
