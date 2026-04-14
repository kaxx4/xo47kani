import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { PRODUCTS } from "@/lib/products";

export default function CollectionsPage() {
  return (
    <CategoryPageLayout
      title="All Collections"
      description="The complete XO47 catalogue — suits, blazers, tuxedos, and more."
      heroImage="/images/products/X04701947-2-a.jpg"
      products={PRODUCTS}
    />
  );
}
