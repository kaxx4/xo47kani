"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const collections = [
  { label: "Signature Suits", href: "/collections/suits", image: "/images/products/X04701947-2-a.jpg", desc: "From daily wear to black tie" },
  { label: "Blazers", href: "/collections/blazers", image: "/images/products/X04700695-a.jpg", desc: "Refined separates for every occasion" },
  { label: "Tuxedos & Black Tie", href: "/collections/tuxedos", image: "/images/products/X04701940-2-a.jpg", desc: "For the moments that define you" },
  { label: "Occasion Wear", href: "/collections/occasion", image: "/images/products/X04701941-2-a.jpg", desc: "Weddings, celebrations, milestones" },
  { label: "Trousers", href: "/collections/trousers", image: "/images/products/X04702181-a.jpg", desc: "Precision-cut, perfectly draped" },
  { label: "Shirts", href: "/collections/shirts", image: "/images/products/X04701084-a.jpg", desc: "The foundation of the wardrobe" },
];

export function XOCollections() {
  const { ref: headerRef, isVisible: headerVisible } = useInView();

  return (
    <section className="xo-section-pad" style={{ backgroundColor: "#FAF8F4" }}>
      <style>{`
        .collections-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background-color: #E0DCD5;
        }
        @media (min-width: 640px)  { .collections-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .collections-grid { grid-template-columns: repeat(3, 1fr); } }
        .col-card-overlay { transition: background 0.4s ease; }
        .col-card:hover .col-card-overlay {
          background: linear-gradient(to bottom, transparent 35%, rgba(28,27,24,0.85)) !important;
        }
        .col-card-img { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .col-card:hover .col-card-img { transform: scale(1.04); }
      `}</style>

      {/* Header row */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={`xo-stagger xo-fade-in${headerVisible ? " is-visible" : ""}`}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 56,
        }}
      >
        <div className="xo-fade-in">
          <p className="xo-label-text" style={{ marginBottom: 14 }}>The Collections</p>
          <h2 className="xo-h2" style={{ margin: 0 }}>
            Crafted for every<br />chapter of your life.
          </h2>
        </div>
        <Link
          href="/collections"
          className="xo-fade-in xo-link"
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#1C1B18",
            textDecoration: "none",
            borderBottom: "1px solid rgba(28,27,24,0.4)",
            paddingBottom: 2,
          }}
        >
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="collections-grid">
        {collections.map((col) => (
          <Link
            key={col.href}
            href={col.href}
            className="col-card"
            style={{ display: "block", textDecoration: "none", color: "inherit", backgroundColor: "#EDE8E0" }}
          >
            <div style={{ position: "relative", paddingBottom: "133%", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <Image
                  className="col-card-img"
                  src={col.image}
                  alt={col.label}
                  fill
                  unoptimized
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div
                className="col-card-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 35%, rgba(28,27,24,0.72))",
                }}
              />
              <div style={{ position: "absolute", bottom: 24, left: 20, right: 20, padding: "0 0 0 0" }}>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    letterSpacing: "0.01em",
                    color: "#fff",
                    margin: "0 0 4px",
                  }}
                >
                  {col.label}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                  }}
                >
                  {col.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
