import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory } from "@/lib/products";

export default function AccessoriesPage() {
  const products = getProductsByCategory("accessories");
  return (
    <CategoryPageLayout
      title="Accessories"
      heroImage="/images/products/X04701889-a.jpg"
      products={products}
    />
  );
}
