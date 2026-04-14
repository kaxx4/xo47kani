export interface ProductColor {
  name: string;
  hex: string;
  slug: string;
  images: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  subcategory?: string;
  description: string;
  details: string[];
  colors: ProductColor[];
  sizes: string[];
  fit: string;
  fabric: string;
  care: string[];
}

// ── Image pools ─────────────────────────────────────────────────────────────
const IMG = (f: string) => `/images/products/${f}`;

const suitsImgs = [
  IMG("X04701947-2-a.jpg"),
  IMG("X04700034 copy 1.jpg"),
  IMG("X04700035-1.jpg"),
  IMG("X04700039 copy 1.jpg"),
  IMG("X04700065-1.jpg"),
  IMG("X04700252-1.jpg"),
  IMG("X04700258-1.jpg"),
  IMG("X04700283-1.jpg"),
  IMG("X04700299-2-1.jpg"),
  IMG("X04700300-2-a.jpg"),
  IMG("X04700301-2-a.jpg"),
];

const jacketsImgs = [
  IMG("X04700695-a.jpg"),
  IMG("X04700310-2-a.jpg"),
  IMG("X04700334-a.jpg"),
  IMG("X04700351-1.jpg"),
  IMG("X04700353-1.jpg"),
  IMG("X04700357-1.jpg"),
  IMG("X04700621-a.jpg"),
  IMG("X04700627.jpg"),
  IMG("X04700631-a.jpg"),
  IMG("X04700654.-a-jpg.jpg"),
];

const tuxedosImgs = [
  IMG("X04701940-2-a.jpg"),
  IMG("X04700659-a.jpg"),
  IMG("X04700673-a.jpg"),
  IMG("X04700676-1.jpg"),
  IMG("X04700694-a.jpg"),
  IMG("X04700695-a.jpg"),
  IMG("X04700716-a.jpg"),
];

const weddingImgs = [
  IMG("X04701941-2-a.jpg"),
  IMG("X04700717-1.jpg"),
  IMG("X04700719-a.jpg"),
  IMG("X04700720-a.jpg"),
  IMG("X04701084-a.jpg"),
  IMG("X04701086-a.jpg"),
  IMG("X04701129-a.jpg"),
];

const knitwearImgs = [
  IMG("X04701889-a.jpg"),
  IMG("X04701133-a.jpg"),
  IMG("X04701146-a.jpg"),
  IMG("X04701147-a.jpg"),
  IMG("X04701152-a.jpg"),
  IMG("X04701158-a.jpg"),
  IMG("X04701175-2-a.jpg"),
];

const trousersImgs = [
  IMG("X04702181-a.jpg"),
  IMG("X04701191-1-a.jpg"),
  IMG("X04701197-1-a.jpg"),
  IMG("X04701486-a.jpg"),
  IMG("X04701487-a.jpg"),
  IMG("X04701490-a.jpg"),
  IMG("X04701497-a.jpg"),
];

const shirtsImgs = [
  IMG("X04701084-a.jpg"),
  IMG("X04701502-a.jpg"),
  IMG("X04701509-a.jpg"),
  IMG("X04701520-a.jpg"),
  IMG("X04701522-a.jpg"),
  IMG("X04701546-a.jpg"),
  IMG("X04701870-a.jpg"),
];

const accessoriesImgs = [
  IMG("X04701889-a.jpg"),
  IMG("X04701915-a.jpg"),
  IMG("X04701931-a.jpg"),
  IMG("X04701936-2-a.jpg"),
  IMG("X04701940-2-a.jpg"),
  IMG("X04701941-2-a.jpg"),
  IMG("X04701942-2-a.jpg"),
  IMG("X04701947-2-a.jpg"),
];

const linenImgs = [
  IMG("X04701954-2-a.jpg"),
  IMG("X04701957-2-a.jpg"),
  IMG("X04701981-1-a.jpg"),
  IMG("X04701992-1-a.jpg"),
  IMG("X04702181-a.jpg"),
  IMG("X04702182-a.jpg"),
];

const poloImgs = [
  IMG("X04702197-a.jpg"),
  IMG("X04702199-a.jpg"),
  IMG("X04702231-2-a.jpg"),
  IMG("X04702232-2-a.jpg"),
  IMG("X04702245-1-a.jpg"),
  IMG("X04702263-a.jpg"),
  IMG("X04702264-a.jpg"),
  IMG("X04702270-a.jpg"),
  IMG("X04702274-a.jpg"),
];

// ── Helper ───────────────────────────────────────────────────────────────────
function makeColors(slugBase: string, pairs: [string, string][], imgs: string[]): ProductColor[] {
  return pairs.map(([name, hex], i) => ({
    name,
    hex,
    slug: `${slugBase}-${name.toLowerCase().replace(/\s+/g, "-")}`,
    images: [imgs[i % imgs.length], imgs[(i + 1) % imgs.length]],
  }));
}

const SUIT_SIZES = ["36R", "38R", "38S", "40R", "40L", "42R", "42L", "44R", "46R", "48R"];
const BLAZER_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const TROUSER_SIZES = ["28", "30", "32", "34", "36", "38"];
const SHIRT_SIZES = ["S", "M", "L", "XL", "XXL"];

// ── Products ─────────────────────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  // ── Suits ─────────────────────────────────────────────────────────────────
  {
    id: "xo-suit-01",
    slug: "milano-slim-fit-suit",
    name: "The Milano Slim Fit Suit",
    price: 95000,
    category: "suits",
    description: "Our most popular slim fit, crafted from premium Italian wool. The Milano offers a clean, contemporary silhouette that works from boardroom to black tie.",
    details: ["Slim fit", "Two-button closure", "Notch lapel", "Double vent", "Interior pocket"],
    colors: makeColors("milano", [["Charcoal", "#3a3a3a"], ["Navy", "#1a2744"], ["Black", "#111111"], ["Mid Grey", "#777777"]], suitsImgs),
    sizes: SUIT_SIZES,
    fit: "Slim",
    fabric: "100% Italian Wool, 280g/m²",
    care: ["Dry clean only", "Do not tumble dry", "Iron on low heat"],
  },
  {
    id: "xo-suit-02",
    slug: "napoli-regular-fit-suit",
    name: "The Napoli Regular Fit Suit",
    price: 110000,
    category: "suits",
    description: "A classic Neapolitan cut with soft shoulders and a relaxed silhouette. Made with a Super 120s wool blend for unmatched comfort.",
    details: ["Regular fit", "Two-button closure", "Peak lapel", "Half-lined", "Working buttonholes"],
    colors: makeColors("napoli", [["Mid Blue", "#3a5f8a"], ["Beige", "#c9a87c"], ["Ivory", "#f5f0e8"], ["Taupe", "#8a7968"]], suitsImgs.slice(4)),
    sizes: SUIT_SIZES,
    fit: "Regular",
    fabric: "Super 120s Wool, 260g/m²",
    care: ["Dry clean only", "Store on wide shoulder hanger"],
  },
  {
    id: "xo-suit-03",
    slug: "lazio-slim-fit-suit",
    name: "The Lazio Slim Fit Suit",
    price: 85000,
    category: "suits",
    description: "Lightweight and breathable, the Lazio is your go-to for warmer days. Constructed with minimal padding for a natural, unstructured feel.",
    details: ["Slim fit", "Unstructured shoulders", "Single vent", "Patch pockets", "Contrast lining"],
    colors: makeColors("lazio", [["Olive", "#6b6b3a"], ["Rust", "#8b3a2a"], ["Forest Green", "#2a4a2a"], ["Cream", "#f0ead8"]], suitsImgs.slice(8)),
    sizes: SUIT_SIZES,
    fit: "Slim",
    fabric: "Linen-Wool Blend, 200g/m²",
    care: ["Dry clean only", "Steam to remove creases"],
  },
  {
    id: "xo-suit-04",
    slug: "washington-db-suit",
    name: "The Washington Double Breasted",
    price: 140000,
    category: "suits",
    description: "A bold double-breasted statement suit with peak lapels and a 6×2 button stance. Structured for power dressing.",
    details: ["Double breasted", "6×2 button stance", "Peak lapel", "Pleated trousers", "Full lining"],
    colors: makeColors("washington", [["Midnight Navy", "#0d1b2e"], ["Charcoal Herringbone", "#4a4a4a"], ["Brown", "#5c3d2e"]], suitsImgs),
    sizes: SUIT_SIZES,
    fit: "Regular",
    fabric: "100% Wool Herringbone, 310g/m²",
    care: ["Dry clean only"],
  },

  // ── Jackets & Blazers ──────────────────────────────────────────────────────
  {
    id: "xo-jkt-01",
    slug: "havana-slim-fit-blazer",
    name: "The Havana Slim Fit Blazer",
    price: 65000,
    category: "blazers",
    description: "The Havana blazer pairs effortlessly with chinos or denim. Soft construction with a natural shoulder line.",
    details: ["Slim fit", "Two-button", "Notch lapel", "Patch pockets", "Single vent"],
    colors: makeColors("havana", [["Tan", "#c9a87c"], ["Navy", "#1a2744"], ["Camel", "#c19a6b"], ["Dusty Pink", "#d4a0a0"]], jacketsImgs),
    sizes: BLAZER_SIZES,
    fit: "Slim",
    fabric: "Cotton-Linen Blend, 240g/m²",
    care: ["Dry clean recommended", "Cool iron"],
  },
  {
    id: "xo-jkt-02",
    slug: "sienna-slim-fit-blazer",
    name: "The Sienna Velvet Blazer",
    price: 85000,
    category: "blazers",
    description: "Luxurious velvet construction with satin contrast lapels. A statement piece for evening occasions.",
    details: ["Slim fit", "Satin lapels", "Two-button", "Welt pockets", "Fully lined"],
    colors: makeColors("sienna", [["Burgundy", "#6b1a1a"], ["Forest Green", "#1a4a2a"], ["Midnight Blue", "#1a1a4a"]], jacketsImgs.slice(3)),
    sizes: BLAZER_SIZES,
    fit: "Slim",
    fabric: "100% Cotton Velvet",
    care: ["Dry clean only", "Do not press"],
  },

  // ── Tuxedos ────────────────────────────────────────────────────────────────
  {
    id: "xo-tux-01",
    slug: "la-brea-tuxedo",
    name: "The La Brea Tuxedo",
    price: 165000,
    category: "tuxedos",
    description: "Classic black-tie perfection. The La Brea features satin peak lapels and a single button stance for an elegant, formal silhouette.",
    details: ["Slim fit", "Satin peak lapels", "One-button", "Satin trim pocket", "Matching trousers with satin stripe"],
    colors: makeColors("labrea", [["Midnight Black", "#0a0a0a"], ["Midnight Navy", "#0d1b2e"], ["Ivory", "#f5f0e8"]], tuxedosImgs),
    sizes: SUIT_SIZES,
    fit: "Slim",
    fabric: "Super 120s Wool with Satin Trim",
    care: ["Dry clean only", "Professional pressing recommended"],
  },
  {
    id: "xo-tux-02",
    slug: "jacquard-tuxedo",
    name: "The Jacquard Evening Suit",
    price: 220000,
    category: "tuxedos",
    description: "Intricate jacquard weave makes this evening suit truly unforgettable. Self-fabric lapels in the same jacquard pattern.",
    details: ["Slim fit", "Jacquard self-lapels", "One-button", "Fully lined", "Tone-on-tone pattern"],
    colors: makeColors("jacquard", [["Navy Jacquard", "#1a2744"], ["Black Jacquard", "#111111"]], tuxedosImgs.slice(3)),
    sizes: SUIT_SIZES,
    fit: "Slim",
    fabric: "Jacquard Wool-Silk Blend",
    care: ["Dry clean only"],
  },

  // ── Wedding / Occasion ─────────────────────────────────────────────────────
  {
    id: "xo-wed-01",
    slug: "siena-wedding-suit",
    name: "The Siena Wedding Suit",
    price: 145000,
    category: "occasion",
    description: "Crafted for your most important day. The Siena combines ivory tones with elegant construction for a timeless wedding look.",
    details: ["Slim fit", "Double breasted", "Peak lapels", "Ivory lining", "Working buttonholes"],
    colors: makeColors("siena-wed", [["Ivory", "#f5f0e8"], ["Champagne", "#d4c5a9"], ["Light Grey", "#c8c8c8"]], weddingImgs),
    sizes: SUIT_SIZES,
    fit: "Slim",
    fabric: "Premium Wool-Cashmere Blend",
    care: ["Dry clean only"],
  },
  {
    id: "xo-wed-02",
    slug: "havana-linen-wedding",
    name: "The Havana Linen Wedding Suit",
    price: 115000,
    category: "occasion",
    description: "Beat the summer heat in relaxed linen-blend luxury. Effortless elegance for garden parties and beach weddings.",
    details: ["Regular fit", "Two-button", "Notch lapel", "Unlined", "Natural texture"],
    colors: makeColors("havana-wed", [["Natural", "#e8dcc8"], ["Sand", "#c9b99a"], ["White", "#f8f8f8"]], weddingImgs.slice(3)),
    sizes: SUIT_SIZES,
    fit: "Regular",
    fabric: "60% Linen, 40% Cotton",
    care: ["Dry clean recommended", "Light iron when damp"],
  },

  // ── Knitwear ───────────────────────────────────────────────────────────────
  {
    id: "xo-knit-01",
    slug: "crewneck-merino-sweater",
    name: "Merino Crew Neck Sweater",
    price: 28000,
    category: "knitwear",
    description: "Fine merino wool in a classic crew neck silhouette. Lightweight enough to layer under a suit jacket.",
    details: ["Crew neck", "Fine knit", "Ribbed cuffs and hem", "Regular fit"],
    colors: makeColors("merino", [["Navy", "#1a2744"], ["Burgundy", "#6b1a1a"], ["Camel", "#c19a6b"], ["Charcoal", "#3a3a3a"]], knitwearImgs),
    sizes: SHIRT_SIZES,
    fit: "Regular",
    fabric: "100% Extra Fine Merino Wool",
    care: ["Hand wash cold", "Lay flat to dry", "Do not tumble dry"],
  },
  {
    id: "xo-knit-02",
    slug: "rollneck-sweater",
    name: "Merino Roll Neck Sweater",
    price: 32000,
    category: "knitwear",
    description: "A sophisticated roll neck in ultra-soft merino. The ideal companion for tailored trousers.",
    details: ["Roll neck", "Fine gauge knit", "Regular fit", "Ribbed detailing"],
    colors: makeColors("rollneck", [["Ecru", "#f0ead8"], ["Black", "#111111"], ["Forest Green", "#2a4a2a"]], knitwearImgs.slice(3)),
    sizes: SHIRT_SIZES,
    fit: "Regular",
    fabric: "100% Extra Fine Merino Wool",
    care: ["Hand wash cold", "Lay flat to dry"],
  },

  // ── Trousers ───────────────────────────────────────────────────────────────
  {
    id: "xo-trs-01",
    slug: "slim-fit-trousers",
    name: "Slim Fit Dress Trousers",
    price: 32000,
    category: "trousers",
    description: "Clean-lined dress trousers with a slim leg opening. Pairs perfectly with the Milano and Lazio suit jackets.",
    details: ["Slim fit", "Flat front", "Side adjusters", "Cuffed hem", "Belt loops"],
    colors: makeColors("slim-trs", [["Charcoal", "#3a3a3a"], ["Navy", "#1a2744"], ["Mid Grey", "#777777"], ["Beige", "#c9a87c"]], trousersImgs),
    sizes: TROUSER_SIZES,
    fit: "Slim",
    fabric: "100% Wool",
    care: ["Dry clean only"],
  },
  {
    id: "xo-trs-02",
    slug: "pleated-trousers",
    name: "Double Pleated Trousers",
    price: 38000,
    category: "trousers",
    description: "A revival of the classic Italian double pleat. High rise, generous through the thigh with a tapered leg.",
    details: ["Double pleat", "High rise", "Tapered leg", "Cuffed hem", "Side adjusters"],
    colors: makeColors("pleat-trs", [["Olive", "#6b6b3a"], ["Brown", "#5c3d2e"], ["Cream", "#f0ead8"]], trousersImgs.slice(3)),
    sizes: TROUSER_SIZES,
    fit: "Regular",
    fabric: "Wool-Linen Blend",
    care: ["Dry clean only"],
  },

  // ── Shirts ─────────────────────────────────────────────────────────────────
  {
    id: "xo-sht-01",
    slug: "white-poplin-shirt",
    name: "White Poplin Dress Shirt",
    price: 22000,
    category: "shirts",
    description: "The foundation of every great outfit. Crisp white poplin with a semi-spread collar and slim fit.",
    details: ["Slim fit", "Semi-spread collar", "Single cuffs", "French front", "Mother of pearl buttons"],
    colors: makeColors("poplin-sht", [["White", "#f8f8f8"], ["Light Blue", "#a8c4d8"], ["Pale Pink", "#f0d0c8"]], shirtsImgs),
    sizes: SHIRT_SIZES,
    fit: "Slim",
    fabric: "100% Egyptian Cotton Poplin, 140/2",
    care: ["Machine wash at 40°C", "Iron while damp", "Do not tumble dry"],
  },
  {
    id: "xo-sht-02",
    slug: "twill-dress-shirt",
    name: "Twill Dress Shirt",
    price: 26000,
    category: "shirts",
    description: "The subtle diagonal weave of twill gives this shirt a refined texture. Perfect for both formal and smart-casual occasions.",
    details: ["Slim fit", "Spread collar", "Double cuffs", "Plain front", "Contrast stitching"],
    colors: makeColors("twill-sht", [["Navy", "#1a2744"], ["Charcoal", "#3a3a3a"], ["Burgundy", "#6b1a1a"]], shirtsImgs.slice(3)),
    sizes: SHIRT_SIZES,
    fit: "Slim",
    fabric: "100% Cotton Twill",
    care: ["Machine wash at 40°C", "Iron while damp"],
  },

  // ── Polos & T-Shirts ───────────────────────────────────────────────────────
  {
    id: "xo-polo-01",
    slug: "pique-polo",
    name: "Piqué Polo Shirt",
    price: 25000,
    category: "polos-t-shirts",
    description: "A heritage polo in classic cotton piqué. Three-button placket with a slim fit that works equally well tucked or untucked.",
    details: ["Slim fit", "Three-button placket", "Ribbed collar and cuffs", "Side vents", "Embroidered logo"],
    colors: makeColors("pique-polo", [["White", "#f8f8f8"], ["Navy", "#1a2744"], ["Sage Green", "#7a9a7a"], ["Dusty Pink", "#d4a0a0"], ["Camel", "#c19a6b"]], poloImgs),
    sizes: SHIRT_SIZES,
    fit: "Slim",
    fabric: "100% Cotton Piqué",
    care: ["Machine wash at 30°C", "Do not tumble dry", "Cool iron"],
  },
  {
    id: "xo-polo-02",
    slug: "short-sleeve-polo",
    name: "Short Sleeve Polo — Linen",
    price: 30000,
    category: "polos-t-shirts",
    subcategory: "short-sleeve-polos",
    description: "Lightweight linen polo for warm-weather dressing. The relaxed structure pairs beautifully with summer trousers.",
    details: ["Regular fit", "Two-button placket", "Spread collar", "Short sleeves"],
    colors: makeColors("linen-polo", [["Sand", "#c9b99a"], ["Sky Blue", "#8ab4c8"], ["Olive", "#6b6b3a"], ["Off-White", "#f5f0e8"]], poloImgs.slice(4)),
    sizes: SHIRT_SIZES,
    fit: "Regular",
    fabric: "100% Linen",
    care: ["Machine wash at 30°C", "Iron while damp"],
  },

  // ── Linen Collection ───────────────────────────────────────────────────────
  {
    id: "xo-lin-01",
    slug: "linen-unstructured-suit",
    name: "Linen Unstructured Suit",
    price: 88000,
    category: "linen-collection",
    description: "Summer dressing at its finest. Unstructured linen with patch pockets and a relaxed silhouette made for warm days.",
    details: ["Relaxed fit", "Unstructured", "Patch pockets", "Partially lined", "Natural linen texture"],
    colors: makeColors("linen-suit", [["Natural", "#e8dcc8"], ["Sand", "#c9b99a"], ["Sky Blue", "#8ab4c8"], ["Ecru", "#f0ead8"]], linenImgs),
    sizes: SUIT_SIZES,
    fit: "Relaxed",
    fabric: "100% Italian Linen",
    care: ["Dry clean recommended", "Can machine wash at 30°C"],
  },
];

// ── Lookups ───────────────────────────────────────────────────────────────────
export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category || p.subcategory === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}

export const CATEGORY_META: Record<string, { title: string; description: string; heroImage: string }> = {
  "new-arrivals": {
    title: "New Arrivals",
    description: "The latest additions to the XO47 collection.",
    heroImage: "/images/products/X04701947-2-a.jpg",
  },
  suits: {
    title: "Suits",
    description: "Tailored suits for every occasion — from daily wear to black tie.",
    heroImage: "/images/products/X04701947-2-a.jpg",
  },
  blazers: {
    title: "Blazers",
    description: "Sport coats and blazers that elevate any outfit.",
    heroImage: "/images/products/X04700695-a.jpg",
  },
  jackets: {
    title: "Jackets & Blazers",
    description: "Sport coats and blazers that elevate any outfit.",
    heroImage: "/images/products/X04700695-a.jpg",
  },
  tuxedos: {
    title: "Tuxedos & Black Tie",
    description: "The finest formal wear for life's most memorable evenings.",
    heroImage: "/images/products/X04701940-2-a.jpg",
  },
  "black-tie": {
    title: "Tuxedos & Black Tie",
    description: "The finest formal wear for life's most memorable evenings.",
    heroImage: "/images/products/X04701940-2-a.jpg",
  },
  occasion: {
    title: "Occasion Wear",
    description: "Dress for your most important days.",
    heroImage: "/images/products/X04701941-2-a.jpg",
  },
  wedding: {
    title: "Wedding Collection",
    description: "Dress for your most important day.",
    heroImage: "/images/products/X04701941-2-a.jpg",
  },
  knitwear: {
    title: "Knitwear & Sweaters",
    description: "Fine merino and cashmere knits for effortless layering.",
    heroImage: "/images/products/X04701889-a.jpg",
  },
  trousers: {
    title: "Trousers",
    description: "Perfectly cut trousers to complete any ensemble.",
    heroImage: "/images/products/X04702181-a.jpg",
  },
  shirts: {
    title: "Shirts",
    description: "Dress shirts, casual shirts, and everything in between.",
    heroImage: "/images/products/X04701084-a.jpg",
  },
  "polos-t-shirts": {
    title: "Polos & T-Shirts",
    description: "Refined casualwear for the modern gentleman.",
    heroImage: "/images/products/X04702197-a.jpg",
  },
  "linen-collection": {
    title: "Linen Collection",
    description: "Breathable linen pieces for the warmest days.",
    heroImage: "/images/products/X04701954-2-a.jpg",
  },
};
