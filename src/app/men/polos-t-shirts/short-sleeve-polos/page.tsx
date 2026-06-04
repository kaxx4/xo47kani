import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("short-sleeve-polos");

export const metadata: Metadata = {
  title: "Short-Sleeve Polos | XO47",
  description: copy.intro,
};

export default function ShortSleevePolosPage() {
  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          Ease, <span className="italic serif-accent">cut short.</span>
        </>
      }
      intro={copy.intro}
      products={[]}
      emptyNote="This chapter is being woven — speak with the atelier to commission a piece."
    />
  );
}
