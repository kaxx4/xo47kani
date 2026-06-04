import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { COLLECTIONS, SERVICES, FACES, img } from "@/lib/xo-data";
import type { MoodTheme } from "@/components/xo/home/theme-types";

/* A "look" photo: floats via multiply on light/colour canvases,
   sits in a bright milk frame on dark canvases. */
export function Look({
  t,
  src,
  alt = "",
  style,
  className = "",
  imgStyle,
}: {
  t: MoodTheme;
  src: string;
  alt?: string;
  style?: CSSProperties;
  className?: string;
  imgStyle?: CSSProperties;
}) {
  if (t.dark) {
    return (
      <div className={`fig ${className}`} style={{ background: "var(--milk)", ...style }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", ...imgStyle }} />
      </div>
    );
  }
  return <Figure src={src} alt={alt} float className={className} style={style} imgStyle={imgStyle} />;
}

/* ── PHILOSOPHY — keyword rhythm + manifesto ── */
export function PhilosophyBand({ t }: { t: MoodTheme }) {
  const words = ["Precision", "Intention", "Structure", "Refined", "Sharp", "Timeless"];
  return (
    <section style={{ background: t.alt, color: t.text, padding: "clamp(90px,12vw,170px) 0", overflow: "hidden" }}>
      <div className="wrap">
        <Reveal><div className="over" style={{ color: t.muted, marginBottom: 50 }}>The XO47 Philosophy</div></Reveal>
        <Reveal>
          <h2 className="display d-1" style={{ maxWidth: "20ch", marginBottom: 80, fontWeight: 500 }}>
            {words.map((w, i) => (
              <span key={i}>
                <span style={{ color: i % 2 ? t.accent : "inherit" }}>{w}</span>
                {i < words.length - 1 ? <span className="italic" style={{ opacity: 0.3, margin: "0 .22em" }}>/</span> : "."}
              </span>
            ))}
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 60, maxWidth: 1040 }}>
          <Reveal delay={1}>
            <p className="lede" style={{ color: t.dark ? "var(--on-dark-mut)" : "var(--ink-2)", margin: 0 }}>
              XO47 is a bespoke menswear house built on the philosophy of presence and identity. Every garment
              begins with intention — from the choice of cloth to the precision of a single hand-set buttonhole,
              guided by a deep reading of the man who will wear it.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div>
              <p className="display d-2 italic" style={{ margin: "0 0 18px", color: t.accent }}>
                “It is not for you<br />to show — it is for<br />you to feel.”
              </p>
              <div className="mono" style={{ color: t.muted }}>— Shrey Suneja, Founder</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── COLLECTIONS — staggered editorial grid w/ giant numerals ── */
export function CollectionsBlock({ t }: { t: MoodTheme }) {
  return (
    <section style={{ background: t.canvas, color: t.text, padding: "clamp(80px,10vw,150px) 0", overflow: "hidden" }}>
      <div className="wrap-wide">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 70 }}>
          <Reveal>
            <div className="eyebrow" style={{ color: t.muted, marginBottom: 22 }}>The Collections</div>
            <h2 className="display d-hero" style={{ maxWidth: "11ch" }}>Crafted for<br />every <span className="italic" style={{ color: t.accent }}>chapter.</span></h2>
          </Reveal>
          <Reveal delay={1}><Link className="ulink" href="/collections" style={{ color: t.text }}>View all collections →</Link></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "70px 44px" }}>
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Link href={c.href} style={{ display: "block", marginTop: i % 3 === 1 ? "clamp(0px,5vw,80px)" : 0 }}>
                <div style={{ position: "relative" }}>
                  <span className="watermark" style={{ position: "absolute", top: "-0.36em", left: "-0.1em", fontSize: "clamp(5rem,9vw,9rem)", color: t.accent, opacity: t.dark ? 0.5 : 0.16, zIndex: 0 }}>{c.n}</span>
                  <div className="zoom" style={{ position: "relative", zIndex: 1 }}>
                    <Look t={t} src={c.img} alt={c.label} style={{ aspectRatio: "4/5" }} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 20 }}>
                  <h3 className="display d-3">{c.label}</h3>
                  <span className="cap" style={{ color: t.muted }}>{c.n} / 06</span>
                </div>
                <p className="cap" style={{ marginTop: 8, color: t.muted }}>{c.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── COLOUR-BLOCK FEATURE — full-bleed clay panel + floating figure ── */
export function ColorFeature({ t }: { t: MoodTheme }) {
  return (
    <section style={{ background: t.block, color: "var(--milk)", overflow: "hidden" }}>
      <div className="wrap-wide" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, alignItems: "center" }}>
        <div className="cf-grid" style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "center", gap: 40 }}>
          <div style={{ padding: "clamp(70px,9vw,130px) 0" }}>
            <Reveal><div className="over" style={{ color: "rgba(247,243,235,0.6)", marginBottom: 30 }}>Custom Yourself</div></Reveal>
            <Reveal delay={1}>
              <h2 className="display" style={{ fontSize: "clamp(2.6rem,5.4vw,5rem)", lineHeight: 1.0, marginBottom: 34 }}>
                Great style begins<br />with high standards —<br /><span className="italic">and being selective.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="lede" style={{ color: "rgba(247,243,235,0.82)", maxWidth: "46ch", marginBottom: 8 }}>
                We say it&apos;s handcrafted, and really — it is. Every piece should feel intentional, not impulsive.
                We focus on the three essentials of tailoring: <em style={{ fontStyle: "italic" }}>fit, fabric, and detail</em> —
                each aligned to your elevated vision. The result is one of a kind.
              </p>
            </Reveal>
          </div>
          <Reveal delay={1} className="cf-fig">
            <Figure src={img("look-04.jpg")} alt="Ivory dinner suit" float style={{ aspectRatio: "3/4", maxHeight: "82vh", marginLeft: "auto", width: "100%" }} />
          </Reveal>
        </div>
      </div>
      <style>{`@media(min-width:900px){.cf-grid{grid-template-columns:1.05fr 0.78fr !important;gap:64px !important}}`}</style>
    </section>
  );
}

/* ── CRAFTSMANSHIP — process index + figure ── */
export function Craftsmanship({ t }: { t: MoodTheme }) {
  const steps: [string, string, string][] = [
    ["01", "The Consultation", "A conversation before a measurement. We learn the man, the occasion, the intent."],
    ["02", "Fabric Selection", "Wool, linen, silk, velvet, cashmere, bamboo — sourced from mills refined over generations."],
    ["03", "Pattern & Cut", "Drafted to a single body. Half-canvas construction, hand-padded lapels."],
    ["04", "Trial & Finish", "A first trial, a final fitting. Nothing is delivered until it is felt to be right."],
  ];
  return (
    <section style={{ background: t.alt, color: t.text, padding: "clamp(80px,10vw,150px) 0", overflow: "hidden" }}>
      <div className="wrap craft-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 64, alignItems: "center" }}>
        <Reveal>
          <div className="clip">
            <Look t={t} src={img("look-07.jpg")} alt="Sequinned evening jacket" style={{ aspectRatio: "4/5" }} />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="eyebrow" style={{ color: t.muted, marginBottom: 24 }}>The Craft</div>
            <h2 className="display d-1" style={{ marginBottom: 46, maxWidth: "12ch" }}>It&apos;s handcrafted — <span className="italic" style={{ color: t.accent }}>and really, it is.</span></h2>
          </Reveal>
          {steps.map((s, i) => (
            <Reveal key={s[0]} delay={((i % 2) + 1) as 1 | 2}>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 26, padding: "26px 0", borderTop: `1px solid ${t.dark ? "var(--on-dark-line)" : "var(--line)"}` }}>
                <span className="display d-3" style={{ color: t.accent }}>{s[0]}</span>
                <div>
                  <h3 className="display d-3" style={{ marginBottom: 8 }}>{s[1]}</h3>
                  <p className="lede" style={{ fontSize: "0.92rem", color: t.dark ? "var(--on-dark-mut)" : "var(--ink-2)", margin: 0 }}>{s[2]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media(min-width:920px){.craft-grid{grid-template-columns:0.9fr 1.1fr !important;gap:90px !important}}`}</style>
    </section>
  );
}

/* ── RECOGNITION — worn by, with marquee of names ── */
export function Recognition({ t }: { t: MoodTheme }) {
  return (
    <section style={{ background: t.canvas, color: t.text, paddingTop: "clamp(80px,10vw,140px)", overflow: "hidden" }}>
      <div className="wrap-wide" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 50, alignItems: "center" }}>
        <div className="rec-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 50, alignItems: "center" }}>
          <Reveal>
            <div className="eyebrow" style={{ color: t.muted, marginBottom: 26 }}>Brand Recognition</div>
            <h2 className="display d-1" style={{ marginBottom: 28 }}>Worn for the<br />moments that <span className="italic" style={{ color: t.accent }}>matter.</span></h2>
            <p className="lede" style={{ color: t.dark ? "var(--on-dark-mut)" : "var(--ink-2)", maxWidth: "46ch", marginBottom: 34 }}>
              The room you walk into. The deal you close. The nights that become a memory. XO47 has dressed
              individuals across culture, entertainment, sport and public life — on red carpets, at weddings,
              and in the moments where presence is paramount.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "14px 28px", maxWidth: 520 }}>
              {FACES.map((f, i) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 12, borderTop: `1px solid ${t.dark ? "var(--on-dark-line)" : "var(--line)"}`, paddingTop: 12 }}>
                  <span className="mono" style={{ color: t.accent }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="display d-3" style={{ fontSize: "1.15rem" }}>{f}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <Look t={t} src={img("look-02.jpg")} alt="Black tuxedo" style={{ aspectRatio: "4/5", maxHeight: "84vh" }} />
          </Reveal>
        </div>
      </div>
      <div style={{ marginTop: "clamp(60px,8vw,110px)" }}>
        <div className="marq" style={{ borderTop: `1px solid ${t.dark ? "var(--on-dark-line)" : "var(--line)"}`, borderBottom: `1px solid ${t.dark ? "var(--on-dark-line)" : "var(--line)"}`, padding: "22px 0" }}>
          <div style={{ display: "inline-block", animation: "marq 48s linear infinite" }}>
            {[...FACES, ...FACES, ...FACES].map((nm, i) => (
              <span key={i} className="display d-2" style={{ marginRight: 40 }}>
                {nm}<span className="italic" style={{ margin: "0 22px", color: t.accent, opacity: 0.8 }}>—</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(min-width:920px){.rec-grid{grid-template-columns:1.15fr 0.85fr !important;gap:80px !important}}`}</style>
    </section>
  );
}

/* ── SANTALI — sister brand, modern-Indian, texture ── */
export function SantaliBand() {
  return (
    <section style={{ background: "var(--forest)", color: "var(--on-dark)", padding: "clamp(80px,10vw,150px) 0", overflow: "hidden" }}>
      <div className="wrap-wide santali-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "center" }}>
        <Reveal>
          <div className="fig" style={{ background: "var(--milk)", aspectRatio: "4/5" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("santali-a.jpg")} alt="Santali" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </Reveal>
        <div>
          <Reveal><div className="over" style={{ color: "rgba(242,236,224,0.72)", marginBottom: 28 }}>A New Chapter · @santali.x</div></Reveal>
          <Reveal delay={1}>
            <h2 className="display" style={{ fontSize: "clamp(3rem,8vw,7rem)", lineHeight: 0.9, marginBottom: 30 }}>
              Santali<span className="italic" style={{ color: "var(--amber-2)" }}>.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ color: "rgba(242,236,224,0.82)", maxWidth: "48ch", marginBottom: 36 }}>
              Rising from the <em style={{ fontStyle: "italic" }}>47</em> that defines XO47 — a number that, in Punjabi, becomes its very name.
              Santali speaks in the language of texture: fabrics chosen for depth and tactility, silhouettes pared to their
              essence. Indianwear, distilled and reimagined — timeless, and entirely of today.
            </p>
          </Reveal>
          <Reveal delay={3}><Link className="btn btn-on-dark" href="/santali">Discover Santali</Link></Reveal>
        </div>
      </div>
      <style>{`@media(min-width:900px){.santali-grid{grid-template-columns:0.85fr 1.15fr !important;gap:80px !important}}`}</style>
    </section>
  );
}

/* ── SERVICES — index ── */
export function Services({ t }: { t: MoodTheme }) {
  return (
    <section style={{ background: t.alt, color: t.text, padding: "clamp(80px,10vw,150px) 0" }}>
      <div className="wrap">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: `1px solid ${t.dark ? "var(--on-dark-line)" : "var(--ink)"}`, paddingBottom: 22, marginBottom: 6 }}>
            <span className="over">Services</span>
            <span className="over" style={{ color: t.muted }}>By appointment</span>
          </div>
        </Reveal>
        {SERVICES.map((s) => (
          <Reveal key={s[0]} delay={1}>
            <Link
              href="/services"
              className="svc-row"
              style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 24, alignItems: "start", borderBottom: `1px solid ${t.dark ? "var(--on-dark-line)" : "var(--line)"}`, padding: "30px 0" }}
            >
              <span className="display d-3" style={{ color: t.accent }}>{s[0]}</span>
              <div className="svc-inner" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
                <h3 className="display d-2">{s[1]}</h3>
                <p className="lede" style={{ fontSize: "0.95rem", color: t.dark ? "var(--on-dark-mut)" : "var(--ink-2)", margin: 0, maxWidth: "52ch" }}>{s[2]}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <style>{`@media(min-width:820px){.svc-inner{grid-template-columns:1fr 1.4fr !important;gap:32px !important;align-items:baseline}}`}</style>
    </section>
  );
}

/* ── CTA ── */
export function CTABand() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--milk)", padding: "clamp(100px,15vw,200px) 0", textAlign: "center", overflow: "hidden" }}>
      <div className="wrap">
        <Reveal><div className="over" style={{ color: "rgba(247,243,235,0.5)", marginBottom: 36 }}>weknowtailoring.com · Launching</div></Reveal>
        <Reveal>
          <h2 className="display d-mega" style={{ marginBottom: 8 }}>Custom</h2>
          <h2 className="display d-mega italic" style={{ color: "var(--amber-2)", marginBottom: 50 }}>yourself.</h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="lede" style={{ color: "rgba(247,243,235,0.66)", maxWidth: "46ch", margin: "0 auto 52px" }}>
            Every commission begins with a conversation at the studio in Ambawatta One. Tell us the occasion — we&apos;ll tell you the cloth.
          </p>
          <Link className="btn btn-light" href="/book-consultation">Book a Consultation</Link>
        </Reveal>
      </div>
    </section>
  );
}
