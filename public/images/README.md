# QFF26 imagery

Every section renders a marked placeholder panel until a real file is supplied.
To swap one in, drop the file into the folder below and set its path in the
matching data file. **No component changes are required.**

Images are processed through `<ImageTreatment />`, which applies a duotone in
one of four treatments (`purple`, `green`, `blue`, `mono`) plus grain and
contrast — so supply plain, unstyled photography. High-contrast source images
with clear subject separation duotone best.

| Section | Folder | Data file | Ratio | Suggested size |
|---|---|---|---|---|
| Hero background | `hero/` | `data/hero.ts` → `hero.media` | 12:7 | 2400×1400 |
| Purple feature band | `hero/` | `data/hero.ts` → `identityBand.media` | 2:1 | 2400×1200 |
| Why QFF26 blocks (×4) | `values/` | `data/values.ts` | 3:2 | 1536×1024 |
| Community strip (×6) | `community/` | `data/gallery.ts` | mixed | ~1000×1250 |
| Speaker portraits | `speakers/` | `data/speakers.ts` | 3:4 | 900×1200 |
| Ecosystem event posters | `events/` | `data/ecosystem.ts` | 4:5 | 1000×1250 |
| Community quote backdrop | `community/` | `data/testimonials.ts` | 7:5 | 1400×1000 |
| Partner logos | `partners/` | `data/partners.ts` | — | white SVG preferred |

Example — replacing the hero image:

```ts
// data/hero.ts
media: {
  src: "/images/hero/qff26-hero.jpg",
  alt: "",                      // decorative; describe it if it carries meaning
  placeholderLabel: "HERO MEDIA",
  width: 2400,
  height: 1400,
}
```

Partner logos should be white-on-transparent SVGs. Setting `logo` on a partner
replaces its bordered placeholder tile with the mark.

Keep source files under ~400 KB where practical; Next.js handles responsive
resizing and modern formats at build time.
