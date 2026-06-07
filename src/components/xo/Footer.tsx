"use client";
import Link from "next/link";
import { FOOTER, routeFor } from "@/lib/xo-data";
import { AdminLauncher } from "@/components/xo/admin/AdminLauncher";

/* Explicit label → real route map so every footer link lands on its own page
   (the fuzzy routeFor() fallback collapsed several distinct labels onto one route). */
const LINK_MAP: Record<string, string> = {
  "Black Tie": "/collections/black-tie",
  "Signature Suits": "/collections/suits",
  Occasion: "/collections/occasion",
  Blazers: "/collections/blazers",
  Shirting: "/collections/shirts",
  Trousers: "/collections/trousers",
  "Bespoke Experience": "/services/custom-suits",
  "Wardrobe Consultation": "/services/style-advice",
  "Occasion Wear": "/services",
  "Home Appointments": "/services/stores",
  Exhibitions: "/services/stores",
  "Our Story": "/about/our-story",
  "The XO47 Man": "/the-xo47-man",
  Santali: "/santali",
  "Brand Recognition": "/brand-recognition",
  Press: "/about/press",
  "Book a Consultation": "/book-consultation",
  "Ambawatta One, Mehrauli": "/studio",
};

/* Utility / legal row — surfaces the info pages that have no other entry point. */
const LEGAL: [string, string][] = [
  ["FAQ", "/faq"],
  ["Fit Guides", "/fit-guides"],
  ["Shipping", "/shipping"],
  ["Returns", "/returns"],
  ["Careers", "/about/careers"],
  ["Sustainability", "/about/sustainability"],
  ["Accessibility", "/accessibility"],
  ["Terms", "/terms"],
];

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap-wide" style={{ paddingTop: "clamp(56px,7vw,90px)", paddingBottom: 48 }}>
        <div
          className="foot-top"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(36px,4.5vw,56px)", marginBottom: "clamp(44px,5.5vw,70px)", alignItems: "start" }}
        >
          <div style={{ maxWidth: 460 }}>
            <div className="display" style={{ fontSize: "clamp(3rem,7vw,5.2rem)", letterSpacing: "0.01em" }}>
              We know <span className="italic" style={{ color: "var(--amber-2)" }}>tailoring.</span>
            </div>
            <p className="lede" style={{ color: "var(--on-dark-mut)", fontSize: "0.95rem", marginTop: 20 }}>
              A small tailoring house in New Delhi. We&apos;ve been cutting and sewing suits by hand since 2020.
            </p>
            <Link className="btn btn-light" style={{ marginTop: 30 }} href="/book-consultation">
              Book a Consultation
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px,3.5vw,48px) clamp(36px,5vw,60px)" }}>
            {FOOTER.map((col) => (
              <div key={col.head} style={{ minWidth: 150 }}>
                <div className="over" style={{ color: "var(--on-dark-mut)", marginBottom: 16 }}>
                  {col.head}
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 2 }}>
                  {col.links.map((l) => (
                    <li key={l}>
                      <FooterLink label={l} href={externalFor(l) ?? LINK_MAP[l] ?? routeFor(l)} external={!!externalFor(l)} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="rule" style={{ borderColor: "var(--on-dark-line)" }} />
        <nav aria-label="Legal and information" style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", paddingTop: 26, paddingBottom: 2 }}>
          {LEGAL.map(([label, href]) => (
            <FooterLink key={href} label={label} href={href} external={false} mono />
          ))}
        </nav>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, paddingTop: 22 }}>
          <span className="mono tnum" style={{ color: "var(--on-dark-mut)" }}>
            © 1 OAK · 2020–2026 XO47 — Bespoke Menswear
          </span>
          <span className="mono" style={{ color: "var(--on-dark-mut)" }}>
            weknowtailoring.com · @studio.xo47
          </span>
          <AdminLauncher />
        </div>
      </div>
      <style>{`@media(min-width:768px){.foot-top{grid-template-columns:1fr 1.1fr !important;gap:clamp(48px,6vw,80px) !important}}`}</style>
    </footer>
  );
}

function externalFor(label: string): string | null {
  const l = label.toLowerCase();
  if (l.includes("@studio")) return "https://instagram.com/studio.xo47";
  if (l.includes("weknowtailoring")) return "https://weknowtailoring.com";
  return null;
}

function FooterLink({ label, href, external, mono = false }: { label: string; href: string; external: boolean; mono?: boolean }) {
  const base = mono ? "0.52" : "0.64";
  const style: React.CSSProperties = mono
    ? { display: "inline-block", padding: "9px 0", color: "var(--on-dark)", opacity: 0.52, transition: "opacity .3s,color .3s" }
    : { display: "inline-block", padding: "10px 0", fontSize: "0.86rem", color: "var(--on-dark)", opacity: 0.64, transition: "opacity .3s,color .3s" };
  const className = mono ? "mono" : undefined;
  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.color = "var(--amber-2)";
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.opacity = base;
    e.currentTarget.style.color = "var(--on-dark)";
  };
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {label}
    </Link>
  );
}
