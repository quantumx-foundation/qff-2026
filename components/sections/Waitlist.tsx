"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/effects/Reveal";
import { waitlist } from "@/data/waitlist";

/**
 * Next-cohort waitlist, directly under the hero.
 *
 * Posts URL-encoded to the static `/__forms.html` rather than to this page:
 * on Netlify's Next.js runtime, form submissions are only captured when they
 * hit a static file, never a server-rendered route.
 */

type Status = "idle" | "submitting" | "done" | "error";

export function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section aria-labelledby="waitlist-heading" className="bg-ground pb-14 lg:pb-20">
      <div className="container-wide">
        <Reveal>
          <div className="bg-surface px-6 py-12 sm:px-10 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-12">
              <div>
                <SectionLabel>{waitlist.label}</SectionLabel>
                <h2 id="waitlist-heading" className="text-h2 mt-5 max-w-[20ch] text-balance">
                  {status === "done" ? waitlist.success.heading : waitlist.heading}
                </h2>
              </div>

              <div aria-live="polite">
                {status === "done" ? (
                  <p className="max-w-[44ch] text-muted">{waitlist.success.body}</p>
                ) : (
                  <form name={waitlist.formName} onSubmit={onSubmit} className="flex flex-col gap-4">
                    <p className="max-w-[44ch] text-muted">{waitlist.body}</p>
                    <input type="hidden" name="form-name" value={waitlist.formName} />
                    <p hidden>
                      <label>
                        Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <label htmlFor="waitlist-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="waitlist-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        disabled={status === "submitting"}
                        className="min-w-0 flex-1 border border-ink bg-raised px-4 py-3 text-ink placeholder:text-dim disabled:opacity-60"
                      />
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap bg-inverse px-5 py-3 label-mono font-bold text-on-inverse transition-colors duration-200 hover:bg-accent disabled:opacity-60"
                      >
                        <span>{status === "submitting" ? "Sending…" : waitlist.submitLabel}</span>
                        <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                      </button>
                    </div>
                    {status === "error" ? (
                      <p role="alert" className="label-mono-sm text-ink">
                        {waitlist.error}
                      </p>
                    ) : null}
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
