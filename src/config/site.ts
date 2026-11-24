// ============================================================================
// SITE CONFIG — the ONE file to edit. Every fact on the site lives here.
// ============================================================================
// Rules:
//  - `null` means "we don't have this fact yet". Components show a visible
//    TODO marker in its place, and the JSON-LD leaves the field out. Never
//    replace a null with a guess: only real facts from the owner.
//  - Name, address and phone must match the Google Business Profile
//    character for character.
//  - Photos: drop files in src/assets/photos/ and reference them by file
//    name (see `photo` fields below). See README → "Adding photos".
//
// This file is also imported by astro.config.ts (for the domain), so it must
// stay plain data: no image or component imports here.

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type DayName =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

/** Hours for one day. `null` = not known yet (TODO). Times are 24h "HH:MM". */
export type DayHours = { opens: string; closes: string } | "closed" | null;

export interface Service {
  name: string;
  /** Price in US dollars, e.g. 40. `null` = TODO. */
  price: number | null;
  /** true renders "From $40" (price varies). Optional. */
  priceFrom?: boolean;
  /** Duration in minutes. `null` = TODO.
   *  Keep names identical to the booking provider's menu so visitors can
   *  find the same service after tapping Book. */
  minutes: number | null;
  /** One line. `null` = TODO. */
  description: string | null;
  /** The hero price line uses the first popular service. */
  popular: boolean;
}

export interface Barber {
  name: string | null;
  role: string;
  specialty: string | null;
  bio: string | null;
  /** File name in src/assets/photos/. `null` = no portrait (section shows text only). */
  photo: string | null;
  photoAlt: string | null;
  instagram: string | null;
  /** Direct contact, shown under "Contact" in the Barber section. E.164 phone. */
  contact: { phone: string | null; phoneDisplay: string | null; email: string | null };
  /** Personal booking link; falls back to the shop booking URL. */
  bookingUrl: string | null;
}

export interface GalleryPhoto {
  /** File name in src/assets/photos/ */
  photo: string;
  /** Describe the cut, e.g. "Mid skin fade with textured top at Conejo Barber, Thousand Oaks" */
  alt: string;
}

export interface Review {
  /** Reviewer first name (or first name + initial) exactly as on Google */
  author: string;
  /** e.g. "2026-03-14" */
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Word for word from the source. Do not edit. */
  text: string;
  /** Where the review was posted. Defaults to ui.reviewSource ("Google"). */
  source?: string;
}

export interface FaqItem {
  question: string;
  /** `null` = TODO. Unanswered questions are hidden from the FAQ schema. */
  answer: string | null;
}

export interface SiteConfig {
  /** Origin only, no path or trailing slash, e.g. "https://conejobarber.com" */
  url: string;
  /** Sub-path the site is served from: "/" at a domain root,
   *  "/EliBarberWebsite" on GitHub Pages (https://<user>.github.io/<repo>/). */
  basePath: string;
  lang: string;
  ogLocale: string;
  name: string;
  /** Short business description (structured data, default meta) */
  description: string;
  /** Per-page <title> (≤60 chars) and meta description (≤155 chars).
   *  The build fails if either is too long. */
  pages: Record<"home" | "notFound", { title: string; description: string }>;
  business: {
    /** E.164, e.g. "+18055550123" */
    phone: string | null;
    /** Exactly as shown on the Google profile, e.g. "(805) 555-0123" */
    phoneDisplay: string | null;
    email: string | null;
    address: {
      street: string | null;
      city: string;
      region: string;
      postalCode: string | null;
      country: string;
    };
    geo: { latitude: number; longitude: number } | null;
    bookingUrl: string | null;
    googleProfileUrl: string | null;
    /** "Write a review" link (any site: Google, Yelp…). */
    reviewUrl: string | null;
    /** Real numbers from the Google profile only. */
    googleRating: { value: number; count: number } | null;
    social: {
      instagram: string | null;
      tiktok: string | null;
      facebook: string | null;
      yelp: string | null;
    };
    walkIns: boolean | null;
    payment: string[] | null;
    parking: string | null;
    /** e.g. "$$" */
    priceRange: string | null;
    areasServed: string[];
    timeZone: string;
  };
  hours: Record<DayName, DayHours>;
  hero: {
    title: string;
    lede: string;
    photo: string;
    photoAlt: string;
    /** CSS object-position for the hero photo on tablet/desktop, so the
     *  subject sits clear of the board (which hangs on the left). */
    photoPosition: string;
  };
  services: { title: string; intro: string; items: Service[] };
  gallery: { title: string; intro: string; photos: GalleryPhoto[] };
  barbers: { title: string; contactTitle: string; items: Barber[] };
  reviews: { title: string; items: Review[] };
  about: { title: string; paragraphs: string[] | null };
  faq: { title: string; items: FaqItem[] };
  info: { title: string };
  ctaBanner: { title: string; text: string };
  navigation: { label: string; href: string; anchor: string }[];
  ui: Record<UiKey, string>;
}

type UiKey =
  | "skipToContent"
  | "primaryNav"
  | "book"
  | "bookNow"
  | "call"
  | "directions"
  | "openNow"
  | "closedNow"
  | "closesAt"
  | "opensAt"
  | "closedToday"
  | "today"
  | "hoursTitle"
  | "hoursSeeAll"
  | "closed"
  | "addressTitle"
  | "areasServedTitle"
  | "loadMap"
  | "mapPrivacyNote"
  | "mapTitle"
  | "googleRatingSuffix"
  | "walkInsWelcome"
  | "appointmentsOnly"
  | "readAllReviews"
  | "leaveReview"
  | "bookWith"
  | "minutesShort"
  | "followUs"
  | "allRightsReserved"
  | "quickActions"
  | "moreFrom"
  | "priceFrom"
  | "reviewSource"
  | "reviewsBoard"
  | "atAGlance"
  | "reviewsCount"
  | "ratingOutOf"
  | "notFoundTitle"
  | "notFoundText"
  | "notFoundHome";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
export const SITE: SiteConfig = {
  // GitHub Pages for now. With a custom domain: url "https://conejobarber.com", basePath "/".
  url: "https://ashton14.github.io",
  basePath: "/EliBarberWebsite",
  lang: "en-US",
  ogLocale: "en_US",
  name: "Conejo Barber",
  description:
    "Sharp cuts, clean fades and beard trims in Thousand Oaks, CA. See prices and hours, then book online.",
  pages: {
    home: {
      title: "Conejo Barber | Barbershop in Thousand Oaks, CA",
      description:
        "Sharp cuts, clean fades and beard trims in Thousand Oaks, CA. See prices and hours, then book your next cut online.",
    },
    notFound: {
      title: "Page Not Found | Conejo Barber",
      description: "This page doesn't exist. Book a cut, call the shop, or head back to the Conejo Barber home page.",
    },
  },

  business: {
    phone: "+18054379996",
    // TODO: confirm this matches the Google profile exactly
    phoneDisplay: "(805) 437-9996",
    email: "info@conejovalleybarber.com", // from conejovalleybarber.com
    address: {
      // TODO: confirm capitalization matches the Google profile (owner wrote "60 Houston DR")
      street: "60 Houston Dr",
      city: "Thousand Oaks",
      region: "CA",
      postalCode: "91360",
      country: "US",
    },
    geo: null, // TODO: { latitude: 34.17, longitude: -118.84 } copied from the Maps pin
    bookingUrl: "https://book.heygoldie.com/Barber-7f8963f4ef15", // Goldie
    googleProfileUrl: null, // TODO
    reviewUrl: "https://www.yelp.com/writeareview/biz/ECf63iCCzZQKRM_Uj-c69Q",
    googleRating: null, // optional: { value: 4.9, count: 123 }, real numbers only; hidden while null
    social: {
      instagram: null, // TODO
      tiktok: null, // TODO
      facebook: null, // TODO
      yelp: null, // TODO
    },
    walkIns: true,
    payment: null, // TODO: owner wrote "Via" — ask which payments he takes
    parking: null, // TODO: parking, landmarks, directions notes
    priceRange: null, // TODO: owner wrote "S" — ask if he meant "$" or "$$"
    areasServed: [
      "Thousand Oaks",
      "Newbury Park",
      "Westlake Village",
      "Agoura Hills",
      "Oak Park",
      "Moorpark",
    ],
    timeZone: "America/Los_Angeles",
  },

  hours: {
    Monday: { opens: "10:00", closes: "18:00" },
    Tuesday: { opens: "10:00", closes: "18:00" },
    Wednesday: { opens: "10:00", closes: "18:00" },
    Thursday: { opens: "10:00", closes: "18:00" },
    Friday: { opens: "10:00", closes: "18:00" },
    Saturday: "closed",
    Sunday: "closed",
  },

  hero: {
    title: "Sharp Cuts & Clean Fades in Thousand Oaks",
    lede: "Haircuts, fades and straight razor shaves. Book your chair online.",
    photo: "mid-fade-slick-side-part.jpg",
    photoAlt: "Mid skin fade with a slicked-back side part, seen in profile, at Conejo Barber in Thousand Oaks",
    photoPosition: "50% 30%",
  },

  services: {
    title: "Services & prices",
    intro: "What it costs and how long it takes, before you book.",
    // Bookable services: names, prices and times copied from the Goldie booking
    // page (keep names identical so visitors find them after tapping Book).
    // Descriptions are based on conejovalleybarber.com.
    items: [
      { name: "Haircut", price: 45, minutes: 40, description: "Men's haircut in the style you want, from classic cuts to fades.", popular: true },
      { name: "Skin fade", price: 50, minutes: 45, description: "A fade blended all the way down to the skin.", popular: true },
      { name: "Beard trim", price: 20, minutes: 20, description: "Line-up and trim to keep your beard neat and presentable.", popular: true },
      { name: "Shave", price: 40, minutes: 30, description: "Straight razor shave, an age-old barbershop tradition.", popular: true },
    ],
  },

  gallery: {
    title: "Fresh from the chair",
    intro: "Recent cuts from the shop.",
    photos: [
      { photo: "high-skin-fade-hard-part.jpg", alt: "High skin fade with a shaved hard part, seen in profile" },
      { photo: "low-taper-slicked-back.jpg", alt: "Low taper fade with longer hair slicked back" },
      { photo: "mid-fade-slick-side-part.jpg", alt: "Mid skin fade with a slicked side part and a clean neckline" },
      { photo: "high-fade-slick-back-beard.jpg", alt: "High fade with a slick-back top blended into a trimmed beard" },
    ],
  },

  barbers: {
    title: "Meet your barber",
    contactTitle: "Contact",
    items: [
      {
        name: "Eli", // Goldie lists "Eli R"
        role: "Owner & barber", // TODO: confirm Eli owns the shop
        specialty: "Fades, classic cuts and straight razor shaves",
        // From conejovalleybarber.com
        bio: "Eli has been proudly serving clients for over 15 years. He's known for his professional haircutting skills, which have made him popular with loyal customers. From stylish fades to classic cuts, whatever the look, he makes it happen with precision and care.",
        photo: null, // add a portrait file name here to show one
        photoAlt: null,
        instagram: null,
        contact: { phone: "+18054379996", phoneDisplay: "(805) 437-9996", email: "elithebarber@gmail.com" },
        bookingUrl: null, // uses the shop booking link when null
      },
    ],
  },

  reviews: {
    title: "What clients say",
    // TODO: paste 3 or 6 real Google reviews word for word (3 or 6 fill the
    // grid evenly). Prefer recent ones under ~60 words, and ones that name a
    // service or mention kids, which answer real visitor questions.
    // Word for word from Eli's Goldie booking page (Goldie reviews, not Google).
    // TODO: add Google reviews when available (3 or 6 fill the grid evenly).
    items: [
      {
        author: "Josh P.",
        date: "2025-07-31",
        rating: 5,
        text: "Eli consistently delivers an exceptional haircut every time! His skill and attention to detail are top-notch, and his positive energy creates a great atmosphere that keeps me coming back. Easily the best barbershop in the area.",
        source: "Goldie",
      },
      {
        author: "Christos",
        date: "2025-07-16",
        rating: 5,
        text: "Amazing cut, chill vibe, will definitely be back!",
        source: "Goldie",
      },
    ],
  },

  about: {
    title: "About the shop",
    // Eli's bio from the sheet (typos fixed), plus copy from conejovalleybarber.com.
    paragraphs: [
      "Conejo Barber is a classic men's barbershop in Thousand Oaks, California. We specialize in traditional hairstyles and trendy styles for men and kids.",
      "We've served the Conejo Valley since 2015, with the amenities and atmosphere for an optimal haircut and shave. The classic experience includes hot lather face shaves, razor edging, facial massages and grooming products made for men.",
    ],
  },

  faq: {
    title: "Questions, answered",
    items: [
      { question: "Do you take walk-ins?", answer: "Yes, walk-ins are welcome. You can also book online to save your spot." },
      { question: "Do I need to book ahead?", answer: "It's the best way to get the time you want and skip the wait. Book online or give us a call." },
      { question: "Do you cut kids' hair?", answer: "Yes. We cut men's and kids' hair, from traditional styles to trendy ones." },
      { question: "How long does a haircut take?", answer: "About 40 minutes for a haircut and 45 minutes for a skin fade." },
    ],
  },

  info: { title: "Hours & location" },

  ctaBanner: {
    title: "Ready for a fresh cut?",
    text: "Pick a time that works for you and book online.",
  },

  // One-page site: on the home page the nav scrolls smoothly to `anchor`;
  // on the 404 page it links to `href` (the same section).
  navigation: [
    { label: "Services", href: "/#services", anchor: "#services" },
    { label: "Barber", href: "/#barber", anchor: "#barber" },
    { label: "Reviews", href: "/#reviews", anchor: "#reviews" },
    { label: "Visit", href: "/#visit", anchor: "#visit" },
  ],

  ui: {
    skipToContent: "Skip to content",
    primaryNav: "Main",
    book: "Book",
    bookNow: "Book now",
    call: "Call",
    directions: "Directions",
    openNow: "Open now",
    closedNow: "Closed now",
    closesAt: "Closes {time}",
    opensAt: "Opens {day} {time}",
    closedToday: "Closed today",
    today: "today",
    hoursTitle: "Hours",
    hoursSeeAll: "See all hours",
    closed: "Closed",
    addressTitle: "Address",
    areasServedTitle: "Areas served",
    loadMap: "Show map",
    mapPrivacyNote: "Loads Google Maps, which may set cookies.",
    mapTitle: "Map showing Conejo Barber in Thousand Oaks",
    googleRatingSuffix: "on Google",
    walkInsWelcome: "Walk-ins welcome",
    appointmentsOnly: "By appointment",
    readAllReviews: "Read all reviews on Google",
    leaveReview: "Leave us a review",
    bookWith: "Book with {name}",
    minutesShort: "min",
    followUs: "Follow",
    allRightsReserved: "All rights reserved.",
    quickActions: "Quick actions",
    moreFrom: "More from Conejo Barber",
    priceFrom: "From",
    reviewSource: "Google",
    reviewsBoard: "{rating} · {count} Google reviews",
    atAGlance: "At a glance",
    reviewsCount: "{count} reviews",
    ratingOutOf: "out of 5 stars",
    notFoundTitle: "This page took a wrong turn",
    notFoundText: "The page you were looking for isn't here. Book a cut, give us a call, or head back home.",
    notFoundHome: "Back to home",
  },
};

export const DAYS: DayName[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
