import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("jackets");

export const metadata: Metadata = {
  title: "Jackets & Blazers | XO47",
  description: copy.intro,
};

export default function JacketsPage() {
  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          The art of the <span className="italic serif-accent">soft shoulder.</span>
        </>
      }
      intro={copy.intro}
      products={[]}
      emptyNote="This chapter is being woven — speak with the atelier to commission a piece."
    />
  );
}
