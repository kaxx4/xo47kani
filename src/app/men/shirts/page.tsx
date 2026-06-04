import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { getCategory } from "@/lib/xo-categories";

const copy = getCategory("shirts");

export const metadata: Metadata = {
  title: "Shirting | XO47",
  description: copy.intro,
};

export default function ShirtsPage() {
  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          The foundation, <span className="italic serif-accent">beneath it all.</span>
        </>
      }
      intro={copy.intro}
      products={[]}
      emptyNote="This chapter is being woven — speak with the atelier to commission a piece."
    />
  );
}
