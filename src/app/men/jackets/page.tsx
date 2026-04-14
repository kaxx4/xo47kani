import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory, CATEGORY_META } from "@/lib/products";

export default function JacketsPage() {
  const meta = CATEGORY_META["jackets"];
  const products = getProductsByCategory("jackets");
  return (
    <CategoryPageLayout
      title={meta.title}
      description={meta.description}
      heroImage={meta.heroImage}
      products={products}
    />
  );
}
