import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory } from "@/lib/products";

export default function ShoesPage() {
  const products = getProductsByCategory("shoes");
  return (
    <CategoryPageLayout
      title="Shoes"
      heroImage="/images/products/card.png"
      products={products}
    />
  );
}
