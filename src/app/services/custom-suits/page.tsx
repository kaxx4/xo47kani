import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { img } from "@/lib/xo-data";

export const metadata = {
  title: "Custom Suits — The Bespoke Experience | XO47",
  description:
    "A fully hand-crafted suit, drafted to one body. The XO47 bespoke commission: cloth chosen at the mill, a pattern cut for you alone, half-canvas construction by hand in New Delhi.",
};

export default function CustomSuitsPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">Services · 01</span>
              <span className="over" style={{ color: "var(--muted)" }}>Bespoke Experience</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)", maxWidth: "16ch" }}>
              A suit cut for <span className="italic serif-accent">one body.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              The purest form of tailoring the house offers. No size on a rail, no compromise in the shoulder
              &mdash; a garment drafted from a clean sheet of paper to the measure, posture and intent of the
              man who will wear it. We say it&apos;s handcrafted, and really &mdash; it is.
            </p>
          </Reveal>
        </div>
      </section>

      {/* feature image */}
      <section style={{ padding: "var(--sec-sm) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="clip">
              <Figure src={img("look-08.jpg")} alt="A bespoke XO47 suit" float style={{ aspectRatio: "16/10", maxHeight: "82vh" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* sections */}
      <section style={{ padding: "var(--sec-sm) 0 var(--sec)" }}>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0" }}>
              <h2 className="display d-2" style={{ maxWidth: "16ch" }}>The cloth, chosen first.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                Every commission opens with the cloth. Wool, linen, silk, velvet, cashmere &mdash; woven at mills
                refined over generations, in England, Italy and India. We lay the bunches out, talk through weight
                and season and light, and let you carry swatches home to live with before a single thread is cut.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "16ch" }}>The pattern, drafted to you.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                More than thirty measurements are taken by hand, read against how you stand and how you move. From
                them we draft a paper pattern that belongs to no one else &mdash; then build the jacket on a
                half-canvas, the lapel padded and rolled by hand so it holds its line for years rather than seasons.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "16ch" }}>The trial, then the finish.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                A first trial in basted form, a final fitting once the line is true. Nothing leaves the studio at
                Ambawatta One until it is felt to be right. Expect four to six weeks from first conversation to final
                delivery; a more involved commission, longer. The result is singular, and entirely yours.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={{ marginTop: 56 }}>
              <Link className="btn" href="/book-consultation">Begin a commission</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
