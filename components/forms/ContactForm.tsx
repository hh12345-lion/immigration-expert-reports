"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Read from the DOM so browser autofill values are included
    const fullName = String(
      (form.elements.namedItem("name") as HTMLInputElement | null)?.value ?? ""
    ).trim();
    const email = String(
      (form.elements.namedItem("email") as HTMLInputElement | null)?.value ?? ""
    ).trim();
    const phone = String(
      (form.elements.namedItem("phone") as HTMLInputElement | null)?.value ?? ""
    ).trim();
    const organisation = String(
      (form.elements.namedItem("law_firm") as HTMLInputElement | null)?.value ?? ""
    ).trim();
    const summary = String(
      (form.elements.namedItem("summary") as HTMLTextAreaElement | null)?.value ?? ""
    ).trim();

    if (!fullName || !email || !organisation || !summary) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    const result = await postSubmitLead({
      fullName,
      email,
      phone,
      organisation,
      reportType: "",
      countryRegion: "",
      proceedings: "",
      funding: "",
      summary,
    });

    if (result.ok) {
      router.push("/thank-you");
      return;
    }

    setErrorMessage(result.error);
    setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full max-w-xl space-y-7" noValidate>
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="min-w-0">
        <label className="form-label" htmlFor="name">
          Full name *
        </label>
        <input id="name" name="name" required autoComplete="name" className="form-field" />
      </div>

      <div className="min-w-0">
        <label className="form-label" htmlFor="law_firm">
          Firm *
        </label>
        <input id="law_firm" name="law_firm" required autoComplete="organization" className="form-field" />
      </div>

      <div className="min-w-0">
        <label className="form-label" htmlFor="email">
          Email *
        </label>
        <input id="email" type="email" name="email" required autoComplete="email" className="form-field" />
      </div>

      <div className="min-w-0">
        <label className="form-label" htmlFor="phone">
          Phone
        </label>
        <input id="phone" type="tel" name="phone" autoComplete="tel" className="form-field" />
      </div>

      <div className="min-w-0">
        <label className="form-label" htmlFor="summary">
          Case note *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={3}
          placeholder="Country, proceeding stage, report type needed"
          className="form-field min-h-[88px] resize-y"
        />
      </div>

      {status === "error" && (
        <p className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage ?? "Something went wrong."} Please try again or email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-display inline-flex min-h-[44px] w-full items-center justify-center bg-ink px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-signal disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send instruction"}
      </button>
    </form>
  );
}
