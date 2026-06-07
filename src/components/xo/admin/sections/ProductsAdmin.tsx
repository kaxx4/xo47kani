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

const COLS = "56px minmax(0, 1.6fr) minmax(0, 1fr) minmax(0, 0.9fr) auto";

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
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 18,
        }}
      >
        <div>
          <h2 className="display d-3">Products</h2>
          <p className="mono" style={{ color: "var(--muted)", marginTop: 6 }}>
            <span className="tnum">{products.length}</span> piece
            {products.length === 1 ? "" : "s"} in the atelier
          </p>
        </div>
        {!editing && (
          <button type="button" className="adm-btn press" onClick={openNew}>
            New Product
          </button>
        )}
      </div>

      {/* Inline editor */}
      {editing && (
        <div className="adm-card" style={{ marginBottom: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 18,
            }}
          >
            <h3 className="display d-3" style={{ fontSize: "1.4rem" }}>
              {isNew ? "New piece" : "Editing"}
            </h3>
            <span className="cap">{isNew ? "Draft" : editing.slug}</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
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
          </div>

          {/* Gallery */}
          <div style={{ marginTop: 16 }}>
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

          {/* Description */}
          <div style={{ marginTop: 16 }}>
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
          </div>

          {/* Featured */}
          <label
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 18,
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
              Featured piece
            </span>
          </label>

          {error && (
            <p
              className="cap"
              style={{
                color: "var(--clay)",
                fontStyle: "italic",
                marginTop: 16,
                textTransform: "none",
                letterSpacing: 0,
                fontFamily: "var(--ff-display)",
                fontSize: "1rem",
              }}
            >
              {error}
            </p>
          )}

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 22,
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

      {/* List */}
      {products.length === 0 ? (
        <p className="adm-empty">No products yet.</p>
      ) : (
        <div>
          {/* Header row — hidden on narrow screens via the responsive grid */}
          <div
            className="adm-tr"
            style={{
              gridTemplateColumns: COLS,
              padding: "0 0 10px",
              borderBottom: "1px solid var(--ink)",
            }}
          >
            <span className="adm-th">Img</span>
            <span className="adm-th">Piece</span>
            <span className="adm-th">Category</span>
            <span className="adm-th">Price</span>
            <span className="adm-th" style={{ textAlign: "right" }}>
              Actions
            </span>
          </div>

          {products.map((p) => (
            <div
              key={p.id}
              className="adm-tr"
              style={{ gridTemplateColumns: COLS }}
            >
              <div
                style={{
                  width: 56,
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

              <div style={{ minWidth: 0 }}>
                <p
                  className="display"
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.name}
                  {p.featured && (
                    <span
                      className="cap"
                      style={{ color: "var(--amber-2)", marginLeft: 10 }}
                    >
                      ★ Featured
                    </span>
                  )}
                </p>
                <p
                  className="cap"
                  style={{
                    marginTop: 4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.cut || "—"}
                </p>
              </div>

              <span
                className="mono"
                style={{
                  color: "var(--ink-2)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {p.cat || "—"}
              </span>

              <span className="mono tnum" style={{ color: "var(--ink)" }}>
                from ₹{INR.format(p.price)}
              </span>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  className="adm-btn-ghost press"
                  onClick={() => openEdit(p)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="adm-btn-danger press"
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
