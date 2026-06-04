"use client";

import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { useDarkHeader } from "@/components/xo/theme";
import { img } from "@/lib/xo-data";

export function SantaliPage() {
  useDarkHeader(true);

  return (
    <div className="fade-page" style={{ background: "var(--forest)", color: "var(--on-dark)" }}>
      <section style={{ padding: "150px 0 0", overflow: "hidden" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--on-dark-line)", paddingBottom: 18 }}>
              <span className="over" style={{ color: "var(--on-dark-mut)" }}>A New Chapter · @santali.x</span>
              <span className="over" style={{ color: "var(--on-dark-mut)" }}>Modern Indianwear</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(4rem,16vw,15rem)", lineHeight: 0.84, margin: "clamp(20px,3vw,40px) 0 0" }}>
              Santali<span className="italic" style={{ color: "var(--amber-2)" }}>.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "clamp(50px,7vw,90px) 0 clamp(80px,10vw,130px)" }}>
        <div className="wrap-wide santali-pg" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "center" }}>
          <Reveal>
            <div className="fig clip" style={{ background: "var(--milk)", aspectRatio: "4/5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("santali-a.jpg")} alt="Santali" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </Reveal>
          <div>
            <Reveal delay={1}>
              <p className="lede" style={{ color: "rgba(242,236,224,0.86)", fontSize: "clamp(1.1rem,1.6vw,1.35rem)", marginBottom: 28 }}>
                Rising from the <em style={{ fontStyle: "italic" }}>47</em> that defines XO47 — a number that, in Punjabi, becomes its very name.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="lede" style={{ color: "rgba(242,236,224,0.74)", marginBottom: 36 }}>
                Santali speaks in the language of texture: fabrics chosen for depth and tactility, silhouettes pared to their essence. Indianwear, distilled and reimagined — timeless, and entirely of today.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link className="btn btn-light" href="/book-consultation">Enquire</Link>
                <Link className="btn btn-on-dark" href="/collections">View Collections</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <style>{`@media(min-width:900px){.santali-pg{grid-template-columns:0.9fr 1.1fr !important;gap:80px !important}}`}</style>
    </div>
  );
}
