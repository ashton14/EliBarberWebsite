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
  /** Shown on the home page (pick the 6 most popular). */
  popular: boolean;
}

export interface Barber {
  name: string | null;
  role: string;
  specialty: string | null;
  bio: string | null;
  /** File name in src/assets/photos/ */
  photo: string;
  photoAlt: string;
  instagram: string | null;
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
  /** Word for word from Google. Do not edit. */
  text: string;
}

export interface FaqItem {
  question: string;
  /** `null` = TODO. Unanswered questions are hidden from the FAQ schema. */
  answer: string | null;
}

export interface SiteConfig {
  url: string;
  lang: string;
  ogLocale: string;
  name: string;
  /** Short business description (structured data, default meta) */
  description: string;
  /** Per-page <title> (≤60 chars) and meta description (≤155 chars).
   *  The build fails if either is too long. */
  pages: Record<"home" | "services" | "barbers" | "visit" | "privacy" | "notFound", { title: string; description: string }>;
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
    googleReviewUrl: string | null;
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
  barbers: { title: string; items: Barber[] };
  reviews: { title: string; items: Review[] };
  about: { title: string; paragraphs: string[] | null };
  faq: { title: string; items: FaqItem[] };
  info: { title: string };
  ctaBanner: { title: string; text: string };
  /** Copy for the inner pages (H1, intro, sub-headings, cross-links). */
  inner: {
    home: string;
    services: { h1: string; intro: string; detailsTitle: string; paymentTitle: string; walkInsTitle: string };
    barbers: { h1: string; intro: string; bioTitle: string; workTitle: string };
    visit: { h1: string; intro: string; infoTitle: string; gettingHereTitle: string; parkingTitle: string; paymentTitle: string; areasIntro: string };
    privacy: { h1: string };
    links: { services: string; barbers: string; visit: string; reviews: string };
  };
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
  | "fullMenu"
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
  | "meetBarber"
  | "meetNamed"
  | "bookWith"
  | "minutesShort"
  | "privacyLabel"
  | "followUs"
  | "allRightsReserved"
  | "quickActions"
  | "moreFrom"
  | "priceFrom"
  | "reviewSource"
  | "reviewsBoard"
  | "atAGlance"
  | "reviewsCount"
  | "visitPageLink"
  | "ratingOutOf"
  | "notFoundTitle"
  | "notFoundText"
  | "notFoundHome";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
export const SITE: SiteConfig = {
  // TODO: real domain, no trailing slash (e.g. "https://conejobarber.com")
  url: "https://conejobarber.example",
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
    services: {
      title: "Haircut & Fade Prices | Conejo Barber Thousand Oaks",
      description:
        "Haircut, skin fade, beard trim and kids' cut prices at Conejo Barber in Thousand Oaks, CA. See how long each takes, then book online.",
    },
    barbers: {
      title: "Meet Your Barber | Conejo Barber, Thousand Oaks",
      description:
        "Meet the barber at Conejo Barber in Thousand Oaks, CA: specialties, recent work and a direct link to book your next cut.",
    },
    visit: {
      title: "Hours & Directions | Conejo Barber, Thousand Oaks",
      description:
        "Hours, address, parking and directions for Conejo Barber in Thousand Oaks, CA, serving Newbury Park, Westlake Village and nearby. Book online.",
    },
    privacy: {
      title: "Privacy Policy | Conejo Barber",
      description:
        "How Conejo Barber in Thousand Oaks, CA handles your information, and your rights under California privacy law.",
    },
    notFound: {
      title: "Page Not Found | Conejo Barber",
      description: "This page doesn't exist. Book a cut, call the shop, or head back to the Conejo Barber home page.",
    },
  },

  business: {
    phone: null, // TODO
    phoneDisplay: null, // TODO
    email: null, // TODO
    address: {
      street: null, // TODO
      city: "Thousand Oaks",
      region: "CA",
      postalCode: null, // TODO
      country: "US",
    },
    geo: null, // TODO: { latitude: 34.17, longitude: -118.84 } copied from the Maps pin
    bookingUrl: null, // TODO: Booksy / Square / Fresha / Vagaro link
    googleProfileUrl: null, // TODO
    googleReviewUrl: null, // TODO: the "write a review" link
    googleRating: null, // TODO: { value: 4.9, count: 123 } — real numbers only
    social: {
      instagram: null, // TODO
      tiktok: null, // TODO
      facebook: null, // TODO
      yelp: null, // TODO
    },
    walkIns: null, // TODO: true / false
    payment: null, // TODO: e.g. ["Cash", "Visa", "Mastercard", "Apple Pay"]
    parking: null, // TODO: parking, landmarks, directions notes
    priceRange: null, // TODO: e.g. "$$"
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

  // TODO: real hours. Example: Monday: { opens: "09:00", closes: "19:00" }, Sunday: "closed"
  hours: {
    Monday: null,
    Tuesday: null,
    Wednesday: null,
    Thursday: null,
    Friday: null,
    Saturday: null,
    Sunday: null,
  },

  hero: {
    title: "Sharp Cuts & Clean Fades in Thousand Oaks",
    lede: "Haircuts, fades and beard trims. Book your chair online.",
    photo: "placeholder-hero-barber-at-work.jpg", // TODO: real photo
    // TODO: with the real photo, describe it, e.g. "Barber finishing a skin fade at Conejo Barber in Thousand Oaks"
    photoAlt: "Photo placeholder: barber at work",
    photoPosition: "70% 40%",
  },

  services: {
    title: "Services & prices",
    intro: "What it costs and how long it takes, before you book.",
    // TODO: confirm every service name, price, duration and description.
    // Names below are the owner's suggested list; prices and times are unknown.
    items: [
      { name: "Haircut", price: null, minutes: null, description: null, popular: true },
      { name: "Skin Fade", price: null, minutes: null, description: null, popular: true },
      { name: "Buzz Cut", price: null, minutes: null, description: null, popular: true },
      { name: "Beard Trim & Line-Up", price: null, minutes: null, description: null, popular: true },
      { name: "Haircut + Beard", price: null, minutes: null, description: null, popular: true },
      { name: "Kids' Cut (12 & under)", price: null, minutes: null, description: null, popular: true },
      { name: "Hot Towel Shave", price: null, minutes: null, description: null, popular: false },
    ],
  },

  gallery: {
    title: "Fresh from the chair",
    intro: "Recent cuts from the shop.",
    // TODO: replace placeholders with real photos and accurate alt text.
    photos: [
      { photo: "placeholder-gallery-1.jpg", alt: "Photo placeholder: skin fade" },
      { photo: "placeholder-gallery-2.jpg", alt: "Photo placeholder: taper and line-up" },
      { photo: "placeholder-gallery-3.jpg", alt: "Photo placeholder: beard trim" },
      { photo: "placeholder-gallery-4.jpg", alt: "Photo placeholder: textured crop" },
      { photo: "placeholder-gallery-5.jpg", alt: "Photo placeholder: kids' cut" },
      { photo: "placeholder-gallery-6.jpg", alt: "Photo placeholder: hot towel shave" },
    ],
  },

  barbers: {
    title: "Meet your barber",
    items: [
      {
        name: null, // TODO
        role: "Owner & barber",
        specialty: null, // TODO
        bio: null, // TODO: 2–3 sentences in the barber's own words
        photo: "placeholder-barber-portrait.jpg", // TODO: real photo
        photoAlt: "Photo placeholder: barber portrait", // TODO: describe the real photo
        instagram: null, // TODO
        bookingUrl: null, // uses the shop booking link when null
      },
    ],
  },

  reviews: {
    title: "What clients say",
    // TODO: paste 3 or 6 real Google reviews word for word (3 or 6 fill the
    // grid evenly). Prefer recent ones under ~60 words, and ones that name a
    // service or mention kids, which answer real visitor questions.
    items: [],
  },

  about: {
    title: "About the shop",
    paragraphs: null, // TODO: 2–3 short paragraphs about this shop specifically
  },

  faq: {
    title: "Questions, answered",
    items: [
      { question: "Do you take walk-ins?", answer: null },
      { question: "Do I need to book ahead?", answer: null },
      { question: "Do you cut kids' hair?", answer: null },
      { question: "How long does a haircut take?", answer: null },
      { question: "Where do I park?", answer: null },
      { question: "What payment do you accept?", answer: null },
      { question: "What is your cancellation policy?", answer: null },
    ],
  },

  info: { title: "Hours & location" },

  ctaBanner: {
    title: "Ready for a fresh cut?",
    text: "Pick a time that works for you and book online.",
  },

  inner: {
    home: "Home",
    services: {
      h1: "Haircut & fade prices",
      intro: "Every service, with its price and how long it takes. Book online when you're ready.",
      detailsTitle: "Good to know",
      paymentTitle: "Payment",
      walkInsTitle: "Walk-ins",
    },
    barbers: {
      h1: "Meet your barber",
      intro: "The barber behind every cut at Conejo Barber in Thousand Oaks.",
      bioTitle: "About",
      workTitle: "Recent work",
    },
    visit: {
      h1: "Hours & directions",
      intro: "When the shop is open, where to find it in Thousand Oaks, and where to park.",
      infoTitle: "Opening hours & address",
      gettingHereTitle: "Getting here",
      parkingTitle: "Parking & landmarks",
      paymentTitle: "Payment",
      areasIntro: "The shop is in Thousand Oaks, in the Conejo Valley. Nearby communities:",
    },
    privacy: { h1: "Privacy policy" },
    links: {
      services: "See every service and price",
      barbers: "Meet your barber",
      visit: "Hours, parking and directions",
      reviews: "Read client reviews",
    },
  },

  // `href` is used on inner pages; on the home page the nav scrolls smoothly
  // to `anchor` (the matching section on the same page) instead.
  navigation: [
    { label: "Services", href: "/services/", anchor: "#services" },
    { label: "Barber", href: "/barbers/", anchor: "#barber" },
    { label: "Reviews", href: "/#reviews", anchor: "#reviews" },
    { label: "Visit", href: "/visit/", anchor: "#visit" },
  ],

  ui: {
    skipToContent: "Skip to content",
    primaryNav: "Main",
    book: "Book",
    bookNow: "Book now",
    call: "Call",
    directions: "Directions",
    fullMenu: "Full menu: all services and prices",
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
    meetBarber: "More about your barber",
    meetNamed: "More about {name}",
    bookWith: "Book with {name}",
    minutesShort: "min",
    privacyLabel: "Privacy",
    followUs: "Follow",
    allRightsReserved: "All rights reserved.",
    quickActions: "Quick actions",
    moreFrom: "More from Conejo Barber",
    priceFrom: "From",
    reviewSource: "Google",
    reviewsBoard: "{rating} · {count} Google reviews",
    atAGlance: "At a glance",
    reviewsCount: "{count} reviews",
    visitPageLink: "Directions, parking and more on the Visit page",
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
