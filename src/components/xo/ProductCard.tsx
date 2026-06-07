import Link from "next/link";
import { Figure } from "@/components/xo/Figure";
import { fmt, type Product } from "@/lib/xo-data";

/* Editorial product card — floating multiply figure, watermark numeral,
   category tag, name + from-price, cut · fabric caption. */
export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={`/product/${product.slug}`} className="press" style={{ display: "block" }}>
      <div style={{ position: "relative" }}>
        <span
          className="watermark tnum"
          style={{
            position: "absolute",
            top: "-0.3em",
            right: "-0.05em",
            fontSize: "clamp(4rem,7vw,7rem)",
            color: "var(--clay)",
            opacity: 0.13,
            zIndex: 0,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="zoom" style={{ position: "relative", zIndex: 1 }}>
          <Figure src={product.img} alt={product.name} float style={{ aspectRatio: "4/5" }} />
        </div>
        <span className="cap" style={{ position: "absolute", top: 14, left: 0, zIndex: 2, color: "var(--muted)" }}>
          {product.cat}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, marginTop: 18 }}>
        <h3 className="display d-3">{product.name}</h3>
        <span style={{ fontFamily: "var(--ff-sans)", fontSize: "0.78rem", whiteSpace: "nowrap", color: "var(--muted)" }}>
          from <span className="tnum">{fmt(product.price)}</span>
        </span>
      </div>
      <p className="cap" style={{ marginTop: 7 }}>
        {product.cut} · {product.fabric}
      </p>
    </Link>
  );
}
