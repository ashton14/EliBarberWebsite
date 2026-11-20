# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output, SSG) built from the Chalet theme (MIT), copied in as a template. TypeScript strict for config and helpers, plain CSS with custom properties in `src/styles/tokens.css`, vanilla JS only where it is truly needed (budget 5 KB or less, ideally zero), JSON-LD generated from `src/config/site.ts`. No client framework, no Tailwind. Hosting target: Cloudflare Pages or Netlify (static `dist/`).

## Users

Men and boys in the Conejo Valley (Thousand Oaks, Newbury Park, Westlake Village, Agoura Hills, Oak Park, Moorpark), aged roughly 16–55: professionals, students, and dads bringing kids. Most arrive on a phone, often from Google Search or Maps, and want three things fast: what a cut costs, whether they can get in soon, and whether the work is good. Then they book.

## Product Purpose

The marketing site for Conejo Barber, a barbershop in Thousand Oaks, CA. It has two jobs:
1. Rank in local search ("barber Thousand Oaks", "fade near me", "beard trim Thousand Oaks") and back up the Google Business Profile.
2. Turn phone visitors into bookings or calls.

Success means a visitor books, calls or gets directions. Primary action: **Book** (external booking link). Secondary: **Call**, **Get directions**.

## Positioning

An owner-barber shop: one barber, a small shop, and the same person in the chair every visit. Exact wording of any claim is still TODO and must be confirmed by the owner before it appears on the site.

## Operating Context

- Visitors check the site between other things (on a lunch break, in the car, after a Google Maps tap), so they scan rather than read.
- Booking happens off-site through a third-party booking provider (Booksy, Square, Fresha or Vagaro: TODO which one).
- The site's name, address and phone must match the Google Business Profile exactly.

## Capabilities and Constraints

- Pages: `/`, `/services/`, `/barbers/` (a single "meet your barber" page at launch), `/visit/`, `/privacy/` (California CCPA/CPRA-aware), `404`.
- No contact form unless an endpoint is provided.
- Performance: Lighthouse 95+ in every category on mobile; LCP under 2.0s, CLS under 0.05, INP under 200ms; total JS 5 KB or less; home page weight 600 KB or less; no third-party scripts on load (the map loads only on click).
- Fonts: at most two self-hosted WOFF2 families.
- Images: AVIF and WebP via `astro:assets`, 200 KB or less each.
- **Undecided (TODO):** address, coordinates, phone, email, domain, booking URL, Google profile and review links, social URLs, hours, walk-in policy, payment methods, parking notes, services and prices, barber name/bio/photo, shop story, reviews, star rating and count.

## Brand Commitments

- Name: "Conejo Barber". Location: Thousand Oaks, California.
- Voice: confident, friendly, local and concise. Mention the city naturally, never keyword-stuffed.
- Banned clichés (owner's instruction): barber-pole stripes all over the page, mustache icons, purple-blue gradients, Inter for everything, cards inside cards, icon tiles above every heading, gray text on colored backgrounds.

## Evidence on Hand

- Real photos: promised before launch (cuts, shop, chair), to go in `/photos-raw/`. Until then, use clearly labeled placeholders and no stock photos of other people's work.
- No reviews, ratings, prices, years in business, awards or bios exist yet. Never invent them. Leave visible `TODO:` placeholders.

## Product Principles

1. **Price, availability, proof, book, in that order.** Every screen should get a phone visitor to those answers within a few seconds.
2. **One barber, one relationship.** The site introduces a person, not a franchise.
3. **Real or nothing.** Every fact, review and photo is real; gaps stay visibly marked.
4. **Fast is part of the brand.** A cheap phone on weak 4G should get the full experience.
5. **Local, not generic.** The Conejo Valley should be recognizable in the details.

## Accessibility & Inclusion

WCAG 2.2 AA. Mobile-first. Touch targets of at least 48px for primary actions. Visible `:focus-visible` states, respect for `prefers-reduced-motion`, works without JS, and holds up at 200% zoom.
