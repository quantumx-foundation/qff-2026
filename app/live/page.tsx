import type { Metadata } from "next";
import Image from "next/image";
import { BoxGrid } from "@/components/effects/BoxGrid";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { LiveGate } from "@/components/sections/LiveGate";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { event } from "@/data/event";
import { liveEvent } from "@/data/live";

/**
 * /live: the pre-link shared ahead of a live session.
 *
 * Kept out of the sitemap and out of search: it changes meaning from one
 * session to the next, so an indexed snapshot would always be stale. The
 * Open Graph card carries the event cover, since this link mostly travels
 * through WhatsApp and LinkedIn previews.
 */

const description = `${liveEvent.dateLabel}, ${liveEvent.timeLabel}. RSVP on Luma; this link opens the live stream when the event starts.`;

export const metadata: Metadata = {
  title: liveEvent.title,
  description,
  alternates: { canonical: `${event.urls.site}/live` },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: `${event.urls.site}/live`,
    title: liveEvent.title,
    description,
    images: [{ url: liveEvent.image.src, width: liveEvent.image.width, height: liveEvent.image.height }],
  },
  twitter: {
    card: "summary_large_image",
    title: liveEvent.title,
    description,
    images: [liveEvent.image.src],
  },
};

export default function LivePage() {
  return (
    <>
      <SubpageHeader />

      <main id="main" className="bg-ground">
        <BoxGrid className="min-h-[calc(100svh-4rem)]">
          <div className="container-editorial flex flex-col items-center py-16 text-center sm:py-24">
            <SectionLabel>Live</SectionLabel>

            <Image
              src={liveEvent.image.src}
              alt={liveEvent.image.alt}
              width={liveEvent.image.width}
              height={liveEvent.image.height}
              priority
              className="mt-8 w-full max-w-[320px]"
            />

            <h1 className="text-h2 mt-10 max-w-[24ch]">{liveEvent.title}</h1>

            <p className="label-mono mt-6 font-bold text-muted">
              {liveEvent.dateLabel} · {liveEvent.timeLabel}
            </p>

            <div className="mt-12">
              <LiveGate />
            </div>
          </div>
        </BoxGrid>
      </main>
    </>
  );
}
