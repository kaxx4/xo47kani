import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";
import { CTABand } from "@/components/xo/home/sections";
import { SERVICES } from "@/lib/xo-data";

export const metadata = {
  title: "Services — The House, At Your Service | XO47",
  description:
    "From the Bespoke Experience to home appointments, the full range of the XO47 maison. Enquiry-based bespoke menswear, drafted for one body. By appointment in New Delhi.",
};

/* Map a service name to its dedicated sub-page where one exists,
   else route the enquiry to the consultation flow. */
const SLUG: Record<string, string> = {
  "Bespoke Experience": "/services/custom-suits",
  "Wardrobe Consultation": "/services/style-advice",
  "Home Appointments": "/services/stores",
  "Exhibitions & Pop-ups": "/services/stores",
};

function hrefFor(name: string): string {
  return SLUG[name] ?? "/book-consultation";
}

/* A row either opens its discipline page or jumps to the enquiry form;
   the affordance label should match the destination. */
function affordanceFor(name: string): string {
  return SLUG[name] ? "Enquire →" : "Begin an enquiry →";
}

export default function ServicesPage() {
  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)" }}>
      {/* hero */}
      <section style={{ padding: "var(--pad-top) 0 0" }}>
        <div className="wrap-wide">
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid var(--ink)",
                paddingBottom: 18,
              }}
            >
              <span className="over">Services</span>
              <span className="over" style={{ color: "var(--muted)" }}>By appointment</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="display"
              style={{
                fontSize: "clamp(3rem,9vw,9rem)",
                lineHeight: 0.9,
                margin: "clamp(24px,4vw,52px) 0 clamp(20px,3vw,36px)",
                maxWidth: "15ch",
              }}
            >
              The house, at your <span className="italic serif-accent">service.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lede" style={{ maxWidth: "56ch" }}>
              Tailoring is personal, and considered. Every engagement begins not with a measurement but
              with a conversation &mdash; the man, the occasion, the intent. What follows is a garment
              drafted for one body, and one only.
            </p>
          </Reveal>
        </div>
      </section>

      {/* services index — large numbered rows */}
      <section style={{ padding: "var(--sec-sm) 0 var(--sec)" }}>
        <div className="wrap">
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid var(--ink)",
                paddingBottom: 20,
                marginBottom: 4,
              }}
            >
              <span className="over">The Offering</span>
              <span className="over" style={{ color: "var(--muted)" }}>06 disciplines</span>
            </div>
          </Reveal>
          {SERVICES.map((s) => (
            <Reveal key={s[0]} delay={1}>
              <Link
                href={hrefFor(s[1])}
                className="svc-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: 24,
                  alignItems: "start",
                  borderBottom: "1px solid var(--line)",
                  padding: "32px 0",
                }}
              >
                <span className="display d-3" style={{ color: "var(--clay)" }}>{s[0]}</span>
                <div className="svc-inner" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
                  <h2 className="display d-2">{s[1]}</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <p className="lede" style={{ fontSize: "0.98rem", color: "var(--ink-2)", margin: 0, maxWidth: "52ch" }}>{s[2]}</p>
                    <span className="ulink" style={{ color: "var(--clay)" }}>{affordanceFor(s[1])}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
      <style>{`@media(min-width:820px){.svc-inner{grid-template-columns:1fr 1.4fr !important;gap:36px !important;align-items:baseline}}`}</style>
    </div>
  );
}
