/**
 * Geometric stepped ("staircase") edges.
 *
 * The reference design uses hard-edged, architectural step transitions in two
 * places: the bottom of the hero media, where the black page rises into the
 * image and descends towards the right, and the top of the purple footer, where
 * black notches cut down into the purple block. Both are reproduced here as
 * clip-path polygons.
 *
 * Depths are emitted as `calc()` against a CSS custom property rather than
 * fixed pixels, so a single media query can scale the whole staircase per
 * breakpoint without regenerating the polygon.
 */

export type StepSegment = {
  /** Width of this run as a fraction of the element width (0-1). */
  w: number;
  /** Depth of the cut, in step units. */
  level: number;
};

const pct = (n: number) => `${(n * 100).toFixed(3)}%`;

const depth = (level: number, unit: string) =>
  level === 0 ? "0px" : `calc(${unit} * ${level})`;

/** Walk the segments, inserting a vertical riser wherever the level changes. */
function walk(segments: StepSegment[]): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  let x = 0;
  let previous: number | null = null;

  for (const segment of segments) {
    if (previous === null) {
      pts.push([0, segment.level]);
    } else if (previous !== segment.level) {
      pts.push([x, segment.level]);
    }
    x = Math.min(1, x + segment.w);
    pts.push([x, segment.level]);
    previous = segment.level;
  }

  if (x < 1 && previous !== null) pts.push([1, previous]);
  return pts;
}

/**
 * Staircase along the TOP edge: the top boundary steps down by `level` units on
 * each run. Used for the purple footer block.
 */
export function topStaircase(
  segments: StepSegment[],
  unit = "var(--step)",
): string {
  const top = walk(segments).map(
    ([x, level]) => `${pct(x)} ${depth(level, unit)}`,
  );
  return `polygon(${top.join(", ")}, 100% 100%, 0% 100%)`;
}

/**
 * Staircase along the BOTTOM edge: the bottom boundary steps up by `level`
 * units on each run. Used for the hero media.
 */
export function bottomStaircase(
  segments: StepSegment[],
  unit = "var(--step)",
): string {
  const bottom = walk(segments)
    .reverse()
    .map(([x, level]) => `${pct(x)} calc(100% - ${depth(level, unit)})`);
  return `polygon(0% 0%, 100% 0%, ${bottom.join(", ")})`;
}

/**
 * Hero bottom edge, measured from the reference: five levels descending to the
 * right, roughly 28px apart at a 1710px viewport.
 */
export const HERO_STEPS: StepSegment[] = [
  { w: 0.602, level: 4 },
  { w: 0.223, level: 3 },
  { w: 0.122, level: 2 },
  { w: 0.033, level: 1 },
  { w: 0.02, level: 0 },
];

/**
 * Footer top edge, measured from the reference: eight runs across three depth
 * levels — an irregular skyline rather than a regular saw-tooth.
 */
export const FOOTER_STEPS: StepSegment[] = [
  { w: 0.063, level: 1 },
  { w: 0.18, level: 0 },
  { w: 0.121, level: 1 },
  { w: 0.125, level: 2 },
  { w: 0.079, level: 1 },
  { w: 0.242, level: 0 },
  { w: 0.038, level: 1 },
  { w: 0.152, level: 2 },
];

/** Top-right stepped corner used on the editorial images. */
export const CORNER_STEPS: StepSegment[] = [
  { w: 0.55, level: 0 },
  { w: 0.18, level: 1 },
  { w: 0.15, level: 2 },
  { w: 0.12, level: 3 },
];
