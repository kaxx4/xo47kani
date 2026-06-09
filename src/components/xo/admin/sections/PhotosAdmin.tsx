"use client";

import { useRef, useState } from "react";
import { usePhotos, addPhoto, deletePhoto } from "@/lib/admin/store";
import type { AdminPhoto } from "@/types/admin";

const MAX_DIM = 1200;
const JPEG_QUALITY = 0.82;

/* Read a File, downscale onto a canvas (max dimension 1200px), and
   re-encode to a compressed JPEG data URL. Falls back to the raw
   FileReader result if canvas/2d context is unavailable. */
function compressFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read-failed"));
    reader.onload = () => {
      const src = typeof reader.result === "string" ? reader.result : "";
      if (!src) {
        reject(new Error("empty-result"));
        return;
      }
      const img = new Image();
      img.onerror = () => reject(new Error("decode-failed"));
      img.onload = () => {
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;
        if (!w || !h) {
          resolve(src);
          return;
        }
        const scale = Math.min(1, MAX_DIM / Math.max(w, h));
        const outW = Math.max(1, Math.round(w * scale));
        const outH = Math.max(1, Math.round(h * scale));
        const canvas = document.createElement("canvas");
        canvas.width = outW;
        canvas.height = outH;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(src);
          return;
        }
        ctx.drawImage(img, 0, 0, outW, outH);
        try {
          resolve(canvas.toDataURL("image/jpeg", JPEG_QUALITY));
        } catch {
          resolve(src);
        }
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  });
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function PhotoCard({ photo }: { photo: AdminPhoto }) {
  const [copied, setCopied] = useState(false);

  function copy(): void {
    try {
      void navigator.clipboard.writeText(photo.dataUrl).then(
        () => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1400);
        },
        () => {
          // clipboard denied — ignore for demo
        },
      );
    } catch {
      // clipboard unavailable — ignore for demo
    }
  }

  function remove(): void {
    const ok = window.confirm(`Delete "${photo.name}"? This cannot be undone.`);
    if (ok) deletePhoto(photo.id);
  }

  return (
    <figure
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        margin: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.dataUrl} alt={photo.name} className="adm-thumb" />
      <figcaption style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span
          className="cap"
          title={photo.name}
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "var(--ink)",
          }}
        >
          {photo.name}
        </span>
        <span className="mono tnum" style={{ color: "var(--muted)" }}>
          {formatDate(photo.createdAt)}
        </span>
      </figcaption>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "4px 18px",
          marginTop: "auto",
          paddingTop: 4,
          borderTop: "1px solid var(--line)",
        }}
      >
        <button type="button" className="adm-quiet" onClick={copy}>
          {copied ? "Copied" : "Copy reference"}
        </button>
        <button
          type="button"
          className="adm-quiet adm-quiet--danger"
          onClick={remove}
        >
          Delete
        </button>
      </div>
    </figure>
  );
}

export function PhotosAdmin() {
  const photos = usePhotos();
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onFiles(e: React.ChangeEvent<HTMLInputElement>): Promise<void> {
    const list = e.target.files;
    if (!list || list.length === 0) return;
    const files = Array.from(list);
    setBusy(true);
    try {
      for (const file of files) {
        try {
          const dataUrl = await compressFile(file);
          addPhoto(file.name, dataUrl);
        } catch {
          // skip a single bad file, keep going
        }
      }
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 44px)" }}>
      {/* Upload affordance — a generous hairline tile that reads as an invitation,
          not a SaaS button. The file input + canvas-downscale logic is untouched. */}
      <label
        className="press"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 10,
          minHeight: "clamp(150px, 22vw, 200px)",
          padding: "clamp(28px, 4vw, 44px) 20px",
          border: "1px solid var(--line)",
          background: busy ? "rgba(156, 84, 53, 0.035)" : "transparent",
          cursor: busy ? "wait" : "pointer",
          transition: "background 0.3s var(--ease), border-color 0.3s var(--ease)",
        }}
        aria-busy={busy}
      >
        <span
          className="over"
          aria-live="polite"
          style={{ color: busy ? "var(--clay)" : "var(--ink)" }}
        >
          {busy ? "Compressing…" : "Upload photographs"}
        </span>
        <span
          className="lede"
          style={{
            fontStyle: "italic",
            color: "var(--muted)",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
            maxWidth: "44ch",
          }}
        >
          {busy
            ? "Holding still while the cloth settles."
            : "Drop a piece of cloth, a look, a detail — we keep it ready to place."}
        </span>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          disabled={busy}
          onChange={onFiles}
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        />
      </label>

      {photos.length === 0 ? (
        <p className="adm-empty">Nothing in the library yet &mdash; add the first.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 32px)" }}>
          <p className="mono tnum" style={{ color: "var(--muted)", margin: 0, letterSpacing: "0.16em" }}>
            {photos.length} {photos.length === 1 ? "image" : "images"} in the library
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 168px), 1fr))",
              gap: "clamp(20px, 3vw, 36px)",
            }}
          >
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      )}

      {/* Storage note — one quiet mono line, the house's aside. */}
      <p className="mono" style={{ color: "var(--muted)", margin: 0, lineHeight: 1.7, maxWidth: "70ch", letterSpacing: "0.1em" }}>
        Kept in this browser for now, gently compressed. In time these move to Storage and return real CDN URLs.
      </p>
    </div>
  );
}
