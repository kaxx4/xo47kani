import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { img } from "@/lib/xo-data";

/* ───────── IVORY hero — clean centered editorial, figure as the star ───────── */
export function HeroIvory() {
  return (
    <section style={{ background: "var(--milk)", minHeight: "100svh", display: "flex", flexDirection: "column", paddingTop: 92, overflow: "hidden" }}>
      <div className="wrap-wide" style={{ width: "100%" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--line)", paddingBottom: 16 }}>
            <span className="over">Bespoke Menswear — New Delhi</span>
            <span className="over" style={{ color: "var(--muted)" }}>Est. 2020 · Vol. 01</span>
          </div>
        </Reveal>
      </div>

      <div className="wrap-wide" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: 18, paddingBottom: 28 }}>
        <h1 className="display" style={{ fontSize: "clamp(2.9rem, 7.4vw, 6.8rem)", lineHeight: 0.92, marginBottom: "clamp(6px,1.4vw,18px)" }}>
          <span className="rise rise-1">Custom</span>{" "}
          <span className="italic rise rise-2" style={{ color: "var(--clay)" }}>yourself.</span>
        </h1>
        <Reveal delay={1}>
          <p className="eyebrow" style={{ marginBottom: "clamp(14px,2vw,26px)" }}>It is not for you to show — it is for you to feel</p>
        </Reveal>
        <div className="zoom clip" data-parallax="0.04" style={{ height: "min(50vh, 460px)", aspectRatio: "3/4" }}>
          <Figure src={img("look-08.jpg")} alt="Embellished tuxedo" float priority style={{ width: "100%", height: "100%" }} imgStyle={{ objectFit: "contain", objectPosition: "bottom" }} />
        </div>
        <Reveal delay={2}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: "clamp(20px,2.6vw,34px)" }}>
            <Link className="btn" href="/collections">Explore Collections</Link>
            <Link className="btn btn-ghost" href="/book-consultation">Book a Consultation</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── NOIR hero — cinematic, left type / right lit figure ───────── */
export function HeroNoir() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--on-dark)", minHeight: "100svh", display: "flex", alignItems: "center", paddingTop: 96, overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: "20%", right: "8%", width: "46vw", height: "70vh", background: "radial-gradient(circle, rgba(216,179,121,0.16), transparent 65%)", pointerEvents: "none" }} />
      <div className="wrap-wide noir-hero" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 50, alignItems: "center", width: "100%" }}>
        <div>
          <Reveal><div className="over" style={{ color: "var(--on-dark-mut)", marginBottom: 32 }}>Bespoke Menswear — New Delhi · Since 2020</div></Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3.6rem,11vw,11rem)", lineHeight: 0.86, marginBottom: 36 }}>
              <span className="rise rise-1">Custom</span><br /><span className="italic rise rise-2" style={{ color: "var(--amber-2)" }}>yourself.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ color: "var(--on-dark-mut)", maxWidth: "38ch", marginBottom: 44 }}>
              Presence, tailored. A garment cut for one body — drama held in complete restraint, to be felt long before it is seen.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link className="btn btn-light" href="/collections">Explore Collections</Link>
              <Link className="btn btn-on-dark" href="/book-consultation">Book a Consultation</Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={1} style={{ position: "relative", zIndex: 1 }}>
          <div className="fig" style={{ background: "var(--milk)", aspectRatio: "3/4", maxHeight: "84vh", boxShadow: "0 60px 120px -40px rgba(0,0,0,0.7)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("look-08.jpg")} alt="Embellished tuxedo" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </Reveal>
      </div>
      <style>{`@media(min-width:900px){.noir-hero{grid-template-columns:1.05fr 0.8fr !important;gap:70px !important}}`}</style>
    </section>
  );
}

/* ───────── EARTHEN hero — warm asymmetric editorial ───────── */
export function HeroEarthen() {
  return (
    <section style={{ background: "var(--milk)", color: "var(--ink)", minHeight: "100svh", display: "flex", flexDirection: "column", paddingTop: 96, overflow: "hidden" }}>
      <div className="wrap-wide" style={{ width: "100%" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--line)", paddingBottom: 16 }}>
            <span className="over">XO47 — One of a Kind</span>
            <span className="over" style={{ color: "var(--forest)" }}>Heritage · MMXXVI</span>
          </div>
        </Reveal>
      </div>
      <div className="wrap-wide earthen-hero" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr", gap: 40, alignItems: "center", width: "100%" }}>
        <div>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3.4rem,11vw,12rem)", lineHeight: 0.82, margin: "clamp(20px,4vw,40px) 0 34px" }}>
              <span className="rise rise-1">Custom</span><br /><span className="italic rise rise-2" style={{ color: "var(--forest)" }}>yourself.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "40ch", marginBottom: 40 }}>
              Sourced from the world&apos;s finest mills. Cut for character, precision and individuality. The house of XO47 — where great style begins with high standards.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link className="btn" href="/collections">Explore Collections</Link>
              <Link className="btn btn-ghost" href="/book-consultation">Book a Consultation</Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={1} style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <Figure src={img("look-09.jpg")} alt="Sage double-breasted suit" float style={{ aspectRatio: "3/4", maxHeight: "76vh", width: "100%" }} imgStyle={{ objectFit: "contain", objectPosition: "center bottom" }} />
        </Reveal>
      </div>
      <style>{`@media(min-width:900px){.earthen-hero{grid-template-columns:1fr 0.92fr !important;gap:64px !important}}`}</style>
    </section>
  );
}
