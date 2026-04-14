import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory } from "@/lib/products";

export default function ShortSleevePolosPage() {
  const products = getProductsByCategory("short-sleeve-polos");
  return (
    <CategoryPageLayout
      title="Short Sleeve Polos"
      heroImage="/images/products/X04702197-a.jpg"
      products={products}
    />
  );
}
