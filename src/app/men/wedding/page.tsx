import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { PRODUCTS } from "@/lib/xo-data";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("wedding");

export const metadata: Metadata = {
  title: "Wedding & Occasion | XO47",
  description: copy.intro,
};

export default function WeddingPage() {
  const products = copy.filter ? PRODUCTS.filter((p) => p.cat === copy.filter) : PRODUCTS;

  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          For the day that <span className="italic serif-accent">holds.</span>
        </>
      }
      intro={copy.intro}
      products={products}
      emptyNote="This chapter is being woven. Speak with the atelier to commission a piece."
    />
  );
}
