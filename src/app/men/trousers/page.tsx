import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory, CATEGORY_META } from "@/lib/products";

export default function TrousersPage() {
  const meta = CATEGORY_META["trousers"];
  const products = getProductsByCategory("trousers");
  return (
    <CategoryPageLayout
      title={meta.title}
      description={meta.description}
      heroImage={meta.heroImage}
      products={products}
    />
  );
}
