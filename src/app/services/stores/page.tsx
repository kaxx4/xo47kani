import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { img } from "@/lib/xo-data";

export const metadata = {
  title: "Where to Find Us — The Studio & Beyond | XO47",
  description:
    "One studio, by appointment, at Ambawatta One in Mehrauli, New Delhi. Plus home appointments across Delhi NCR and the house on the move through exhibitions and pop-ups.",
};

export default function StoresPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">Where to Find Us</span>
              <span className="over" style={{ color: "var(--muted)" }}>By appointment</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)", maxWidth: "16ch" }}>
              One door, <span className="italic serif-accent">opened by name.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              XO47 is not a shop floor. It is a single private studio, entered by appointment, where the whole of
              the house is yours for the hour. When distance asks for it, we come to you &mdash; and from time to
              time, the house travels.
            </p>
          </Reveal>
        </div>
      </section>

      {/* feature image */}
      <section style={{ padding: "var(--sec-sm) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="clip">
              <Figure src={img("look-05.jpg")} alt="The XO47 studio" float style={{ aspectRatio: "16/10", maxHeight: "82vh" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* sections */}
      <section style={{ padding: "var(--sec-sm) 0 var(--sec)" }}>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>The Studio &mdash; Ambawatta One.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                Our home is Ambawatta One, in Mehrauli, New Delhi &mdash; a quiet, considered address that suits a
                house built on discretion. A private lounge rather than a storefront: fabric libraries, the cutting
                table, and the unhurried space to decide. Visits are by appointment, so the studio is only ever
                attending to you.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, maxWidth: "62ch", marginTop: 8 }}>
                {[
                  ["Address", "Ambawatta One, Mehrauli, New Delhi"],
                  ["Hours", "By appointment, daily"],
                  ["Instagram", "@studio.xo47"],
                  ["Online", "weknowtailoring.com"],
                ].map((r, i) => (
                  <div key={r[0]} style={{ display: "grid", gridTemplateColumns: "minmax(110px,0.4fr) 1fr", gap: 20, padding: "16px 0", borderBottom: "1px solid var(--line)", borderTop: i === 0 ? "1px solid var(--line)" : "none" }}>
                    <span className="over" style={{ color: "var(--muted)" }}>{r[0]}</span>
                    <span style={{ fontSize: "0.98rem" }}>{r[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>Home appointments, across Delhi.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                For clients across Delhi NCR who would rather the consultation came to them, the full studio
                experience travels &mdash; fabric bunches, design conversation and measurements, brought to your
                home or office. Subject to availability; simply ask when you enquire.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)" }}>
              <h2 className="display d-2" style={{ maxWidth: "18ch" }}>The house, on the move.</h2>
              <p className="lede" style={{ margin: 0, maxWidth: "62ch" }}>
                Beyond Delhi, XO47 appears through select exhibitions and pop-ups across India and abroad &mdash; a
                chance to handle the cloth and meet the craft in person. Dates and cities are announced through
                @studio.xo47.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={{ marginTop: 56 }}>
              <Link className="btn" href="/book-consultation">Request an appointment</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
