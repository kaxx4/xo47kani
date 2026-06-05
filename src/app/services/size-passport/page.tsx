import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { img } from "@/lib/xo-data";

export const metadata = {
  title: "Size Passport — Your Measure, On File | XO47",
  description:
    "Your full set of measurements, recorded once and kept by the house. Every commission that follows begins already knowing your line — at the studio, at home, or from anywhere.",
};

export default function SizePassportPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">Size Passport</span>
              <span className="over" style={{ color: "var(--muted)" }}>Complimentary</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)", maxWidth: "16ch" }}>
              Your measure, <span className="italic serif-accent">on file.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              Measured once, kept always. The Size Passport records the full set of dimensions that make a
              garment yours, so every commission that follows begins already knowing your line &mdash; whether you
              return to the studio or order from the other side of the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* feature image */}
      <section style={{ padding: "var(--sec-sm) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="clip">
              <Figure src={img("shirt-a.jpg")} alt="The foundation — XO47 shirting" float style={{ aspectRatio: "16/10", maxHeight: "82vh" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* sections */}
      <section style={{ padding: "var(--sec-sm) 0 var(--sec)" }}>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>What it is.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                A complete profile of your body held by the house &mdash; not a single size, but the twenty-some
                measurements, postural notes and fit preferences a tailor needs to cut for you precisely. It is
                kept securely against your name, and offered at no cost.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>How it is taken.</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, maxWidth: "62ch" }}>
                {[
                  ["01", "Sit with an advisor at the studio, or during a home appointment."],
                  ["02", "We record the full set of measurements and how you prefer to wear them."],
                  ["03", "Your passport is saved securely against your account."],
                  ["04", "Every later commission begins from it &mdash; in person or remotely."],
                ].map((r, i) => (
                  <div key={r[0]} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 22, padding: "18px 0", borderTop: i === 0 ? "none" : "1px solid var(--line)", alignItems: "baseline" }}>
                    <span className="display d-3" style={{ color: "var(--clay)" }}>{r[0]}</span>
                    <span className="lede" style={{ margin: 0, fontSize: "0.98rem" }}>{r[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>Why it matters.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                A passport on file turns a second order into a conversation about cloth alone. It keeps the fit
                consistent across every garment the house makes for you, and it is reviewed at each visit, so as
                your line shifts over the years, your measure shifts with it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={{ marginTop: 56 }}>
              <Link className="btn" href="/book-consultation">Start your passport</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
