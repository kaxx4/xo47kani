import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { img } from "@/lib/xo-data";

export const metadata = {
  title: "Style Advice — The Wardrobe Consultation | XO47",
  description:
    "A styling session to refine the way you dress for work, events and a life well-dressed. Clear, considered direction from XO47 — without the noise of trend or the pressure of a sale.",
};

export default function StyleAdvicePage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "150px 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">Services · 03</span>
              <span className="over" style={{ color: "var(--muted)" }}>Wardrobe Consultation</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)", maxWidth: "16ch" }}>
              Dress with <span className="italic serif-accent">intention.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              Not every engagement begins with a garment. The Wardrobe Consultation is a structured conversation
              about how you dress &mdash; what works, what doesn&apos;t, and what your wardrobe ought to be doing for you.
              We give clear direction, without the noise of trend or the pressure of a transaction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* feature image */}
      <section style={{ padding: "clamp(60px,8vw,110px) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="clip">
              <Figure src={img("look-12.jpg")} alt="Refined separates by XO47" float style={{ aspectRatio: "16/10", maxHeight: "82vh" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* sections */}
      <section style={{ padding: "clamp(70px,9vw,130px) 0 clamp(80px,10vw,140px)" }}>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>A reading, before a recommendation.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                We begin with your life rather than your closet &mdash; the rooms you walk into, the calendar ahead,
                the way you want to be read before you speak. From there we map a wardrobe that earns its keep:
                what to retire, what to repeat, and the few pieces worth commissioning properly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>Studio, home or virtual.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                Sit with us at Ambawatta One, or have the session brought to you across Delhi NCR. For clients
                further afield, a virtual consultation covers the same ground. Selections are curated in advance,
                so the time we share is spent deciding rather than searching.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>A wardrobe that holds the room.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                The aim is never a fuller rail. It is a smaller, sharper wardrobe in which everything belongs to you
                and works together &mdash; one that does not announce itself, but holds the room the moment you enter.
                Follow-up support continues long after the session itself.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={{ marginTop: 56 }}>
              <Link className="btn" href="/book-consultation">Book a consultation</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
