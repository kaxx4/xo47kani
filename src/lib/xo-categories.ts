/* XO47 — category copy & filter map.
   Each commerce route (men/* and collections/[category]) pulls its eyebrow,
   editorial title and intro from here. `filter`, when set, narrows PRODUCTS to
   a single `cat` value ("Suits" | "Black Tie" | "Occasion" | "Blazers");
   when unset, the page presents the full wardrobe.

   The maison voice: made to order, 3–4 weeks, enquiry only, cut in New Delhi.
   Titles are editorial — wrap the clay accent word in the page itself with
   <span className="italic serif-accent">…</span>. */

export type ProductCat = "Suits" | "Black Tie" | "Occasion" | "Blazers";

export interface CategoryCopy {
  /** Small over-line above the title. */
  eyebrow: string;
  /** Plain-string title; the page wraps the accent fragment. */
  title: string;
  /** The fragment of `title` to render in the clay serif accent. */
  accent: string;
  /** Editorial intro paragraph, ~1–2 sentences in the maison voice. */
  intro: string;
  /** Narrows PRODUCTS by `cat`. Omit to show the full wardrobe. */
  filter?: ProductCat;
  /** True when no product `cat` maps to this category yet — render the empty
   *  state rather than falling through to the full wardrobe. */
  empty?: boolean;
}

/* Keyed by route slug. men/* and collections/[category] share this map. */
export const CATEGORIES: Record<string, CategoryCopy> = {
  /* ── men/* ───────────────────────────────────────────────── */
  suits: {
    eyebrow: "Signature Suits",
    title: "Cut to a single body.",
    accent: "body.",
    intro:
      "The foundation of the house — a suit drafted to one man and worn as a daily uniform of presence. Cloth chosen at the mill, canvas shaped by hand, made to order in three to four weeks.",
    filter: "Suits",
  },
  jackets: {
    eyebrow: "Jackets & Blazers",
    title: "The art of the soft shoulder.",
    accent: "soft shoulder.",
    intro:
      "Refined separates and unstructured tailoring — the jacket that carries a wardrobe from boardroom to evening. Each is cut, canvassed and finished to one body, by enquiry only.",
    empty: true,
  },
  coats: {
    eyebrow: "Outerwear",
    title: "Held, the moment you arrive.",
    accent: "arrive.",
    intro:
      "Overcoats and outer tailoring drawn long and clean — weight, drape and line considered for the man who walks in last. Commissioned to measure and made over three to four weeks.",
    empty: true,
  },
  knitwear: {
    eyebrow: "Knitwear",
    title: "Quiet, against the skin.",
    accent: "the skin.",
    intro:
      "The softer register of the wardrobe — knits chosen for hand and recovery, drawn to layer beneath the tailoring without breaking its line. Made to order in New Delhi.",
    empty: true,
  },
  trousers: {
    eyebrow: "Trousers",
    title: "Cut to drape.",
    accent: "drape.",
    intro:
      "Trousers drafted from the waist down to fall clean over the shoe — rise, taper and break set to one body. Cloth and finish chosen with you, made to order over three to four weeks.",
    empty: true,
  },
  shirts: {
    eyebrow: "Shirting",
    title: "The foundation, beneath it all.",
    accent: "beneath it all.",
    intro:
      "The first layer and the truest fit — collar, cuff and yoke patterned to one body, in cloths woven for the long day. Commissioned by enquiry, made in New Delhi.",
    empty: true,
  },
  shoes: {
    eyebrow: "Footwear",
    title: "The last word.",
    accent: "last word.",
    intro:
      "The finish that closes the line — footwear chosen to ground the tailoring with quiet intent. Presented by the atelier, by enquiry only.",
    empty: true,
  },
  accessories: {
    eyebrow: "Accessories",
    title: "Worn in the detail.",
    accent: "the detail.",
    intro:
      "The considered small things — the closing notes that carry a commission. Selected with you at the studio, by enquiry only.",
    empty: true,
  },
  "new-arrivals": {
    eyebrow: "New Arrivals",
    title: "The latest, cut fresh.",
    accent: "cut fresh.",
    intro:
      "The newest pieces from the atelier — fresh cloth, fresh line, the wardrobe as it stands today. Each is made to order in three to four weeks.",
    empty: true,
  },
  "black-tie-collection": {
    eyebrow: "Black Tie",
    title: "Drama, held in restraint.",
    accent: "restraint.",
    intro:
      "Tuxedos and evening tailoring for the room that turns when you enter — cut close through the chest, released clean through the leg. Hand-finished, commissioned by enquiry.",
    filter: "Black Tie",
  },
  "polos-t-shirts": {
    eyebrow: "Polos & T-Shirts",
    title: "Ease, made precise.",
    accent: "made precise.",
    intro:
      "The relaxed register of the house, drawn with the same precision as the tailoring — clean necklines, considered weight, nothing superfluous. Made to order in New Delhi.",
    empty: true,
  },
  "short-sleeve-polos": {
    eyebrow: "Short-Sleeve Polos",
    title: "Ease, cut short.",
    accent: "cut short.",
    intro:
      "The warm-weather polo, drawn with the precision of the tailoring — open collar, clean sleeve, considered hand. Made to order in New Delhi.",
    empty: true,
  },
  wedding: {
    eyebrow: "Occasion · Weddings",
    title: "For the day that holds.",
    accent: "holds.",
    intro:
      "Wedding tailoring for the defining moment — softer cloths, occasion finish, a garment drafted to be remembered in every frame. Commissioned with the atelier over three to four weeks.",
    filter: "Occasion",
  },
  "linen-collection": {
    eyebrow: "Campaign · Linen",
    title: "Unstructured, in the heat.",
    accent: "in the heat.",
    intro:
      "Italian flax drawn soft and easy — tailoring built for warmth and travel, line kept while structure steps back. Made to order in New Delhi.",
    empty: true,
  },

  /* ── collections/[category] ──────────────────────────────── */
  blazers: {
    eyebrow: "Blazers",
    title: "Soft, refined, separate.",
    accent: "separate.",
    intro:
      "The blazer as a wardrobe of one — soft-shouldered, canvassed by hand, drawn to move between the boardroom and the evening. Made to order over three to four weeks.",
    filter: "Blazers",
  },
  tuxedos: {
    eyebrow: "Black Tie",
    title: "The evening, distilled.",
    accent: "distilled.",
    intro:
      "Tuxedos for black tie and the gala — satin-faced lapels, hand-finished detail, drama held in complete restraint. Commissioned to one body, by enquiry only.",
    filter: "Black Tie",
  },
  occasion: {
    eyebrow: "Occasion",
    title: "The moments worth remembering.",
    accent: "remembering.",
    intro:
      "Occasion tailoring for weddings, ceremony and milestone — softer drape, considered colour, a garment made for the day it is worn. Made to order over three to four weeks.",
    filter: "Occasion",
  },
  "black-tie": {
    eyebrow: "Black Tie",
    title: "Held, when the room turns.",
    accent: "the room turns.",
    intro:
      "Evening tailoring at its most assured — tuxedos and dinner suits cut for presence, hand-finished and made to one body. Commissioned by enquiry, in New Delhi.",
    filter: "Black Tie",
  },
};

const FALLBACK: CategoryCopy = {
  eyebrow: "The Collections",
  title: "The Wardrobe.",
  accent: "Wardrobe.",
  intro:
    "The full house, cut to one body — suits, black tie, occasion and refined separates, each made to order over three to four weeks. By enquiry only, in New Delhi.",
};

/** Resolve a route slug to its copy, falling back to the full-wardrobe entry. */
export function getCategory(slug: string): CategoryCopy {
  return CATEGORIES[slug] ?? FALLBACK;
}
