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

  return (
    <section>
      <header style={head}>
        <div>
          <p className="cap" style={{ margin: 0 }}>Collections</p>
          <p className="lede" style={{ margin: "6px 0 0", maxWidth: "46ch" }}>
            The taxonomy behind the maison &mdash; order, label, and editorial framing for every line.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          <span className="mono tnum" style={{ color: "var(--muted)" }}>
            {categories.length} total
          </span>
          {!editing && (
            <button type="button" className="adm-btn press" onClick={openNew}>
              New collection
            </button>
          )}
        </div>
      </header>

      {editing && (
        <div className="adm-card" style={{ marginBottom: 28 }}>
          <p className="mono" style={{ margin: "0 0 18px", color: "var(--clay)" }}>
            {editing.id ? "Edit collection" : "New collection"}
          </p>

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

          <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
            <button type="button" className="adm-btn press" onClick={save} disabled={!editing.label.trim()}>
              {editing.id ? "Save changes" : "Save collection"}
            </button>
            <button type="button" className="adm-btn-ghost press" onClick={() => setEditing(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {categories.length === 0 && !editing ? (
        <p className="adm-empty">No collections yet.</p>
      ) : categories.length === 0 ? null : (
        <div>
          <div className="adm-tr adm-cat-head" style={rowGrid}>
            <span className="adm-th">Cover</span>
            <span className="adm-th">Collection</span>
            <span className="adm-th tnum">No.</span>
            <span className="adm-th">Tone</span>
            <span className="adm-th" style={{ textAlign: "center" }}>Order</span>
            <span className="adm-th" style={{ textAlign: "right" }}>Actions</span>
          </div>

          {categories.map((c, i) => (
            <div key={c.id} className="adm-tr adm-cat-row" style={rowGrid}>
              <div style={thumbWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="adm-thumb" src={c.img} alt="" />
              </div>

              <div style={{ minWidth: 0 }}>
                <h3 className="display d-3" style={{ margin: 0 }}>{c.label}</h3>
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

              <span className="mono tnum adm-cat-cell" style={{ color: "var(--ink-2)" }}>
                <span className="adm-cat-mlabel">No. </span>{c.n || "—"}
              </span>

              <span className="mono adm-cat-cell" style={{ color: "var(--muted)" }}>
                <span className="adm-cat-mlabel">Tone </span>{c.tone}
              </span>

              <div style={moveWrap} className="adm-cat-cell">
                <button
                  type="button"
                  className="adm-move press"
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  aria-label={`Move ${c.label} up`}
                  title="Move up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="adm-move press"
                  onClick={() => move(i, 1)}
                  disabled={i === categories.length - 1}
                  aria-label={`Move ${c.label} down`}
                  title="Move down"
                >
                  ↓
                </button>
              </div>

              <div style={actionsWrap} className="adm-cat-cell">
                <button type="button" className="adm-btn-ghost press adm-act" onClick={() => openEdit(c)}>
                  Edit
                </button>
                <button type="button" className="adm-btn-danger press adm-act" onClick={() => remove(c)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .adm-move {
          width: 30px;
          height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--line);
          color: var(--ink-2);
          font-family: var(--ff-sans);
          font-size: 0.8rem;
          line-height: 1;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, transform 0.16s;
        }
        .adm-move:hover:not(:disabled) { border-color: var(--ink); color: var(--ink); }
        .adm-move:disabled { opacity: 0.3; cursor: not-allowed; }
        .adm-act { height: 34px; padding: 0 14px; }
        .adm-cat-mlabel { display: none; }

        @media (max-width: 880px) {
          .adm-cat-head { display: none !important; }
          .adm-cat-row {
            grid-template-columns: 84px minmax(0, 1fr) !important;
            grid-template-areas:
              "cover main"
              "cover meta"
              "actions actions" !important;
            row-gap: 12px !important;
            column-gap: 16px !important;
            align-items: start !important;
          }
          .adm-cat-row > :nth-child(1) { grid-area: cover; }
          .adm-cat-row > :nth-child(2) { grid-area: main; }
          .adm-cat-row > :nth-child(3),
          .adm-cat-row > :nth-child(4) {
            grid-area: meta;
            display: inline-flex !important;
            margin-right: 16px;
          }
          .adm-cat-row > :nth-child(5) {
            grid-area: actions;
            justify-content: flex-start !important;
          }
          .adm-cat-row > :nth-child(6) {
            grid-area: actions;
            justify-content: flex-end !important;
          }
        }
        @media (max-width: 440px) {
          .adm-cat-row { grid-template-columns: 64px minmax(0, 1fr) !important; }
          .adm-act { padding: 0 12px !important; }
        }
      `}</style>
    </section>
  );
}

const head: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
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

const rowGrid: CSSProperties = {
  gridTemplateColumns: "64px minmax(0, 1fr) 56px 90px 80px auto",
};

const thumbWrap: CSSProperties = {
  width: 64,
};

const moveWrap: CSSProperties = {
  display: "flex",
  gap: 6,
  justifyContent: "center",
};

const actionsWrap: CSSProperties = {
  display: "flex",
  gap: 8,
  justifyContent: "flex-end",
};
