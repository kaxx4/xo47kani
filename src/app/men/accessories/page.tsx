import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("accessories");

export const metadata: Metadata = {
  title: "Accessories | XO47",
  description: copy.intro,
};

export default function AccessoriesPage() {
  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          Worn in <span className="italic serif-accent">the detail.</span>
        </>
      }
      intro={copy.intro}
      products={[]}
      emptyNote="This chapter is being woven — speak with the atelier to commission a piece."
    />
  );
}
