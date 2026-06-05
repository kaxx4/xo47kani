import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { img } from "@/lib/xo-data";

export const metadata = {
  title: "Gift Cards — The Gift of a Commission | XO47",
  description:
    "Give the XO47 experience: a tailoring gift toward a bespoke commission or a wardrobe consultation. Presented by hand, redeemed at the studio in New Delhi or against an online order.",
};

export default function GiftCardsPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">Gift Cards</span>
              <span className="over" style={{ color: "var(--muted)" }}>By enquiry</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)", maxWidth: "16ch" }}>
              The gift of a <span className="italic serif-accent">commission.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              The most considered present is rarely a thing &mdash; it is an experience, chosen with care. An XO47
              gift card opens the door to the studio: a bespoke commission, a wardrobe consultation, or a piece
              from the collections, decided in the recipient&apos;s own time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* feature image */}
      <section style={{ padding: "var(--sec-sm) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="clip">
              <Figure src={img("look-03.jpg")} alt="An ivory occasion suit by XO47" float style={{ aspectRatio: "16/10", maxHeight: "82vh" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* sections */}
      <section style={{ padding: "var(--sec-sm) 0 var(--sec)" }}>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>An experience, not an object.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                A gift toward a wedding suit, a first bespoke commission, or a milestone worth marking properly.
                The recipient is welcomed into the same unhurried process every client receives &mdash; the
                conversation, the cloth, the fittings &mdash; and decides what to make of it themselves.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>Chosen to any value.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                Gift cards are prepared to a value of your choosing and may be set against any service of the house
                or a piece from the collections. They are valid for twelve months, can be combined, and apply
                equally at the studio or against an online order.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>Presented by hand.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                Delivered as a quiet digital note, or as a physical card finished in the materials of the house and
                couriered anywhere in India. Tell us the occasion and the value when you enquire, and we will
                prepare it to arrive exactly as it should.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={{ marginTop: 56 }}>
              <Link className="btn" href="/book-consultation">Enquire about a gift card</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
