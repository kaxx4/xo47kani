import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { CTABand } from "@/components/xo/home/sections";
import { STORY, img } from "@/lib/xo-data";

export const metadata = {
  title: "The Studio — Ambawatta One, Mehrauli | XO47",
  description:
    "A private tailoring atelier at Ambawatta One in Mehrauli, New Delhi. Entered by appointment — fabric libraries, the cutting table, and the unhurried space to commission a garment of your own.",
};

const PROCESS: [string, string, string][] = [
  ["01", "The Conversation", "A welcome before a measurement. We learn the man, the occasion and the intent."],
  ["02", "The Cloth", "Bunches laid out across the table — weight, season and light, chosen by hand."],
  ["03", "Measure & Pattern", "Drafted to one body. A paper pattern that belongs to no one else."],
  ["04", "The Cut", "Half-canvas construction, lapels padded and rolled so the line holds for years."],
  ["05", "The Trial", "A first fitting in basted form; the silhouette read, refined and made true."],
  ["06", "The Delivery", "Nothing leaves until it is felt to be right. Then it is wholly yours."],
];

export default function StudioPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "150px 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">The Studio</span>
              <span className="over" style={{ color: "var(--muted)" }}>Mehrauli · New Delhi</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)", maxWidth: "15ch" }}>
              A room at <span className="italic serif-accent">Ambawatta One.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              Not a shop floor, but a private lounge in Mehrauli, New Delhi &mdash; where the experience is built
              around conversation, cloth and discovery. Entered by appointment, so the whole of the house is
              yours for the hour.
            </p>
          </Reveal>
        </div>
      </section>

      {/* story split */}
      <section style={{ padding: "clamp(70px,9vw,130px) 0" }}>
        <div className="wrap-wide studio-split" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "start" }}>
          <Reveal>
            <div className="clip">
              <Figure src={img("look-05.jpg")} alt="Inside the XO47 studio" float style={{ aspectRatio: "4/5" }} />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 24 }}>The Space</div>
              <h2 className="display d-1" style={{ marginBottom: 30, maxWidth: "14ch" }}>An address chosen for <span className="italic serif-accent">quiet.</span></h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="lede" style={{ marginBottom: 24, fontSize: "1.12rem", color: "var(--ink)" }}>
                The atelier sits within Ambawatta One, a considered address in Mehrauli that suits a house built on
                discretion. Inside: fabric libraries that run the length of the wall, the cutting table at the
                centre, and the unhurried space to decide without an audience.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="lede" style={{ marginBottom: 24, color: "var(--ink-2)" }}>
                It is deliberately not a storefront. There is no rail to browse, no transaction waiting at a counter.
                A visit is a conversation &mdash; about the occasion ahead, the way you want to be read, and the cloth
                that will carry it &mdash; held over the time it actually takes.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="lede" style={{ marginBottom: 0, color: "var(--ink-2)" }}>
                Because every appointment is private, the studio is only ever attending to one client. For those who
                would rather we came to them, the same experience travels across Delhi NCR.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* process index */}
      <section style={{ background: "var(--dove)", padding: "clamp(80px,10vw,140px) 0" }}>
        <div className="wrap">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 22, marginBottom: 6 }}>
              <span className="over">How We Work</span>
              <span className="over" style={{ color: "var(--muted)" }}>Six movements</span>
            </div>
          </Reveal>
          {PROCESS.map((s, i) => (
            <Reveal key={s[0]} delay={((i % 2) + 1) as 1 | 2}>
              <div style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 24, alignItems: "start", borderBottom: "1px solid var(--line)", padding: "30px 0" }}>
                <span className="display d-3" style={{ color: "var(--clay)" }}>{s[0]}</span>
                <div className="studio-step" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
                  <h3 className="display d-2">{s[1]}</h3>
                  <p className="lede" style={{ fontSize: "0.95rem", color: "var(--ink-2)", margin: 0, maxWidth: "52ch" }}>{s[2]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* large feature image */}
      <section style={{ padding: "clamp(80px,10vw,140px) 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="clip">
              <Figure src={img("look-10.jpg")} alt="A finished XO47 commission" float style={{ aspectRatio: "16/9", maxHeight: "88vh" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* visit details */}
      <section style={{ background: "var(--ink)", color: "var(--on-dark)", padding: "clamp(80px,10vw,140px) 0", overflow: "hidden" }}>
        <div className="wrap-wide visit-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 50, alignItems: "start" }}>
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--on-dark-mut)", marginBottom: 24 }}>The Visit</div>
            <h2 className="display d-1" style={{ marginBottom: 26 }}>Come and be <span className="italic" style={{ color: "var(--amber-2)" }}>measured.</span></h2>
            <p className="lede" style={{ color: "var(--on-dark-mut)", maxWidth: "44ch", margin: 0 }}>
              Appointments are made by enquiry. Tell us the occasion when you write, and we will set aside the
              right window &mdash; and have the right cloth waiting on the table.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
              {[
                ["Studio", "Ambawatta One, Mehrauli, New Delhi"],
                ["Hours", "By appointment, daily · est. " + STORY.founded],
                ["Instagram", "@studio.xo47"],
                ["Online", "weknowtailoring.com"],
              ].map((r, i) => (
                <div key={r[0]} style={{ display: "grid", gridTemplateColumns: "minmax(110px,0.45fr) 1fr", gap: 20, padding: "20px 0", borderTop: "1px solid var(--on-dark-line)", borderBottom: i === 3 ? "1px solid var(--on-dark-line)" : "none", alignItems: "baseline" }}>
                  <span className="over" style={{ color: "var(--on-dark-mut)" }}>{r[0]}</span>
                  <span className="display d-3" style={{ fontSize: "1.3rem" }}>{r[1]}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
      <style>{`
        @media(min-width:900px){.studio-split{grid-template-columns:0.9fr 1.1fr !important;gap:90px !important}.visit-grid{grid-template-columns:1fr 1fr !important;gap:80px !important}}
        @media(min-width:820px){.studio-step{grid-template-columns:1fr 1.4fr !important;gap:32px !important;align-items:baseline}}
      `}</style>
    </div>
  );
}
