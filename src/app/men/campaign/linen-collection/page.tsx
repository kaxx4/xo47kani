import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory, CATEGORY_META } from "@/lib/products";

export default function LinenCollectionPage() {
  const meta = CATEGORY_META["linen-collection"];
  const products = getProductsByCategory("linen-collection");
  return (
    <CategoryPageLayout
      title={meta.title}
      description={meta.description}
      heroImage={meta.heroImage}
      products={products}
    />
  );
}
