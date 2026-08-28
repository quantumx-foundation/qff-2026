/**
 * Duotone filter definitions.
 *
 * A true duotone maps image luminance onto a two-colour ramp rather than
 * laying a flat tint over the photograph, which is what gives the reference
 * imagery its graphic, processed look. Rendered once, near the top of <body>.
 */

const RAMPS: Array<{ id: string; shadow: [number, number, number]; light: [number, number, number] }> = [
  // #1a0e2e -> #c39bfa
  { id: "purple", shadow: [0.102, 0.055, 0.18], light: [0.765, 0.608, 0.98] },
  // #04140c -> #8ff5b4
  { id: "green", shadow: [0.016, 0.078, 0.047], light: [0.561, 0.961, 0.706] },
  // #08111f -> #6e9ee8
  { id: "blue", shadow: [0.031, 0.067, 0.122], light: [0.431, 0.62, 0.91] },
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
