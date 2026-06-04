import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/xo/Reveal";

export interface InfoSection {
  heading?: string;
  /* Prose paragraphs */
  body?: string[];
  /* Q&A rows (renders as a definition list) */
  items?: { q: string; a: string }[];
  /* Label/value rows (e.g. shipping table) */
  rows?: [string, string][];
}

interface InfoPageLayoutProps {
  eyebrow: string;
  title: ReactNode;
  meta?: string;
  intro?: string;
  sections: InfoSection[];
  cta?: { label: string; href: string };
}

export function InfoPageLayout({ eyebrow, title, meta, intro, sections, cta }: InfoPageLayoutProps) {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "150px 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid var(--ink)",
                paddingBottom: 18,
              }}
            >
              <span className="over">{eyebrow}</span>
              {meta && <span className="over" style={{ color: "var(--muted)" }}>{meta}</span>}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="display"
              style={{
                fontSize: "clamp(3rem,9vw,9rem)",
                lineHeight: 0.9,
                margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)",
                maxWidth: "16ch",
              }}
            >
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={2}>
              <p className="lede" style={{ maxWidth: "60ch", marginBottom: 8 }}>
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* body */}
      <section style={{ padding: "clamp(60px,8vw,110px) 0 clamp(80px,10vw,140px)" }}>
        <div className="wrap" style={{ maxWidth: 980 }}>
          {sections.map((s, i) => (
            <Reveal key={i} delay={1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 18,
                  padding: "clamp(28px,4vw,44px) 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--line)",
                }}
              >
                {s.heading && (
                  <h2 className="display d-3" style={{ maxWidth: "20ch" }}>
                    {s.heading}
                  </h2>
                )}
                {s.body && (
                  <div>
                    {s.body.map((p, j) => (
                      <p key={j} className="lede" style={{ marginTop: j === 0 ? 0 : 18, marginBottom: 0 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                {s.items && (
                  <div style={{ display: "grid", gap: 0 }}>
                    {s.items.map((it, j) => (
                      <div key={j} style={{ borderTop: "1px solid var(--line)", padding: "22px 0" }}>
                        <h3 className="display d-3" style={{ fontSize: "1.3rem", marginBottom: 10 }}>
                          {it.q}
                        </h3>
                        <p className="lede" style={{ margin: 0, fontSize: "0.98rem" }}>
                          {it.a}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {s.rows && (
                  <div style={{ display: "grid", gap: 0 }}>
                    {s.rows.map((r, j) => (
                      <div
                        key={j}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "0.9fr 1.4fr",
                          gap: 18,
                          padding: "16px 0",
                          borderBottom: "1px solid var(--line)",
                        }}
                      >
                        <span className="over" style={{ color: "var(--muted)" }}>
                          {r[0]}
                        </span>
                        <span style={{ fontSize: "0.95rem" }}>{r[1]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}

          {cta && (
            <Reveal delay={1}>
              <div style={{ marginTop: 56 }}>
                <Link className="btn" href={cta.href}>
                  {cta.label}
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}
