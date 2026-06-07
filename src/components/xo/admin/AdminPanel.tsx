"use client";

import { useEffect, useState, type CSSProperties } from "react";
import "@/app/admin.css";
import { seedIfEmpty } from "@/lib/admin/store";
import { lock } from "@/lib/admin/auth";
import { Dashboard } from "@/components/xo/admin/sections/Dashboard";
import { ProductsAdmin } from "@/components/xo/admin/sections/ProductsAdmin";
import { CategoriesAdmin } from "@/components/xo/admin/sections/CategoriesAdmin";
import { PhotosAdmin } from "@/components/xo/admin/sections/PhotosAdmin";
import { ConsultationsAdmin } from "@/components/xo/admin/sections/ConsultationsAdmin";

type Tab = "dashboard" | "products" | "categories" | "photos" | "consultations";

const TABS: { id: Tab; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "products", label: "Products" },
  { id: "categories", label: "Categories" },
  { id: "photos", label: "Photos" },
  { id: "consultations", label: "Consultations" },
];

const TITLES: Record<Tab, string> = {
  dashboard: "Dashboard",
  products: "Products",
  categories: "Categories",
  photos: "Photos",
  consultations: "Consultations",
};

export function AdminPanel({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>("dashboard");

  useEffect(() => {
    seedIfEmpty();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="adm-panel" style={panel} role="dialog" aria-modal="true" aria-label="XO47 Atelier Admin">
      {/* SIDEBAR */}
      <aside className="adm-side" style={side}>
        <div className="adm-brand" style={brand}>
          <span className="wordmark" style={{ fontSize: "1rem", letterSpacing: "0.4em" }}>XO47</span>
          <span className="mono adm-brand-sub" style={{ color: "var(--on-dark-mut)", fontSize: "0.5rem", letterSpacing: "0.24em" }}>
            · ATELIER
          </span>
        </div>

        <nav className="adm-nav" style={nav} aria-label="Admin sections">
          {TABS.map((t) => {
            const active = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                className="adm-nav-btn press"
                data-active={active ? "1" : "0"}
                onClick={() => setTab(t.id)}
                style={{
                  ...navBtn,
                  color: active ? "var(--on-dark)" : "var(--on-dark-mut)",
                  borderLeftColor: active ? "var(--amber-2)" : "transparent",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        <div className="adm-side-foot" style={sideFoot}>
          <button
            type="button"
            className="press"
            onClick={() => {
              lock();
              onClose();
            }}
            style={lockBtn}
          >
            Lock
          </button>
          <button type="button" className="press" onClick={onClose} style={closeBtn}>
            Close
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="adm-main" style={main}>
        <header className="adm-topbar" style={topbar}>
          <h1 className="display d-3" style={{ margin: 0, lineHeight: 1 }}>{TITLES[tab]}</h1>
          <span className="mono" style={{ color: "var(--muted)", fontSize: "0.56rem", letterSpacing: "0.16em" }}>
            XO47 / Admin / {TITLES[tab]}
          </span>
        </header>
        <div className="adm-content" style={content}>
          {tab === "dashboard" && <Dashboard />}
          {tab === "products" && <ProductsAdmin />}
          {tab === "categories" && <CategoriesAdmin />}
          {tab === "photos" && <PhotosAdmin />}
          {tab === "consultations" && <ConsultationsAdmin />}
        </div>
      </main>

      <style>{`
        .adm-panel { animation: adm-in 0.42s cubic-bezier(0.16,1,0.3,1); }
        @keyframes adm-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .adm-nav-btn:hover[data-active="0"] { color: var(--on-dark) !important; }
        @media (prefers-reduced-motion: reduce) {
          .adm-panel { animation: none; }
        }
        @media (max-width: 759px) {
          .adm-panel { flex-direction: column !important; }
          .adm-side {
            width: 100% !important;
            height: auto !important;
            flex-direction: row !important;
            align-items: center !important;
            border-right: none !important;
            border-bottom: 1px solid var(--on-dark-line) !important;
            overflow-x: auto !important;
            padding: 0 12px !important;
            gap: 4px !important;
          }
          .adm-brand { padding: 12px 12px 12px 0 !important; margin-right: 6px !important; flex: 0 0 auto !important; }
          .adm-brand-sub { display: none !important; }
          .adm-nav { flex-direction: row !important; flex: 1 1 auto !important; gap: 2px !important; }
          .adm-nav-btn {
            border-left: none !important;
            border-bottom: 2px solid transparent !important;
            white-space: nowrap !important;
            padding: 14px 12px !important;
          }
          .adm-nav-btn[data-active="1"] { border-bottom-color: var(--amber-2) !important; }
          .adm-side-foot { flex: 0 0 auto !important; padding: 0 0 0 8px !important; flex-direction: row !important; gap: 6px !important; }
        }
      `}</style>
    </div>
  );
}

const panel: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 600,
  background: "var(--milk)",
  color: "var(--ink)",
  display: "flex",
  overflow: "hidden",
};

const side: CSSProperties = {
  width: "clamp(200px, 18vw, 250px)",
  flex: "0 0 auto",
  background: "var(--ink)",
  color: "var(--on-dark)",
  borderRight: "1px solid var(--on-dark-line)",
  display: "flex",
  flexDirection: "column",
  padding: "26px 0",
};

const brand: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: 8,
  padding: "0 22px 26px",
};

const nav: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const navBtn: CSSProperties = {
  textAlign: "left",
  background: "transparent",
  border: "none",
  borderLeft: "2px solid transparent",
  padding: "12px 22px",
  fontFamily: "var(--ff-sans)",
  fontSize: "0.7rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "color 0.3s, border-color 0.3s",
};

const sideFoot: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "0 22px",
};

const lockBtn: CSSProperties = {
  height: 36,
  background: "transparent",
  border: "1px solid var(--on-dark-line)",
  color: "var(--on-dark)",
  fontFamily: "var(--ff-sans)",
  fontSize: "0.6rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  cursor: "pointer",
};

const closeBtn: CSSProperties = {
  background: "transparent",
  border: "none",
  color: "var(--on-dark-mut)",
  fontFamily: "var(--ff-sans)",
  fontSize: "0.58rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  cursor: "pointer",
  padding: "6px 0",
};

const main: CSSProperties = {
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  overflow: "hidden",
};

const topbar: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: 16,
  flexWrap: "wrap",
  padding: "clamp(18px, 2.5vw, 28px) clamp(20px, 3vw, 40px)",
  borderBottom: "1px solid var(--line)",
  flex: "0 0 auto",
};

const content: CSSProperties = {
  flex: "1 1 auto",
  overflowY: "auto",
  padding: "clamp(20px, 3vw, 40px)",
  maxWidth: 1200,
  width: "100%",
};
