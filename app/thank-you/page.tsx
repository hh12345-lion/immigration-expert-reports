import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Immigration Expert Reports",
  description: "Your expert report request has been received. We will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

const steps = [
  {
    step: "1",
    title: "Case review",
    body: "We review your case details and route your instruction to the right specialist — country condition, persecution, human rights, or network site — based on report type and country.",
  },
  {
    step: "2",
    title: "Response within one business day",
    body: "You receive proposed scope, timeline, expert availability, and indicative fees where applicable.",
  },
  {
    step: "3",
    title: "Legal Aid prior authority",
    body: "For Legal Aid cases, confirm LAA prior authority before the expert begins work on your report.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-medium text-signal">Immigration Expert Reports</p>
          <h1 className="font-display mt-6 text-3xl font-semibold text-ink sm:text-4xl">Thank you</h1>
          <span className="mx-auto mt-4 block h-[3px] w-14 bg-mark" aria-hidden />
          <p className="mt-5 text-lg leading-relaxed text-body">
            Your expert report request has been received successfully. A member of our team will respond within one
            business day.
          </p>
          <p className="mt-2 text-sm text-muted">
            For urgent tribunal deadlines, please note your hearing date in any follow-up correspondence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/"
              className="font-display inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[6px] bg-signal px-8 py-3 font-semibold text-white transition hover:bg-signal-hover"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="font-display inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[6px] border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:border-signal hover:text-signal"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EBE6DC] py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-[#1B2430]">What happens next?</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-[8px] border border-[#DDD6CB] bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B2430] text-sm font-bold text-white">
                  {item.step}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-[#1B2430]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#3E4450]">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#DDD6CB] pt-8">
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#2557D6] hover:underline"
            >
              How to instruct an expert
            </Link>
            <Link
              href="/guides/immigration-expert-report-standards-guide"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#2557D6] hover:underline"
            >
              Expert report standards guide
            </Link>
            <Link
              href="/report-standards"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#2557D6] hover:underline"
            >
              Report standards pillar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
