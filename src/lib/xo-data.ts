/* XO47 content — real photography, enquiry-based maison.
   Faithful TypeScript port of the source data.js. */

export const img = (f: string): string => `/images/${f}`;
export const fmt = (n: number): string => "₹" + n.toLocaleString("en-IN");

export interface NavItem {
  label: string;
  page: string;
  href: string;
}

export interface Collection {
  label: string;
  desc: string;
  img: string;
  n: string;
  tone: "ink" | "ivory" | "neutral";
  href: string;
}

export interface Product {
  slug: string;
  name: string;
  cut: string;
  price: number;
  cat: string;
  fabric: string;
  cloth: string;
  img: string;
}

export interface FeatureProduct {
  slug: string;
  name: string;
  cut: string;
  priceFrom: number;
  house: string;
  img: string;
  description: string;
  fabric: string;
  cloths: { name: string; hex: string }[];
  sizes: string[];
  details: [string, string][];
  gallery: string[];
}

export interface Story {
  founded: string;
  place: string;
  lede: string;
  body: string[];
  pillars: [string, string][];
  milestones: [string, string][];
}

export interface BookingData {
  services: [string, string][];
  occasions: string[];
  timelines: string[];
  appointments: string[];
  times: string[];
}

/* Primary navigation → mapped to real Next routes */
export const NAV: NavItem[] = [
  { label: "Collections", page: "collections", href: "/collections" },
  { label: "Bespoke", page: "bespoke", href: "/bespoke" },
  { label: "The Maison", page: "maison", href: "/maison" },
  { label: "Santali", page: "santali", href: "/santali" },
];

/* Home collection tiles → real imagery */
export const COLLECTIONS: Collection[] = [
  { label: "Black Tie", desc: "Tuxedos & evening", img: img("look-02.jpg"), n: "01", tone: "ink", href: "/collections/black-tie" },
  { label: "Signature Suits", desc: "Boardroom to milestone", img: img("look-08.jpg"), n: "02", tone: "ink", href: "/collections/suits" },
  { label: "Occasion", desc: "Weddings & ceremony", img: img("look-04.jpg"), n: "03", tone: "ivory", href: "/collections/occasion" },
  { label: "Blazers", desc: "Soft, refined separates", img: img("blazer-a.jpg"), n: "04", tone: "neutral", href: "/collections/blazers" },
  { label: "Shirting", desc: "The foundation", img: img("shirt-a.jpg"), n: "05", tone: "ivory", href: "/collections/shirts" },
  { label: "Trousers", desc: "Cut to drape", img: img("trouser-a.jpg"), n: "06", tone: "ivory", href: "/collections/trousers" },
];

export const PRODUCTS: Product[] = [
  { slug: "milano", name: "The Milano", cut: "Slim-Fit Suit", price: 95000, cat: "Suits", fabric: "Italian Wool · 280g", cloth: "Charcoal", img: img("look-08.jpg") },
  { slug: "noir-jacquard", name: "The Onyx", cut: "Embellished Tuxedo", price: 220000, cat: "Black Tie", fabric: "Hand-embellished jacquard", cloth: "Ink Black", img: img("look-01.jpg") },
  { slug: "la-brea", name: "The La Brea", cut: "Ivory Dinner Suit", price: 165000, cat: "Black Tie", fabric: "Wool basketweave · satin", cloth: "Ivory", img: img("look-04.jpg") },
  { slug: "argent", name: "The Argent", cut: "Sequin Evening Jacket", price: 240000, cat: "Black Tie", fabric: "Sequinned wool", cloth: "Silver", img: img("look-07.jpg") },
  { slug: "siena", name: "The Siena", cut: "Sage Wedding Suit", price: 145000, cat: "Occasion", fabric: "Wool–cashmere", cloth: "Sage", img: img("look-09.jpg") },
  { slug: "cortile", name: "The Cortile", cut: "Ivory Occasion Suit", price: 138000, cat: "Occasion", fabric: "Silk–wool", cloth: "Ivory", img: img("look-03.jpg") },
  { slug: "havana", name: "The Havana", cut: "Double-Breasted Blazer", price: 65000, cat: "Blazers", fabric: "Cotton–linen · 240g", cloth: "Sand", img: img("look-12.jpg") },
  { slug: "portland", name: "The Portland", cut: "Soft Blazer", price: 72000, cat: "Blazers", fabric: "Brushed wool", cloth: "Stone", img: img("blazer-a.jpg") },
  { slug: "regent", name: "The Regent", cut: "Peak-Lapel Suit", price: 110000, cat: "Suits", fabric: "Super 120s wool", cloth: "Navy", img: img("look-10.jpg") },
];

export const FEATURE: FeatureProduct = {
  slug: "noir-jacquard",
  name: "The Onyx",
  cut: "Embellished Tuxedo",
  priceFrom: 220000,
  house: "XO47 · Bespoke Commission",
  img: img("look-08.jpg"),
  description:
    "Tonal jacquard, hand-set with thousands of matte-black crystals so the embellishment reveals itself only as the light moves. Cut close through the chest, released clean through the leg — drama held in complete restraint.",
  fabric: "Tonal cotton–silk jacquard, hand-embellished over 60+ hours. Lined in Bemberg cupro.",
  cloths: [
    { name: "Ink Black", hex: "#16140F" },
    { name: "Midnight", hex: "#1a2030" },
    { name: "Forest", hex: "#2C4839" },
    { name: "Oxblood", hex: "#4a1f1f" },
  ],
  sizes: ["46R", "48R", "50R", "52R", "54R", "56R"],
  details: [
    ["Construction", "Half-canvassed, hand-padded lapel"],
    ["Lapel", "Shawl · satin-faced"],
    ["Embellishment", "Hand-set crystal, tonal"],
    ["Trouser", "Satin side-stripe · unfinished hem"],
    ["Origin", "Cut & made in New Delhi"],
  ],
  gallery: [img("look-08.jpg"), img("look-01.jpg"), img("look-07.jpg"), img("look-02.jpg")],
};

/* Brand recognition — from the bible */
export const FACES: string[] = [
  "Shahid Kapoor",
  "Abhay Deol",
  "Ishaan Khattar",
  "Rohit Saraf",
  "Karron S Dhinggra",
  "Viviane Divine",
];

export const SERVICES: [string, string, string][] = [
  ["01", "Bespoke Experience", "The purest form of tailoring — a fully hand-crafted garment, drafted to one body."],
  ["02", "Signature Formalwear", "The foundation of the house. Suits and blazers, cut as a daily uniform of presence."],
  ["03", "Wardrobe Consultation", "A styling session to refine a client's wardrobe for work, events and a life well-dressed."],
  ["04", "Occasion Wear", "For the defining moments — weddings, black tie, the milestones worth remembering."],
  ["05", "Home Appointments", "An exclusive in-residence experience for clients across Delhi."],
  ["06", "Exhibitions & Pop-ups", "The house, on the move — fabric collections and craft, presented to the world."],
];

export interface FooterCol {
  head: string;
  links: string[];
}

export const FOOTER: FooterCol[] = [
  { head: "Collections", links: ["Black Tie", "Signature Suits", "Occasion", "Blazers", "Shirting", "Trousers"] },
  { head: "Services", links: ["Bespoke Experience", "Wardrobe Consultation", "Occasion Wear", "Home Appointments", "Exhibitions"] },
  { head: "The Maison", links: ["Our Story", "The XO47 Man", "Santali", "Brand Recognition", "Press"] },
  { head: "Visit", links: ["@studio.xo47", "weknowtailoring.com", "Book a Consultation", "Ambawatta One, Mehrauli"] },
];

export const STORY: Story = {
  founded: "2020",
  place: "New Delhi",
  lede: "XO47 began with a single conviction — that clothing is not worn to be seen, but to be felt.",
  body: [
    "Founded in New Delhi in 2020 under the 1 OAK group, XO47 is a bespoke menswear house built on the philosophy of presence and identity. We do not chase trends; we read the man, the occasion and the intent — then draft a garment for one body, and one only.",
    "Every commission begins with a conversation. From the selection of cloth — woven at mills refined over generations — to the precision of a single hand-set buttonhole, each decision is deliberate. We say it is handcrafted, and really, it is.",
    "The result is one of a kind. A wardrobe that does not announce itself, but holds the room the moment you walk in.",
  ],
  pillars: [
    ["Presence", "Tailoring that speaks before you do — quietly, completely."],
    ["Identity", "One body, one pattern. Nothing about it belongs to anyone else."],
    ["Permanence", "Cloth and construction chosen to outlast the moment they're made for."],
  ],
  milestones: [
    ["2020", "The house is founded in New Delhi under 1 OAK."],
    ["2021", "The Ambawatta One atelier opens in Mehrauli."],
    ["2023", "Dressed across red carpets, weddings and public life."],
    ["2026", "Santali — a new chapter in modern Indianwear — begins."],
  ],
};

export const FABRICS: [string, string, string][] = [
  ["Italian Wool", "Super 120s–150s", "Dry hand, sharp line, all-day recovery."],
  ["English Worsted", "Heritage mills", "Structured, weighty, built for the boardroom."],
  ["Wool–Silk Jacquard", "Tonal weaves", "Quiet drama for evening and black tie."],
  ["Linen & Linen-Cotton", "Italian flax", "Unstructured ease for heat and travel."],
  ["Cotton Velvet", "Satin-faced", "Occasion softness with a deep, light-catching pile."],
  ["Cashmere Blends", "Wool–cashmere", "A softer drape for weddings and milestones."],
];

export const BOOKING: BookingData = {
  services: [
    ["Bespoke Experience", "A fully hand-crafted garment, drafted to one body."],
    ["Signature Formalwear", "Suits & blazers as a daily uniform of presence."],
    ["Occasion Wear", "Weddings, black tie and the defining moments."],
    ["Wardrobe Consultation", "A styling session to refine your wardrobe."],
    ["Santali", "Modern Indianwear, distilled and reimagined."],
  ],
  occasions: ["Wedding", "Black Tie / Gala", "Business", "Everyday Wardrobe", "Other"],
  timelines: ["Within 3 weeks", "1–2 months", "3+ months", "Just exploring"],
  appointments: ["Studio — Ambawatta One", "Home Appointment (Delhi NCR)", "Virtual Consultation"],
  times: ["Morning · 10–12", "Afternoon · 12–4", "Evening · 4–8"],
};

/* route a footer/menu label to a page path */
export function routeFor(label: string): string {
  const l = label.toLowerCase();
  if (l.includes("santali")) return "/santali";
  if (l.includes("book") || l.includes("consult") || l.includes("appointment") || l.includes("enquire")) return "/book-consultation";
  if (l.includes("bespoke") || l.includes("wardrobe") || l.includes("occasion wear") || l.includes("exhibition") || l.includes("alteration") || l.includes("service")) return "/bespoke";
  if (l.includes("story") || l.includes("maison") || l.includes("man") || l.includes("recognition") || l.includes("press")) return "/maison";
  return "/collections";
}
