"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";
import { REPORT_TYPES, FUNDING_OPTIONS, PROCEEDINGS } from "@/data/contact-options";

const inputClass =
  "w-full min-w-0 max-w-full rounded-[4px] border border-[#CBD5E1] px-4 py-3 text-base text-[#374151] focus:border-[#1E3A5F] focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] min-h-[44px]";
const labelClass = "mb-1 block text-sm font-medium text-[#1E3A5F]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      reportType: String(data.get("report_type") ?? "").trim(),
      countryRegion: String(data.get("country_region") ?? "").trim(),
      proceedings: String(data.get("proceedings") ?? "").trim(),
      funding: String(data.get("funding") ?? "").trim(),
      summary: String(data.get("summary") ?? "").trim(),
    };

    const ok = await postSubmitLead(payload);
    if (ok) router.push("/thank-you");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="law_firm">
            Law Firm *
          </label>
          <input id="law_firm" name="law_firm" required autoComplete="organization" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" type="tel" name="phone" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="report_type">
            Report Type
          </label>
          <select id="report_type" name="report_type" className={inputClass}>
            <option value="">Select report type</option>
            {REPORT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="country_region">
            Country/Region
          </label>
          <input id="country_region" name="country_region" className={inputClass} />
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="proceedings">
            Proceeding
          </label>
          <select id="proceedings" name="proceedings" className={inputClass}>
            <option value="">Select proceeding</option>
            {PROCEEDINGS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="funding">
            Funding
          </label>
          <select id="funding" name="funding" className={inputClass}>
            <option value="">Select funding</option>
            {FUNDING_OPTIONS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Brief case description *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-[4px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or email us at{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#0E7490] px-6 py-3 text-base font-semibold text-white hover:bg-[#0c6378] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Request an Expert Report"}
      </button>
    </form>
  );
}
