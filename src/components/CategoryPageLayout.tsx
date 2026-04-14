import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/products";

interface CategoryPageLayoutProps {
  title: string;
  description?: string;
  heroImage?: string;
  products: Product[];
}

export function CategoryPageLayout({ title, description, products }: CategoryPageLayoutProps) {
  return (
    <>
      <style>{`
        .cat-header { padding: 80px 20px 48px; padding-top: calc(80px + 56px); }
        @media (min-width: 640px) { .cat-header { padding: 88px 32px 56px; padding-top: calc(88px + 56px); } }
        @media (min-width: 1024px) { .cat-header { padding: 96px 48px 64px; padding-top: calc(96px + 56px); } }

        .cat-header h1 { font-size: clamp(32px, 6vw, 64px); }

        .cat-filter { position: sticky; top: 56px; display: flex; justify-content: space-between; align-items: center; height: 48px; padding: 0 20px; border-bottom: 1px solid #E0DCD5; background: #FAF8F4; z-index: 10; }
        @media (min-width: 640px) { .cat-filter { padding: 0 32px; } }
        @media (min-width: 1024px) { .cat-filter { padding: 0 48px; } }

        .cat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; padding: 24px 20px 80px; background: #FAF8F4; }
        @media (min-width: 640px) { .cat-grid { grid-template-columns: repeat(3, 1fr); padding: 32px 32px 80px; } }
        @media (min-width: 1024px) { .cat-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 48px 48px 96px; } }
      `}</style>

      <SiteHeader />
      <main>
        {/* Page Header */}
        <div className="cat-header" style={{ backgroundColor: "#1C1B18" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              margin: "0 0 16px",
              fontWeight: 400,
            }}
          >
            XO47 COLLECTIONS
          </p>
          <h1
            style={{
              color: "#fff",
              fontWeight: 300,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 15,
                fontWeight: 300,
                margin: 0,
                maxWidth: 480,
                lineHeight: "24px",
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Filter bar */}
        <div className="cat-filter">
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9A9590",
              fontWeight: 400,
            }}
          >
            {products.length} item{products.length !== 1 ? "s" : ""}
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["FILTER", "SORT"].map((label) => (
              <button
                key={label}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#1C1B18",
                  cursor: "pointer",
                  padding: 0,
                  minHeight: 36,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        {products.length > 0 ? (
          <div className="cat-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "80px 20px",
              color: "#9A9590",
              backgroundColor: "#FAF8F4",
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 300 }}>No items in this collection yet.</p>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
