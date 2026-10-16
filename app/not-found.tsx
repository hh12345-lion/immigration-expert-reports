import Link from "next/link";
import { reportTypes } from "@/data/report-types";
import { services } from "@/data/services";

export default function NotFound() {
  const featuredTypes = reportTypes.slice(0, 4);

  return (
    <>
      <section className="bg-paper py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="font-display text-4xl text-ink sm:text-5xl">Page not found</h1>
          <p className="font-display mt-6 text-8xl leading-none text-mark sm:text-9xl" aria-hidden="true">
            404
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-body">
            The page you requested does not exist or may have moved. Use the links below to find immigration expert
            report guidance for UK asylum and immigration tribunals.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full-[6px] bg-blue px-8 py-3 font-bold text-white transition hover:bg-orange"
            >
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="font-display inline-flex min-h-[44px] items-center justify-center rounded-[6px] border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:border-signal hover:text-signal"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EBE6DC] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-[#192431]">Popular destinations</h2>
          <nav className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Quick links">
            {[
              { label: "Report Types", href: "/report-types", desc: "Country condition, persecution, human rights, CPIN challenge" },
              { label: "Report Standards", href: "/report-standards", desc: "Practice Direction 2024, Adam Pipe 2025, Ikarian Reefer" },
              { label: "Network Directory", href: "/network", desc: "Country and thematic expert sites across the network" },
              { label: "How to Instruct", href: "/how-to-instruct", desc: "Legal Aid, letter of instruction, timelines" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[8px] border border-[#DDD6CB] bg-white p-5 text-left transition hover:border-[#0458DE] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <span className="font-semibold text-[#192431] group-hover:text-[#0458DE]">{item.label}</span>
                <span className="mt-1 block text-sm text-[#36404D]">{item.desc}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-[#192431]">Report types</h2>
              <ul className="mt-4 space-y-2">
                {featuredTypes.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/report-types/${r.slug}`}
                      className="text-sm font-medium text-[#0458DE] hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/report-types" className="text-sm font-semibold text-[#192431] hover:underline">
                    View all report types
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#192431]">Services</h2>
              <ul className="mt-4 space-y-2">
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-sm font-medium text-[#0458DE] hover:underline">
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-sm font-semibold text-[#192431] hover:underline">
                    View all services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
