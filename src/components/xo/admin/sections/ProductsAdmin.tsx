"use client";

import { useMemo, useState } from "react";
import {
  useProducts,
  upsertProduct,
  deleteProduct,
  newId,
  usePhotos,
  useCategories,
} from "@/lib/admin/store";
import type { AdminProduct } from "@/types/admin";

const INR = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function emptyDraft(): AdminProduct {
  return {
    id: newId("p"),
    slug: "",
    name: "",
    cut: "",
    price: 0,
    cat: "",
    fabric: "",
    cloth: "",
    img: "",
    gallery: [],
    description: "",
    featured: false,
  };
}

export function ProductsAdmin() {
  const products = useProducts();
  const photos = usePhotos();
  const categories = useCategories();

  const [editing, setEditing] = useState<AdminProduct | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Category options: the live category labels, plus the draft's current cat
  // (legacy product cats like "Suits" differ from labels — keep them pickable).
  const editingCat = editing?.cat;
  const catOptions = useMemo(() => {
    const labels = categories.map((c) => c.label);
    const set = new Set(labels);
    if (editingCat && !set.has(editingCat)) labels.unshift(editingCat);
    return labels;
  }, [categories, editingCat]);

  function openNew() {
    setEditing(emptyDraft());
    setIsNew(true);
    setSlugTouched(false);
    setError(null);
  }

  function openEdit(p: AdminProduct) {
    setEditing({ ...p, gallery: [...p.gallery] });
    setIsNew(false);
    setSlugTouched(true);
    setError(null);
  }

  function close() {
    setEditing(null);
    setIsNew(false);
    setError(null);
  }

  function patch(next: Partial<AdminProduct>) {
    setEditing((prev) => (prev ? { ...prev, ...next } : prev));
  }

  function onNameChange(value: string) {
    setEditing((prev) =>
      prev
        ? { ...prev, name: value, slug: slugTouched ? prev.slug : slugify(value) }
        : prev,
    );
  }

  function save() {
    if (!editing) return;
    const name = editing.name.trim();
    if (!name) {
      setError("Name is required.");
      return;
    }
    if (!(editing.price > 0)) {
      setError("Price must be greater than zero.");
      return;
    }
    const clean: AdminProduct = {
      ...editing,
      name,
      slug: editing.slug.trim() || slugify(name),
      cut: editing.cut.trim(),
      cat: editing.cat.trim(),
      fabric: editing.fabric.trim(),
      cloth: editing.cloth.trim(),
      img: editing.img.trim(),
      description: editing.description.trim(),
      gallery: editing.gallery.map((g) => g.trim()).filter(Boolean),
    };
    upsertProduct(clean);
    close();
  }

  function remove(p: AdminProduct) {
    if (window.confirm(`Delete “${p.name}”? This cannot be undone.`)) {
      deleteProduct(p.id);
      if (editing?.id === p.id) close();
    }
  }

  return (
    <div>
      {/* Count line in house voice + the New Product action — the topbar owns
          the giant title, so we only carry a quiet count here. */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 22,
        }}
      >
        <p className="lede" style={{ color: "var(--ink-2)" }}>
          <span className="tnum">{products.length}</span> piece
          {products.length === 1 ? "" : "s"} in the wardrobe
        </p>
        {!editing && (
          <button type="button" className="adm-btn press" onClick={openNew}>
            New Product
          </button>
        )}
      </div>

      {/* Inline editor — laid out like a tailoring spec sheet, grouped under
          small house subheads rather than one flat auto-fit grid. */}
      {editing && (
        <div className="adm-card" style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <h3 className="display" style={{ fontSize: "1.55rem", lineHeight: 1.05 }}>
              {isNew ? "A new piece." : "Refining the piece."}
            </h3>
            <span className="mono" style={{ color: "var(--muted)" }}>
              {isNew ? "Draft" : editing.slug}
            </span>
          </div>

          {/* Identity */}
          <FieldGroup label="Identity" first>
            <div style={gridTwo}>
              <Field label="Name">
                <input
                  className="adm-input"
                  value={editing.name}
                  onChange={(e) => onNameChange(e.target.value)}
                  placeholder="The Milano"
                  autoFocus
                />
              </Field>
              <Field label="Slug">
                <input
                  className="adm-input"
                  value={editing.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    patch({ slug: e.target.value });
                  }}
                  placeholder="the-milano"
                />
              </Field>
              <Field label="Cut">
                <input
                  className="adm-input"
                  value={editing.cut}
                  onChange={(e) => patch({ cut: e.target.value })}
                  placeholder="Slim-Fit Suit"
                />
              </Field>
              <Field label="Category">
                <select
                  className="adm-input"
                  value={editing.cat}
                  onChange={(e) => patch({ cat: e.target.value })}
                >
                  <option value="">— Select —</option>
                  {catOptions.map((label) => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </FieldGroup>

          {/* Cloth */}
          <FieldGroup label="Cloth">
            <div style={gridTwo}>
              <Field label="Cloth / Colour">
                <input
                  className="adm-input"
                  value={editing.cloth}
                  onChange={(e) => patch({ cloth: e.target.value })}
                  placeholder="Charcoal"
                />
              </Field>
              <Field label="Fabric">
                <input
                  className="adm-input"
                  value={editing.fabric}
                  onChange={(e) => patch({ fabric: e.target.value })}
                  placeholder="Italian Wool · 280g"
                />
              </Field>
              <Field label="Price (INR)">
                <input
                  className="adm-input tnum"
                  type="number"
                  min={0}
                  step={1000}
                  value={editing.price === 0 ? "" : editing.price}
                  onChange={(e) => patch({ price: Number(e.target.value) || 0 })}
                  placeholder="95000"
                />
              </Field>
            </div>
          </FieldGroup>

          {/* Imagery — fields beside a live preview of the primary image. */}
          <FieldGroup label="Imagery">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) 96px",
                gap: 20,
                alignItems: "start",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Field label="Primary image">
                  <select
                    className="adm-input"
                    value=""
                    onChange={(e) => {
                      if (e.target.value) patch({ img: e.target.value });
                    }}
                    style={{ marginBottom: 8 }}
                  >
                    <option value="">— Pick from photos —</option>
                    {photos.map((ph) => (
                      <option key={ph.id} value={ph.dataUrl}>
                        {ph.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="adm-input"
                    value={editing.img}
                    onChange={(e) => patch({ img: e.target.value })}
                    placeholder="/images/look-08.jpg"
                  />
                </Field>
                <Field label="Gallery (comma-separated URLs / paths)">
                  <input
                    className="adm-input"
                    value={editing.gallery.join(", ")}
                    onChange={(e) =>
                      patch({
                        gallery: e.target.value
                          .split(",")
                          .map((g) => g.trim())
                          .filter(Boolean),
                      })
                    }
                    placeholder="/images/look-08.jpg, /images/look-09.jpg"
                  />
                </Field>
              </div>

              {/* Live preview */}
              <div>
                <span className="adm-label">Preview</span>
                <div
                  style={{
                    width: 96,
                    aspectRatio: "4 / 5",
                    background: "var(--dove)",
                    overflow: "hidden",
                    outline: "1px solid rgba(0,0,0,0.09)",
                    outlineOffset: "-1px",
                  }}
                >
                  {editing.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={editing.img}
                      alt={editing.name || "Primary image preview"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  ) : (
                    <span
                      className="cap"
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "var(--muted)",
                        padding: 8,
                      }}
                    >
                      No image
                    </span>
                  )}
                </div>
              </div>
            </div>
          </FieldGroup>

          {/* Story */}
          <FieldGroup label="Story">
            <Field label="Description">
              <textarea
                className="adm-input"
                rows={3}
                value={editing.description}
                onChange={(e) => patch({ description: e.target.value })}
                placeholder="A few lines on the cut, cloth, and the man it is made for."
                style={{ resize: "vertical", lineHeight: 1.6 }}
              />
            </Field>
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 16,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={editing.featured}
                onChange={(e) => patch({ featured: e.target.checked })}
                style={{ width: 16, height: 16, accentColor: "var(--clay)" }}
              />
              <span className="mono" style={{ color: "var(--ink)" }}>
                A featured piece
              </span>
            </label>
          </FieldGroup>

          {error && (
            <p
              style={{
                color: "var(--clay)",
                fontStyle: "italic",
                marginTop: 18,
                fontFamily: "var(--ff-display)",
                fontSize: "1.05rem",
              }}
            >
              {error}
            </p>
          )}

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            <button type="button" className="adm-btn press" onClick={save}>
              {isNew ? "Create" : "Save"}
            </button>
            <button
              type="button"
              className="adm-btn-ghost press"
              onClick={close}
            >
              Cancel
            </button>
            {!isNew && (
              <button
                type="button"
                className="adm-btn-danger press"
                onClick={() => remove(editing)}
                style={{ marginLeft: "auto" }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      )}

      {/* The wardrobe — editorial numbered index rows. */}
      {products.length === 0 ? (
        <p className="adm-empty">Nothing in the wardrobe yet — add the first piece.</p>
      ) : (
        <div>
          {products.map((p, i) => (
            <div
              key={p.id}
              className="adm-row press"
              style={{
                gridTemplateColumns:
                  "auto 52px minmax(0, 1.7fr) minmax(0, 0.9fr) auto auto",
              }}
            >
              {/* Numeral */}
              <span className="adm-index">{String(i + 1).padStart(2, "0")}</span>

              {/* Thumb */}
              <div
                style={{
                  width: 52,
                  aspectRatio: "4 / 5",
                  background: "var(--dove)",
                  overflow: "hidden",
                }}
              >
                {p.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : null}
              </div>

              {/* Name + cut + featured tag */}
              <div style={{ minWidth: 0 }}>
                <p
                  className="adm-name"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                    minWidth: 0,
                  }}
                >
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.name}
                  </span>
                  {p.featured && (
                    <span
                      className="mono"
                      style={{
                        flex: "none",
                        color: "var(--amber-2)",
                        border: "1px solid var(--amber-2)",
                        padding: "2px 7px",
                        fontSize: "0.5rem",
                        letterSpacing: "0.16em",
                      }}
                    >
                      Featured
                    </span>
                  )}
                </p>
                <p
                  className="cap"
                  style={{
                    marginTop: 4,
                    fontStyle: "italic",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.cut || "—"}
                </p>
              </div>

              {/* Category as a quiet mono tag */}
              <span
                className="mono"
                style={{
                  color: "var(--muted)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {p.cat || "—"}
              </span>

              {/* Price */}
              <span
                className="mono tnum"
                style={{ color: "var(--ink)", whiteSpace: "nowrap" }}
              >
                from ₹{INR.format(p.price)}
              </span>

              {/* Quiet actions */}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  className="adm-quiet"
                  onClick={() => openEdit(p)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="adm-quiet adm-quiet--danger"
                  onClick={() => remove(p)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const gridTwo: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 16,
};

function FieldGroup({
  label,
  children,
  first = false,
}: {
  label: string;
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <div
      style={
        first
          ? undefined
          : {
              paddingTop: 20,
              marginTop: 20,
              borderTop: "1px solid var(--line)",
            }
      }
    >
      <p className="over" style={{ color: "var(--clay)", marginBottom: 16 }}>
        {label}
      </p>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="adm-label">{label}</label>
      {children}
    </div>
  );
}
