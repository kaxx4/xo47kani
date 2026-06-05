"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { fmt, img, type Product } from "@/lib/xo-data";

/* Map a product category to its real collection route. */
function catHref(cat: string): string {
  switch (cat) {
    case "Suits":
      return "/collections/suits";
    case "Black Tie":
      return "/collections/black-tie";
    case "Occasion":
      return "/collections/occasion";
    case "Blazers":
      return "/collections/blazers";
    default:
      return "/collections";
  }
}

/* The detail model — FEATURE's rich fields, tailored per product in page.tsx. */
export interface ProductDetailModel {
  name: string;
  cut: string;
  priceFrom: number;
  house: string;
  description: string;
  fabric: string;
  cloths: { name: string; hex: string }[];
  sizes: string[];
  details: [string, string][];
  gallery: string[];
  /* breadcrumb middle — the product's category */
  cat: string;
}

interface ProductDetailProps {
  product: Product;
  detail: ProductDetailModel;
  related: Product[];
}

/* XO47 — Product detail (enquiry-based commission).
   Faithful port of product.jsx, generalised to every product via `detail`. */
export function ProductDetail({ product, detail: p, related }: ProductDetailProps) {
  const [cloth, setCloth] = useState(0);
  const [size, setSize] = useState<number | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      <div className="wrap-wide" style={{ paddingTop: 104, paddingBottom: 24 }}>
        <div className="mono" style={{ color: "var(--muted)" }}>
          <Link href="/" className="tap">XO47</Link>
          <span style={{ margin: "0 10px" }}>/</span>
          <Link href={catHref(p.cat)} className="tap">{p.cat}</Link>
          <span style={{ margin: "0 10px" }}>/</span>
          <span style={{ color: "var(--ink)" }}>{p.name}</span>
        </div>
      </div>

      <div
        className="wrap-wide pr-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, paddingBottom: "var(--sec)" }}
      >
        {/* Gallery */}
        <div>
          <div className="zoom clip" style={{ aspectRatio: "4/5", marginBottom: 14 }}>
            <Figure src={p.gallery[activeImg]} alt={p.name} float style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {p.gallery.map((g, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
                aria-pressed={activeImg === i}
                className="zoom press"
                style={{
                  aspectRatio: "3/4",
                  outline: activeImg === i ? "1px solid var(--ink)" : "1px solid var(--line)",
                  outlineOffset: -1,
                }}
              >
                <Figure src={g} alt="" float style={{ width: "100%", height: "100%", pointerEvents: "none" }} />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="pr-info">
          <Reveal>
            <div className="over" style={{ color: "var(--muted)", marginBottom: 22 }}>
              {p.house}
            </div>
            <h1 className="display" style={{ fontSize: "clamp(2.8rem,5.4vw,5rem)", lineHeight: 0.94 }}>
              {p.name}
            </h1>
            <p className="display d-3 italic" style={{ color: "var(--clay)", margin: "6px 0 26px" }}>
              {p.cut}
            </p>
            <div style={{ fontFamily: "var(--ff-sans)", fontSize: "1.05rem", marginBottom: 32 }}>
              <span style={{ color: "var(--muted)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>FROM </span>
              <span className="tnum">{fmt(p.priceFrom)}</span>
            </div>
            <p className="lede" style={{ marginBottom: 40 }}>
              {p.description}
            </p>

            <div style={{ marginBottom: 34 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span className="over">Cloth</span>
                <span className="cap">{p.cloths[cloth].name}</span>
              </div>
              <div style={{ display: "flex", gap: 14 }}>
                {p.cloths.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCloth(i)}
                    title={c.name}
                    aria-label={`Cloth — ${c.name}`}
                    aria-pressed={cloth === i}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: c.hex,
                      outline: cloth === i ? "1px solid var(--ink)" : "1px solid var(--line)",
                      outlineOffset: 3,
                      transition: "outline-offset .25s var(--ease), transform .16s var(--ease)",
                    }}
                    onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
                    onMouseUp={(e) => (e.currentTarget.style.transform = "")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                  />
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 34 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span className="over">Indicative Size</span>
                <span className="cap" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Tailored to you
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {p.sizes.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSize(i)}
                    aria-pressed={size === i}
                    className="press"
                    style={{
                      minWidth: 64,
                      height: 50,
                      padding: "0 14px",
                      border: size === i ? "1px solid var(--ink)" : "1px solid var(--line)",
                      background: size === i ? "var(--ink)" : "transparent",
                      color: size === i ? "var(--milk)" : "var(--ink)",
                      fontFamily: "var(--ff-sans)",
                      fontSize: "0.74rem",
                      letterSpacing: "0.12em",
                      transition: "border-color .3s var(--ease), background .3s var(--ease), color .3s var(--ease), transform .16s var(--ease)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 14 }}>
              <Link
                href={`/book-consultation?piece=${encodeURIComponent(product.name + " — " + product.cut)}`}
                className="btn"
                style={{ flex: 1, minWidth: 240 }}
              >
                Enquire to Commission
              </Link>
              <Link
                href="/wishlist"
                className="btn btn-ghost"
                style={{ width: 58, padding: 0 }}
                title="Save"
                aria-label="Save"
              >
                <span aria-hidden="true">♡</span>
              </Link>
            </div>
            <p className="cap" style={{ marginBottom: 42 }}>
              Begins with a consultation at Ambawatta One · Made to order in 3–4 weeks
            </p>

            <div style={{ borderTop: "1px solid var(--ink)" }}>
              {p.details.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "0.9fr 1.4fr",
                    gap: 18,
                    padding: "16px 0",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span className="over" style={{ color: "var(--muted)" }}>
                    {d[0]}
                  </span>
                  <span style={{ fontSize: "0.9rem" }}>{d[1]}</span>
                </div>
              ))}
            </div>
            <p className="lede" style={{ fontSize: "0.92rem", marginTop: 28 }}>
              <span className="over" style={{ display: "block", marginBottom: 10, color: "var(--muted)" }}>
                The Cloth
              </span>
              {p.fabric}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Editorial band */}
      <section style={{ background: "var(--clay)", color: "var(--milk)", overflow: "hidden" }}>
        <div
          className="wrap-wide pr-band"
          style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "center", gap: 40 }}
        >
          <div style={{ padding: "var(--sec) 0" }}>
            <Reveal>
              <div className="over" style={{ color: "rgba(247,243,235,0.6)", marginBottom: 24 }}>
                On the Body
              </div>
              <h2 className="display d-1" style={{ marginBottom: 26 }}>
                Drama, held in
                <br />
                <span className="italic">complete restraint.</span>
              </h2>
              <p className="lede" style={{ color: "rgba(247,243,235,0.85)", maxWidth: "44ch" }}>
                Hand-set over sixty hours so the embellishment reveals itself only as you move. It is not for you
                to show — it is for you to feel.
              </p>
            </Reveal>
          </div>
          <Reveal style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>
            <Figure
              src={img("look-01.jpg")}
              alt="Detail"
              float
              style={{ aspectRatio: "3/4", maxHeight: "76vh", width: "100%" }}
              imgStyle={{ objectFit: "contain", objectPosition: "center bottom" }}
            />
          </Reveal>
        </div>
        <style>{`@media(min-width:880px){.pr-band{grid-template-columns:1.05fr 0.8fr !important;gap:60px !important}}`}</style>
      </section>

      {/* Complete the look */}
      <section style={{ padding: "var(--sec) 0", background: "var(--milk)" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              Complete the Commission
            </div>
            <h2 className="display d-1" style={{ marginBottom: 56 }}>
              Worn <span className="italic serif-accent">with.</span>
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
              gap: "50px 34px",
            }}
          >
            {related.map((rp, i) => (
              <Reveal key={rp.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link href={`/product/${rp.slug}`} style={{ display: "block" }}>
                  <div className="zoom" style={{ position: "relative" }}>
                    <Figure src={rp.img} alt={rp.name} float style={{ aspectRatio: "4/5" }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: 12,
                      marginTop: 16,
                    }}
                  >
                    <h3 className="display d-3" style={{ fontSize: "1.25rem" }}>
                      {rp.name}
                    </h3>
                    <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
                      from <span className="tnum">{fmt(rp.price)}</span>
                    </span>
                  </div>
                  <p className="cap" style={{ marginTop: 6 }}>
                    {rp.cut}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(min-width:920px){
          .pr-grid{grid-template-columns:1.1fr 0.9fr !important;gap:70px !important}
          .pr-info{position:sticky;top:96px;align-self:start}
        }
      `}</style>
    </div>
  );
}
