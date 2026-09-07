import type { Metadata } from "next";
import Image from "next/image";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * 404.
 *
 * Deliberately the sparsest page on the site: the gif, one line, one way out.
 * Someone who lands here wants to leave, so anything past that is in the way —
 * the header already carries a second route back, and the footer carries the
 * rest of the site.
 */

// Next emits its own `noindex` for this route, so declaring one here only
// duplicates the tag.
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <SubpageHeader />

      <main id="main" className="bg-qff-black">
        <div className="container-editorial flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
          <SectionLabel>404</SectionLabel>

          {/* Self-hosted rather than hotlinked from Tenor: the privacy page
              states that images are served from this domain, and an embed
              would hand every 404 visitor's IP to a third party. Converted to
              lossy animated WebP, a fifth of the source GIF's weight.
              Source: media1.tenor.com/m/rqJigJfNUBgAAAAC */}
          <Image
            src="/images/404/homer.webp"
            alt="Homer Simpson backing slowly into a hedge until he disappears."
            width={498}
            height={372}
            unoptimized
            priority
            className="mt-8 w-full max-w-[340px]"
          />

          <h1 className="text-h2 mt-12 max-w-[16ch]">This page does not exist</h1>

          <div className="mt-10">
            <Button href="/">Back to the homepage</Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
