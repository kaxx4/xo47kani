import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { PRODUCTS } from "@/lib/xo-data";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("black-tie-collection");

export const metadata: Metadata = {
  title: "Black Tie | XO47",
  description: copy.intro,
};

export default function BlackTieCollectionPage() {
  const products = copy.filter ? PRODUCTS.filter((p) => p.cat === copy.filter) : PRODUCTS;

  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          Drama, held in <span className="italic serif-accent">restraint.</span>
        </>
      }
      intro={copy.intro}
      products={products}
      emptyNote="This chapter is being woven. Speak with the atelier to commission a piece."
    />
  );
}
