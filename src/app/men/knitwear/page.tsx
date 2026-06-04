import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("knitwear");

export const metadata: Metadata = {
  title: "Knitwear | XO47",
  description: copy.intro,
};

export default function KnitwearPage() {
  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          Quiet, against <span className="italic serif-accent">the skin.</span>
        </>
      }
      intro={copy.intro}
      products={[]}
      emptyNote="This chapter is being woven — speak with the atelier to commission a piece."
    />
  );
}
