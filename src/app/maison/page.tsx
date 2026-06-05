import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { CTABand } from "@/components/xo/home/sections";
import { STORY, FACES, img } from "@/lib/xo-data";

export const metadata = {
  title: "The Maison — A House Built to Be Felt | XO47",
  description:
    "Founded in New Delhi in 2020, XO47 is a bespoke menswear house built on presence and identity. Our story, pillars and timeline.",
};

export default function MaisonPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">The Maison</span>
              <span className="over" style={{ color: "var(--muted)" }}>New Delhi · Est. {STORY.founded}</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(18px,3vw,34px) 0 clamp(18px,3vw,30px)", maxWidth: "16ch" }}>
              A house built to be <span className="italic serif-accent">felt.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ fontSize: "clamp(1.2rem,2vw,1.7rem)", lineHeight: 1.5, maxWidth: "30ch", fontFamily: "var(--ff-display)", fontStyle: "italic" }}>{STORY.lede}</p>
          </Reveal>
        </div>
      </section>

      {/* story split */}
      <section style={{ padding: "var(--sec) 0" }}>
        <div className="wrap-wide maison-split" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "start" }}>
          <Reveal>
            <div className="clip" data-parallax="0.05">
              <Figure src={img("look-10.jpg")} alt="A bespoke XO47 commission in tailoring" float style={{ aspectRatio: "4/5" }} />
            </div>
          </Reveal>
          <div>
            {STORY.body.map((p, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <p className="lede" style={{ marginBottom: 26, fontSize: i === 0 ? "1.15rem" : "1rem", color: i === 0 ? "var(--ink)" : "var(--ink-2)" }}>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={2}>
              <p className="display d-2 italic" style={{ color: "var(--clay)", margin: "36px 0 14px" }}>
                &ldquo;It is not for you to show — it is for you to feel.&rdquo;
              </p>
              <div className="mono" style={{ color: "var(--muted)" }}>— Shrey Suneja, Founder</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* pillars */}
      <section style={{ background: "var(--dove)", padding: "var(--sec) 0" }}>
        <div className="wrap-wide">
          <Reveal><h2 className="eyebrow" style={{ margin: "0 0 50px" }}>What we stand on</h2></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "50px 44px" }}>
            {STORY.pillars.map((p, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 26 }}>
                  <span className="mono" style={{ color: "var(--clay)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display d-1" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", margin: "14px 0 16px" }}>{p[0]}</h3>
                  <p className="lede" style={{ fontSize: "0.96rem", margin: 0 }}>{p[1]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* milestones */}
      <section style={{ padding: "var(--sec) 0" }}>
        <div className="wrap-wide">
          <Reveal><h2 className="display d-1" style={{ marginBottom: 56 }}>The <span className="italic serif-accent">timeline.</span></h2></Reveal>
          {STORY.milestones.map((m, i) => (
            <Reveal key={i} delay={1}>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(90px,0.4fr) 1fr", gap: 28, alignItems: "baseline", borderTop: "1px solid var(--line)", padding: "26px 0" }}>
                <span className="display d-2" style={{ color: "var(--clay)" }}>{m[0]}</span>
                <span className="lede" style={{ fontSize: "1.05rem", color: "var(--ink)" }}>{m[1]}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* recognition mini */}
      <section style={{ background: "var(--ink)", color: "var(--on-dark)", padding: "var(--sec) 0", overflow: "hidden" }}>
        <div className="wrap-wide">
          <Reveal><div className="eyebrow" style={{ color: "var(--on-dark-mut)", marginBottom: 24 }}>Brand Recognition</div>
            <h2 className="display d-1" style={{ marginBottom: 44 }}>Worn for the moments<br />that <span className="italic" style={{ color: "var(--amber-2)" }}>matter.</span></h2></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px 30px" }}>
            {FACES.map((f, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid var(--on-dark-line)", paddingTop: 14 }}>
                  <span className="mono" style={{ color: "var(--amber-2)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="display d-3">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <style>{`@media(min-width:900px){.maison-split{grid-template-columns:0.85fr 1.15fr !important;gap:80px !important}}`}</style>
    </div>
  );
}
