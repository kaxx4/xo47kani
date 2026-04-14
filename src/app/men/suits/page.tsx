import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory, CATEGORY_META } from "@/lib/products";

export default function SuitsPage() {
  const meta = CATEGORY_META["suits"];
  const products = getProductsByCategory("suits");
  return (
    <CategoryPageLayout
      title={meta.title}
      description={meta.description}
      heroImage={meta.heroImage}
      products={products}
    />
  );
}
