"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { useConsultations, setConsultationStatus, deleteConsultation } from "@/lib/admin/store";
import type { Consultation, ConsultationStatus } from "@/types/admin";

/* XO47 — Consultations admin: the lead inbox.
   Filter bar + scannable list + inline detail panel. Reads/writes only via
   the store API; styling via .adm-* + design-system classes. Radius stays 0. */

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
      {/* FILTER BAR */}
      <div style={filterBar}>
        {FILTERS.map((f) => {
          const active = f.id === filter;
          const tone = f.id === "all" ? undefined : f.id;
          return (
            <button
              key={f.id}
              type="button"
              className="adm-chip press"
              data-tone={tone}
              onClick={() => setFilter(f.id)}
              style={{
                cursor: "pointer",
                background: active ? "var(--ink)" : "transparent",
                color: active ? "var(--milk)" : undefined,
                borderColor: active ? "var(--ink)" : undefined,
              }}
              aria-pressed={active}
            >
              {f.label}
              <span className="tnum" style={{ marginLeft: 8, opacity: 0.75 }}>
                {counts[f.id]}
              </span>
            </button>
          );
        })}
      </div>

      {/* HEADER ROW */}
      <div className="adm-tr" style={{ ...rowGrid, padding: "0 0 12px", borderBottom: "1px solid var(--line)" }}>
        <span className="adm-th">Name</span>
        <span className="adm-th adm-col-service">Service</span>
        <span className="adm-th adm-col-when">Preferred</span>
        <span className="adm-th" style={{ textAlign: "right" }}>Status</span>
      </div>

      {/* LIST */}
      {filtered.length === 0 ? (
        <p className="adm-empty">
          {consultations.length === 0 ? "No enquiries yet." : "Nothing in this view."}
        </p>
      ) : (
        <div>
          {filtered.map((q) => (
            <button
              key={q.id}
              type="button"
              className="adm-tr adm-row press"
              onClick={() => setSelectedId(q.id)}
              style={{ ...rowGrid, ...rowBtn }}
            >
              <span style={{ minWidth: 0 }}>
                <span className="display d-3" style={{ display: "block", lineHeight: 1.08 }}>
                  {q.name}
                </span>
                <span className="cap adm-col-meta">{q.city}</span>
              </span>
              <span className="mono adm-col-service" style={{ color: "var(--ink-2)", minWidth: 0 }}>
                {q.service}
              </span>
              <span className="cap tnum adm-col-when">
                {q.date} · {q.time}
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
        .adm-row { width: 100%; text-align: left; background: transparent; border: none; border-bottom: 1px solid var(--line); cursor: pointer; transition: background 0.2s; }
        .adm-row:hover { background: var(--dove); }
        @media (max-width: 720px) {
          .adm-col-service { display: none !important; }
          .adm-col-when { display: none !important; }
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
      {/* TOP: back + ref + actions */}
      <div style={detailTop}>
        <button type="button" className="adm-btn-ghost press" onClick={onBack}>
          &larr; Back
        </button>
        <span className="mono tnum" style={{ color: "var(--muted)", alignSelf: "center" }}>
          {c.ref}
        </span>
        <div style={{ flex: 1 }} />
        <a className="adm-btn-ghost press" href={mailto}>
          Reply by email
        </a>
        <button type="button" className="adm-btn-danger press" onClick={onDelete}>
          Delete
        </button>
      </div>

      {/* IDENTITY */}
      <div className="adm-card" style={{ marginTop: 16 }}>
        <h2 className="display d-2" style={{ marginBottom: 6 }}>{c.name}</h2>
        <p className="cap" style={{ marginBottom: 18 }}>{c.city}</p>

        <div style={fieldGrid}>
          <Field label="Email">
            <a href={mailto} style={linkStyle}>{c.email}</a>
          </Field>
          <Field label="Phone">
            <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="tnum" style={linkStyle}>{c.phone}</a>
          </Field>
        </div>
      </div>

      {/* STATUS CHANGER */}
      <div className="adm-card" style={{ marginTop: 16 }}>
        <span className="adm-label">Status</span>
        <div style={statusRow}>
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
      </div>

      {/* ENQUIRY DETAIL */}
      <div className="adm-card" style={{ marginTop: 16 }}>
        <span className="adm-label">Enquiry</span>
        <div style={fieldGrid}>
          <Field label="Service">{c.service}</Field>
          <Field label="Occasion">{c.occasion}</Field>
          <Field label="Timeline">{c.timeline}</Field>
          <Field label="Appointment type">{c.appt}</Field>
          <Field label="Preferred date">
            <span className="tnum">{c.date}</span>
          </Field>
          <Field label="Preferred time">{c.time}</Field>
        </div>

        <div style={{ marginTop: 20 }}>
          <span className="adm-label">Notes</span>
          {c.notes.trim() ? (
            <p style={notesStyle}>{c.notes}</p>
          ) : (
            <p className="cap" style={{ color: "var(--muted)" }}>&mdash;</p>
          )}
        </div>
      </div>

      {/* META */}
      <div style={metaRow}>
        <span className="mono">
          Ref <span className="tnum" style={{ color: "var(--ink-2)" }}>{c.ref}</span>
        </span>
        <span className="mono">
          Submitted <span className="tnum" style={{ color: "var(--ink-2)" }}>{formatSubmitted(c.createdAt)}</span>
        </span>
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
  gap: 8,
  marginBottom: 24,
};

const rowGrid: CSSProperties = {
  gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1.3fr) minmax(0, 1fr) auto",
};

const rowBtn: CSSProperties = {
  font: "inherit",
  color: "inherit",
};

const detailTop: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
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
};

const metaRow: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: 12,
  marginTop: 16,
  paddingTop: 16,
  borderTop: "1px solid var(--line)",
  color: "var(--muted)",
};
