# Conejo Barber — website

A fast, static website for Conejo Barber, a barbershop in Thousand Oaks, CA. It's built with
[Astro](https://astro.build) from the MIT-licensed [Chalet](https://github.com/M4xKey/astro-chalet)
theme, which was copied in as a template.

- **Pages:** one page (`/`) with every section, plus a 404 page. Nav links scroll
  smoothly to their section.
- **Design:** the "Price Board" look. Black felt letterboard, peg-white condensed letters,
  receipt-paper sections, and gold used only for Book. See [`DESIGN.md`](DESIGN.md) and
  [`PRODUCT.md`](PRODUCT.md).
- **JavaScript:** about 1 KB in total. It runs the live "Open now · Closes 7pm" line and the
  click-to-load map. Everything else is HTML and CSS.

---

## Setup

You need Node.js 22.12 or newer.

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve dist/ locally
npm run check     # TypeScript + Astro type check (must report 0 errors)
```

---

## Editing the site: `src/config/site.ts`

Every fact, price and piece of copy lives in **one file**: `src/config/site.ts`. The components
contain no business content.

- **`null` means "we don't have this yet".** The site shows a yellow **TODO** chip in its place
  and leaves the field out of Google's structured data. Replace a `null` only with a real fact.
- **Name, address and phone** must match the Google Business Profile exactly, character for
  character, including "Suite" vs "Ste" and the phone format.

### Hours

```ts
hours: {
  Monday: "closed",
  Tuesday: { opens: "09:00", closes: "19:00" },  // 24-hour times
  // ...
  Friday: { opens: "10:00", closes: "01:00" },   // a closing time before the opening time means "after midnight"
},
```

The hero's live status, the hours tables and the structured data all update from this.

### Services and prices

```ts
{ name: "Skin Fade", price: 45, priceFrom: true, minutes: 45,
  description: "One line about the service.", popular: true },
```

- `priceFrom: true` shows the price as "From $45".
- Every service appears in the Services section. The first one with `popular: true` is shown in
  the hero's price line.
- Keep names identical to your booking provider's menu, so people find the same service after
  tapping Book.

### Business details

Booking link, phone, address, map pin (`geo`), Google profile, "write a review" link, real
Google rating (`googleRating: { value: 4.9, count: 123 }`), social links, walk-ins, payment
methods and parking notes all live under `business`.

### Reviews

Paste 3 or 6 real Google reviews word for word, each with the reviewer's first name and the
date. Reviews are displayed on the page only. They're deliberately **not** added to the
structured data, because Google ignores self-hosted reviews on a local business.

### FAQ

Fill in each `answer`. Only answered questions go into the FAQ structured data, so the visible
text and the markup always match.

---

## Adding photos

1. Put the original photos in `photos-raw/` as your archive.
2. Copy the ones you'll use into `src/assets/photos/`. Use JPG, PNG, WebP or AVIF, at least
   1800 px wide for the hero and 1000 px for the others. Give them descriptive file names, e.g.
   `skin-fade-thousand-oaks.jpg`.
3. In `site.ts`, point `photo:` at the file name and write real alt text that describes the
   cut, e.g. `"Mid skin fade with textured top at Conejo Barber, Thousand Oaks"`.
4. Delete any photo files you no longer use.

At build time, Astro converts every photo to AVIF and WebP in several sizes, with explicit
width and height. If a file name in `site.ts` doesn't exist, the build fails with a clear
message rather than shipping a broken image.

Use `hero.photoPosition` (e.g. `"70% 40%"`) to keep the subject of the hero photo visible to
the right of the letterboard on tablets and desktops.

**Share image:** `public/og-image.jpg` (1200×630) is a branded placeholder. Replace it with a
shop photo that has the logo on it, at the same size and file name.

---

## Deploying

The build output is a static folder, `dist/`.

**GitHub Pages (current):** `.github/workflows/deploy.yml` builds and publishes on every push to
`main` (repo Settings → Pages → Source: GitHub Actions). The site is served at
https://ashton14.github.io/EliBarberWebsite/, so `site.ts` has `url: "https://ashton14.github.io"`
and `basePath: "/EliBarberWebsite"`. Write root-absolute links with `withBase()` from
`src/lib/paths.ts` so they keep working under that sub-path. GitHub Pages ignores
`public/_headers`.

For a custom domain later, set `url` to it and `basePath` to `"/"`, add the domain under
Settings → Pages, and point DNS at GitHub.

`public/_headers` sets long-lived caching for the hashed assets on the two hosts below.

**Cloudflare Pages:** Workers & Pages → Create → Pages → connect the Git repo.
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION = 22`

**Netlify:** Add new site → Import from Git.
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variable: `NODE_VERSION = 22`

On any host, `url` + `basePath` in `site.ts` must match the live address: canonical URLs, the
sitemap, `robots.txt`, the share-image URL and the structured data all use them.

**Analytics (optional):** if you want visitor counts, use a privacy-friendly option such as
Cloudflare Web Analytics. Add its snippet with `defer` in `src/layouts/Base.astro`. The site
loads no third-party scripts today.

---

## Dependencies

| Package | Kind | Why it's here |
|---|---|---|
| `astro` | runtime/build | The site generator. Builds static HTML, with no client framework. |
| `@astrojs/sitemap` | build | Generates `sitemap-index.xml` for Google Search Console. |
| `@fontsource/barlow-condensed` | build | Self-hosted heading and letterboard font (600 weight, latin subset WOFF2). No Google Fonts request. |
| `@fontsource/atkinson-hyperlegible` | build | Self-hosted body font (400/700, latin subset WOFF2), chosen for legibility. |
| `schema-dts` | dev (types only) | TypeScript types for schema.org, so structured-data mistakes fail `npm run check`. Ships nothing to visitors. |
| `@astrojs/check`, `typescript` | dev | `npm run check`: strict type checking of `.astro` and `.ts` files. |

`sharp`, which does the image conversion, comes with Astro and is not a direct dependency. The
lockfile (`package-lock.json`) is committed.

---

## Quality checks (run before each launch)

- `npm run build`: no warnings. It **fails** if a page title is longer than 60 characters or a
  description longer than 155.
- `npm run check`: 0 errors.
- `npx impeccable detect src/`: 0 findings.
- Lighthouse (mobile) on every page, and the Google tests in the launch checklist below.

---

## Launch checklist

1. **Fill in the facts.** Search `site.ts` for `TODO` and replace every `null` you can. Then
   check the built site has none left: `grep -r "TODO:" dist`.
2. **Real photos** in, and the placeholders and placeholder share image replaced.
3. **Domain:** set `url` and `basePath` in `site.ts`, rebuild, and connect the domain to the
   host (HTTPS is automatic).
4. **Google Search Console:** verify the domain and submit `https://<your-domain>/sitemap-index.xml`.
5. **Google Business Profile:** add the website URL and the booking link (Appointment URL).
   Make sure the name, address and phone match the site exactly.
6. **Same name, address and phone everywhere:** Apple Business Connect, Bing Places, Yelp and
   Facebook. Every listing should be identical, character for character.
7. **Reviews:** make a QR code for the Google "write a review" link and put it at the chair or
   checkout. Add the same link to `reviewUrl` (it shows in the footer).
8. **Structured data:** after deploying, test the home page in Google's
   [Rich Results Test](https://search.google.com/test/rich-results) and the
   [Schema Markup Validator](https://validator.schema.org/).
9. **Lighthouse on the live URL**, mobile, every page. Re-check after real photos are added.
