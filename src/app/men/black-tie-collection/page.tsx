import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory, CATEGORY_META } from "@/lib/products";

export default function BlackTieCollectionPage() {
  const meta = CATEGORY_META["black-tie"];
  const products = getProductsByCategory("black-tie");
  return (
    <CategoryPageLayout
      title={meta.title}
      description={meta.description}
      heroImage={meta.heroImage}
      products={products}
    />
  );
}
