"use client";
import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/xo/Reveal";
import { ProductCard } from "@/components/xo/ProductCard";
import type { Product } from "@/lib/xo-data";

interface CategoryPageLayoutProps {
  eyebrow: string;
  title: ReactNode;
  meta?: string;
  intro?: string;
  products: Product[];
  /* When provided, renders a filter rail; "All" is prepended automatically. */
  filters?: string[];
  /* Sub-line under the filter rail (e.g. "Each piece is made to order · 3–4 weeks"). */
  note?: string;
  /* Optional message when the filtered list is empty. */
  emptyNote?: string;
}

export function CategoryPageLayout({
  eyebrow,
  title,
  meta,
  intro,
  products,
  filters,
  note = "Each piece is made to order · 3–4 weeks",
  emptyNote = "This chapter is being woven. Speak with the atelier to commission a piece.",
}: CategoryPageLayoutProps) {
  const cats = filters ? ["All", ...filters] : null;
  const [cat, setCat] = useState("All");
  const list = !cats || cat === "All" ? products : products.filter((p) => p.cat === cat);

  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid var(--ink)",
                paddingBottom: 18,
              }}
            >
              <span className="over">{eyebrow}</span>
              <span className="over" style={{ color: "var(--muted)" }}>
                {meta ?? `${list.length} pieces · enquiry only`}
              </span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display d-mega" style={{ margin: "clamp(16px,2.4vw,32px) 0 clamp(16px,2.4vw,30px)" }}>
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={2}>
              <p className="lede" style={{ maxWidth: "60ch", marginTop: -10, marginBottom: 34 }}>
                {intro}
              </p>
            </Reveal>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 18,
              paddingBottom: 22,
              borderBottom: "1px solid var(--line)",
            }}
          >
            {cats ? (
              <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
                {cats.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCat(c)}
                    aria-pressed={cat === c}
                    className={`ulink press tap${cat === c ? " ulink--active" : ""}`}
                    style={{ opacity: cat === c ? 1 : 0.5, color: cat === c ? "var(--clay)" : "var(--ink)" }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            ) : (
              <span className="over" style={{ color: "var(--muted)" }}>
                The Wardrobe
              </span>
            )}
            <span className="cap">{note}</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 var(--sec-lg)" }}>
        <div className="wrap-wide">
          {list.length === 0 ? (
            <Reveal>
              <p className="lede" style={{ maxWidth: "40ch" }}>
                {emptyNote}
              </p>
            </Reveal>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: "clamp(42px,5vw,72px) 40px" }}>
              {list.map((p, i) => (
                <Reveal key={p.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <ProductCard product={p} index={i} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
