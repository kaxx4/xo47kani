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
          <div className="adm-key-backdrop" style={backdrop} onClick={() => setModal(false)}>
            <div
              className="adm-card adm-lift adm-key-card"
              style={card}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Atelier access"
            >
              <div className="over" style={{ color: "var(--clay)", textAlign: "center" }}>Atelier Access</div>
              <h2 className="display d-3" style={keyHeading}>The house, unlocked.</h2>
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
                aria-invalid={error}
                style={{ marginBottom: 16, textAlign: "center", letterSpacing: "0.4em" }}
              />
              <button type="button" className="adm-btn" onClick={submit} style={{ width: "100%" }}>
                Unlock
              </button>
              {error && (
                <p style={errLine}>Incorrect code.</p>
              )}
            </div>
            <style>{`
              .adm-key-backdrop { animation: adm-key-fade 0.32s cubic-bezier(0.22,1,0.36,1) both; }
              .adm-key-card { animation: adm-key-rise 0.46s cubic-bezier(0.22,1,0.36,1) 0.06s both; }
              @keyframes adm-key-fade { from { opacity: 0; } to { opacity: 1; } }
              @keyframes adm-key-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
              @media (prefers-reduced-motion: reduce) {
                .adm-key-backdrop, .adm-key-card { animation: none !important; }
              }
            `}</style>
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
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
};

const card: CSSProperties = {
  width: "100%",
  maxWidth: 360,
  padding: "clamp(28px, 4vw, 40px)",
};

const keyHeading: CSSProperties = {
  margin: "14px 0 24px",
  textAlign: "center",
  lineHeight: 1.06,
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
