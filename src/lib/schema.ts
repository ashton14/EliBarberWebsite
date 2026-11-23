// JSON-LD structured data, generated from site.ts as ONE connected @graph.
// Typed with schema-dts so a wrong property or type fails `astro check`.
//
// Rules:
//  - Unknown facts (null in site.ts) are left OUT, never guessed.
//  - No aggregateRating / review markup: Google treats self-hosted reviews
//    on a LocalBusiness as self-serving and won't show them.
//  - The FAQPage contains only answered questions, word for word as shown.
import type {
  BreadcrumbList,
  DayOfWeek,
  FAQPage,
  HairSalon,
  Offer,
  OpeningHoursSpecification,
  Organization,
  Thing,
  WebPage,
  WebSite,
} from "schema-dts";
import { DAYS, SITE } from "../config/site";
import { addressLine, directionsUrl } from "./format";
import { absUrl, withBase } from "./paths";

const base = `${SITE.url}${withBase("/").replace(/\/$/, "")}`;
export const IDS = {
  website: `${base}/#website`,
  organization: `${base}/#organization`,
  business: `${base}/#business`,
  logo: `${base}/#logo`,
};

const abs = (path: string) => absUrl(path);
const ref = (id: string) => ({ "@id": id });

/** Drop null/undefined/empty-array fields so unknown facts never appear. */
function clean<T>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj as object).filter(([, v]) => v !== null && v !== undefined && !(Array.isArray(v) && v.length === 0)),
  ) as T;
}

function sameAs(): string[] {
  const b = SITE.business;
  return [b.googleProfileUrl, b.social.instagram, b.social.tiktok, b.social.facebook, b.social.yelp, b.bookingUrl].filter(
    (u): u is string => typeof u === "string",
  );
}

function openingHours(): OpeningHoursSpecification[] {
  return DAYS.flatMap((day) => {
    const h = SITE.hours[day];
    if (h === null || h === "closed") return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}` as DayOfWeek,
        opens: h.opens,
        closes: h.closes,
      },
    ];
  });
}

function offers(): Offer[] {
  return SITE.services.items.map((s) =>
    clean<Offer>({
      "@type": "Offer",
      itemOffered: clean({
        "@type": "Service" as const,
        name: s.name,
        description: s.description ?? undefined,
      }),
      price: s.price ?? undefined,
      priceCurrency: s.price !== null ? "USD" : undefined,
      priceSpecification:
        s.price !== null && s.priceFrom
          ? { "@type": "PriceSpecification", minPrice: s.price, priceCurrency: "USD" }
          : undefined,
    }),
  );
}

function business(): HairSalon {
  const b = SITE.business;
  const a = b.address;
  return clean<HairSalon>({
    "@type": "HairSalon", // closest schema.org type for a barbershop
    "@id": IDS.business,
    name: SITE.name,
    description: SITE.description,
    url: `${base}/`,
    telephone: b.phone ?? undefined,
    email: b.email ?? undefined,
    image: abs("/og-image.jpg"),
    logo: ref(IDS.logo),
    priceRange: b.priceRange ?? undefined,
    address: clean({
      "@type": "PostalAddress" as const,
      streetAddress: a.street ?? undefined,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode ?? undefined,
      addressCountry: a.country,
    }),
    geo: b.geo ? { "@type": "GeoCoordinates", latitude: b.geo.latitude, longitude: b.geo.longitude } : undefined,
    hasMap: b.googleProfileUrl ?? directionsUrl() ?? undefined,
    openingHoursSpecification: openingHours(),
    areaServed: b.areasServed.map((name) => ({ "@type": "City" as const, name: `${name}, ${a.region}` })),
    sameAs: sameAs(),
    parentOrganization: ref(IDS.organization),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: SITE.services.title,
      itemListElement: offers(),
    },
    potentialAction: b.bookingUrl
      ? {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: b.bookingUrl,
            actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
          },
          result: { "@type": "Reservation", name: `Appointment at ${SITE.name}` },
        }
      : undefined,
  });
}

function organization(): Organization {
  return clean<Organization>({
    "@type": "Organization",
    "@id": IDS.organization,
    name: SITE.name,
    url: `${base}/`,
    logo: {
      "@type": "ImageObject",
      "@id": IDS.logo,
      url: abs("/icon-512.png"),
      width: "512",
      height: "512",
      caption: SITE.name,
    },
    sameAs: sameAs(),
  });
}

function website(): WebSite {
  return {
    "@type": "WebSite",
    "@id": IDS.website,
    url: `${base}/`,
    name: SITE.name,
    inLanguage: SITE.lang,
    publisher: ref(IDS.organization),
  };
}

function faqPage(pageUrl: string): FAQPage | null {
  const answered = SITE.faq.items.filter((i) => i.answer !== null);
  if (answered.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: answered.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer ?? "" },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export interface PageSchemaInput {
  path: string;
  title: string;
  description: string;
  /** Inner pages: [Home, This page] */
  breadcrumbs?: Crumb[];
  /** Home page only */
  withFaq?: boolean;
}

/** The full @graph for one page. */
export function pageGraph(input: PageSchemaInput): { "@context": "https://schema.org"; "@graph": Thing[] } {
  const pageUrl = abs(input.path);
  const graph: Thing[] = [website(), organization(), business()];

  const breadcrumb: BreadcrumbList | null = input.breadcrumbs
    ? {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: input.breadcrumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: abs(c.path),
        })),
      }
    : null;

  const page: WebPage = clean<WebPage>({
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.title,
    description: input.description,
    inLanguage: SITE.lang,
    isPartOf: ref(IDS.website),
    about: ref(IDS.business),
    breadcrumb: breadcrumb ? ref(`${pageUrl}#breadcrumb`) : undefined,
  });
  graph.push(page);
  if (breadcrumb) graph.push(breadcrumb);

  if (input.withFaq) {
    const faq = faqPage(pageUrl);
    if (faq) graph.push(faq);
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

/** Exposed for the README/launch checks: which facts are still missing from the schema. */
export function schemaGaps(): string[] {
  const b = SITE.business;
  const gaps: string[] = [];
  if (!b.phone) gaps.push("telephone");
  if (!addressLine()) gaps.push("streetAddress/postalCode");
  if (!b.geo) gaps.push("geo");
  if (!b.bookingUrl) gaps.push("ReserveAction (booking URL)");
  if (!b.priceRange) gaps.push("priceRange");
  if (openingHours().length === 0) gaps.push("openingHoursSpecification");
  if (sameAs().length === 0) gaps.push("sameAs");
  if (SITE.services.items.every((s) => s.price === null)) gaps.push("Offer prices");
  return gaps;
}
