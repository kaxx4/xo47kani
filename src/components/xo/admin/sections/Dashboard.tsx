"use client";

import { useAdminStats } from "@/lib/admin/store";
import type { Consultation, ConsultationStatus } from "@/types/admin";

interface Kpi {
  key: string;
  label: string;
  value: number;
  highlight?: boolean;
}

const STATUS_LABEL: Record<ConsultationStatus, string> = {
  new: "New",
  contacted: "Contacted",
  booked: "Booked",
  archived: "Archived",
};

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

  const kpis: Kpi[] = [
    { key: "products", label: "Products", value: stats.products },
    { key: "categories", label: "Categories", value: stats.categories },
    { key: "photos", label: "Photos", value: stats.photos },
    { key: "consultations", label: "Consultations", value: stats.consultations },
    {
      key: "new",
      label: "New enquiries",
      value: stats.newConsultations,
      highlight: true,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 44px)" }}>
      {/* KPI row */}
      <section>
        <p className="over" style={{ color: "var(--muted)", marginBottom: 16 }}>
          At a glance
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
            gap: 1,
            border: "1px solid var(--line)",
            background: "var(--line)",
          }}
        >
          {kpis.map((kpi) => (
            <div
              key={kpi.key}
              className="adm-card"
              style={{
                border: "none",
                background: kpi.highlight ? "var(--ink)" : "var(--milk)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 18,
                minHeight: 138,
              }}
            >
              <span
                className="mono"
                style={{
                  color: kpi.highlight ? "var(--amber-2)" : "var(--muted)",
                }}
              >
                {kpi.label}
              </span>
              <span
                className="display d-1 tnum"
                style={{
                  color: kpi.highlight ? "var(--amber-2)" : "var(--ink)",
                  lineHeight: 0.9,
                }}
              >
                {kpi.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent enquiries */}
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <p className="over" style={{ color: "var(--muted)" }}>
            Recent enquiries
          </p>
          {stats.recent.length > 0 ? (
            <span className="cap tnum">
              {stats.recent.length} shown
            </span>
          ) : null}
        </div>

        <div className="adm-card" style={{ padding: 0 }}>
          {stats.recent.length === 0 ? (
            <p className="adm-empty">No enquiries yet.</p>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {stats.recent.map((c: Consultation, i) => (
                <li
                  key={c.id}
                  className="press"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "clamp(12px, 3vw, 28px)",
                    flexWrap: "wrap",
                    padding: "clamp(16px, 2vw, 22px) clamp(16px, 2vw, 24px)",
                    borderTop: i === 0 ? "none" : "1px solid var(--line)",
                  }}
                >
                  <div style={{ minWidth: 0, flex: "1 1 200px" }}>
                    <span
                      className="display d-3"
                      style={{ display: "block", color: "var(--ink)" }}
                    >
                      {c.name}
                    </span>
                    <span
                      className="cap tnum"
                      style={{ display: "block", marginTop: 6 }}
                    >
                      {c.service} · {formatDate(c.date)}
                    </span>
                  </div>
                  <span className="adm-chip" data-tone={c.status}>
                    {STATUS_LABEL[c.status]}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Footnote */}
      <p
        className="cap"
        style={{
          color: "var(--muted)",
          textTransform: "none",
          letterSpacing: "0.02em",
          lineHeight: 1.6,
          maxWidth: "62ch",
        }}
      >
        Demo data is stored in this browser (localStorage). Connect Supabase to
        capture live visitor enquiries and sync across devices.
      </p>
    </div>
  );
}
