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

/** Sidebar nav: numeral echoes the house index motif. "Enquiries" is the
 *  client-facing label for the ConsultationsAdmin section. */
const TABS: { id: Tab; index: string; label: string }[] = [
  { id: "dashboard", index: "01", label: "Dashboard" },
  { id: "products", index: "02", label: "Products" },
  { id: "categories", index: "03", label: "Categories" },
  { id: "photos", index: "04", label: "Photos" },
  { id: "consultations", index: "05", label: "Enquiries" },
];

/** Editorial section header copy — owned centrally by the panel so sections
 *  never repeat a giant title. House voice: warm, spare, first-person-plural. */
const HEADERS: Record<Tab, { eyebrow: string; title: string; subtitle: string }> = {
  dashboard: {
    eyebrow: "The House Ledger",
    title: "The atelier, today.",
    subtitle: "Where the house stands this morning.",
  },
  products: {
    eyebrow: "The Wardrobe",
    title: "Every piece we offer.",
    subtitle: "The pieces a client can commission.",
  },
  categories: {
    eyebrow: "The Collections",
    title: "How the wardrobe is arranged.",
    subtitle: "The chapters of the house.",
  },
  photos: {
    eyebrow: "The Library",
    title: "The house’s imagery.",
    subtitle: "Cloth, look and detail — ready to place.",
  },
  consultations: {
    eyebrow: "The Appointment Book",
    title: "Who has written in.",
    subtitle: "Every enquiry, newest first.",
  },
};

export function AdminPanel({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>("dashboard");
  // Computed client-side in an effect to avoid a hydration mismatch on the date.
  const [today, setToday] = useState("");

  useEffect(() => {
    seedIfEmpty();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only date, set once post-hydration to avoid an SSR/client mismatch
    setToday(
      new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date()),
    );
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

  const header = HEADERS[tab];

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
                <span
                  className="mono tnum adm-nav-index"
                  aria-hidden="true"
                  style={{
                    fontSize: "0.54rem",
                    letterSpacing: "0.16em",
                    color: active ? "var(--amber-2)" : "var(--on-dark-mut)",
                    transition: "color 0.3s",
                  }}
                >
                  {t.index}
                </span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        <div className="adm-side-foot" style={sideFoot}>
          <span className="mono adm-side-place" style={place}>Ambawatta One · Mehrauli</span>
          <div className="adm-side-actions" style={sideActions}>
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
        </div>
      </aside>

      {/* MAIN */}
      <main className="adm-main" style={main}>
        <header className="adm-topbar" style={topbar}>
          <div className="adm-topbar-head" style={topbarHead}>
            <span className="over" style={{ color: "var(--clay)" }}>{header.eyebrow}</span>
            <h1 className="display d-2" style={{ margin: "10px 0 0", lineHeight: 1 }}>{header.title}</h1>
            <p className="adm-topbar-sub" style={topbarSub}>{header.subtitle}</p>
          </div>
          <div className="adm-topbar-meta" style={topbarMeta}>
            <span className="mono" style={{ color: "var(--muted)", fontSize: "0.56rem", letterSpacing: "0.18em" }}>
              XO47 · Private Atelier
            </span>
            <span className="mono tnum adm-today" style={{ color: "var(--muted)", fontSize: "0.56rem", letterSpacing: "0.12em", minHeight: "1em" }}>
              {today}
            </span>
          </div>
        </header>
        <div className="adm-content" style={content} key={tab}>
          {tab === "dashboard" && <Dashboard />}
          {tab === "products" && <ProductsAdmin />}
          {tab === "categories" && <CategoriesAdmin />}
          {tab === "photos" && <PhotosAdmin />}
          {tab === "consultations" && <ConsultationsAdmin />}
        </div>
      </main>

      <style>{`
        /* Staggered enter: sidebar settles first, then the topbar and content rise. */
        .adm-side { animation: adm-side-in 0.5s cubic-bezier(0.22,1,0.36,1) both; }
        .adm-topbar { animation: adm-rise 0.55s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
        .adm-content { animation: adm-rise 0.55s cubic-bezier(0.22,1,0.36,1) 0.26s both; }
        @keyframes adm-side-in { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: none; } }
        @keyframes adm-rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .adm-nav-btn { display: flex; align-items: baseline; gap: 12px; }
        .adm-nav-btn:hover[data-active="0"] { color: var(--on-dark) !important; }
        .adm-nav-btn:hover[data-active="0"] .adm-nav-index { color: var(--on-dark-mut); }
        @media (prefers-reduced-motion: reduce) {
          .adm-side, .adm-topbar, .adm-content { animation: none !important; }
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
            gap: 7px !important;
          }
          .adm-nav-btn[data-active="1"] { border-bottom-color: var(--amber-2) !important; }
          .adm-side-foot { flex: 0 0 auto !important; padding: 0 0 0 8px !important; }
          .adm-side-place { display: none !important; }
          .adm-side-actions { flex-direction: row !important; gap: 6px !important; }
          .adm-topbar-meta { display: none !important; }
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
  width: "clamp(210px, 18vw, 260px)",
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
  gap: 14,
  padding: "0 22px",
};

const place: CSSProperties = {
  color: "var(--on-dark-mut)",
  fontSize: "0.5rem",
  letterSpacing: "0.2em",
};

const sideActions: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const lockBtn: CSSProperties = {
  minHeight: 38,
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
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 24,
  flexWrap: "wrap",
  padding: "clamp(22px, 3vw, 34px) clamp(20px, 3vw, 40px)",
  borderBottom: "1px solid var(--line)",
  flex: "0 0 auto",
};

const topbarHead: CSSProperties = {
  minWidth: 0,
};

const topbarSub: CSSProperties = {
  margin: "12px 0 0",
  fontFamily: "var(--ff-display)",
  fontStyle: "italic",
  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
  color: "var(--muted)",
  lineHeight: 1.3,
};

const topbarMeta: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 8,
  textAlign: "right",
  paddingTop: 6,
  flex: "0 0 auto",
};

const content: CSSProperties = {
  flex: "1 1 auto",
  overflowY: "auto",
  padding: "clamp(20px, 3vw, 40px)",
  maxWidth: 1200,
  width: "100%",
};
