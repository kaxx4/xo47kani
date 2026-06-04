import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, FEATURE, img, type Product } from "@/lib/xo-data";
import { ProductDetail, type ProductDetailModel } from "@/components/xo/product/ProductDetail";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: `${product.name} — ${product.cut} | XO47` };
}

/* Build a rich detail model for any product, using FEATURE as the house template. */
function buildDetail(product: Product): ProductDetailModel {
  if (product.slug === FEATURE.slug) {
    return {
      name: FEATURE.name,
      cut: FEATURE.cut,
      priceFrom: FEATURE.priceFrom,
      house: FEATURE.house,
      description: FEATURE.description,
      fabric: FEATURE.fabric,
      cloths: FEATURE.cloths,
      sizes: FEATURE.sizes,
      details: FEATURE.details,
      gallery: FEATURE.gallery,
      cat: product.cat,
    };
  }

  /* Complementary look images for the gallery (skip any that duplicate the hero). */
  const fillers = [img("look-02.jpg"), img("look-07.jpg"), img("look-01.jpg"), img("look-04.jpg")].filter(
    (g) => g !== product.img
  );
  const gallery = [product.img, ...fillers].slice(0, 4);

  /* Tailor the first detail row's value (Construction) to the product's cloth, naturally. */
  const details: [string, string][] = FEATURE.details.map((d, i) =>
    i === 0 ? [d[0], `${d[1]} · ${product.cloth}`] : d
  );

  return {
    name: product.name,
    cut: product.cut,
    priceFrom: product.price,
    house: "XO47 · Bespoke Commission",
    description: FEATURE.description,
    fabric: product.fabric,
    cloths: FEATURE.cloths,
    sizes: FEATURE.sizes,
    details,
    gallery,
    cat: product.cat,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const detail = buildDetail(product);
  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return <ProductDetail product={product} detail={detail} related={related} />;
}
