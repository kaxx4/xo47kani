import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory, CATEGORY_META } from "@/lib/products";

export default function PolosTShirtsPage() {
  const meta = CATEGORY_META["polos-t-shirts"];
  const products = getProductsByCategory("polos-t-shirts");
  return (
    <CategoryPageLayout
      title={meta.title}
      description={meta.description}
      heroImage={meta.heroImage}
      products={products}
    />
  );
}
