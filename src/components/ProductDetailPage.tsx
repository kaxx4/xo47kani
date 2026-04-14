"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ProductDetailPageProps {
  product: Product;
}

// ─── Size Guide Data ──────────────────────────────────────────────────────────
const SIZES_COLS = ["XS", "S", "M", "L", "XL", "XXL"];

const BODY_ROWS: { label: string; values: string[] }[] = [
  { label: "Chest (cm)", values: ["86–90", "91–96", "97–101", "102–107", "108–113", "114–120"] },
  { label: "Waist (cm)", values: ["74–78", "79–84", "85–90", "91–96", "97–102", "103–108"] },
  { label: "Hips (cm)", values: ["90–94", "95–100", "101–106", "107–112", "113–118", "119–125"] },
  { label: "Neck (cm)", values: ["37–38", "39–40", "41–42", "43–44", "45–46", "47–48"] },
];

const GARMENT_ROWS: { label: string; values: string[] }[] = [
  { label: "Chest", values: ["96", "102", "106", "112", "118", "124"] },
  { label: "Shoulder", values: ["42", "44", "46", "48", "50", "52"] },
  { label: "Length (jacket)", values: ["74", "76", "78", "80", "82", "84"] },
  { label: "Sleeve", values: ["62", "63", "64", "65", "66", "67"] },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const accordionId = `accordion-${title.toLowerCase().replace(/\s+/g, "-")}`;
  const buttonId = `accordion-btn-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div style={{ borderTop: "1px solid #E0DCD5" }}>
      <button
        id={buttonId}
        onClick={onToggle}
        className="acc-toggle"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 0",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontWeight: 400,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#1C1B18",
          textAlign: "left",
        }}
        aria-expanded={isOpen}
        aria-controls={accordionId}
      >
        <span>{title}</span>
        <span
          style={{
            fontSize: "18px",
            lineHeight: 1,
            color: "#9A9590",
            fontWeight: 300,
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        id={accordionId}
        role="region"
        aria-labelledby={buttonId}
        className="acc-content"
        style={{
          maxHeight: isOpen ? "400px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div style={{ paddingBottom: "16px", fontSize: "13px", color: "#9A9590", lineHeight: 1.7, fontWeight: 300 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Size Guide Modal ─────────────────────────────────────────────────────────
function SizeGuideModal({
  onClose,
  activeTab,
  setActiveTab,
}: {
  onClose: () => void;
  activeTab: "body" | "garment";
  setActiveTab: (t: "body" | "garment") => void;
}) {
  const rows = activeTab === "body" ? BODY_ROWS : GARMENT_ROWS;

  return (
    <div
      onClick={onClose}
      className="size-modal-overlay"
    >
      {/* Modal panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="size-modal"
        style={{
          background: "#FAF8F4",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#1C1B18",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FAF8F4",
            }}
          >
            Size Guide
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              lineHeight: 1,
              color: "rgba(255,255,255,0.6)",
              padding: "4px 8px",
            }}
            aria-label="Close size guide"
          >
            &times;
          </button>
        </div>

        <div style={{ padding: "24px 32px 32px" }}>
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #E0DCD5",
              marginBottom: "20px",
            }}
          >
            {(["body", "garment"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: activeTab === tab ? "2px solid #8C6A4A" : "2px solid transparent",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: activeTab === tab ? 500 : 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: activeTab === tab ? "#8C6A4A" : "#9A9590",
                  marginBottom: "-1px",
                  transition: "all 0.2s ease",
                }}
              >
                {tab === "body" ? "Body Measurements" : "Garment Measurements"}
              </button>
            ))}
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      backgroundColor: "#1C1B18",
                      color: "#FAF8F4",
                      fontWeight: 400,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                      fontSize: "11px",
                    }}
                  >
                    Measurement
                  </th>
                  {SIZES_COLS.map((s) => (
                    <th
                      key={s}
                      style={{
                        textAlign: "center",
                        padding: "10px 12px",
                        backgroundColor: "#1C1B18",
                        color: "#FAF8F4",
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                        fontSize: "11px",
                      }}
                    >
                      {s}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} style={{ backgroundColor: i % 2 === 0 ? "#FAF8F4" : "#EDE8E0" }}>
                    <td
                      style={{
                        padding: "10px 12px",
                        color: "#1C1B18",
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                      }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        style={{ textAlign: "center", padding: "10px 12px", color: "#1C1B18", fontSize: "12px" }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"body" | "garment">("body");

  const selectedColor = product.colors[selectedColorIndex];
  const galleryImages =
    selectedColor.images.slice(0, 5).length > 0
      ? selectedColor.images.slice(0, 5)
      : [selectedColor.images[0]];

  const mainImage = galleryImages[selectedImageIndex] ?? galleryImages[0];

  function handleColorChange(idx: number) {
    setSelectedColorIndex(idx);
    setSelectedImageIndex(0);
  }

  function toggleAccordion(key: string) {
    setOpenAccordion((prev) => (prev === key ? null : key));
  }

  const detailBullets =
    product.details.length > 0
      ? product.details
      : ["Slim fit", "Half canvas construction", "Peak lapels", "Side vents", "Functional buttons"];

  const fabricLines = [product.fabric, ...product.care];

  return (
    <>
      <style>{`
        .pdp-layout { display: flex; flex-direction: column; background: #FAF8F4; padding-top: 56px; min-height: 100vh; }
        @media (min-width: 768px) { .pdp-layout { flex-direction: row; align-items: flex-start; } }

        .pdp-gallery { width: 100%; }
        @media (min-width: 768px) { .pdp-gallery { width: 60%; position: sticky; top: 56px; } }

        .pdp-info { width: 100%; padding: 24px 20px 60px; }
        @media (min-width: 768px) { .pdp-info { width: 40%; padding: 40px 40px 60px; position: sticky; top: 56px; max-height: calc(100vh - 56px); overflow-y: auto; } }

        .pdp-thumb-strip { display: flex; flex-direction: row; overflow-x: auto; gap: 8px; padding: 12px 16px; -webkit-overflow-scrolling: touch; scrollbar-width: none; order: 2; }
        .pdp-thumb-strip::-webkit-scrollbar { display: none; }
        @media (min-width: 768px) { .pdp-thumb-strip { flex-direction: column; padding: 8px 0; overflow-x: visible; overflow-y: auto; width: 60px; flex-shrink: 0; gap: 6px; order: 0; } }

        .pdp-gallery-inner { display: flex; flex-direction: column; }
        @media (min-width: 768px) { .pdp-gallery-inner { flex-direction: row; gap: 8px; } }

        .pdp-main-img-wrap { position: relative; width: 100%; padding-bottom: 125%; flex: 1; }
        @media (min-width: 768px) { .pdp-main-img-wrap { padding-bottom: 0; min-height: 600px; } }

        .pdp-size-btn { min-width: 44px; height: 44px; padding: 0 12px; border: 1px solid #E0DCD5; background: white; font-size: 12px; letter-spacing: 0.08em; cursor: pointer; transition: border-color 0.15s ease, background-color 0.15s ease; border-radius: 1px; }
        .pdp-size-btn.selected { border-color: #1C1B18; background: #1C1B18; color: #FAF8F4; }
        .pdp-size-btn:hover:not(.selected) { border-color: #9A9590; }

        .size-modal-overlay { position: fixed; inset: 0; z-index: 100; background: rgba(28,27,24,0.5); display: flex; align-items: flex-end; justify-content: center; padding: 0; }
        @media (min-width: 640px) { .size-modal-overlay { align-items: center; padding: 20px; } }

        .size-modal { background: white; width: 100%; max-width: 560px; max-height: 90vh; overflow-y: auto; border-radius: 0; animation: sheet-up 0.3s cubic-bezier(0.4,0,0.2,1); }
        @media (min-width: 640px) { .size-modal { border-radius: 2px; max-height: 80vh; animation: fade-scale 0.25s ease; } }

        @keyframes sheet-up { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fade-scale { from { transform: scale(0.96); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .acc-content { overflow: hidden; transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease; }
        .acc-toggle { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; transition: color 0.15s ease; }
      `}</style>

      {/* Size Guide Modal */}
      {sizeModalOpen && (
        <SizeGuideModal
          onClose={() => setSizeModalOpen(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {/* Page wrapper */}
      <main className="pdp-layout">
        {/* ── LEFT: Image Gallery ─────────────────────────────────────── */}
        <div className="pdp-gallery">
          {/* Gallery inner: thumb strip + main image */}
          <div className="pdp-gallery-inner">
            {/* Main image */}
            <div className="pdp-main-img-wrap" style={{ overflow: "hidden", backgroundColor: "#EDE8E0" }}>
              <Image
                src={mainImage}
                alt={`${product.name} — ${selectedColor.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
                loading="eager"
                unoptimized
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            {/* Thumbnail strip */}
            <div className="pdp-thumb-strip">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    outline:
                      selectedImageIndex === idx
                        ? "2px solid #1C1B18"
                        : "2px solid transparent",
                    outlineOffset: "2px",
                    borderRadius: "1px",
                    overflow: "hidden",
                    aspectRatio: "3/4",
                    position: "relative",
                    flexShrink: 0,
                    width: "56px",
                  }}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="56px"
                    unoptimized
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Product Info Panel ───────────────────────────────── */}
        <div className="pdp-info">
          {/* Brand label */}
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#9A9590",
              fontWeight: 400,
            }}
          >
            XO47
          </p>

          {/* Product name */}
          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "28px",
              fontWeight: 300,
              color: "#1C1B18",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h1>

          {/* Price */}
          <p
            style={{
              margin: "0 0 24px",
              fontSize: "18px",
              fontWeight: 400,
              color: "#1C1B18",
              letterSpacing: "0.01em",
            }}
          >
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          {/* Colour swatches */}
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9A9590",
                fontWeight: 400,
              }}
            >
              Colour:{" "}
              <span style={{ color: "#1C1B18" }}>{selectedColor.name}</span>
            </p>
            <div style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
              {product.colors.map((c, idx) => (
                /* 44×44 tap target wrapping the 24px visual swatch */
                <button
                  key={c.slug}
                  onClick={() => handleColorChange(idx)}
                  aria-label={`Select colour ${c.name}`}
                  title={c.name}
                  style={{
                    width: "44px",
                    height: "44px",
                    padding: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: c.hex,
                      border: "1px solid rgba(0,0,0,0.12)",
                      display: "block",
                      outline:
                        selectedColorIndex === idx
                          ? "2px solid #1C1B18"
                          : "2px solid transparent",
                      outlineOffset: "2px",
                      transition: "transform 0.15s ease, outline 0.15s ease",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div style={{ marginBottom: "8px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9A9590",
                  fontWeight: 400,
                }}
              >
                Size:{" "}
                {selectedSize && (
                  <span style={{ color: "#1C1B18" }}>{selectedSize}</span>
                )}
              </p>
              <button
                onClick={() => setSizeModalOpen(true)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9A9590",
                  textDecoration: "underline",
                  padding: 0,
                }}
              >
                Size Guide
              </button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`pdp-size-btn${selectedSize === size ? " selected" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ENQUIRE button */}
          <Link
            href="/book-consultation"
            className="xo-btn-primary"
            style={{
              display: "block",
              width: "100%",
              height: "52px",
              backgroundColor: "#1C1B18",
              color: "white",
              textDecoration: "none",
              textAlign: "center",
              lineHeight: "52px",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              borderRadius: "1px",
              marginTop: "20px",
              boxSizing: "border-box",
            }}
          >
            Enquire About This Piece
          </Link>

          {/* BOOK A CONSULTATION button */}
          <Link
            href="/book-consultation"
            className="xo-btn-outline"
            style={{
              display: "block",
              width: "100%",
              height: "48px",
              backgroundColor: "transparent",
              color: "#1C1B18",
              border: "1px solid #1C1B18",
              textDecoration: "none",
              textAlign: "center",
              lineHeight: "46px",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              borderRadius: "1px",
              marginTop: "8px",
              boxSizing: "border-box",
            }}
          >
            Book a Consultation
          </Link>

          {/* Save to Lookbook */}
          <div style={{ textAlign: "center", marginTop: "12px" }}>
            <button
              style={{
                background: "transparent",
                border: "none",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9A9590",
                cursor: "pointer",
                padding: 0,
                fontWeight: 300,
              }}
            >
              Save to Lookbook
            </button>
          </div>

          {/* Accordions */}
          <div style={{ marginTop: "28px" }}>
            <AccordionItem
              title="Details"
              isOpen={openAccordion === "details"}
              onToggle={() => toggleAccordion("details")}
            >
              <ul style={{ margin: 0, paddingLeft: "18px" }}>
                {detailBullets.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Fabric & Care"
              isOpen={openAccordion === "fabric"}
              onToggle={() => toggleAccordion("fabric")}
            >
              <ul style={{ margin: 0, paddingLeft: "18px" }}>
                {fabricLines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Shipping & Returns"
              isOpen={openAccordion === "shipping"}
              onToggle={() => toggleAccordion("shipping")}
            >
              <ul style={{ margin: 0, paddingLeft: "18px" }}>
                <li>Complimentary delivery on all orders</li>
                <li>For alterations and fit adjustments, book a consultation</li>
              </ul>
            </AccordionItem>

            {/* Close last accordion bottom border */}
            <div style={{ borderTop: "1px solid #E0DCD5" }} />
          </div>
        </div>
      </main>
    </>
  );
}
