"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { isUnlocked, unlock } from "@/lib/admin/auth";

const AdminPanel = dynamic(() => import("./AdminPanel").then((m) => m.AdminPanel), { ssr: false });

const TRIPLE_WINDOW = 1500;

export function AdminLauncher() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const clicks = useRef<number[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only mount flag, set once so the portal renders only after hydration
    setMounted(true);
  }, []);

  const trigger = useCallback(() => {
    if (typeof window !== "undefined" && isUnlocked()) {
      setOpen(true);
    } else {
      setError(false);
      setPin("");
      setModal(true);
    }
  }, []);

  // Triple-click within window on the secret dot.
  const onDotClick = () => {
    const now = Date.now();
    const recent = clicks.current.filter((t) => now - t < TRIPLE_WINDOW);
    recent.push(now);
    clicks.current = recent;
    if (recent.length >= 3) {
      clicks.current = [];
      trigger();
    }
  };

  // Global Shift+Alt+A shortcut.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.shiftKey && e.altKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        trigger();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [trigger]);

  // Modal Escape to close.
  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  const submit = () => {
    if (unlock(pin)) {
      setModal(false);
      setPin("");
      setError(false);
      setOpen(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open atelier"
        onClick={onDotClick}
        style={dot}
      >
        ·
      </button>

      {mounted && modal &&
        createPortal(
          <div style={backdrop} onClick={() => setModal(false)}>
            <div className="adm-card" style={card} onClick={(e) => e.stopPropagation()}>
              <div className="over" style={{ color: "var(--clay)", marginBottom: 18 }}>Atelier Access</div>
              <input
                autoFocus
                type="password"
                inputMode="numeric"
                className="adm-input"
                placeholder="····"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  if (error) setError(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submit();
                }}
                style={{ marginBottom: 16, textAlign: "center", letterSpacing: "0.4em" }}
              />
              <button type="button" className="adm-btn" onClick={submit} style={{ width: "100%" }}>
                Unlock
              </button>
              {error && (
                <p style={errLine}>Incorrect code.</p>
              )}
            </div>
          </div>,
          document.body,
        )}

      {open && <AdminPanel onClose={() => setOpen(false)} />}
    </>
  );
}

const dot: CSSProperties = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  opacity: 0.28,
  color: "var(--on-dark)",
  fontFamily: "var(--ff-mono)",
  fontSize: "0.8rem",
  lineHeight: 1,
  padding: "0 6px",
  userSelect: "none",
};

const backdrop: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 650,
  background: "rgba(20, 17, 14, 0.55)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
};

const card: CSSProperties = {
  width: "100%",
  maxWidth: 360,
};

const errLine: CSSProperties = {
  marginTop: 12,
  marginBottom: 0,
  color: "var(--clay)",
  fontStyle: "italic",
  fontFamily: "var(--ff-display)",
  fontSize: "0.95rem",
  textAlign: "center",
};
