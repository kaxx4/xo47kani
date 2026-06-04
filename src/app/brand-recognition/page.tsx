import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { CTABand } from "@/components/xo/home/sections";
import { FACES, img } from "@/lib/xo-data";

export const metadata = {
  title: "Brand Recognition — As Worn By | XO47",
  description:
    "XO47 has dressed some of India's most recognised figures across cinema, culture and public life — on red carpets, at weddings, and in the moments where presence is paramount.",
};

export default function BrandRecognitionPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "150px 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">Brand Recognition</span>
              <span className="over" style={{ color: "var(--muted)" }}>As worn by</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)", maxWidth: "15ch" }}>
              Worn for the moments that <span className="italic serif-accent">matter.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              The room you walk into. The deal you close. The nights that become a memory. XO47 has dressed
              individuals across cinema, culture, sport and public life &mdash; a quiet measure of the house&apos;s
              place in India&apos;s contemporary style.
            </p>
          </Reveal>
        </div>
      </section>

      {/* feature image */}
      <section style={{ padding: "clamp(60px,8vw,110px) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="clip">
              <Figure src={img("look-02.jpg")} alt="A black tuxedo by XO47" float style={{ aspectRatio: "16/10", maxHeight: "84vh" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* faces grid — numbered */}
      <section style={{ padding: "clamp(70px,9vw,120px) 0 clamp(60px,8vw,100px)" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 22, marginBottom: 44 }}>
              <span className="over">As Worn By</span>
              <span className="over" style={{ color: "var(--muted)" }}>{String(FACES.length).padStart(2, "0")} names</span>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px 44px" }}>
            {FACES.map((f, i) => (
              <Reveal key={f} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, borderTop: "1px solid var(--ink)", paddingTop: 20 }}>
                  <span className="mono" style={{ color: "var(--clay)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="display d-2">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* name marquee */}
      <section style={{ overflow: "hidden" }}>
        <div className="marq" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "26px 0" }}>
          <div style={{ display: "inline-block", animation: "marq 48s linear infinite" }}>
            {[...FACES, ...FACES, ...FACES].map((nm, i) => (
              <span key={i} className="display d-2" style={{ marginRight: 40 }}>
                {nm}<span className="italic serif-accent" style={{ margin: "0 22px", opacity: 0.8 }}>&mdash;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* presence copy */}
      <section style={{ background: "var(--ink)", color: "var(--on-dark)", padding: "clamp(90px,12vw,160px) 0", overflow: "hidden" }}>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--on-dark-mut)", marginBottom: 28 }}>The XO47 Presence</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display d-1" style={{ marginBottom: 40, maxWidth: "16ch" }}>
              Presence is the only thing that <span className="italic" style={{ color: "var(--amber-2)" }}>carries.</span>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 50, maxWidth: 1040 }}>
            <Reveal delay={1}>
              <p className="lede" style={{ color: "var(--on-dark-mut)", margin: 0 }}>
                XO47 garments have been worn at red carpets and cultural evenings, at weddings and the milestones a
                family remembers for a lifetime. The house does not dress for the photograph; it dresses for the
                man inside it &mdash; and the image follows on its own.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="lede" style={{ color: "var(--on-dark-mut)", margin: 0 }}>
                Recognition here is earned quietly, through word of mouth and genuine connection rather than noise.
                That public figures across entertainment and public life return to the house is its own kind of
                proof &mdash; of a presence felt long before it is seen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
