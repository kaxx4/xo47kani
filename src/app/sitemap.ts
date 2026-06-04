import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/xo-data";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://weknowtailoring.com");

const STATIC_ROUTES = [
  "",
  "/collections",
  "/bespoke",
  "/maison",
  "/santali",
  "/services",
  "/studio",
  "/the-xo47-man",
  "/brand-recognition",
  "/book-consultation",
  "/about/our-story",
  "/about/press",
  "/about/careers",
  "/about/sustainability",
  "/journal/custom-made",
  "/journal/alter-your-fit",
  "/journal/size-passport",
  "/journal/store-experience",
  "/faq",
  "/fit-guides",
  "/shipping",
  "/returns",
  "/terms",
  "/accessibility",
];

const CATEGORIES = ["suits", "blazers", "tuxedos", "trousers", "shirts", "occasion", "black-tie"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...CATEGORIES.map((c) => ({
      url: `${baseUrl}/collections/${c}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${baseUrl}/product/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
