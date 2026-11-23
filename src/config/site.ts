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
    googleReviewUrl: null, // TODO: the "write a review" link
    googleRating: null, // TODO: { value: 4.9, count: 123 } — real numbers only
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

  // From conejovalleybarber.com (Nov 2026). TODO: confirm with Eli; his sheet's Hours tab is blank.
  hours: {
    Monday: "closed",
    Tuesday: "closed",
    Wednesday: { opens: "11:00", closes: "16:30" },
    Thursday: "closed",
    Friday: "closed",
    Saturday: { opens: "12:00", closes: "16:00" },
    Sunday: "closed",
  },

  hero: {
    title: "Sharp Cuts & Clean Fades in Thousand Oaks",
    lede: "Haircuts, fades and straight razor shaves. Book your chair online.",
    // TODO: STOCK PHOTO (CC0, Wikimedia Commons), not the shop's work. Replace
    // with a real photo and describe it, e.g. "Barber finishing a skin fade at Conejo Barber in Thousand Oaks"
    photo: "stock-hero-temple-fade.jpg",
    photoAlt: "Side profile of a fresh temple fade with a sharp line-up",
    photoPosition: "75% 35%",
  },

  services: {
    title: "Services & prices",
    intro: "What it costs and how long it takes, before you book.",
    // Bookable services: names, prices and times copied from the Goldie booking
    // page (keep names identical so visitors find them after tapping Book).
    // Descriptions are based on conejovalleybarber.com.
    // The last four are listed on conejovalleybarber.com but not on Goldie.
    // TODO: get their prices and times from Eli, or remove them.
    items: [
      { name: "Haircut", price: 45, minutes: 40, description: "Men's haircut in the style you want, from classic cuts to fades.", popular: true },
      { name: "Skin fade", price: 50, minutes: 45, description: "A fade blended all the way down to the skin.", popular: true },
      { name: "Beard trim", price: 20, minutes: 20, description: "Line-up and trim to keep your beard neat and presentable.", popular: true },
      { name: "Shave", price: 40, minutes: 30, description: "Straight razor shave, an age-old barbershop tradition.", popular: true },
      { name: "Kids Cut / Buzz Cut / Afro Shaping", price: null, minutes: null, description: "Kids' cuts, buzz cuts, Afro shaping and more.", popular: false },
      { name: "Clean Up / Seniors / Students", price: null, minutes: null, description: "A quick clean-up, tailored to what you need.", popular: false },
      { name: "Facial – Scrub & Black Mask", price: null, minutes: null, description: "Facial cleanse, exfoliating scrub, facial massage and mask with hot towels.", popular: false },
      { name: "Enhancements", price: null, minutes: null, description: "Hair color enhancement, in black or brown.", popular: false },
    ],
  },

  gallery: {
    title: "Fresh from the chair",
    intro: "Recent cuts from the shop.",
    // TODO: STOCK PHOTOS (CC0, Wikimedia Commons), not the shop's work.
    // Replace each with a real photo and accurate alt text before launch.
    photos: [
      { photo: "stock-gallery-mid-fade.jpg", alt: "Mid fade with a clean line-up, seen from the side" },
      { photo: "stock-gallery-hairline.jpg", alt: "Barber shaping a client's front hairline" },
      { photo: "stock-gallery-clipper-work.jpg", alt: "Barber working with clippers at the station" },
      { photo: "stock-gallery-beard-trim.jpg", alt: "Beard trim in the barber's chair, seen in the mirror" },
      { photo: "stock-gallery-in-the-chair.jpg", alt: "Client in a striped cape waiting in the barber's chair" },
      { photo: "stock-gallery-temple-fade.jpg", alt: "Temple fade with waves and a crisp edge-up" },
    ],
  },

  barbers: {
    title: "Meet your barber",
    items: [
      {
        name: "Eli", // Goldie lists "Eli R"
        role: "Owner & barber", // TODO: confirm Eli owns the shop
        specialty: "Fades, classic cuts and straight razor shaves",
        // From conejovalleybarber.com
        bio: "Eli has been proudly serving clients for over 15 years. He's known for his professional haircutting skills, which have made him popular with loyal customers. From stylish fades to classic cuts, whatever the look, he makes it happen with precision and care.",
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
