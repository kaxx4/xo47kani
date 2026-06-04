import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { PRODUCTS } from "@/lib/xo-data";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("suits");

export const metadata: Metadata = {
  title: "Signature Suits | XO47",
  description: copy.intro,
};

export default function SuitsPage() {
  const products = copy.filter ? PRODUCTS.filter((p) => p.cat === copy.filter) : PRODUCTS;

  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          Cut to a single <span className="italic serif-accent">body.</span>
        </>
      }
      intro={copy.intro}
      products={products}
      emptyNote="This chapter is being woven. Speak with the atelier to commission a piece."
    />
  );
}
