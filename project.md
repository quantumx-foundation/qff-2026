QFF26 --- Project Specification

1. Project Overview

Project: QFF26
Parent brand: QuantumX Foundation
Target domain: qff26.quantumx.foundation
Primary deliverable: A premium, immersive event landing page for
QFF26.

The website should take visual and interaction inspiration from the
supplied Solana Breakpoint 2026 reference screenshots and the live
Breakpoint website, while remaining an original QFF26 / QuantumX
experience.

The goal is not to clone Breakpoint. The goal is to reproduce the
qualities that make the reference effective:

high-impact event branding

editorial storytelling

brutalist / experimental visual language

oversized typography

black-and-purple visual system

strong image treatment

kinetic/glitch-inspired motion

clear event conversion paths

highly polished responsive behavior

The website should feel like a major global technology / quantum
event, not a generic conference template.

2. Reference Material

The project contains a reference-images/ directory with the supplied
Breakpoint screenshots.

The implementation agent MUST:

Inspect every image in reference-images/ before implementing the
UI.

Use the screenshots as the primary visual reference for layout,
spacing, hierarchy, image treatment, typography behavior, cards,
footer, navigation, and motion direction.

Study the visual relationships between sections rather than copying
individual pixels.

Keep the QFF26 identity original.

Never use Solana logos, Solana event copy, Solana sponsor lists, or
Solana-specific branding in the final QFF26 website unless
explicitly provided as approved content.

The live Breakpoint website is also a reference for page architecture
and interaction patterns:

https://solana.com/breakpoint

3. Brand Architecture

Primary identity

QFF26

Parent identity

QuantumX Foundation

Domain

qff26.quantumx.foundation

The event should be visually led by the short event identity QFF26,
similar to how large technology conferences use a compact annual
identifier.

Example brand hierarchy:

QFF26
QUANTUMX FOUNDATION
2026

The exact expansion of "QFF" must come from approved event content. Do
not invent an expansion if it has not been supplied.

4. Design Direction

Overall aesthetic

The website should feel:

futuristic

experimental

technical

institutional

premium

global

bold

slightly unpredictable

editorial

research-driven

event-first

Avoid:

generic SaaS aesthetics

standard startup landing-page templates

excessive rounded cards

gradients everywhere

stock-template hero sections

overly soft/pastel visuals

excessive shadows

conventional corporate conference design

5. Visual System

Base colors

Primary:

#000000 --- black

#FFFFFF --- white

Accent:

strong electric / ultraviolet purple

The exact purple should be selected after studying the supplied
references and should remain consistent throughout the site.

Secondary accent colors may be used sparingly for image treatments,
visual effects, or event content, but purple should remain the primary
brand accent.

Borders

Use thin, subtle borders for:

cards

navigation elements

FAQ rows

buttons

content containers

Corners

The design should primarily use:

square corners

very small radii where required

occasional intentionally rounded interactive controls

Do not turn the site into a rounded-card UI.

6. Typography

Typography is a major part of the visual identity.

Use a strong modern sans-serif display font for:

hero headlines

section headlines

major statistics

large footer branding

Use a monospace / technical font for:

metadata

labels

dates

navigation microcopy

event identifiers

technical decorative text

Typography should include:

very large display sizes

tight line heights

strong contrast

uppercase technical labels

generous spacing between sections

The implementation should use responsive typography with clamp() or
equivalent.

Do not hardcode desktop typography only.

7. Navigation

Create a minimal sticky/fixed navigation inspired by the reference.

Desktop:

QFF26 / QuantumX branding

primary CTA

compact menu trigger

minimal visual footprint

Mobile:

compact logo/wordmark

menu trigger

primary CTA where space allows

The navigation should remain readable over both dark backgrounds and
hero imagery.

The menu should open into a polished full-screen or large overlay
navigation experience.

Suggested navigation destinations:

About

Program

Speakers

Events

Partners

FAQ

Only show destinations that actually exist in the implemented page.

8. Hero Section

The hero is the primary visual statement.

Requirements

Full viewport or near-full viewport presentation

Large QFF26 identity

Event name

Year

Date/location when confirmed

Primary CTA

Secondary CTA where appropriate

Strong background visual

Image treatment / color treatment

Experimental typography or glitch treatment

Subtle motion

The hero should immediately communicate:

What the event is

When it is happening

Where it is happening

Why the visitor should care

What action to take

Do not overload the hero with paragraphs.

9. Hero Motion

Use motion inspired by the reference, but keep it performant.

Possible effects:

subtle image movement

text reveal

glitch fragments

horizontal technical text

scanline-like details

distorted decorative characters

subtle parallax

staggered entrance animation

Motion should support the design rather than become a distraction.

Respect:

prefers-reduced-motion

When reduced motion is enabled, disable intensive animations.

10. Event Information Strip

Immediately after the hero, include a compact event information area.

Potential information:

Date

Location

Event type

Registration status

Key theme

Use large typography for the primary values and technical labels
underneath.

Example structure:

DATE
[DATE]

LOCATION
[LOCATION]

EVENT
QFF26

All values must come from approved event content.

11. Main Event Statement

Create a large editorial section with a strong statement about QFF26.

Structure:

[small technical label]

[Large statement]

[Supporting paragraph]

The section should use large whitespace and strong typographic
hierarchy.

The final copy must be provided/approved separately. Do not invent
scientific claims.

12. Why QFF26 / Event Value Section

Create a section explaining why the event matters.

Use 3--4 editorial content blocks.

Possible structure:

Research

A section explaining the research focus.

Builders

A section explaining the developer / builder ecosystem.

Industry

A section explaining industry and commercial relevance.

Community

A section explaining collaboration, education, and networking.

These are structural placeholders until final approved copy is provided.

13. Statistics Section

Create a large statistics section inspired by the reference.

Use:

oversized numbers

small monospace labels

strong horizontal spacing

minimal decoration

Example:

[NUMBER]        [NUMBER]        [NUMBER]

RESEARCHERS     BUILDERS        COUNTRIES

Do not fabricate statistics.

If final numbers are not available, use clearly marked content
placeholders during development and replace them before launch.

14. Program / Agenda

Create a program section capable of presenting the event schedule.

Requirements:

date filtering if multiple days exist

time

session title

session type

speaker

location/track where relevant

optional expandable details

responsive layout

Desktop can use a structured editorial grid.

Mobile should become a vertical schedule.

If final agenda data is not available, build the component with mock
placeholder data clearly marked for replacement.

15. Speakers

Create a speakers section.

Each speaker card should support:

photo

name

title

organization

optional topic

optional social/profile link

Visual direction:

large editorial photography

monochrome / duotone treatment

hover movement

minimal text

strong typography

Support horizontal scrolling on desktop/mobile where appropriate.

Do not invent real speaker names or affiliations.

16. Event / Ecosystem Section

Inspired by the reference's ecosystem-event section.

Create a horizontal event/card carousel supporting:

event image

event name

date

location

short description

external link

Cards should feel editorial rather than like standard UI cards.

Navigation:

previous

next

drag/swipe on touch devices

17. Community / Testimonials

Create a community section with large editorial testimonials.

Structure:

FROM THE COMMUNITY

[Large quote]

[Name]
[Role / Organization]

Support multiple testimonials through a carousel.

Use large quotation typography and strong image/background treatment.

Do not invent testimonials. Use approved copy only.

18. Announcements / Updates

Create a latest-updates section.

Each item can include:

category

title

date

optional image

external/internal link

Categories may include:

EVENT

NEWS

RECAP

PARTNER

ANNOUNCEMENT

Use the same minimal bordered-card language as the reference.

19. Partners / Sponsors

Create a sponsor/partner section if applicable.

Requirements:

logo grid

appropriate logo hierarchy

category grouping where needed

links to approved partner websites

responsive layout

Do not invent sponsors.

If sponsor data is not yet available, build the component with
placeholders.

20. FAQ

Create a clean accordion FAQ.

The reference uses a minimal editorial FAQ with:

large section title

question rows

thin dividers

plus/minus controls

animated expansion

Potential FAQ categories:

Event

Tickets

Location

Program

Speakers

Sponsorship

Participation

Only include questions for which approved answers exist.

21. Primary Conversion Section

Create a strong final CTA before the footer.

Possible actions:

Register

Get Updates

Apply to Speak

Become a Partner

View Program

The primary CTA must be visually dominant.

The CTA destination must be configurable through a single content/config
object.

22. Countdown

Include a countdown only if the event date is confirmed.

Display:

00
DAYS

00
HOURS

00
MINUTES

00
SECONDS

Visual direction:

large numerical typography

monospace labels

high contrast

responsive four-column layout

Requirements:

calculate from a configurable event timestamp

automatically update every second

handle timezone correctly

display a completed state after the event

avoid hydration mismatch in Next.js

23. Footer

The footer should be one of the strongest visual sections.

Inspired by the supplied reference:

large purple background

technical top edge / stepped geometry

social icons

legal links

contact

large QFF26 wordmark

QuantumX Foundation branding

optional countdown

Example structure:

SOCIAL LINKS

QFF26
QUANTUMX FOUNDATION

CONTACT
CODE OF CONDUCT
PRIVACY
TERMS

© QUANTUMX FOUNDATION | 2026

Use an oversized wordmark treatment.

The footer should feel like a final visual statement, not merely a
utility footer.

24. Responsive Design

The site must be designed intentionally for:

Desktop

1440px+

large editorial grids

horizontal carousels

oversized typography

full visual compositions

Laptop

1024--1439px

maintain hierarchy

reduce typography where required

preserve whitespace

Tablet

768--1023px

simplify multi-column layouts

preserve major visual moments

Mobile

320--767px

single-column layouts

touch-friendly controls

horizontal swipe carousels

reduced decorative complexity

no horizontal overflow

carefully scaled typography

Do not simply stack the desktop layout.

Mobile should feel designed, not compressed.

25. Animation System

Use a consistent motion system.

Recommended:

Framer Motion or equivalent

intersection-based reveal

staggered text/image entrances

hover transitions

carousel movement

accordion animation

navigation transitions

subtle hero motion

marquee / ticker movement

Avoid:

constant heavy animation

excessive blur

expensive WebGL effects unless necessary

animations that block interaction

Performance is more important than visual gimmicks.

26. Glitch / Experimental System

Create reusable visual utilities for:

glitch text

distorted characters

scanline decoration

technical marquees

noise texture

image duotone treatment

subtle digital artifacts

These effects should be reusable across sections.

Do not randomly apply glitch effects everywhere.

Use them strategically around:

hero

section transitions

event identifiers

major headings

footer

27. Image Treatment

Images should feel consistent with the reference.

Support:

grayscale

purple duotone

high-contrast monochrome

color overlays

subtle grain

hover transitions

Do not use the original Solana screenshots as production website
imagery.

Use QFF26 / QuantumX imagery or approved placeholders.

28. Content Architecture

Keep content separate from UI components.

Recommended structure:

src/
  app/
  components/
  content/
  data/
  lib/
  styles/

Event content should be editable without rewriting UI components.

Recommended content objects:

event
hero
stats
program
speakers
ecosystemEvents
testimonials
announcements
partners
faq
footer

29. Technical Stack

Preferred implementation:

Next.js

TypeScript

Tailwind CSS

Framer Motion

modern responsive CSS

optimized image handling

Use server components where appropriate.

Use client components only where interaction/state is required.

30. Component Architecture

Build reusable components.

Minimum component set:

Navbar
MobileMenu
Hero
EventMeta
EditorialStatement
ValueSection
Stats
Program
Speakers
SpeakerCard
EventCarousel
EventCard
Testimonials
Announcements
AnnouncementCard
Partners
FAQ
Countdown
CTASection
Footer
GlitchText
Marquee
ImageTreatment
SectionLabel
Button

Do not build the entire page as one large component.

31. Accessibility

The website must include:

semantic HTML

keyboard navigation

visible focus states

accessible buttons

accessible accordion controls

alt text

sufficient contrast

reduced-motion support

logical heading hierarchy

accessible carousel controls

Do not sacrifice accessibility for visual effects.

32. SEO

Implement:

title

meta description

Open Graph metadata

Twitter/X metadata

canonical URL

favicon

event-related structured data where appropriate

Canonical domain:

https://qff26.quantumx.foundation

Do not publish invented event dates, locations, descriptions, speakers,
or claims.

33. Performance

Target:

fast initial load

optimized images

lazy loading below-the-fold media

minimal JavaScript where possible

no unnecessary third-party scripts

no blocking animation libraries

responsive image sizing

good Core Web Vitals

Avoid loading every image at full resolution.

34. Analytics

Analytics should be implemented only if an approved analytics provider
is specified.

Track useful event actions such as:

registration CTA clicks

program interactions

speaker profile clicks

sponsor/partner clicks

external event clicks

Analytics must be configurable and easy to remove.

Do not hard-code an analytics vendor without approval.

35. Configuration

Create a central configuration/content layer.

At minimum:

EVENT_NAME
EVENT_SHORT_NAME
EVENT_YEAR
EVENT_DATE
EVENT_LOCATION
REGISTRATION_URL
SPEAKER_APPLICATION_URL
SPONSOR_URL
CONTACT_URL
SOCIAL_LINKS

This allows the event information to change without modifying UI
components.

36. External Links

All external URLs must be stored in one configuration/content layer.

Do not scatter external URLs throughout components.

External links should:

open safely where appropriate

use clear labels

support future replacement

37. Development Workflow

Before coding:

Inspect all files in reference-images/.

Identify common design patterns.

Create a design system.

Create the page architecture.

Build reusable components.

Implement the hero first.

Implement sections progressively.

Add motion after the static layout is correct.

Test desktop.

Test mobile.

Perform visual polish.

Run accessibility and performance checks.

Do not start by writing a huge single-page component.

38. Visual QA

After implementation, compare the website against the reference images.

Check:

typography scale

section spacing

visual density

image proportions

card dimensions

button treatment

borders

purple usage

footer composition

navigation position

animation feel

mobile behavior

The objective is to achieve the same level of visual sophistication
and event-branding impact, not pixel-copy the reference.

39. Browser QA

Test at minimum:

Chrome desktop

Safari desktop

Chrome mobile

Safari mobile

Check:

no horizontal overflow

no layout shifts

no broken images

no console errors

no hydration warnings

no inaccessible controls

no broken external links

40. Deployment

The production site should be deployable to a modern Next.js-compatible
hosting platform.

The final deployment must support:

https://qff26.quantumx.foundation

DNS and domain configuration should be documented separately.

41. Deliverables

The final project delivery includes:

Website

Complete QFF26 landing page

Desktop responsive experience

Mobile responsive experience

Navigation

Hero

Event information

Editorial sections

Statistics

Program

Speakers

Ecosystem events

Community/testimonials

Announcements

Partners/sponsors

FAQ

CTA

Countdown

Footer

Design system

typography

colors

spacing

buttons

cards

borders

motion

image treatments

glitch effects

Technical implementation

Next.js application

TypeScript

Tailwind CSS

reusable components

content/configuration layer

responsive behavior

accessibility

SEO

performance optimization

Content management readiness

The UI must be structured so event content can be replaced easily when
final:

dates

venue

speakers

agenda

statistics

partners

testimonials

announcements

registration URLs

becomes available.

Production readiness

production build succeeds

no TypeScript errors

no ESLint errors

no hydration errors

no broken routes

no broken images

no horizontal overflow

responsive QA completed

deployment instructions included

42. Out of Scope Unless Explicitly Requested

Do NOT build:

user authentication

attendee accounts

ticket purchasing backend

payment processing

custom CMS

event check-in system

admin dashboard

speaker portal

sponsor portal

database

custom registration backend

External registration systems can be linked through configurable URLs.

43. Content Safety / Accuracy Rule

The website must never invent factual event information.

If information is unavailable, use:

TBD
Coming soon
[CONTENT PLACEHOLDER]

during development.

Do not fabricate:

speakers

organizations

sponsors

ticket prices

dates

venue

statistics

scientific claims

testimonials

partnerships

All production placeholders must be resolved before launch.

44. Definition of Done

The project is complete when:

All supplied reference images have been reviewed

QFF26 visual identity is implemented

Website feels like a premium global technology event

Breakpoint-inspired design language is present without copying
Solana branding

Hero is visually strong

Navigation works

All implemented sections are responsive

Program component works

Speaker component works

Event carousel works

Testimonials work

FAQ works

Countdown works if event date is configured

Footer is complete

Animations are polished

Reduced-motion mode works

SEO metadata exists

Accessibility basics are satisfied

Images are optimized

No horizontal overflow

No console errors

Production build passes

All external links are configurable

No fabricated production content remains

Site is ready for qff26.quantumx.foundation

45. Agent Instruction

Do not begin by immediately writing code.

First inspect the complete reference-images/ directory and understand
the visual system.

Then create a short implementation plan.

Then implement the website in reusable components.

Prioritize:

visual quality

responsive behavior

typography

spacing

interaction quality

performance

accessibility

maintainability

The final result should feel like a real flagship quantum event
website, not an AI-generated generic conference template.

When a design decision is ambiguous, prioritize the supplied reference
images and the QFF26 / QuantumX brand over generic web-design
conventions.