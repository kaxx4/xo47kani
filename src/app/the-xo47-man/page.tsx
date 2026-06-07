import { Reveal } from "@/components/xo/Reveal";
import { Figure } from "@/components/xo/Figure";
import { CTABand } from "@/components/xo/home/sections";
import { FACES, img } from "@/lib/xo-data";

export const metadata = {
  title: "The XO47 Man — Presence & Identity | XO47",
  description:
    "Who the house dresses. An editorial on presence and identity — the man who, in a world of trends, chooses to remain himself. Three archetypes, and the names XO47 has dressed.",
};

const ARCHETYPES: [string, string, string][] = [
  [
    "01",
    "The Principal",
    "He walks in before he speaks. Boardrooms, signings, the moments where the room is read in a glance — his tailoring carries the authority a title cannot. Quiet cloth, exact shoulders, nothing that asks to be noticed and everything that is.",
  ],
  [
    "02",
    "The Celebrant",
    "His own wedding, his closest friend's, the night that becomes a memory. For the milestones that earn their weight, he wants a garment tuned to the occasion — ceremony and ease held in the same line, made to be felt long after the photographs.",
  ],
  [
    "03",
    "The Modern Classicist",
    "In a world of trends, he chooses to remain himself. He is not chasing the season; he is building a wardrobe that outlasts it — a few pieces, cut properly, worn with the conviction of a man who has already decided who he is.",
  ],
];

export default function TheXo47ManPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 18 }}>
              <span className="over">Identity</span>
              <span className="over" style={{ color: "var(--muted)" }}>Who we dress</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display" style={{ fontSize: "clamp(3rem,9vw,9rem)", lineHeight: 0.9, margin: "clamp(18px,3vw,34px) 0 clamp(18px,3vw,30px)", maxWidth: "16ch" }}>
              The XO47 <span className="italic serif-accent">man.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ fontSize: "clamp(1.2rem,2vw,1.7rem)", lineHeight: 1.5, maxWidth: "26ch", fontFamily: "var(--ff-display)", fontStyle: "italic" }}>
              In a world of trends &mdash; he chooses to remain classic.
            </p>
          </Reveal>
        </div>
      </section>

      {/* manifesto split */}
      <section style={{ padding: "var(--sec) 0" }}>
        <div className="wrap-wide man-split" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(34px,4.5vw,56px)", alignItems: "start" }}>
          <Reveal>
            <div className="clip">
              <Figure src={img("look-10.jpg")} alt="The XO47 man" float style={{ aspectRatio: "4/5" }} />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 24 }}>Presence &amp; Identity</div>
              <h2 className="display d-1" style={{ marginBottom: 30, maxWidth: "13ch" }}>He dresses for <span className="italic serif-accent">himself.</span></h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="lede" style={{ marginBottom: 24, fontSize: "1.12rem", color: "var(--ink)" }}>
                We built the house on a simple idea &mdash; that a suit is about how it feels to wear, not how it
                looks to everyone else. The men we dress understand that. They don&apos;t dress to be looked at;
                they dress to feel like themselves.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="lede" style={{ marginBottom: 24, color: "var(--ink-2)" }}>
                Presence is the first language he speaks &mdash; tailoring that says something before he does, quietly
                and completely. Identity is the second: one body, one pattern, nothing about it borrowed from anyone
                else. What he wears is unmistakably his, and only his.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="display d-2 italic" style={{ color: "var(--clay)", margin: "12px 0 14px" }}>
                &ldquo;I&apos;ve never made a suit to be looked at &mdash; I make it for how it feels to wear.&rdquo;
              </p>
              <div className="mono" style={{ color: "var(--muted)" }}>&mdash; Shrey Suneja, Founder</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* archetypes */}
      <section style={{ background: "var(--dove)", padding: "var(--sec) 0" }}>
        <div className="wrap">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 22, marginBottom: 6 }}>
              <span className="over">How He Dresses</span>
              <span className="over" style={{ color: "var(--muted)" }}>Three men</span>
            </div>
          </Reveal>
          {ARCHETYPES.map((a, i) => (
            <Reveal key={a[0]} delay={((i % 2) + 1) as 1 | 2}>
              <div style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 24, alignItems: "start", borderBottom: "1px solid var(--line)", padding: "34px 0" }}>
                <span className="display d-3 tnum" style={{ color: "var(--clay)" }}>{a[0]}</span>
                <div className="man-arch" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
                  <h3 className="display d-2">{a[1]}</h3>
                  <p className="lede" style={{ fontSize: "0.98rem", color: "var(--ink-2)", margin: 0, maxWidth: "56ch" }}>{a[2]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* faces tie-in */}
      <section style={{ background: "var(--ink)", color: "var(--on-dark)", padding: "var(--sec) 0", overflow: "hidden" }}>
        <div className="wrap-wide">
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--on-dark-mut)", marginBottom: 24 }}>In Good Company</div>
            <h2 className="display d-1" style={{ marginBottom: 26 }}>The names the house<br />has <span className="italic" style={{ color: "var(--amber-2)" }}>dressed.</span></h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="lede" style={{ color: "var(--on-dark-mut)", maxWidth: "48ch", marginBottom: 44 }}>
              From cinema to culture, sport to public life, XO47 has dressed individuals for the moments where
              presence is paramount &mdash; on red carpets, at weddings, and in the rooms that matter. He keeps
              good company.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px 30px" }}>
            {FACES.map((f, i) => (
              <Reveal key={f} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid var(--on-dark-line)", paddingTop: 14 }}>
                  <span className="mono tnum" style={{ color: "var(--amber-2)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="display d-3">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <style>{`
        @media(min-width:768px){.man-split{grid-template-columns:0.9fr 1.1fr !important;gap:clamp(48px,6vw,90px) !important}}
        @media(min-width:768px){.man-arch{grid-template-columns:1fr 1.5fr !important;gap:32px !important;align-items:baseline}}
      `}</style>
    </div>
  );
}
