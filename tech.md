# QFF26 — Technical Specification

## 1. Project Overview

QFF26 is the official landing page and event website for QuantumX Foundation's QFF26 event.

The website should reproduce the visual quality, interaction language, editorial structure, and immersive feel of the provided reference website while maintaining an original QuantumX Foundation identity.

Primary domain:

`qff26.quantumx.foundation`

The project is a frontend-first event website. The initial release does not require a custom backend unless a specific feature later requires one.

---

## 2. Core Technology Stack

### Framework

- Next.js
- App Router
- React
- TypeScript

Use the latest stable Next.js version available at implementation time.

### Styling

- Tailwind CSS
- CSS variables for global design tokens
- Custom CSS only where Tailwind is insufficient
- Avoid large amounts of inline styling

### Typography

Use a distinctive display/type system matching the supplied references.

Recommended approach:

- Load fonts through `next/font`
- Use a strong display font for major headings
- Use a clean sans-serif/monospace treatment for supporting labels
- Define typography tokens centrally

Do not depend on externally hosted font CSS when a local/Next.js font solution is available.

### Animation

Use:

- CSS transitions for simple interactions
- Framer Motion / Motion for React for complex UI animation
- Intersection Observer or Motion viewport triggers for scroll reveals

Animations should feel intentional and editorial, not like generic SaaS animations.

### Icons

Use a lightweight icon library where required.

Prefer:

- Lucide React

For the QuantumX/QFF26 logo and custom graphical marks, use supplied SVG assets rather than replacing them with icon-library equivalents.

---

## 3. Rendering Strategy

Use Next.js App Router with a static-first architecture.

### Default approach

Pages should be statically rendered wherever possible.

Use:

- Server Components by default
- Client Components only when interaction/state/animation requires them
- Static generation for content that does not change frequently

Avoid turning the entire application into a Client Component.

### Dynamic functionality

Client-side JavaScript should only be introduced for:

- Navigation menu
- Mobile menu
- Countdown
- Carousels
- FAQ accordion
- Scroll-based visual effects
- Interactive event elements
- Registration/ticket interactions
- Other genuinely interactive UI

---

## 4. Project Structure

Recommended structure:

```text
qff2026/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── favicon.ico
│   └── ...
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stats.tsx
│   │   ├── Speakers.tsx
│   │   ├── Schedule.tsx
│   │   ├── Events.tsx
│   │   ├── Highlights.tsx
│   │   ├── Announcements.tsx
│   │   ├── FAQ.tsx
│   │   └── Countdown.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ImageCard.tsx
│   │   ├── ArrowButton.tsx
│   │   └── Marquee.tsx
│   │
│   └── effects/
│       ├── GlitchText.tsx
│       ├── Reveal.tsx
│       ├── Parallax.tsx
│       └── CursorEffect.tsx
│
├── data/
│   ├── event.ts
│   ├── speakers.ts
│   ├── schedule.ts
│   ├── announcements.ts
│   └── faq.ts
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── fonts/
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
├── types/
│   └── event.ts
│
├── project.md
├── tech.md
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

The exact structure can be simplified if a component does not justify its own file.

---

## 5. Page Architecture

The primary route is:

```text
/
```

The homepage should contain the complete event experience as a long-form landing page.

Potential future routes may include:

```text
/schedule
/speakers
/events
/about
/faq
```

Do not create additional routes unless they are required by the final product scope.

---

## 6. Data Architecture

Keep event content separate from presentation.

Do not hardcode large amounts of event content directly inside JSX.

Example:

```ts
export const event = {
  name: "QFF26",
  location: "...",
  date: "...",
  registrationUrl: "...",
};
```

Speakers, schedule items, announcements, statistics and FAQ entries should use typed data structures.

Example:

```ts
export type Speaker = {
  name: string;
  role?: string;
  organization?: string;
  image: string;
};
```

This makes the website easy to update without restructuring components.

### Important

Do not invent:

- Speakers
- Organizations
- Dates
- Venues
- Ticket prices
- Sponsors
- Statistics
- Partnerships
- Event claims

Use confirmed content only.

If content is not confirmed, keep it configurable/TBD rather than fabricating it.

---

## 7. Assets

All supplied reference images are located in:

```text
reference-images/
```

The implementation agent must inspect all reference images before building the UI.

These images are design references and should be used to understand:

- Layout
- Spacing
- Typography
- Visual hierarchy
- Color treatment
- Animation direction
- Image composition
- Navigation
- Section transitions
- Editorial style

Do not blindly copy proprietary Solana branding or assets.

The final implementation should feel inspired by the references while clearly belonging to QFF26 / QuantumX Foundation.

---

## 8. Image Handling

Use Next.js `<Image />` for normal raster images.

Example:

```tsx
import Image from "next/image";
```

Use:

- Responsive image sizes
- Appropriate `sizes`
- Lazy loading for below-the-fold images
- Priority loading only for the main hero image

Do not ship unnecessarily huge images.

Where image effects require CSS backgrounds or visual overlays, normal `<img>` or CSS background usage may be acceptable when technically justified.

---

## 9. Visual System

The website should use a strong visual system based on the supplied references.

Core characteristics:

- Dark/black foundation
- High-contrast typography
- Large display type
- Purple as the primary event accent
- Occasional electric/bright secondary accents where appropriate
- Thin borders
- Large whitespace
- Editorial layouts
- Oversized numbers
- Strong image treatment
- Experimental/glitch-inspired details
- Sharp rectangular UI elements
- Minimal rounded corners

Avoid:

- Generic SaaS gradients
- Excessive rounded cards
- Generic dashboard styling
- Excessive shadows
- Stock-looking illustrations
- Overuse of glassmorphism
- Excessive animation

---

## 10. Design Tokens

Define reusable CSS variables.

Example:

```css
:root {
  --qff-black: #000000;
  --qff-white: #ffffff;
  --qff-purple: #a855f7;
  --qff-border: rgba(255, 255, 255, 0.18);

  --container: 1440px;

  --space-section: clamp(5rem, 10vw, 12rem);
}
```

Exact colors should be refined against the provided references during implementation.

Do not scatter arbitrary hex values throughout components.

---

## 11. Layout

Use a consistent maximum-width container.

Example:

```css
.container {
  width: min(100% - 48px, var(--container));
  margin-inline: auto;
}
```

Responsive behavior should be intentionally designed for:

- Desktop
- Tablet
- Mobile

Do not simply shrink the desktop layout.

Some sections should change composition completely on mobile.

---

## 12. Navigation

The header should remain visually close to the reference direction:

- Event/QFF26 branding
- Registration CTA
- Menu trigger
- Minimal navigation footprint
- Strong contrast

Desktop and mobile navigation should be separate responsive experiences where appropriate.

The navigation should support:

- Smooth section navigation
- Accessible keyboard interaction
- Escape-to-close mobile/menu overlays
- Focus management

---

## 13. Hero

The hero is the most important visual section.

Requirements:

- Large event identity
- Strong visual background
- High contrast
- Clear primary CTA
- Event date/location when confirmed
- Motion/glitch treatment where appropriate
- Responsive composition

The hero should immediately communicate:

1. What QFF26 is
2. Why it matters
3. What the visitor should do next

Do not overload the hero with text.

---

## 14. Countdown

If a confirmed event date exists, implement a live countdown.

Requirements:

- Days
- Hours
- Minutes
- Seconds
- Updates once per second
- Handles event completion gracefully
- Correct timezone handling

Do not hardcode a fake countdown.

Use an explicit event datetime.

Example:

```ts
const eventDate = new Date("YYYY-MM-DDTHH:mm:ss");
```

The exact value must come from confirmed event information.

---

## 15. Interactive Components

### FAQ

Use an accessible accordion.

Requirements:

- Keyboard accessible
- `aria-expanded`
- Correct button semantics
- Only necessary client-side state
- Smooth open/close animation

### Carousels

If used:

- Keyboard navigation
- Previous/next controls
- Touch/swipe support where appropriate
- Visible focus states
- Reduced-motion support

### Menu

Mobile menu must:

- Open/close smoothly
- Trap focus when necessary
- Close with Escape
- Restore focus to trigger
- Prevent accidental background interaction

---

## 16. Motion System

Motion should reinforce the QFF26 visual identity.

Potential effects:

- Glitch text
- Image reveal
- Horizontal marquee
- Scroll reveal
- Parallax image movement
- Section transitions
- Number counters
- Hover distortion
- Cursor interactions

Do not animate every element.

Use motion hierarchy:

### Level 1
Simple opacity/transform transitions.

### Level 2
Scroll-triggered reveals and image movement.

### Level 3
Signature QFF26 effects such as glitch, distortion or marquee.

Signature effects should be used sparingly.

---

## 17. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

- Disable major parallax
- Reduce transitions
- Disable continuous decorative animation
- Keep content accessible
- Do not hide information behind animation

---

## 18. Accessibility

Target WCAG 2.2 AA where practical.

Requirements:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Alt text for meaningful images
- Decorative images marked appropriately
- Sufficient color contrast
- Accessible accordion controls
- Accessible navigation
- Reduced-motion support

Do not rely on color or animation alone to communicate information.

---

## 19. SEO

Configure Next.js metadata.

Include:

- Page title
- Description
- Open Graph metadata
- Twitter/X metadata
- Canonical URL
- Favicon
- Social sharing image

Primary canonical domain:

```text
https://qff26.quantumx.foundation
```

Do not expose development URLs as canonical metadata.

---

## 20. Structured Data

If the final event information is confirmed, add appropriate Schema.org structured data for the event.

Potential fields:

- Event name
- Description
- Start date
- End date
- Location
- Organizer
- Event URL
- Image

Only include confirmed information.

---

## 21. Performance

Target excellent Lighthouse performance.

Priorities:

- Minimize client JavaScript
- Server Components by default
- Optimize images
- Avoid unnecessary dependencies
- Lazy load non-critical content
- Use modern image formats
- Avoid layout shift
- Preload only critical assets
- Keep animation performant

Avoid:

- Heavy video backgrounds unless essential
- Large JavaScript animation libraries for trivial effects
- Unnecessary third-party trackers
- Huge unoptimized image files

---

## 22. Analytics

Analytics should be isolated behind a simple abstraction.

If analytics are required, track meaningful events such as:

- Registration CTA click
- Menu open
- Schedule interaction
- Speaker interaction
- External event link click

Do not add analytics services unless explicitly approved.

---

## 23. External Links

External links should be clearly identifiable when appropriate.

Registration should use a configurable URL:

```ts
export const event = {
  registrationUrl: "...",
};
```

Do not hardcode the registration platform across multiple components.

---

## 24. Environment Variables

Use `.env.local` for environment-specific values.

Example:

```env
NEXT_PUBLIC_SITE_URL=https://qff26.quantumx.foundation
NEXT_PUBLIC_REGISTRATION_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

Do not commit secrets.

Only values genuinely needed in the browser should use `NEXT_PUBLIC_`.

---

## 25. Deployment

Recommended deployment:

**Vercel**

Deployment requirements:

- Production build must pass
- No TypeScript errors
- No ESLint errors that block production
- Correct environment variables
- Correct production metadata
- Correct domain configuration

Production domain:

```text
qff26.quantumx.foundation
```

The exact DNS configuration will depend on the QuantumX Foundation domain provider.

---

## 26. Development Commands

Expected commands:

```bash
npm install
npm run dev
npm run build
npm run start
```

Optional:

```bash
npm run lint
```

The project should build successfully with:

```bash
npm run build
```

before deployment.

---

## 27. TypeScript Rules

Use strict TypeScript.

Avoid:

```ts
any
```

unless there is a documented technical reason.

Prefer:

- Explicit interfaces/types
- Typed component props
- Typed data files
- Typed utility functions

---

## 28. Component Rules

Components should be:

- Small
- Reusable
- Typed
- Single-purpose
- Visually consistent

Avoid massive `page.tsx` files.

For example:

```tsx
<Hero />
<Stats />
<Speakers />
<Schedule />
<Events />
<FAQ />
<Footer />
```

The homepage should primarily compose sections rather than contain their implementation.

---

## 29. CSS Rules

Prefer Tailwind utilities for component-level styling.

Use `globals.css` for:

- Font definitions
- CSS variables
- Global resets
- Selection styling
- Scroll behavior
- Global typography
- Complex visual effects

Do not create hundreds of one-off CSS classes.

---

## 30. Dependency Rules

Keep dependencies minimal.

Before installing a package, ask:

1. Is this functionality difficult to implement without it?
2. Is it actively maintained?
3. Does it materially improve the website?
4. Does the bundle cost justify it?

Do not install libraries just because they are popular.

---

## 31. Browser Support

Support current versions of:

- Chrome
- Safari
- Firefox
- Edge

Pay particular attention to Safari because the site is expected to contain:

- Large typography
- CSS effects
- Sticky elements
- Animation
- Blend modes
- Responsive layouts

Do not rely on experimental browser APIs without a fallback.

---

## 32. Mobile Requirements

Mobile is a first-class design target.

Check at minimum:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+

Verify:

- Typography
- Navigation
- Image cropping
- CTA sizing
- Horizontal overflow
- Animation performance
- Touch targets
- Countdown layout
- FAQ interaction

No accidental horizontal scrolling.

---

## 33. Security

Since the first version is primarily static:

- No secrets in client code
- No API keys exposed in source
- Validate any future form input server-side
- Avoid unsafe HTML injection
- Do not use `dangerouslySetInnerHTML` unless absolutely necessary
- Keep dependencies updated

---

## 34. Content Management

For the first version, content can live in typed local data files.

Do not introduce a CMS unless there is a real requirement for non-technical editors to update the site.

The architecture should, however, make future CMS integration straightforward.

---

## 35. Development Workflow

Implementation order:

### Phase 1 — Foundation

- Initialize Next.js
- Configure TypeScript
- Configure Tailwind
- Configure fonts
- Configure global tokens
- Configure metadata
- Establish layout/container system

### Phase 2 — Core Layout

- Header
- Navigation
- Footer
- Hero
- Base buttons
- Typography system

### Phase 3 — Main Sections

- Event introduction
- Statistics
- Speakers
- Schedule
- Events
- Highlights
- Announcements
- FAQ
- Countdown

### Phase 4 — Motion

- Reveal animations
- Glitch effects
- Image transitions
- Marquee
- Parallax
- Hover states

### Phase 5 — Responsive

- Tablet layout
- Mobile layout
- Touch interactions
- Mobile navigation

### Phase 6 — Polish

- Typography refinement
- Spacing
- Image cropping
- Borders
- Micro-interactions
- Loading behavior

### Phase 7 — QA

- Build
- Lint
- Accessibility
- Mobile testing
- Browser testing
- Performance
- SEO
- Link verification

### Phase 8 — Deployment

- Vercel
- Environment variables
- Domain
- Production verification

---

## 36. Reference-Driven Implementation Rule

Before writing the first component, inspect every file inside:

```text
reference-images/
```

Treat the supplied screenshots as the primary visual reference for:

- Composition
- Navigation
- Section rhythm
- Typography scale
- Image treatment
- Color usage
- UI density
- Animation direction

However, do not reproduce Solana's identity as if QFF26 were a Solana event.

The goal is:

**Reference-level visual quality + QFF26/QuantumX Foundation identity.**

---

## 37. Definition of Done

The project is complete when:

- [ ] Next.js application is production-ready
- [ ] TypeScript is strict and error-free
- [ ] All major sections are implemented
- [ ] Reference images have been inspected
- [ ] QFF26 visual identity is applied consistently
- [ ] Responsive layouts work across desktop/tablet/mobile
- [ ] Navigation works
- [ ] CTA/registration flow works
- [ ] Countdown works when an official date is configured
- [ ] FAQ works
- [ ] Animations work without hurting performance
- [ ] Reduced-motion behavior works
- [ ] Accessibility requirements are addressed
- [ ] SEO metadata is configured
- [ ] Social sharing metadata is configured
- [ ] Images are optimized
- [ ] No horizontal overflow exists
- [ ] No placeholder/fabricated event facts remain
- [ ] Production build passes
- [ ] Production domain is configured
- [ ] Final website has been tested on Chrome and Safari

---

## 38. Engineering Principle

Build QFF26 as a **premium event experience**, not a generic Next.js marketing template.

The implementation should prioritize:

**Visual impact → clarity → performance → accessibility → maintainability.**

When a technical decision conflicts with visual quality, solve the problem rather than compromising the overall experience.

When an animation is impressive but harms performance or usability, remove it.

When event information is unknown, do not invent it.

When a design detail is uncertain, use the supplied reference images as the source of truth.
