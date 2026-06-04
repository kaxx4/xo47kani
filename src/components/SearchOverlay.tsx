"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { PRODUCTS, fmt, type Product } from "@/lib/xo-data";

// ── Static page / destination results ───────────────────────────────────────
const PAGE_RESULTS: { label: string; href: string; tag: string }[] = [
  { label: "Collections", href: "/collections", tag: "Page" },
  { label: "Black Tie", href: "/collections/black-tie", tag: "Collection" },
  { label: "Signature Suits", href: "/collections/suits", tag: "Collection" },
  { label: "Occasion", href: "/collections/occasion", tag: "Collection" },
  { label: "Blazers", href: "/collections/blazers", tag: "Collection" },
  { label: "Shirting", href: "/collections/shirts", tag: "Collection" },
  { label: "Trousers", href: "/collections/trousers", tag: "Collection" },
  { label: "The Bespoke Experience", href: "/bespoke", tag: "Service" },
  { label: "Services", href: "/services", tag: "Page" },
  { label: "The Maison", href: "/maison", tag: "Page" },
  { label: "Our Story", href: "/about/our-story", tag: "Page" },
  { label: "The XO47 Man", href: "/the-xo47-man", tag: "Page" },
  { label: "The Studio — Ambawatta One", href: "/studio", tag: "Page" },
  { label: "Brand Recognition", href: "/brand-recognition", tag: "Page" },
  { label: "Press", href: "/about/press", tag: "Page" },
  { label: "The Journal", href: "/journal/custom-made", tag: "Journal" },
  { label: "Santali", href: "/santali", tag: "Brand" },
  { label: "Book a Consultation", href: "/book-consultation", tag: "Service" },
  { label: "FAQ", href: "/faq", tag: "Help" },
  { label: "Fit Guides", href: "/fit-guides", tag: "Help" },
  { label: "Shipping", href: "/shipping", tag: "Help" },
  { label: "Returns", href: "/returns", tag: "Help" },
];

const POPULAR = ["Suits", "Tuxedo", "Blazer", "Occasion", "Wool", "Ivory"];

const BROWSE: { label: string; href: string }[] = [
  { label: "Black Tie", href: "/collections/black-tie" },
  { label: "Signature Suits", href: "/collections/suits" },
  { label: "Occasion", href: "/collections/occasion" },
  { label: "Blazers", href: "/collections/blazers" },
  { label: "Shirting", href: "/collections/shirts" },
  { label: "Trousers", href: "/collections/trousers" },
];

function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.cut.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q) ||
      p.fabric.toLowerCase().includes(q) ||
      p.cloth.toLowerCase().includes(q)
  ).slice(0, 7);
}

function searchPages(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PAGE_RESULTS.filter((p) => p.label.toLowerCase().includes(q)).slice(0, 5);
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- clear the query when the overlay closes
    setQuery("");
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const productResults = searchProducts(query);
  const pageResults = searchPages(query);
  const hasResults = productResults.length > 0 || pageResults.length > 0;
  const showEmpty = query.trim().length > 1 && !hasResults;
  const handleClose = useCallback(() => onClose(), [onClose]);

  if (!open) return null;

  return (
    <>
      <style>{`
        @keyframes xo-overlay-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes xo-panel-in { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        .xo-search-backdrop { animation: xo-overlay-in 0.28s ease forwards; }
        .xo-search-panel { animation: xo-panel-in 0.34s var(--ease) forwards; }
        .xo-search-input {
          width: 100%; background: transparent; border: none; outline: none;
          font-family: var(--ff-display); font-weight: 500; font-style: italic;
          font-size: clamp(28px, 4.4vw, 52px); line-height: 1.05; color: var(--ink);
          letter-spacing: -0.01em; caret-color: var(--clay);
        }
        .xo-search-input::placeholder { color: rgba(20,17,14,0.34); font-style: italic; }
        .xo-search-input:focus-visible { box-shadow: 0 2px 0 var(--clay); }
        .xo-result-row {
          display: flex; align-items: center; gap: 20px; padding: 14px 0;
          border-bottom: 1px solid var(--line-soft); text-decoration: none; color: inherit;
          transition: background 0.18s ease;
        }
        .xo-result-row:last-child { border-bottom: none; }
        .xo-result-row:hover .xo-result-name { color: var(--clay); }
        .xo-result-row:hover { background: rgba(156,84,53,0.03); }
        .xo-result-thumb { width: 54px; height: 68px; flex-shrink: 0; background: var(--milk); overflow: hidden; }
        .xo-result-thumb img { width: 100%; height: 100%; object-fit: cover; mix-blend-mode: multiply; }
        .xo-page-row {
          display: flex; align-items: center; justify-content: space-between; padding: 13px 0;
          border-bottom: 1px solid var(--line-soft); text-decoration: none; color: inherit;
        }
        .xo-page-row:last-child { border-bottom: none; }
        .xo-page-row:hover .xo-page-label { color: var(--clay); }
        .xo-chip {
          display: inline-flex; align-items: center; height: 36px; padding: 0 18px;
          border: 1px solid var(--line); background: transparent;
          font-family: var(--ff-sans); font-weight: 400; font-size: 0.66rem; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--ink); text-decoration: none;
          transition: border-color 0.3s var(--ease), color 0.3s var(--ease), background 0.3s var(--ease), transform 0.16s var(--ease);
        }
        .xo-chip:hover { border-color: var(--clay); color: var(--clay); background: rgba(156,84,53,0.03); }
        .xo-chip:active { transform: scale(0.96); }
        .xo-search-label {
          font-family: var(--ff-sans); font-weight: 400; font-size: 0.66rem; letter-spacing: 0.4em;
          text-transform: uppercase; color: var(--muted); margin: 0 0 18px;
        }
        @media (prefers-reduced-motion: reduce){ .xo-search-backdrop, .xo-search-panel { animation: none !important; } }
      `}</style>

      {/* Backdrop */}
      <div
        className="xo-search-backdrop"
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(22px) saturate(1.05)",
          WebkitBackdropFilter: "blur(22px) saturate(1.05)",
        }}
      />

      {/* Panel */}
      <div
        className="xo-search-panel"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 201,
          maxHeight: "92vh",
          overflowY: "auto",
          padding: "0 clamp(20px, 6vw, 80px) 56px",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        {/* Input row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            paddingTop: 64,
            paddingBottom: 22,
            borderBottom: "1px solid var(--ink)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.4 }} aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" stroke="var(--ink)" strokeWidth="1.4" />
            <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            className="xo-search-input"
            type="text"
            inputMode="search"
            aria-label="Search the maison"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the maison…"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close search"
            className="ulink"
            style={{ flexShrink: 0, color: "var(--clay)", padding: "10px 2px" }}
          >
            Close
          </button>
        </div>

        {query.trim().length > 0 ? (
          <div style={{ paddingTop: 34, maxWidth: 940 }}>
            {productResults.length > 0 && (
              <div style={{ marginBottom: 44 }}>
                <p className="xo-search-label">The Wardrobe</p>
                {productResults.map((product) => (
                  <Link key={product.slug} href={`/product/${product.slug}`} className="xo-result-row" onClick={handleClose}>
                    <span className="xo-result-thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={product.img} alt={product.name} loading="lazy" decoding="async" />
                    </span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span
                        className="xo-result-name display"
                        style={{ display: "block", fontSize: "1.5rem", lineHeight: 1.1, transition: "color .18s ease" }}
                      >
                        {product.name}
                      </span>
                      <span className="cap" style={{ display: "block", marginTop: 4 }}>
                        {product.cut} · {product.cat}
                      </span>
                    </span>
                    <span style={{ fontFamily: "var(--ff-sans)", fontSize: "0.8rem", color: "var(--muted)", flexShrink: 0 }}>
                      from <span className="tnum">{fmt(product.price)}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {pageResults.length > 0 && (
              <div>
                <p className="xo-search-label">The House</p>
                {pageResults.map((page) => (
                  <Link key={page.href} href={page.href} className="xo-page-row" onClick={handleClose}>
                    <span className="xo-page-label display" style={{ fontSize: "1.3rem", transition: "color .18s ease" }}>
                      {page.label}
                    </span>
                    <span className="mono" style={{ color: "var(--muted)" }}>
                      {page.tag}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {showEmpty && (
              <div style={{ paddingTop: 8 }}>
                <p className="display d-3 italic" style={{ color: "var(--muted)", margin: "0 0 10px" }}>
                  Nothing found for “{query}”.
                </p>
                <p className="lede" style={{ margin: 0, fontSize: "0.95rem" }}>
                  Try a cut, a cloth or an occasion — or simply{" "}
                  <Link href="/book-consultation" className="ulink" style={{ color: "var(--clay)" }} onClick={handleClose}>
                    enquire
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        ) : (
          <div style={{ paddingTop: 38, maxWidth: 940 }}>
            <p className="xo-search-label">Popular Searches</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {POPULAR.map((term) => (
                <button key={term} type="button" className="xo-chip press" onClick={() => setQuery(term)}>
                  {term}
                </button>
              ))}
            </div>
            <div style={{ marginTop: 50 }}>
              <p className="xo-search-label">Browse Collections</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {BROWSE.map((b) => (
                  <Link key={b.href} href={b.href} className="xo-chip" onClick={handleClose}>
                    {b.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
