import { CategoryPageLayout } from "@/components/xo/CategoryPageLayout";
import { PRODUCTS } from "@/lib/xo-data";

export const metadata = {
  title: "The Wardrobe — Collections | XO47",
  description: "Black tie, signature suits, occasion wear, blazers and more — each piece made to order in New Delhi.",
};

export default function CollectionsPage() {
  return (
    <CategoryPageLayout
      eyebrow="The Collections"
      title={
        <>
          The <span className="italic serif-accent">Wardrobe</span>
        </>
      }
      products={PRODUCTS}
      filters={["Suits", "Black Tie", "Occasion", "Blazers"]}
      note="Each piece is made to order · 3–4 weeks"
    />
  );
}
