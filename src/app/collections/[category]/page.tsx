import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { getProductsByCategory, CATEGORY_META } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  const products = getProductsByCategory(category);
  if (!meta) notFound();
  return (
    <CategoryPageLayout
      title={meta?.title ?? category.charAt(0).toUpperCase() + category.slice(1)}
      description={meta?.description}
      heroImage={meta?.heroImage ?? "/images/products/X04701947-2-a.jpg"}
      products={products}
    />
  );
}
