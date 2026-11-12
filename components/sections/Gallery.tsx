import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Fall Fest gallery: photos from the events, in a staggered (masonry) grid.
 *
 * Files live in public/images/gallery as WebP at two widths, 800 and 1600,
 * so a phone never downloads the large one. Width and height are the real
 * proportions, which reserves each tile's space before it loads.
 */
const PHOTOS: { n: number; w: number; h: number }[] = [
  { n: 1, w: 4, h: 3 },
  { n: 2, w: 3, h: 4 },
  { n: 3, w: 4, h: 3 },
  { n: 4, w: 16, h: 9 },
  { n: 5, w: 16, h: 9 },
  { n: 6, w: 4, h: 3 },
  { n: 7, w: 4, h: 3 },
  { n: 8, w: 3, h: 4 },
  { n: 9, w: 4, h: 3 },
  { n: 10, w: 3, h: 4 },
  { n: 11, w: 3, h: 4 },
  { n: 12, w: 4, h: 3 },
  { n: 13, w: 3, h: 4 },
  { n: 14, w: 4, h: 3 },
  { n: 15, w: 4, h: 3 },
];

const src = (n: number, width: 800 | 1600) =>
  `/images/gallery/fall-fest-${String(n).padStart(2, "0")}-${width}.webp`;

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="section bg-ground">
      <div className="container-wide">
        <SectionHeading id="gallery-heading" lines={["Fall Fest gallery"]} />

        <ul className="mt-12 columns-2 gap-2 sm:columns-3 md:gap-3 lg:mt-14 lg:columns-4 xl:columns-5">
          {PHOTOS.map(({ n, w, h }) => (
            <li key={n} className="mb-2 break-inside-avoid md:mb-3">
              {/* Plain img: the site ships images unoptimized (see
                  next.config.ts), so next/image would not emit a srcset. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src(n, 800)}
                srcSet={`${src(n, 800)} 800w, ${src(n, 1600)} 1600w`}
                sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                width={w * 100}
                height={h * 100}
                alt={`Fall Fest photo ${n} of ${PHOTOS.length}`}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full bg-surface"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
