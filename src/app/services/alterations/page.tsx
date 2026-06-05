import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { img } from "@/lib/xo-data";

export const metadata = {
  title: "Alterations — The Line, Kept True | XO47",
  description:
    "A garment is never finished at delivery. The XO47 alterations atelier in New Delhi keeps every commission fitting flawlessly — adjusted, refreshed and rebalanced by the hands that made it.",
};

export default function AlterationsPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">Services · Aftercare</span>
              <span className="over" style={{ color: "var(--muted)" }}>In-house atelier</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)", maxWidth: "16ch" }}>
              The line, kept <span className="italic serif-accent">true.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              A garment is not finished the day it is delivered. A body changes, a favourite jacket earns its
              wear, an occasion asks for a sharper line. The same hands that drafted your commission keep it
              fitting exactly as it should &mdash; quietly, and for years.
            </p>
          </Reveal>
        </div>
      </section>

      {/* feature image */}
      <section style={{ padding: "var(--sec-sm) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="clip">
              <Figure src={img("blazer-a.jpg")} alt="A soft XO47 blazer" float style={{ aspectRatio: "16/10", maxHeight: "82vh" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* sections */}
      <section style={{ padding: "var(--sec-sm) 0 var(--sec)" }}>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>Complimentary on every commission.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                Every garment made by the house carries complimentary adjustment in its first season. A hem
                re-set, a waist eased, a sleeve brought to length &mdash; the small corrections that take a suit
                from very good to exactly right are part of the commission, not an extra to it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>What the atelier handles.</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, maxWidth: "62ch" }}>
                {[
                  ["Trouser", "Hem length and waist, taper through the leg, finished or unfinished."],
                  ["Jacket", "Sleeve length, body and chest suppression, a cleaner line through the waist."],
                  ["Shirting", "Sleeve and body tapering, collar and cuff refinement."],
                  ["Restoration", "Re-pressing, re-lining and considered repair for a piece worth keeping."],
                ].map((r, i) => (
                  <div key={r[0]} style={{ display: "grid", gridTemplateColumns: "minmax(110px,0.4fr) 1fr", gap: 20, padding: "18px 0", borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
                    <span className="over" style={{ color: "var(--clay)" }}>{r[0]}</span>
                    <span className="lede" style={{ margin: 0, fontSize: "0.98rem" }}>{r[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>Turnaround.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                Standard work is returned within three to five working days; more involved alterations take a
                little longer. When an occasion will not wait, an express turnaround can usually be arranged
                &mdash; speak to the studio and we will make it work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={{ marginTop: 56 }}>
              <Link className="btn" href="/book-consultation">Arrange an alteration</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
