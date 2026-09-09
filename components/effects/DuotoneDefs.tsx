/**
 * Duotone filter definitions.
 *
 * A true duotone maps image luminance onto a two-colour ramp rather than
 * laying a flat tint over the photograph, which is what gives the reference
 * imagery its graphic, processed look. Rendered once, near the top of <body>.
 */

const RAMPS: Array<{ id: string; shadow: [number, number, number]; light: [number, number, number] }> = [
  // Each ramp runs from a dark plum shadow to one of the three brand colours,
  // so a rail of portraits reads as one family rather than three unrelated
  // tints. The old green and blue ramps came from the reference imagery, not
  // from anything QuantumX supplied, and are retired with the palette.
  // #1d0f38 -> #f9a6cd
  { id: "pink", shadow: [0.114, 0.059, 0.22], light: [0.976, 0.651, 0.804] },
  // #1d0f38 -> #9ba1ee
  { id: "indigo", shadow: [0.114, 0.059, 0.22], light: [0.608, 0.631, 0.933] },
  // #150a29 -> #d7e4ff
  { id: "plum", shadow: [0.082, 0.039, 0.161], light: [0.843, 0.894, 1.0] },
];

const LUMINANCE = [
  "0.2126 0.7152 0.0722 0 0",
  "0.2126 0.7152 0.0722 0 0",
  "0.2126 0.7152 0.0722 0 0",
  "0 0 0 1 0",
].join(" ");

export function DuotoneDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {RAMPS.map(({ id, shadow, light }) => (
          <filter
            key={id}
            id={`qff-duotone-${id}`}
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <feColorMatrix type="matrix" values={LUMINANCE} />
            <feComponentTransfer>
              <feFuncR type="table" tableValues={`${shadow[0]} ${light[0]}`} />
              <feFuncG type="table" tableValues={`${shadow[1]} ${light[1]}`} />
              <feFuncB type="table" tableValues={`${shadow[2]} ${light[2]}`} />
            </feComponentTransfer>
          </filter>
        ))}
      </defs>
    </svg>
  );
}
