import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { PRODUCTS } from "@/lib/xo-data";
import { getCategory } from "@/lib/xo-categories";

export function generateStaticParams() {
  return [
    { category: "suits" },
    { category: "blazers" },
    { category: "tuxedos" },
    { category: "trousers" },
    { category: "shirts" },
    { category: "occasion" },
    { category: "black-tie" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const copy = getCategory(category);
  return {
    title: `${copy.title.replace(/\.$/, "")} — ${copy.eyebrow} | XO47`,
    description: copy.intro,
  };
}

export default async function CollectionCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const copy = getCategory(category);
  const products = copy.filter ? PRODUCTS.filter((p) => p.cat === copy.filter) : PRODUCTS;
  const lead = copy.title.slice(0, copy.title.length - copy.accent.length);

  return (
    <CategoryPageLayout
      eyebrow={copy.eyebrow}
      title={
        <>
          {lead}
          <span className="italic serif-accent">{copy.accent}</span>
        </>
      }
      intro={copy.intro}
      products={products}
      emptyNote="This chapter is being woven. Speak with the atelier to commission a piece."
    />
  );
}
