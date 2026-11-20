---
name: Conejo Barber
description: A one-chair barbershop site set like the shop's own black felt letterboard, with gold kept for Book.
colors:
  felt: "#141312"
  felt-raised: "#24221f"
  felt-groove: "#1c1b19"
  felt-line: "#3a3733"
  peg: "#f2efe8"
  peg-muted: "#a8a296"
  peg-faint: "rgb(242 239 232 / 0.35)"
  peg-line: "rgb(242 239 232 / 0.55)"
  peg-wash: "rgb(242 239 232 / 0.08)"
  gold: "#d6a84e"
  gold-hover: "#e7c27a"
  on-gold: "#141312"
  paper: "#f3f1ec"
  paper-alt: "#ebe7de"
  ink: "#1b1a18"
  ink-muted: "#5f5a52"
  gold-ink: "#7d5f17"
  paper-line: "#d9d4c9"
  todo-bg: "#fff3c4"
  todo-ink: "#5c4400"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif"
    fontSize: "clamp(2.75rem, 1.9rem + 4.4vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "0.045em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif"
    fontSize: "clamp(2.25rem, 1.8rem + 2.2vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif"
    fontSize: "clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0.01em"
  board-item:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 1.2vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.045em"
    fontFeature: "tnum, lnum"
  board-line:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.5rem)"
    fontWeight: 600
    letterSpacing: "0.045em"
    fontFeature: "tnum, lnum"
  body-lg:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    letterSpacing: "0.045em"
  button:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.045em"
rounded:
  hint: "2px"
  sm: "4px"
spacing:
  "1": "0.5rem"
  "2": "1rem"
  "3": "1.5rem"
  "4": "2.5rem"
  "5": "4rem"
  section: "clamp(4rem, 3rem + 5vw, 7.5rem)"
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
  frame: "clamp(8px, 0.4rem + 0.5vw, 14px)"
  tap: "48px"
components:
  button-book:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.on-gold}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.4rem"
    height: "48px"
  button-book-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.on-gold}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.peg}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.4rem"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.peg-wash}"
    textColor: "{colors.peg}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.4rem"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  letterboard:
    backgroundColor: "{colors.felt}"
    textColor: "{colors.peg}"
    rounded: "{rounded.sm}"
    padding: "clamp(1rem, 0.6rem + 2vw, 2.5rem) clamp(1rem, 0.5rem + 2.5vw, 3rem)"
  service-board:
    backgroundColor: "{colors.felt}"
    textColor: "{colors.peg}"
    rounded: "{rounded.sm}"
    width: "46rem"
  page-intro:
    backgroundColor: "{colors.felt}"
    textColor: "{colors.peg}"
    padding: "2.5rem 0 4rem"
  receipt-slip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "{spacing.3}"
  nav-link:
    textColor: "{colors.peg-muted}"
    typography: "{typography.label}"
    height: "48px"
  action-bar-book:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.on-gold}"
    height: "64px"
  todo-chip:
    backgroundColor: "{colors.todo-bg}"
    textColor: "{colors.todo-ink}"
    rounded: "{rounded.hint}"
    padding: "0.2em 0.5em"
---

# Design System: Conejo Barber

## Overview

**Creative North Star: "The Price Board"**

The site is the shop's black felt letterboard. Facts a customer needs before sitting in the chair (open status, prices, durations, hours, the closing call to book) are set as peg-white condensed capitals on ribbed black felt, inside square-cornered frames. Everything conversational (reviews, the barber, FAQs, location) sits on warm receipt paper in plain ink. Photos carry the promise of the cut; the board carries the facts.

The palette is black and gold. Felt and paper do almost all the work; gold appears only where the visitor can book, and when the shop is open right now. Density is low and phone-first: one column on phones, generous section rhythm, large tap targets, and a sticky Book | Call | Directions bar under the thumb. Depth is physical rather than digital: boards cast a heavy drop shadow and an inset shade, peg letters sit slightly proud of the felt, receipt slips lift a little off the page.

The world rejects the moody vintage barbershop (pole stripes, script gold serifs) and the white spa-salon.

**Key Characteristics:**
- Ribbed black felt (a 7px repeating horizontal groove) for every dark surface.
- Peg letters: Barlow Condensed 600, uppercase, tracked 0.045em, tabular lining figures, a two-layer text shadow.
- Receipt-paper light sections in two alternating tones, ink text, hairline rules.
- One gold, reserved for Book and the open state; a darker bronze carries gold-family text on paper.
- Dotted leaders tie each service name to its price.
- Atkinson Hyperlegible for every sentence of body copy.

## Colors

Two materials, felt and paper, each with its own text pair, plus one gold that only means "book" or "open". Every ratio below is recorded in `src/styles/tokens.css`.

### Primary
- **Book Gold** (`gold`): Book buttons (header, hero, services, barber, reviews, closing banner), the gold cell of the mobile action bar, the open-now status line and its dot, the focus ring on felt, the text-selection highlight, and the underline under the current nav item (the active state). 8.5:1 on felt, 7.2:1 on raised felt.
- **Lamplit Gold** (`gold-hover`): hover state for Book and for peg links on felt (a hover is an active state). 11:1 on felt.
- **Felt Black on Gold** (`on-gold`): the label on every gold surface. 8.5:1.

### Secondary
- **Bronze Ink** (`gold-ink`): the gold family translated onto paper. Body links, text links ("Full menu →"), the barber's role line, FAQ summary hover, the focus ring and `accent-color` on paper. 5.3:1 on paper, 4.8:1 on alternate paper.

### Neutral
- **Ribbed Felt** (`felt`): page frame for the header, hero, trust strip base, closing banner, footer, action bar, and every letterboard face.
- **Raised Felt** (`felt-raised`): letterboard frames, the trust strip band, the map facade, and the backing color behind photos while they load.
- **Felt Groove** (`felt-groove`): only inside the felt texture, as the 2px groove line.
- **Felt Hairline** (`felt-line`): borders and dividers on felt (header bottom rule, action-bar dividers, trust-strip rules).
- **Peg White** (`peg`): letters on felt. 16.2:1 on felt, 13.8:1 on raised felt.
- **Faded Peg** (`peg-muted`): secondary text on felt (lede, section intros, service descriptions, inactive nav, breadcrumbs, the closed-status dot, the hero photo caption) and the label color baked into placeholder photos. 7.3:1 on felt, 6.3:1 on raised felt.
- **Peg Dust** (`peg-faint`, peg at 35%): dotted price leaders only. Decorative, never text.
- **Peg Chalk Line** (`peg-line`, peg at 55%): the ghost button border on felt, clearing 3:1 non-text contrast.
- **Peg Wash** (`peg-wash`, peg at 8%): the ghost button hover fill.
- **Receipt Paper** (`paper`): the default page background and the face of review slips.
- **Older Receipt** (`paper-alt`): alternating light sections (gallery, reviews, FAQ, practical info alternate).
- **Ink** (`ink`): body text on paper. 15.4:1 on paper, 14.1:1 on alternate paper.
- **Faded Ink** (`ink-muted`): secondary text on paper (intros, FAQ answers, specialty line, captions, closed days). 6.1:1.
- **Paper Hairline** (`paper-line`): rules between hours rows and FAQ items, perforated slip edges, unlit stars.

### Status
- **Sticky-Note Yellow** (`todo-bg`) with **Sticky-Note Ink** (`todo-ink`, 8.3:1): visible placeholders for facts the owner has not supplied. Development scaffolding only; never a finished-content color.

### Named Rules
**The One Gold Rule.** Gold (`gold`) means "book" or "open now", plus the active-state signals that point at them (focus ring on felt, current nav underline, hover on felt links). It never decorates a heading, an icon, a border, or a background panel. On phones the header Book is hidden so the action bar's gold cell is the only gold button in view.

**The Bronze Translation Rule.** Gold text never sits on paper; on paper the gold family is `gold-ink`. Gold on paper fails contrast.

**The Role Pair Rule.** Text colors come in pairs with their surface: peg / peg-muted on felt, ink / ink-muted on paper, on-gold on gold. Never cross a pair onto the other material.

**The No Raw Color Rule.** Every color, including a translucent one, is a role token in `tokens.css`. A tint of peg is `peg-faint`, `peg-line`, or `peg-wash`, never an inline `rgb()`. Shadows are the only raw colors, and they are black or ink.

## Typography

**Display Font:** Barlow Condensed 600 (with Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif)
**Body Font:** Atkinson Hyperlegible 400 and 700 (with system-ui, -apple-system, Segoe UI, Roboto, sans-serif)

**Character:** Narrow, upright sign-shop capitals for facts and headings; a deliberately legible humanist sans for anything read as sentences. The condensed face is the letterboard; the body face is the person behind the chair talking. Both are self-hosted woff2 (latin subset) with `font-display: swap`.

### Hierarchy
- **Display** (600, `clamp(2.75rem, 1.9rem + 4.4vw, 5.25rem)`, line-height 0.98, peg tracking): the hero H1, set as peg letters on the hero board. Balanced wrapping.
- **Headline** (600, `clamp(2.25rem, 1.8rem + 2.2vw, 3.5rem)`, 1.02): section H2s, uppercase, no tracking, on both paper and felt.
- **Title** (600, `clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem)`, 1.02, 0.01em): H3s such as the barber's name.
- **Board Item** (600, `clamp(1.375rem, 1.1rem + 1.2vw, 2rem)`, 1.1, peg tracking, tabular figures): a service line on the service board, name and price.
- **Board Line** (600, `clamp(1.125rem, 1rem + 0.6vw, 1.5rem)`, peg tracking): single letterboard lines: open status, trust strip, rating board.
- **Body Large** (400, `clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)`, 1.5): hero lede, section intros, review quotes, FAQ questions (at 700).
- **Body** (400, 1.0625rem, 1.6): running copy, capped at 65ch with `text-wrap: pretty`.
- **Body Small** (400, 0.9375rem): service descriptions, compact footer hours.
- **Label** (600, 1.0625–1.125rem, peg tracking, uppercase): nav links, review bylines, service times, the barber's role line.
- **Button** (600, 1.25rem, line-height 1, peg tracking, uppercase): every button and the action bar (fluid 1rem–1.1875rem there).

### Named Rules
**The Peg Letter Rule.** Condensed caps are for facts and headings only, always uppercase, always 600, tracked 0.045em when set as a board line. Sentences are never set in Barlow Condensed.

**The Straight Column Rule.** Prices, times, and hours use tabular lining figures so they read down a column.

## Layout

A single centered container, max 74rem, with a fluid gutter (`clamp(1rem, 0.6rem + 2vw, 2.5rem)`). Sections stack full-bleed with a fluid vertical rhythm (`clamp(4rem, 3rem + 5vw, 7.5rem)`), alternating paper and older-receipt backgrounds, broken by felt bands (hero, trust strip, closing banner, footer). The spacing scale is one rhythm: 0.5, 1, 1.5, 2.5, 4rem.

Mobile-first. Breakpoints observed: 26rem and below (narrow phones: the hero board compacts), 40rem (gallery to three columns, trust strip to one centered row), 48rem (sticky header with Book, action bar hidden, full-bleed hero, reviews to two columns), 64rem (reviews to three columns, FAQ and similar sections to a 1 : 1.6 heading/content split). The single-barber card uses a container query at 44rem to put the portrait beside the text.

- **Hero:** phones show the photo at 3:2, capped at 30svh so the board stays in view on short screens, with the board pulled up over its lower edge (negative margin, `clamp(-4rem, -10vw, -2.5rem)`). At 26rem and below the board gives up room instead of the photo (1.1rem padding, 0.75rem gap, a 2.25rem H1, base-size lede, a -3.5rem pull-up) so both hero buttons clear the action bar. From 48rem the layout sets the height (`min(86svh, 54rem)`), never the photo's own shape: the photo is absolutely positioned to cover the box, its focal point comes from the site config (`--hero-focus`, default 70% 40%) so the subject clears the board, and the board (max 40rem) hangs at the lower left. Book stays above the fold at 1366×768.
- **Header:** phones show wordmark then a full-width row of nav links (no menu button, no JavaScript) and no Book button; the header scrolls away and the action bar owns Book. From 48rem it becomes one sticky row: wordmark, right-aligned nav, compact Book.
- **Inner pages** (services, barbers, visit, privacy) open with a felt page-intro band and close with cross-links on paper, then the closing banner.
- **Board width:** a letterboard stays narrow so the eye does not travel far from a name to its price. The service board caps at 46rem on home and 52rem on the services page, left-aligned, with its actions in a wrapping row directly under it.
- **Action bar:** phones only, fixed to the bottom, 64px plus the safe-area inset, three cells at 1.2 : 1 : 1 with Book first. The body reserves equal bottom padding.
- **Touch:** every interactive target is at least 48px tall (44px for the compact header Book and the status link).
- Anchors clear the sticky header with 5rem scroll padding.

## Elevation & Depth

Depth is physical. The letterboard is a real object hung on the page, so it carries the heaviest shadow; receipt slips lift slightly; everything else is flat and separated by tone and hairlines.

### Shadow Vocabulary
- **Board drop** (`0 18px 40px -12px rgb(0 0 0 / 0.55), 0 2px 6px rgb(0 0 0 / 0.35)`): every letterboard, combined with an inset shade `inset 0 2px 10px rgb(0 0 0 / 0.6)` so the felt sits recessed inside its frame.
- **Paper lift** (`0 10px 24px -14px rgb(27 26 24 / 0.35)`): review slips.
- **Book lift** (`0 4px 10px -4px rgb(0 0 0 / 0.45)`): the gold Book button only. A neutral drop shadow; it never glows gold.
- **Bar lift** (`0 -8px 24px -12px rgb(0 0 0 / 0.6)`): the mobile action bar, cast upward.
- **Peg relief** (`text-shadow: 0 1px 0 rgb(0 0 0 / 0.65), 0 2px 3px rgb(0 0 0 / 0.35)`): peg letters on felt.

### Named Rules
**The Hung Object Rule.** Only letterboards get the board drop. Paper sections, cards, and photos stay flat; a shadow means a physical object.

## Shapes

Square-cornered with a hint of softness: 4px on boards, buttons, photos, and the map facade; 2px on TODO chips and the focus ring. The letterboard frame is a thick solid border of raised felt (`clamp(8px, 0.4rem + 0.5vw, 14px)`). Receipt slips are square on top with a 2px dashed perforation and rounded only at the bottom corners. Felt carries a repeating horizontal rib (5px felt, 2px groove). Photos crop to 4:5 in the gallery and barber portrait, 3:2 for the phone hero. The only circle is the 0.6rem status dot.

## Components

### Buttons
Signage-plain and tactile: condensed caps on a solid block.
- **Shape:** gently squared (4px), 2px border, min height 48px, padding 0.7rem 1.4rem, optional 20px line icon with 0.55em gap.
- **Book (primary):** gold face, felt-black label, Book lift shadow. The only filled button. Hover moves to lamplit gold.
- **Ghost (secondary on felt):** transparent, peg label, `peg-line` border; hover makes the border solid peg and fills with `peg-wash`. Used for Call on the hero board and the map facade's load button.
- **Outline (secondary on paper):** transparent, ink label and border; hover fills ink with paper text.
- **Disabled:** `aria-disabled="true"` drops to 60% opacity with a not-allowed cursor.
- **Transitions:** background, color, border, shadow at 220ms with `cubic-bezier(0.16, 1, 0.3, 1)`.

### Text Links
- **Body links:** bronze on paper, 1px underline offset 0.2em, hover to ink. On felt: peg, hover to lamplit gold.
- **Action text links** ("Full menu →", "Read all reviews →"): 700 weight, bronze, on paper only, 48px tall, with a drawn SVG arrow that slides 3px right on hover.
- **Cross-links:** at the foot of each inner page, a wrapping row of action text links to the other pages (the current one skipped), under a paper-hairline rule, 2.5rem vertical padding.

### Letterboard (signature component)
A framed felt panel: felt texture face, raised-felt frame, 4px corners, board drop plus inset shade, peg letters inside. Used for the hero board, the service board, and the single-line rating board.
- **Hero board:** open status, H1, lede (max 34ch), an optional price line, then Book + Call. The price line is a board line with a `peg-faint` dotted leader linking to the menu; it renders only when a real price exists, never as a placeholder.
- **Service board:** one line per service: name, a flexible dotted leader (3px dotted `peg-faint`), price in tabular figures, aligned on the last baseline. Under it, description left in faded peg body-small and time right in peg label caps, so price and time form one right-hand column ("$40 / 30 MIN").
- **Open status:** a board line with a dot. Closed: peg text, faded dot. Open: the whole line and dot turn gold. Text is shop-time aware and re-evaluated every 60 seconds.

### Page Intro
The inner-page header: a felt band with a felt-hairline bottom rule, 2.5rem top and 4rem bottom padding. A breadcrumb in faded peg body-small (slash separators, 44px targets, hover to peg), the page's single H1 in peg letters (max 18ch), and an optional one-line intro in faded peg body-large.

### Hero Photo Caption
While the hero photo is still a placeholder, a real HTML caption sits at its top right in faded peg board-line caps (hidden from assistive tech), so the label stays crisp at any crop. Placeholder rasters themselves are raised-felt grey with faded-peg labels, never gold.

### Receipt Slips (cards)
- **Background:** receipt paper on an older-receipt section.
- **Edge:** 2px dashed paper-hairline top perforation, bottom corners 4px.
- **Shadow:** paper lift.
- **Padding:** 1.5rem.
- **Content:** filled ink stars (unlit stars in paper hairline), the quote at body-large with hanging curly quotes, a byline in faded-ink label caps.
- **Section:** an optional single-line rating board above the slips (only with a real rating), slips in one, two, then up to three columns, and a row underneath with Book as the primary action and "Read all reviews →" beside it.

### Navigation
- **Header:** felt band with a hairline bottom rule. Nav links are label caps in faded peg, 48px tall; hover and current page go peg, current page adds a 2px gold underline offset 0.35em.
- **Mobile action bar:** felt band, three cells divided by felt hairlines, label caps with 22px line icons; the Book cell is solid gold with felt-black text. Focus ring is inset (-4px) inside each cell.

### Hours Table
A real table in tabular figures: day names at 700 left, hours right-aligned, paper-hairline rules between rows, closed days in faded ink. The compact variant (footer) drops the rules and uses body-small.

### FAQ
Native disclosure rows between paper hairlines, max 50rem: 700 body-large question, a drawn plus that rotates 45° to a cross when open (220ms), answer in faded ink.

### TODO Placeholders
Development scaffolding that keeps missing facts visible until the owner fills them, so a build can never quietly ship a guessed fact.
- **Chip:** inline sticky-note yellow, sticky-note ink (8.3:1), Atkinson 700 at 0.85em, padding 0.2em 0.5em, no caps, no tracking, no text shadow (it resets peg styling inside boards), 2px corners, text always begins "TODO:". Inside a service line it is held at body-small so placeholders do not distort the board.
- **Block:** the same colors as a block with a 1px dashed ink border, 1rem × 1.5rem padding, max 65ch.
- **Unresolved link:** any link whose destination is still TODO carries a `data-todo` attribute and a 2px dashed sticky-note-yellow outline offset 3px.

### Focus and Motion
- **Focus:** 3px solid outline offset 3px; bronze on paper, gold on felt.
- **Motion:** one duration (220ms) and one ease-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`), used only for state changes: button color, link arrow nudge, FAQ plus rotation. No entrance or scroll animation. `prefers-reduced-motion: reduce` collapses all transitions and animations to 0.01ms.
- **The one delight:** on hover-capable devices, a gallery photo slowly pushes in (scale 1.06 with a slight contrast 1.06 / saturate 1.05 lift, 900ms on the same ease-out curve), like leaning closer to the mirror to check the fade. Gated on `(hover: hover)` and `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

### Do:
- **Do** set every fact (status, price, time, hours, rating) as peg letters on ribbed felt inside a framed board.
- **Do** use `gold` only for Book and the open state, with `on-gold` text on it (8.5:1).
- **Do** use `gold-ink` whenever gold-family text lands on paper (5.3:1 on paper).
- **Do** pair a service name to its price with a dotted leader and tabular lining figures.
- **Do** keep sentences in Atkinson Hyperlegible, capped at 65ch.
- **Do** keep every tap target at least 48px and keep Book reachable in the first viewport and in the phone action bar.
- **Do** keep missing facts visible as "TODO:" chips or blocks rather than inventing them.
- **Do** reference colors only through the role tokens in `tokens.css`, including the translucent peg tints.

### Don't:
- **Don't** put gold on headings, icons, borders, decorative panels, or paper-section text.
- **Don't** set body sentences in Barlow Condensed, or set Barlow Condensed in lowercase.
- **Don't** give paper sections or photos the board drop shadow; only hung boards cast it.
- **Don't** reach for barber poles, stripes, or script gold serifs; the world rejects the vintage-barbershop costume.
- **Don't** go white-and-airy spa-salon; light sections are warm receipt paper with ink.
- **Don't** add entrance or scroll-triggered animation; motion is state feedback plus the single gallery push-in.
- **Don't** give the Book button a gold glow; its lift is a neutral drop shadow.
- **Don't** use sticky-note yellow for anything except TODO placeholders.
