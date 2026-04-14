import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory } from "@/lib/products";

export default function CoatsPage() {
  const products = getProductsByCategory("coats");
  return (
    <CategoryPageLayout
      title="Coats"
      heroImage="/images/products/card-3.png"
      products={products}
    />
  );
}
