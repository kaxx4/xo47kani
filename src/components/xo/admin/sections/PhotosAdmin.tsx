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
    <div className="adm-card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.dataUrl} alt={photo.name} className="adm-thumb" />
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
        <button
          type="button"
          className="adm-btn-ghost press"
          onClick={copy}
          style={{ flex: "1 1 auto", minWidth: 0 }}
        >
          {copied ? "Copied" : "Copy reference"}
        </button>
        <button
          type="button"
          className="adm-btn-danger press"
          onClick={remove}
          style={{ flex: "0 0 auto" }}
        >
          Delete
        </button>
      </div>
    </div>
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
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 16,
          justifyContent: "space-between",
        }}
      >
        <p
          className="mono tnum"
          style={{ color: "var(--muted)", margin: 0 }}
          aria-live="polite"
        >
          {busy
            ? "Compressing…"
            : `${photos.length} ${photos.length === 1 ? "photo" : "photos"}`}
        </p>
        <label
          className="adm-btn press"
          style={{ cursor: busy ? "not-allowed" : "pointer", opacity: busy ? 0.4 : 1 }}
        >
          {busy ? "Compressing…" : "Upload photos"}
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
      </div>

      <p className="cap" style={{ color: "var(--muted)", margin: 0, maxWidth: "62ch" }}>
        Photos are stored in this browser for the demo (auto-compressed). With Supabase,
        uploads go to Storage and return real CDN URLs.
      </p>

      {photos.length === 0 ? (
        <p className="adm-empty">No photos yet &mdash; upload your first.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 150px), 1fr))",
            gap: 16,
          }}
        >
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
}
