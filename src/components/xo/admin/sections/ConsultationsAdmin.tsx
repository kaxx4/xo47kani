"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { useConsultations, setConsultationStatus, deleteConsultation } from "@/lib/admin/store";
import type { Consultation, ConsultationStatus } from "@/types/admin";

/* XO47 — The Appointment Book (Enquiries).
   Editorial filter line + numbered index rows + a ledger-entry detail. The topbar
   owns the section title; this file owns only the inbox itself. Reads/writes only
   via the store API; styling via .adm-* + design-system classes. Radius stays 0. */

type Filter = "all" | ConsultationStatus;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "contacted", label: "Contacted" },
  { id: "booked", label: "Booked" },
  { id: "archived", label: "Archived" },
];

const STATUSES: ConsultationStatus[] = ["new", "contacted", "booked", "archived"];

function formatSubmitted(ms: number): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(ms));
  } catch {
    return String(ms);
  }
}

export function ConsultationsAdmin() {
  const consultations = useConsultations();
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: consultations.length, new: 0, contacted: 0, booked: 0, archived: 0 };
    for (const q of consultations) c[q.status] += 1;
    return c;
  }, [consultations]);

  const filtered = useMemo(
    () => (filter === "all" ? consultations : consultations.filter((q) => q.status === filter)),
    [consultations, filter],
  );

  const selected = selectedId ? consultations.find((q) => q.id === selectedId) ?? null : null;

  if (selected) {
    return (
      <ConsultationDetail
        c={selected}
        onBack={() => setSelectedId(null)}
        onDeleted={() => setSelectedId(null)}
      />
    );
  }

  return (
    <div>
      {/* FILTER LINE — quiet .ulink-style toggles, active one in clay. */}
      <div style={filterBar} role="group" aria-label="Filter enquiries">
        {FILTERS.map((f, i) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              className="adm-filter press tap"
              onClick={() => setFilter(f.id)}
              style={{ ...(i > 0 ? filterSep : null), color: active ? "var(--clay)" : "var(--muted)" }}
              aria-pressed={active}
            >
              <span className={active ? "adm-filter-on" : undefined}>{f.label}</span>
              <span className="tnum" style={{ marginLeft: 7, opacity: active ? 0.85 : 0.6 }}>
                {counts[f.id]}
              </span>
            </button>
          );
        })}
      </div>

      {/* INDEX — editorial numbered rows; whole row opens the entry. */}
      {filtered.length === 0 ? (
        <p className="adm-empty">
          {consultations.length === 0
            ? "No one has written in yet — the book is open."
            : "Nothing under this heading — try another."}
        </p>
      ) : (
        <div>
          {filtered.map((q, i) => (
            <button
              key={q.id}
              type="button"
              className="adm-row adm-enq-row press"
              onClick={() => setSelectedId(q.id)}
              style={rowGrid}
            >
              <span className="adm-index tnum" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span style={{ minWidth: 0 }}>
                <span className="adm-name" style={{ display: "block" }}>
                  {q.name}
                </span>
                <span className="cap" style={{ color: "var(--muted)" }}>
                  {q.city}
                </span>
              </span>

              <span className="mono adm-col-service" style={{ color: "var(--ink-2)", minWidth: 0 }}>
                {q.service}
              </span>

              <span className="cap tnum adm-col-when">
                {q.date} &middot; {q.time}
              </span>

              <span style={{ textAlign: "right" }}>
                <span className="adm-chip" data-tone={q.status}>
                  {q.status}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}

      <style>{`
        .adm-enq-row { width: 100%; text-align: left; background: transparent; cursor: pointer; }
        .adm-filter { background: none; border: none; cursor: pointer; font-family: var(--ff-sans); font-size: 0.66rem; letter-spacing: 0.2em; text-transform: uppercase; line-height: 1; padding: 6px 0; transition: color 0.25s var(--ease); }
        .adm-filter-on { position: relative; }
        .adm-filter-on::after { content: ""; position: absolute; left: 0; right: 0; bottom: -3px; height: 1px; background: var(--clay); }
        @media (max-width: 720px) {
          .adm-col-service { display: none !important; }
          .adm-col-when { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .adm-filter { transition: none !important; }
        }
      `}</style>
    </div>
  );
}

function ConsultationDetail({
  c,
  onBack,
  onDeleted,
}: {
  c: Consultation;
  onBack: () => void;
  onDeleted: () => void;
}) {
  const mailto = `mailto:${c.email}?subject=${encodeURIComponent(
    `Your XO47 consultation — ${c.ref}`,
  )}&body=${encodeURIComponent(`Dear ${c.name},\n\nThank you for your enquiry with XO47.\n\n`)}`;

  function onDelete() {
    if (window.confirm(`Delete the enquiry from ${c.name} (${c.ref})? This cannot be undone.`)) {
      deleteConsultation(c.id);
      onDeleted();
    }
  }

  return (
    <div>
      {/* RETURN — quiet text action back to the book. */}
      <button type="button" className="adm-quiet press tap" onClick={onBack}>
        &larr; The appointment book
      </button>

      {/* THE ENTRY — a framed ledger card. */}
      <div className="adm-card" style={{ marginTop: 14 }}>
        {/* Header: who, with the reference stamped opposite like a telegram. */}
        <div style={entryHead}>
          <div style={{ minWidth: 0 }}>
            <span className="over" style={{ color: "var(--clay)", display: "block", marginBottom: 10 }}>
              The Enquiry
            </span>
            <h2 className="display d-2" style={{ marginBottom: 6 }}>
              {c.name}
            </h2>
            <p className="cap" style={{ color: "var(--muted)" }}>
              {c.city}
            </p>
          </div>
          <span className="mono tnum" style={{ color: "var(--muted)", whiteSpace: "nowrap" }}>
            {c.ref}
          </span>
        </div>

        <hr className="rule" style={{ margin: "22px 0" }} />

        {/* Contact lines. */}
        <div style={fieldGrid}>
          <Field label="Email">
            <a href={mailto} style={linkStyle}>{c.email}</a>
          </Field>
          <Field label="Phone">
            <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="tnum" style={linkStyle}>{c.phone}</a>
          </Field>
        </div>

        <hr className="rule" style={{ margin: "22px 0" }} />

        {/* What they asked for. */}
        <span className="over" style={{ color: "var(--muted)", display: "block", marginBottom: 16 }}>
          What they ask for
        </span>
        <div style={fieldGrid}>
          <Field label="Service">{c.service}</Field>
          <Field label="Occasion">{c.occasion}</Field>
          <Field label="Timeline">{c.timeline}</Field>
          <Field label="Appointment">{c.appt}</Field>
          <Field label="Preferred date">
            <span className="tnum">{c.date}</span>
          </Field>
          <Field label="Preferred time">
            <span className="tnum">{c.time}</span>
          </Field>
        </div>

        {/* Notes, set as a quiet hand-written block. */}
        <div style={{ marginTop: 24 }}>
          <span className="adm-label">In their words</span>
          {c.notes.trim() ? (
            <p style={notesStyle}>{c.notes}</p>
          ) : (
            <p className="cap" style={{ color: "var(--muted)" }}>Nothing further was written.</p>
          )}
        </div>

        <hr className="rule" style={{ margin: "22px 0" }} />

        {/* Where this stands — status as a quiet segmented set. */}
        <span className="over" style={{ color: "var(--muted)", display: "block", marginBottom: 14 }}>
          Where this stands
        </span>
        <div style={statusRow} role="group" aria-label="Set enquiry status">
          {STATUSES.map((s) => {
            const active = s === c.status;
            return (
              <button
                key={s}
                type="button"
                className="adm-chip press"
                data-tone={s}
                onClick={() => setConsultationStatus(c.id, s)}
                style={{
                  cursor: "pointer",
                  background: active ? "var(--ink)" : "transparent",
                  color: active ? "var(--milk)" : undefined,
                  borderColor: active ? "var(--ink)" : undefined,
                }}
                aria-pressed={active}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* Stamp foot: when it arrived + quiet reply / remove. */}
        <div style={entryFoot}>
          <span className="mono" style={{ color: "var(--muted)" }}>
            Written in{" "}
            <span className="tnum" style={{ color: "var(--ink-2)" }}>{formatSubmitted(c.createdAt)}</span>
          </span>
          <div style={{ flex: 1 }} />
          <a className="adm-btn-ghost press" href={mailto}>
            Reply by letter
          </a>
          <button type="button" className="adm-quiet adm-quiet--danger press tap" onClick={onDelete}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ minWidth: 0 }}>
      <span className="adm-label">{label}</span>
      <div style={fieldValue}>{children}</div>
    </div>
  );
}

/* ---- inline styles (bespoke; radius stays 0) ---- */
const filterBar: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "14px 0",
  marginBottom: 4,
  paddingBottom: 18,
  borderBottom: "1px solid var(--ink)",
};

const filterSep: CSSProperties = {
  marginLeft: 18,
  paddingLeft: 18,
  borderLeft: "1px solid var(--line)",
};

const rowGrid: CSSProperties = {
  gridTemplateColumns: "auto minmax(0, 1.6fr) minmax(0, 1.3fr) minmax(0, 1fr) auto",
};

const entryHead: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
};

const fieldGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "18px 24px",
};

const fieldValue: CSSProperties = {
  fontFamily: "var(--ff-sans)",
  fontSize: "0.95rem",
  color: "var(--ink)",
  lineHeight: 1.5,
  wordBreak: "break-word",
};

const linkStyle: CSSProperties = {
  color: "var(--clay)",
  textDecoration: "none",
  borderBottom: "1px solid color-mix(in oklch, var(--clay) 30%, transparent)",
};

const statusRow: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
};

const notesStyle: CSSProperties = {
  fontFamily: "var(--ff-sans)",
  fontSize: "0.95rem",
  color: "var(--ink)",
  lineHeight: 1.7,
  whiteSpace: "pre-wrap",
  marginTop: 10,
};

const entryFoot: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 12,
  marginTop: 24,
  paddingTop: 18,
  borderTop: "1px solid var(--line)",
};
