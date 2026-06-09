"use client";

import { useRef, useState, type CSSProperties } from "react";
import { useAdminStats } from "@/lib/admin/store";
import type { Consultation, ConsultationStatus } from "@/types/admin";

const STATUS_LABEL: Record<ConsultationStatus, string> = {
  new: "New",
  contacted: "Contacted",
  booked: "Booked",
  archived: "Archived",
};

/* Catalogue counts read as a hairline-divided ledger strip, never KPI boxes.
   House-voice labels; the noun softens to singular when the count is one. */
interface Ledger {
  key: string;
  value: number;
  one: string;
  many: string;
}

function formatDate(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function Dashboard() {
  const stats = useAdminStats();
  // The recent list is the appointment book; the enquiry panel's call-to-action
  // scrolls to it and briefly lifts it (we cannot switch tabs from this section).
  const bookRef = useRef<HTMLElement | null>(null);
  const [flagged, setFlagged] = useState(false);

  const ledger: Ledger[] = [
    { key: "products", value: stats.products, one: "Piece", many: "Pieces" },
    { key: "categories", value: stats.categories, one: "Collection", many: "Collections" },
    { key: "photos", value: stats.photos, one: "Photograph", many: "Photographs" },
  ];

  const waiting = stats.newConsultations;

  function openBook() {
    const el = bookRef.current;
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setFlagged(true);
    window.setTimeout(() => setFlagged(false), 1600);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 5vw, 52px)" }}>
      {/* The ledger — catalogue counts, hairline-divided, not boxes. */}
      <section aria-label="The house catalogue">
        <div className="adm-stat-strip">
          {ledger.map((s) => (
            <div className="adm-stat" key={s.key}>
              <span className="adm-stat-num tnum">{s.value}</span>
              <span className="mono" style={{ color: "var(--muted)" }}>
                {s.value === 1 ? s.one : s.many}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* The enquiries — the loudest thing on the page when someone is waiting. */}
      <section aria-label="Enquiries waiting">
        {waiting > 0 ? (
          <div style={enquiryPanel}>
            <div style={enquiryNumWrap}>
              <span className="display tnum" style={enquiryNum}>
                {waiting}
              </span>
              <span className="over" style={{ color: "var(--amber-2)" }}>
                Still waiting
              </span>
            </div>
            <div style={enquiryBody}>
              <p className="display" style={enquiryLede}>
                {waiting === 1
                  ? "One enquiry hasn’t been answered yet."
                  : `${waiting} enquiries haven’t been answered yet.`}
              </p>
              <button type="button" className="press" onClick={openBook} style={enquiryCta}>
                Open the appointment book →
              </button>
            </div>
          </div>
        ) : (
          <div style={enquiryRestPanel}>
            <span className="over" style={{ color: "var(--muted)" }}>
              The appointment book
            </span>
            <p className="display" style={enquiryRestLede}>
              Nothing is waiting — every enquiry has been seen to.
            </p>
          </div>
        )}
      </section>

      {/* Recent enquiries — editorial index rows, newest first. */}
      <section ref={bookRef} aria-label="Recent enquiries" style={{ scrollMarginTop: 24 }}>
        <div style={bookHead}>
          <span className="over" style={{ color: "var(--muted)" }}>
            Latest to write in
          </span>
          {stats.consultations > 0 ? (
            <span className="cap tnum">
              {stats.consultations} in all
              {waiting > 0 ? <> · {waiting} waiting</> : null}
            </span>
          ) : null}
        </div>

        {stats.recent.length === 0 ? (
          <p className="adm-empty">No one has written in yet — the book is still open.</p>
        ) : (
          <ul
            style={{ listStyle: "none", margin: 0, padding: 0 }}
            data-flag={flagged ? "1" : "0"}
          >
            {stats.recent.map((c: Consultation, i) => (
              <li
                key={c.id}
                className="adm-row press"
                style={{ gridTemplateColumns: "auto 1fr auto" }}
              >
                <span className="adm-index tnum" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span className="adm-name" style={{ display: "block" }}>
                    {c.name}
                  </span>
                  <span className="cap tnum" style={{ display: "block", marginTop: 6 }}>
                    {c.service} · {formatDate(c.date)}
                  </span>
                </span>
                <span className="adm-chip" data-tone={c.status}>
                  {STATUS_LABEL[c.status]}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Quiet provenance line — one mono whisper, not a paragraph. */}
      <p className="mono" style={footnote}>
        Held in this browser for now · Supabase syncs live enquiries when wired.
      </p>

      <style>{`
        /* The appointment-book lift when the CTA points here. CSS-only, named
           properties, honoured by reduced-motion. */
        ul[data-flag] { transition: box-shadow 0.6s var(--ease), background 0.6s var(--ease); }
        ul[data-flag="1"] {
          box-shadow: inset 3px 0 0 0 var(--clay);
          background: rgba(156, 84, 53, 0.045);
        }
        @media (prefers-reduced-motion: reduce) {
          ul[data-flag] { transition: none !important; }
        }
        @media (max-width: 619px) {
          .adm-stat:not(:first-child) { border-left: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ── bespoke layout (the enquiry panel is intentionally asymmetric) ── */

const enquiryPanel: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "stretch",
  gap: 0,
  background: "var(--ink)",
  color: "var(--on-dark)",
};

const enquiryNumWrap: CSSProperties = {
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 10,
  padding: "clamp(24px, 3vw, 36px) clamp(24px, 3vw, 40px)",
  borderRight: "1px solid var(--on-dark-line)",
  minWidth: 132,
};

const enquiryNum: CSSProperties = {
  fontSize: "clamp(3.2rem, 7vw, 5.4rem)",
  lineHeight: 0.8,
  color: "var(--amber-2)",
};

const enquiryBody: CSSProperties = {
  flex: "1 1 240px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 18,
  padding: "clamp(24px, 3vw, 36px) clamp(24px, 3vw, 40px)",
};

const enquiryLede: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.3rem, 2.6vw, 1.9rem)",
  lineHeight: 1.15,
  color: "var(--on-dark)",
};

const enquiryCta: CSSProperties = {
  alignSelf: "flex-start",
  background: "transparent",
  border: "none",
  padding: "6px 0",
  color: "var(--amber-2)",
  fontFamily: "var(--ff-sans)",
  fontSize: "0.66rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  cursor: "pointer",
};

const enquiryRestPanel: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: "clamp(24px, 3vw, 32px) 0",
  borderTop: "1px solid var(--line)",
  borderBottom: "1px solid var(--line)",
};

const enquiryRestLede: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)",
  lineHeight: 1.2,
  color: "var(--ink)",
};

const bookHead: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: 16,
  marginBottom: 4,
};

const footnote: CSSProperties = {
  color: "var(--muted)",
  fontSize: "0.54rem",
  letterSpacing: "0.16em",
};
