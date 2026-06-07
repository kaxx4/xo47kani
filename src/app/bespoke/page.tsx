import { Reveal } from "@/components/xo/Reveal";
import { CTABand } from "@/components/xo/home/sections";
import { SERVICES, FABRICS, img } from "@/lib/xo-data";

export const metadata = {
  title: "The Bespoke Experience — One Body. One Pattern. | XO47",
  description:
    "The purest form of tailoring — a fully hand-crafted garment drafted to a single body. The XO47 commission process and the cloths we work in.",
};

export default function BespokePage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">The Bespoke Experience</span>
              <span className="over" style={{ color: "var(--muted)" }}>By appointment</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(18px,3vw,34px) 0 clamp(14px,2vw,26px)", maxWidth: "15ch" }}>
              One body. One <span className="italic serif-accent">pattern.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "52ch" }}>
              The purest form of tailoring — a fully hand-crafted garment drafted to a single body. No two are alike, because no two of you are. Here is how a commission comes to life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* feature image */}
      <section style={{ padding: "var(--sec-sm) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="zoom clip" style={{ aspectRatio: "16/10", background: "var(--dove)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("look-07.jpg")} alt="A hand-tailored XO47 garment in the atelier" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", mixBlendMode: "multiply" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section style={{ padding: "var(--sec) 0" }}>
        <div className="wrap">
          <Reveal><h2 className="eyebrow" style={{ margin: "0 0 8px" }}>The Process</h2></Reveal>
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={1}>
              <div className="bsp-row" style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 26, alignItems: "start", borderTop: "1px solid var(--line)", padding: "32px 0" }}>
                <span className="display d-2 tnum" style={{ color: "var(--clay)" }}>{s[0]}</span>
                <div className="bsp-inner" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
                  <h3 className="display d-2">{s[1]}</h3>
                  <p className="lede" style={{ fontSize: "0.98rem", margin: 0, maxWidth: "52ch" }}>{s[2]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* fabrics */}
      <section style={{ background: "var(--ink)", color: "var(--on-dark)", padding: "var(--sec) 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
              <h2 className="display d-1">The <span className="italic" style={{ color: "var(--amber-2)" }}>cloth.</span></h2>
              <p className="lede" style={{ color: "var(--on-dark-mut)", maxWidth: "40ch", margin: 0 }}>Sourced from mills refined over generations. We help you choose for hand, weight and the way light moves across it.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "12px 40px" }}>
            {FABRICS.map((f, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, alignItems: "baseline", borderTop: "1px solid var(--on-dark-line)", padding: "22px 0" }}>
                  <div>
                    <h3 className="display d-3" style={{ marginBottom: 6 }}>{f[0]}</h3>
                    <p className="lede" style={{ fontSize: "0.9rem", color: "var(--on-dark-mut)", margin: 0 }}>{f[2]}</p>
                  </div>
                  <span className="mono" style={{ color: "var(--amber-2)" }}>{f[1]}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <style>{`@media(min-width:768px){.bsp-inner{grid-template-columns:1fr 1.3fr !important;gap:36px !important;align-items:baseline}}`}</style>
    </div>
  );
}
