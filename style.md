# QFF 2026 --- Style System

## Purpose

This document defines the visual and interaction language for the QFF
2026 landing page.

The target is **not "inspired by" Solana Breakpoint**. The
implementation should reproduce the visual system observed in the
supplied Breakpoint 2026 reference screenshots as closely as possible,
while replacing Breakpoint/Solana-specific branding and content with QFF
2026 / QuantumX Foundation content.

Reference source: - Supplied screenshots of `solana.com/breakpoint` -
The reference site: Solana Breakpoint

The page should feel like a **high-end technology conference site**:
editorial, brutalist, experimental, minimal, monochrome-first,
typography-led, with controlled purple/green/blue image treatments and
subtle digital/glitch behavior.

------------------------------------------------------------------------

# 1. Core Visual Direction

## Overall character

The design language is:

-   Black-first
-   Extremely high contrast
-   Typography-led
-   Editorial
-   Brutalist
-   Experimental
-   Minimal but visually aggressive
-   Large-scale type
-   Strong geometric alignment
-   Sparse UI
-   Generous negative space
-   Image treatments rather than conventional photography cards
-   Small amount of color used with high impact
-   Technical / digital / futuristic without looking like a generic "AI
    website"

Avoid:

-   Gradients everywhere
-   Rounded SaaS cards
-   Glassmorphism
-   Soft shadows
-   Conventional startup layouts
-   Excessive icons
-   Generic purple AI aesthetics
-   Excessive animations
-   Stock-template appearance
-   Excessive borders and containers
-   Excessive copy

------------------------------------------------------------------------

# 2. Color System

The base palette should closely follow the reference.

## Primary

### Black

`#000000`

Use for:

-   Main page background
-   Header background
-   Large content sections
-   Footer typography contrast areas
-   Navigation overlays

Black should dominate the page.

### White

`#FFFFFF`

Use for:

-   Primary headings
-   Navigation text
-   Buttons
-   Body text on black
-   High-contrast UI elements

White typography should feel crisp and bright.

## Signature Purple

Use a vivid electric purple as the primary QFF accent.

Target visual range:

`#A855F7` to `#A855FF`

The reference uses a strong purple/lilac section color. It should be
saturated and flat rather than gradient-based.

Use purple for:

-   Large feature sections
-   Countdown section
-   Selected visual treatments
-   Accent blocks
-   Hover states where appropriate
-   Large QFF branding moments

Do not turn the whole site purple.

## Secondary digital colors

The reference imagery also uses selective:

-   Electric green
-   Deep blue
-   Violet
-   Black and white

These colors should primarily appear through image treatments and event
photography rather than as UI colors.

Suggested treatment colors:

-   Green: `#00FF85`
-   Blue: `#0066FF`
-   Purple: `#A855FF`

These are accents, not the base UI palette.

------------------------------------------------------------------------

# 3. Typography

Typography is one of the most important parts of the design.

The page must feel **typographic before decorative**.

## Primary display type

Use a modern grotesk / geometric sans-serif.

Preferred:

-   Inter
-   Geist Sans
-   Helvetica Neue
-   Arial fallback

The exact font is less important than:

-   Clean geometric construction
-   Tight visual rhythm
-   Large scale
-   Strong weight contrast

## Display headings

Large headings should be:

-   White on black
-   Heavy / semibold
-   Tight line height
-   Slightly negative letter spacing
-   Left aligned in most sections
-   Large enough to dominate the viewport

Example scale:

``` text
Desktop:
72px–110px

Large hero:
90px–140px

Section heading:
56px–80px

Mobile:
42px–64px
```

Do not make every heading enormous. Use scale strategically.

## Monospace / technical text

The reference uses a technical monospace-style treatment for:

-   Labels
-   Metadata
-   Small navigation elements
-   Category names
-   Dates
-   Statistics
-   Buttons

Use:

-   Geist Mono
-   IBM Plex Mono
-   JetBrains Mono
-   monospace fallback

Characteristics:

-   Uppercase
-   Small size
-   Increased letter spacing
-   Strong weight
-   Technical / terminal-like feel

Examples:

``` text
FROM THE COMMUNITY
LATEST ANNOUNCEMENTS
EVENTS
RECAP
FAQ
REGISTER
```

## Letter spacing

Technical labels:

``` css
letter-spacing: 0.08em;
```

Large display typography:

``` css
letter-spacing: -0.04em;
```

Avoid loose letter spacing on large headlines.

------------------------------------------------------------------------

# 4. Page Width & Grid

The reference uses a wide desktop canvas with strong horizontal
alignment.

## Desktop

Use:

``` text
max-width: none / very wide container
padding: 28px–32px
```

The content should visually extend close to the browser edges.

## Standard horizontal padding

Desktop:

``` text
28px–32px
```

Tablet:

``` text
24px
```

Mobile:

``` text
18px–20px
```

Do not use a narrow centered 1200px SaaS container.

The page should feel **wide and architectural**.

## Grid

Use a flexible 12-column conceptual grid.

Typical layouts:

-   3-column statistics
-   3-column announcement cards
-   2-column editorial section
-   Large media + text
-   Full-width visual sections

Grid gaps should feel deliberate and relatively tight.

------------------------------------------------------------------------

# 5. Header

The header should closely reproduce the reference structure.

## Position

The header sits over the black page background.

It should remain visually simple.

Desktop structure:

``` text
[QFF LOGO]                         [REGISTER ↗] [MENU]
```

The reference uses a compact centered-ish header with large horizontal
breathing room.

## Header background

Black.

No glass effect.

No blur.

No large shadow.

## Logo

Use a custom QFF 2026 wordmark / logo.

It should be:

-   White
-   Bold
-   Geometric
-   Compact
-   Similar visual weight to the BP26 wordmark

The QFF logo should be treated as a graphic identity rather than plain
body text.

## Register button

White rectangular button.

Characteristics:

-   White background
-   Black text
-   Sharp corners
-   Uppercase
-   Monospace / technical typography
-   Small arrow icon

Example:

``` text
REGISTER ↗
```

No pill shape.

No rounded CTA.

## Menu button

Small square black/very-dark button with subtle border.

Inside:

``` text
☰
```

Use a custom icon if available.

Square dimensions around:

``` text
38px × 38px
```

------------------------------------------------------------------------

# 6. Hero Section

The hero is the first major visual statement.

The reference uses a **large image/video background** with a strong
purple treatment.

## Hero media

Use:

-   Full-width photography
-   Video if available
-   Event / city / technology imagery
-   Darkened image
-   Purple color treatment

The image should not look like a normal photographic hero.

Apply:

``` text
black/purple overlay
high contrast
slight blur where appropriate
color tint
```

## Hero height

Desktop:

``` text
70vh–85vh
```

The hero should occupy most of the first viewport.

## Hero content

Position content toward the lower-left.

Structure:

``` text
QFF 2026

[large headline]

[primary CTA]
```

Example style:

``` text
QFF 2026

THE FUTURE
OF QUANTUM
IS BEING BUILT
HERE.

[ REGISTER ↗ ]
```

The actual wording comes from `project.md`; this file controls visual
treatment only.

## Hero headline

Very large.

White.

Tight line-height.

Maximum width around:

``` text
700px–900px
```

Do not center the headline unless the specific section requires it.

------------------------------------------------------------------------

# 7. Image Treatment

Image treatment is a major part of the Breakpoint visual identity.

Do not simply place untouched images in cards.

## Primary image treatment

Use a duotone / color-overlay approach.

Examples:

``` css
filter:
  grayscale(100%)
  contrast(1.1);
```

Then apply a colored overlay using blend modes.

Purple:

``` text
rgba(168, 85, 247, 0.75)
```

Green:

``` text
rgba(0, 255, 133, 0.70)
```

Blue:

``` text
rgba(0, 102, 255, 0.70)
```

## Image characteristics

Images should feel:

-   Graphic
-   Editorial
-   Slightly raw
-   High contrast
-   Digitally processed

Avoid:

-   Perfect commercial stock-photo color
-   Heavy rounded corners
-   Drop shadows
-   Generic card photography

------------------------------------------------------------------------

# 8. Digital / Glitch Treatment

The reference uses subtle digital distortion and glitch-like visual
elements.

Use this sparingly.

Possible effects:

-   Horizontal scan lines
-   Text displacement
-   Pixel blocks
-   Noise
-   Image slicing
-   Slight RGB separation
-   Horizontal clipping
-   Moving micro-text

The effect should communicate:

``` text
digital infrastructure
network
computation
technical culture
```

It should never make the page difficult to read.

## Glitch rule

Glitch is an accent, not the entire aesthetic.

Use it:

-   During hero transitions
-   On selected large typography
-   On hover
-   Around section transitions
-   In decorative background elements

Do not animate everything.

------------------------------------------------------------------------

# 9. Statistics Section

The Breakpoint reference has a strong statistics section with huge
numerical typography.

For QFF, replicate the **structure and visual impact**, not the Solana
content.

Example structure:

``` text
1,000+             50+              20+              10+

PARTICIPANTS       SPEAKERS         PROJECTS         SESSIONS
```

## Numbers

Use:

-   Extremely large type
-   Technical / futuristic display treatment
-   White or black depending on background
-   Tight spacing

The number should visually dominate its label.

## Labels

Use:

-   Monospace
-   Uppercase
-   Small
-   High tracking

------------------------------------------------------------------------

# 10. Section Transitions

The reference uses large, hard-edged section changes.

Avoid soft section transitions.

Preferred:

``` text
black
↓
black
↓
purple
↓
black
```

Purple sections should feel like a visual interruption.

Use geometric stepped edges where appropriate.

Example:

``` text
████████████
    ████████
████████████
```

This can be implemented with:

-   CSS clip-path
-   pseudo-elements
-   SVG shapes

Do not use rounded section transitions.

------------------------------------------------------------------------

# 11. Event / Program Cards

Event cards should feel editorial rather than like SaaS cards.

## Card design

Base:

``` text
black background
thin subtle border
square corners
```

No:

-   box shadow
-   glass
-   rounded card
-   excessive padding

## Card hierarchy

``` text
CATEGORY

Large title

DATE / LOCATION
↗
```

## Typography

Category:

Small monospace uppercase.

Title:

Large sans-serif.

Link:

Technical / arrow treatment.

## Images

Where images are present:

-   Large
-   Strong color treatment
-   Square or editorial aspect ratios
-   Minimal UI overlay

------------------------------------------------------------------------

# 12. Community / Quote Section

The reference includes a section combining:

-   Large heading on the left
-   Visual / quote card on the right

Use the same structural idea.

Desktop:

``` text
[ large editorial heading ]   [ image / quote composition ]
```

Quote cards should be:

-   White background
-   Black text
-   Sharp corners
-   Large quotation typography
-   Small attribution at bottom

Example structure:

``` text
“Quote text...”

@NAME
ROLE / ORGANIZATION
```

The quote card should feel like a printed editorial panel placed over a
digital background.

------------------------------------------------------------------------

# 13. Announcements

The "Latest announcements" section uses large horizontal cards.

Use:

``` text
LATEST ANNOUNCEMENTS
```

followed by a 3-column layout.

Each card:

``` text
CATEGORY


Large title
↗
```

Cards may have image backgrounds, but text hierarchy should remain
dominant.

Use subtle borders.

------------------------------------------------------------------------

# 14. FAQ

The FAQ should closely follow the reference.

## Layout

Desktop:

``` text
FAQ                         QUESTION
                             ─────────────
                             QUESTION
                             ─────────────
                             QUESTION
                             ─────────────
                             QUESTION
```

Large `FAQ` title on the left.

Accordion list on the right.

## Accordion

Each item:

-   Full width
-   Thin horizontal divider
-   Large readable question
-   Square plus/minus control
-   Minimal animation

Closed:

``` text
QUESTION                                +
```

Open:

``` text
QUESTION                                −

Answer text...
```

The plus/minus button should be square and bordered.

No pill-shaped controls.

------------------------------------------------------------------------

# 15. Footer

The footer should be a major visual ending rather than a conventional
footer.

Use a large purple block.

## Background

Signature QFF purple.

## Top edge

Use a stepped / architectural edge.

The reference has an irregular geometric top boundary.

Implement with:

-   SVG
-   clip-path
-   pseudo-elements

## Footer contents

Top:

``` text
[Social icons]                 [CONTACT ↗] [CODE OF CONDUCT ↗]
```

Middle:

``` text
© QUANTUMX FOUNDATION | 2026
```

Bottom:

Large QFF wordmark.

## Countdown

The reference uses a countdown directly inside the large purple footer.

For QFF:

``` text
XX       XX       XX       XX
DAYS     HOURS    MINUTES  SECONDS
```

Use large futuristic numerals.

Countdown typography should be black against purple.

------------------------------------------------------------------------

# 16. Large Brand Wordmark

The final footer should include a huge QFF / QFF 2026 wordmark.

It should nearly span the entire viewport width.

Example:

``` text
QFF
```

or:

``` text
QFF2026
```

Characteristics:

-   Black
-   Extremely large
-   Heavy geometric type
-   Tight tracking
-   Minimal vertical margin

The wordmark is a visual object.

It does not need to behave like normal text.

------------------------------------------------------------------------

# 17. Buttons

All primary buttons should follow the reference.

## Primary

``` text
WHITE BACKGROUND
BLACK TEXT
SHARP CORNERS
UPPERCASE
MONOSPACE
ARROW
```

Example:

``` text
REGISTER ↗
```

## Secondary

Black background / transparent background.

Thin white border.

White text.

Example:

``` text
EXPLORE ↗
```

## Hover

Keep interaction simple:

-   Invert colors
-   Slight translation
-   Arrow movement
-   Border transition

Avoid:

-   Glow
-   Huge scale
-   Gradient
-   Bouncy animation

------------------------------------------------------------------------

# 18. Border System

Borders should be subtle but visible.

Use:

``` css
border: 1px solid rgba(255,255,255,0.18);
```

For stronger UI:

``` css
border: 1px solid rgba(255,255,255,0.35);
```

On purple:

``` css
border: 1px solid rgba(0,0,0,0.2);
```

Borders should create structure without turning every element into a
box.

------------------------------------------------------------------------

# 19. Corner Radius

The reference is predominantly sharp.

Default:

``` text
border-radius: 0
```

Avoid:

``` text
8px
12px
16px
24px
9999px
```

The only exception should be tiny floating utility elements if
necessary.

------------------------------------------------------------------------

# 20. Shadows

Avoid conventional UI shadows.

Do not use:

``` text
box-shadow
```

unless required for a specific floating element.

Depth should come from:

-   Contrast
-   Typography
-   Image treatment
-   Layering
-   Overlap
-   Color blocks

------------------------------------------------------------------------

# 21. Spacing

Use large vertical spacing.

Typical section spacing:

``` text
Desktop: 120px–220px
Tablet: 90px–140px
Mobile: 70px–110px
```

Hero spacing can be larger.

Do not compress the page just to fit more information.

The reference feels spacious.

------------------------------------------------------------------------

# 22. Motion

Motion should feel technical and controlled.

## Preferred

-   Smooth image reveal
-   Text reveal
-   Horizontal slide
-   Small arrow movement
-   Section entrance
-   Image distortion
-   Glitch transition
-   Marquee / ticker
-   Parallax where useful

## Timing

Typical:

``` text
300ms–700ms
```

Use easing such as:

``` text
ease-out
cubic-bezier(...)
```

## Avoid

-   Excessive bounce
-   Springy SaaS animations
-   Constant floating objects
-   Excessive scroll-trigger animations
-   Animating every word

The user should feel the page moving, not notice the animation system.

------------------------------------------------------------------------

# 23. Background Digital Elements

The reference occasionally contains technical / glitch-like horizontal
text in the background.

QFF can use:

-   Quantum notation
-   Circuit-like patterns
-   Coordinates
-   Technical strings
-   ASCII-like structures
-   Scientific symbols
-   Small moving metadata

Examples:

``` text
QFF//2026
QUBIT::01
00 11 01 10
QUANTUM_FIELD
010101
```

These must remain subtle.

Opacity:

``` text
0.15–0.35
```

They are atmosphere, not content.

------------------------------------------------------------------------

# 24. Floating Utility Button

The reference contains a small circular floating control near the
bottom-right.

QFF can use a similar floating element.

Characteristics:

-   Black
-   Circular
-   Fixed bottom-right
-   Small
-   White QFF icon

Possible functions:

-   Menu
-   Back to top
-   Accessibility
-   Quick registration

Do not overload it.

------------------------------------------------------------------------

# 25. Responsive Design

The design must remain visually aggressive on mobile.

Do not simply shrink desktop.

## Mobile header

``` text
[QFF]              [REGISTER] [MENU]
```

## Hero

Reduce headline size but keep it dominant.

Recommended:

``` text
48px–64px
```

## Grid

Convert:

``` text
3 columns → 1 column
2 columns → 1 column
```

## Statistics

Can remain 2 columns:

``` text
01       02
03       04
```

or stack depending on width.

## Footer

Countdown can become:

``` text
2 × 2
```

Large QFF wordmark should remain oversized and may intentionally crop
beyond the viewport.

This cropping is acceptable and desirable.

------------------------------------------------------------------------

# 26. Accessibility

Despite the experimental design:

-   Maintain WCAG-conscious contrast
-   Provide visible focus states
-   Respect `prefers-reduced-motion`
-   Do not rely on color alone
-   Ensure buttons have accessible labels
-   Ensure animated backgrounds never interfere with reading
-   Maintain keyboard navigation
-   Use semantic HTML

Accessibility should not change the visual identity.

------------------------------------------------------------------------

# 27. Implementation Rules

The developer should treat the following as hard constraints.

### DO

-   Black-first layout
-   White typography
-   Electric purple feature blocks
-   Huge typography
-   Monospace metadata
-   Sharp corners
-   Thin borders
-   Editorial grids
-   Duotone photography
-   Controlled glitch effects
-   Large negative space
-   Geometric section transitions
-   Strong footer
-   Oversized QFF wordmark
-   Technical visual language

### DON'T

-   Rounded SaaS cards
-   Glassmorphism
-   Gradient backgrounds
-   Soft pastel colors
-   Excessive shadows
-   Generic dashboard UI
-   Generic AI landing-page patterns
-   Pills everywhere
-   Excessive icons
-   Overly dense sections
-   Excessive animation
-   Random decorative 3D objects
-   Generic stock-photo styling

------------------------------------------------------------------------

# 28. Visual Priority

When making implementation decisions, prioritize in this order:

1.  **Typography**
2.  **Layout / spacing**
3.  **Black / white contrast**
4.  **Photography treatment**
5.  **Purple feature sections**
6.  **Grid structure**
7.  **Micro-interactions**
8.  **Glitch / digital decoration**

If an effect conflicts with typography or usability, remove the effect.

------------------------------------------------------------------------

# 29. Fidelity Target

The final QFF 2026 site should immediately feel like it belongs to the
same design family as the supplied Breakpoint reference.

A person familiar with the reference should recognize:

-   The visual rhythm
-   The black/white/purple system
-   The typography scale
-   The editorial layout
-   The sharp UI
-   The image treatment
-   The statistics presentation
-   The FAQ structure
-   The oversized footer branding
-   The technical/glitch atmosphere

But the content, identity, logo, event information, imagery, and
messaging must be **QFF 2026 / QuantumX Foundation**, not Solana
Breakpoint.

The goal is **high visual fidelity to the reference design language**,
not copying Solana branding or content.
