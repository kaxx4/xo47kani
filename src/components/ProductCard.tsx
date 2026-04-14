import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const firstColor = product.colors[0];
  const image = firstColor?.images[0] ?? "/images/products/X04701947-2-a.jpg";

  return (
    <>
      <style>{`
        .xo-product-card { display: block; text-decoration: none; color: inherit; cursor: pointer; }
        .xo-product-card .xo-card-img-wrap { overflow: hidden; }
        .xo-product-card .xo-card-img-wrap img {
          transition: transform 0.55s cubic-bezier(0.4,0,0.2,1);
        }
        .xo-product-card:hover .xo-card-img-wrap img { transform: scale(1.04); }
      `}</style>

      <Link href={`/product/${product.slug}`} className="xo-product-card">
        {/* Image */}
        <div
          className="xo-card-img-wrap"
          style={{
            position: "relative",
            paddingBottom: "133%",
            overflow: "hidden",
            backgroundColor: "#EDE8E0",
          }}
        >
          <Image
            src={image}
            alt={product.name}
            fill
            unoptimized
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
          />
        </div>

        {/* Info */}
        <div style={{ padding: "14px 0 0" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A9590", margin: "0 0 6px", fontWeight: 400 }}>
            XO47
          </p>
          <p style={{ fontSize: 15, fontWeight: 300, color: "#1C1B18", margin: "0 0 6px", lineHeight: "22px", letterSpacing: "0.01em" }}>
            {product.name}
          </p>
          <p style={{ fontSize: 13, fontWeight: 400, color: "#1C1B18", margin: 0 }}>
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          {product.colors.length > 1 && (
            <p style={{ fontSize: 11, color: "#9A9590", margin: "4px 0 0", fontWeight: 300 }}>
              {product.colors.length} colours available
            </p>
          )}
        </div>
      </Link>
    </>
  );
}
