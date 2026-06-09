"use client";

import { useState, type CSSProperties } from "react";
import { useCategories, upsertCategory, deleteCategory, newId, usePhotos } from "@/lib/admin/store";
import type { AdminCategory } from "@/types/admin";

type Tone = AdminCategory["tone"];
const TONES: Tone[] = ["ink", "ivory", "neutral"];

interface Draft {
  id: string | null; // null = creating; set = editing existing
  label: string;
  desc: string;
  n: string;
  tone: Tone;
  href: string;
  img: string;
  order: string;
}

export function CategoriesAdmin() {
  const categories = useCategories();
  const photos = usePhotos();
  const [editing, setEditing] = useState<Draft | null>(null);

  const nextOrder = categories.length ? Math.max(...categories.map((c) => c.order)) + 1 : 0;

  function openNew() {
    setEditing({ id: null, label: "", desc: "", n: "", tone: "neutral", href: "", img: "", order: String(nextOrder) });
  }

  function openEdit(c: AdminCategory) {
    setEditing({
      id: c.id,
      label: c.label,
      desc: c.desc,
      n: c.n,
      tone: c.tone,
      href: c.href,
      img: c.img,
      order: String(c.order),
    });
  }

  function setField<K extends keyof Draft>(key: K, value: Draft[K]) {
    setEditing((prev) => (prev ? { ...prev, [key]: value } : prev));
  }

  function save() {
    if (!editing) return;
    const label = editing.label.trim();
    if (!label) return;
    const parsedOrder = Number.parseInt(editing.order, 10);
    const category: AdminCategory = {
      id: editing.id ?? newId("c"),
      label,
      desc: editing.desc.trim(),
      n: editing.n.trim(),
      tone: editing.tone,
      href: editing.href.trim(),
      img: editing.img.trim(),
      order: Number.isFinite(parsedOrder) ? parsedOrder : nextOrder,
    };
    upsertCategory(category);
    setEditing(null);
  }

  function move(index: number, dir: -1 | 1) {
    const a = categories[index];
    const b = categories[index + dir];
    if (!a || !b) return;
    upsertCategory({ ...a, order: b.order });
    upsertCategory({ ...b, order: a.order });
  }

  function remove(c: AdminCategory) {
    if (window.confirm(`Delete the "${c.label}" collection? This cannot be undone.`)) {
      deleteCategory(c.id);
    }
  }

  const count = categories.length;

  return (
    <section>
      {/* The topbar owns the title; here only a quiet house-voice count + the action. */}
      <header style={head}>
        <p className="mono" style={{ margin: 0, color: "var(--muted)" }}>
          <span className="tnum">{count}</span>
          {count === 1 ? " chapter" : " chapters"} in the house
        </p>
        {!editing && (
          <button type="button" className="adm-btn press" onClick={openNew}>
            New Collection
          </button>
        )}
      </header>

      {editing && (
        <div className="adm-card" style={{ marginBottom: 32 }}>
          <p className="over" style={{ margin: "0 0 22px", color: "var(--clay)" }}>
            {editing.id ? "Editing a collection" : "A new collection"}
          </p>

          {/* The chapter — what a client reads. */}
          <p className="over" style={subhead}>The chapter</p>
          <div style={grid}>
            <div style={{ gridColumn: "1 / -1" }}>
              <label className="adm-label" htmlFor="cat-label">Label</label>
              <input
                id="cat-label"
                className="adm-input"
                value={editing.label}
                onChange={(e) => setField("label", e.target.value)}
                placeholder="e.g. Eveningwear"
                autoFocus
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label className="adm-label" htmlFor="cat-desc">Description</label>
              <textarea
                id="cat-desc"
                className="adm-input"
                value={editing.desc}
                onChange={(e) => setField("desc", e.target.value)}
                rows={2}
                placeholder="A short editorial line for the collection."
                style={{ resize: "vertical", minHeight: 64 }}
              />
            </div>
          </div>

          {/* The framing — how the house numbers and shades it. */}
          <p className="over" style={subheadSpaced}>The framing</p>
          <div style={grid}>
            <div>
              <label className="adm-label" htmlFor="cat-n">Numeral</label>
              <input
                id="cat-n"
                className="adm-input tnum"
                value={editing.n}
                onChange={(e) => setField("n", e.target.value)}
                placeholder="07"
                inputMode="numeric"
              />
            </div>

            <div>
              <label className="adm-label" htmlFor="cat-tone">Tone</label>
              <select
                id="cat-tone"
                className="adm-input"
                value={editing.tone}
                onChange={(e) => setField("tone", e.target.value as Tone)}
              >
                {TONES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="adm-label" htmlFor="cat-order">Order</label>
              <input
                id="cat-order"
                className="adm-input tnum"
                value={editing.order}
                onChange={(e) => setField("order", e.target.value)}
                inputMode="numeric"
              />
            </div>
          </div>

          {/* Where it lives — link + cover. */}
          <p className="over" style={subheadSpaced}>Where it lives</p>
          <div style={grid}>
            <div style={{ gridColumn: "1 / -1" }}>
              <label className="adm-label" htmlFor="cat-href">Link (href)</label>
              <input
                id="cat-href"
                className="adm-input"
                value={editing.href}
                onChange={(e) => setField("href", e.target.value)}
                placeholder="/collections/eveningwear"
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label className="adm-label" htmlFor="cat-img">Cover image</label>
              {photos.length > 0 && (
                <select
                  className="adm-input"
                  value={photos.some((p) => p.dataUrl === editing.img) ? editing.img : ""}
                  onChange={(e) => setField("img", e.target.value)}
                  style={{ marginBottom: 8 }}
                  aria-label="Pick a cover image from the library"
                >
                  <option value="">Pick from library&hellip;</option>
                  {photos.map((p) => (
                    <option key={p.id} value={p.dataUrl}>{p.name}</option>
                  ))}
                </select>
              )}
              <input
                id="cat-img"
                className="adm-input"
                value={editing.img}
                onChange={(e) => setField("img", e.target.value)}
                placeholder="/images/collections/eveningwear.jpg or a URL"
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
            <button type="button" className="adm-btn press" onClick={save} disabled={!editing.label.trim()}>
              {editing.id ? "Save changes" : "Save collection"}
            </button>
            <button type="button" className="adm-btn-ghost press" onClick={() => setEditing(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {count === 0 && !editing ? (
        <p className="adm-empty">No collections yet &mdash; name the first chapter.</p>
      ) : count === 0 ? null : (
        <div>
          {categories.map((c, i) => (
            <div key={c.id} className="adm-row adm-cat-row" style={rowGrid}>
              <span className="adm-index tnum" aria-hidden="true">
                {c.n || String(i + 1).padStart(2, "0")}
              </span>

              <div style={thumbWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="adm-thumb" src={c.img} alt="" />
              </div>

              <div style={{ minWidth: 0 }}>
                <h3 className="adm-name" style={{ margin: 0 }}>{c.label}</h3>
                {c.desc && (
                  <p
                    className="cap"
                    style={{ margin: "6px 0 0", textTransform: "none", letterSpacing: "0.02em", color: "var(--muted)" }}
                  >
                    {c.desc}
                  </p>
                )}
                <p
                  className="mono"
                  style={{
                    margin: "8px 0 0",
                    color: "var(--muted)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.href || "—"}
                </p>
              </div>

              <span className="mono adm-cat-tone" style={{ color: "var(--muted)" }}>
                {c.tone}
              </span>

              <div style={moveWrap} className="adm-cat-reorder">
                <button
                  type="button"
                  className="adm-quiet"
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  aria-label={`Move ${c.label} earlier`}
                  title="Move earlier"
                >
                  Up
                </button>
                <button
                  type="button"
                  className="adm-quiet"
                  onClick={() => move(i, 1)}
                  disabled={i === categories.length - 1}
                  aria-label={`Move ${c.label} later`}
                  title="Move later"
                >
                  Down
                </button>
              </div>

              <div style={actionsWrap}>
                <button type="button" className="adm-quiet press" onClick={() => openEdit(c)}>
                  Edit
                </button>
                <button type="button" className="adm-quiet adm-quiet--danger press" onClick={() => remove(c)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        /* Reorder buttons read disabled at the extremes — dim them past the quiet base. */
        .adm-cat-reorder .adm-quiet:disabled {
          opacity: 0.18;
          cursor: not-allowed;
        }
        .adm-row:hover .adm-cat-reorder .adm-quiet:disabled,
        .adm-row:focus-within .adm-cat-reorder .adm-quiet:disabled {
          opacity: 0.18;
        }
        .adm-cat-reorder .adm-quiet:disabled::after { display: none; }

        @media (max-width: 880px) {
          .adm-cat-row {
            grid-template-columns: 30px 72px minmax(0, 1fr) !important;
            grid-template-areas:
              "idx  cover main"
              "idx  cover meta"
              "idx  cover reorder"
              "actions actions actions" !important;
            row-gap: 12px !important;
            column-gap: 16px !important;
            align-items: start !important;
          }
          .adm-cat-row > :nth-child(1) { grid-area: idx; }
          .adm-cat-row > :nth-child(2) { grid-area: cover; }
          .adm-cat-row > :nth-child(3) { grid-area: main; }
          .adm-cat-tone {
            grid-area: meta;
            align-self: center;
          }
          .adm-cat-reorder {
            grid-area: reorder;
            justify-content: flex-start !important;
          }
          .adm-cat-row > :last-child {
            grid-area: actions;
            justify-content: flex-start !important;
            gap: 22px !important;
            border-top: 1px solid var(--line);
            padding-top: 4px;
          }
        }
        @media (max-width: 440px) {
          .adm-cat-row {
            grid-template-columns: 24px 60px minmax(0, 1fr) !important;
            column-gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}

const head: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 20,
  flexWrap: "wrap",
  marginBottom: 28,
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 16,
};

const subhead: CSSProperties = {
  margin: "0 0 14px",
  color: "var(--muted)",
};

const subheadSpaced: CSSProperties = {
  margin: "26px 0 14px",
  color: "var(--muted)",
};

const rowGrid: CSSProperties = {
  gridTemplateColumns: "auto 64px minmax(0, 1fr) 80px auto auto",
};

const thumbWrap: CSSProperties = {
  width: 64,
};

const moveWrap: CSSProperties = {
  display: "flex",
  gap: 14,
  alignItems: "center",
};

const actionsWrap: CSSProperties = {
  display: "flex",
  gap: 18,
  justifyContent: "flex-end",
  alignItems: "center",
};
