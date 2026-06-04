import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("polos-t-shirts");

export const metadata: Metadata = {
  title: "Polos & T-Shirts | XO47",
  description: copy.intro,
};

export default function PolosTShirtsPage() {
  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          Ease, <span className="italic serif-accent">made precise.</span>
        </>
      }
      intro={copy.intro}
      products={[]}
      emptyNote="This chapter is being woven — speak with the atelier to commission a piece."
    />
  );
}
