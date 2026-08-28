# QFF26

Event site for **QFF26** — QuantumX Foundation.
Production domain: `qff26.quantumx.foundation`

Next.js (App Router) · TypeScript (strict) · Tailwind CSS v4 · Motion for React

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run check:content` | Report placeholder content still awaiting approval |

---

## How content works

**No event facts live in components.** Everything editable sits in `data/`,
typed by `types/event.ts`:

| File | Contents |
|---|---|
| `event.ts` | Name, dates, venue, every external URL, socials, navigation |
| `hero.ts` | Hero copy, editorial statement, purple feature band |
| `stats.ts` `values.ts` | Statistics, "Why QFF26" blocks |
| `program.ts` `speakers.ts` | Agenda days and sessions, speaker cards |
| `ecosystem.ts` `testimonials.ts` `announcements.ts` `partners.ts` | Carousels and grids |
| `faq.ts` | FAQ entries and the "Get involved" actions |
| `gallery.ts` `marquee.ts` | Community image strip, background tickers |

Two rules hold the content layer together:

1. **Nothing is fabricated.** Unconfirmed values are `TBD`,
   `[CONTENT PLACEHOLDER]`, or `confirmed: false`. `npm run check:content`
   lists everything still outstanding.
2. **Empty means hidden.** A section whose array is empty does not render, so
   removing provisional content is a data edit, never a code change.

### Going live with real content

- **Confirmed** — Saturday 10 October 2026, Bengaluru + Remote (hybrid).
  Held in `data/event.ts`.
- **Still outstanding** — the start *time of day*, the end date, and the
  specific Bengaluru venue.
- **Countdown** — live, counting to `startsAt`. It currently targets the start
  of 10 October in IST; set `NEXT_PUBLIC_EVENT_STARTS_AT` to an ISO 8601
  timestamp *with offset* once the exact start time is confirmed. The same
  value drives the Schema.org `Event` markup.
- **External URLs** — see `.env.example`. Unset keys fall back to `#`.
- **Imagery** — see `public/images/README.md`.
- **Logo** — `components/ui/QffMark.tsx` holds the interim mark, an original
  geometric construction of the quantum ket `|Q⟩`. Replace its paths (and
  `app/icon.svg`) when the official QuantumX Foundation mark is supplied.

---

## Design system

Tokens live in `app/globals.css`; no component hardcodes a hex value.

| | |
|---|---|
| Base | `#000000` / `#ffffff` |
| Signature purple | `#a16af3` |
| Treatment accents | green `#70ee9d`, blue `#4a80d8` — imagery only, never UI |
| Surfaces | `#1e1e1e`, `#353535` |
| Hairline | `rgba(255,255,255,0.20)` |
| Gutter | 20 / 24 / 32px |
| Corner radius | `0` everywhere |

**Type** — three roles, all self-hosted via `next/font`:
Geist (display and body) · Geist Mono (technical metadata, buttons, labels) ·
Oxanium (wordmark, statistics, countdown only). All sizes use `clamp()`.

**Shared primitives** carry the visual language so sections never restyle:
`SteppedMedia` and `lib/steps.ts` (the geometric staircase edges on the hero
and footer), `ImageTreatment` (duotone via SVG filters, with the placeholder
system), `SlicedWordmark` and `GlitchMarquee` (the glitch layer), `Reveal`,
`Marquee`, `Button`, `ArrowButton`.

**Motion** runs in three tiers — hover transitions, scroll reveals, and the
signature glitch and marquee effects. `prefers-reduced-motion: reduce` disables
the third tier entirely, freezes the marquees, and reduces reveals to a fade.

---

## Deployment

Recommended: **Vercel**.

1. Import the repository; the framework preset is detected automatically.
2. Add environment variables from `.env.example` (Production and Preview).
   `NEXT_PUBLIC_SITE_URL` must be `https://qff26.quantumx.foundation` in
   production — it drives the canonical URL, sitemap and OG metadata.
3. Deploy. The page is fully static; there is no server runtime or database.
4. Add `qff26.quantumx.foundation` under **Domains** and create the DNS record
   Vercel shows at the QuantumX Foundation DNS provider — a `CNAME` to
   `cname.vercel-dns.com` for the subdomain.

Before promoting to production, run `npm run check:content` and confirm no
provisional event content remains.
