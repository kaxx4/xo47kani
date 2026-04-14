import Link from "next/link";
import { Instagram } from "@/components/icons";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const collectionsLinks: FooterLink[] = [
  { label: "Suits", href: "/collections/suits" },
  { label: "Blazers", href: "/collections/blazers" },
  { label: "Tuxedos", href: "/collections/tuxedos" },
  { label: "Trousers", href: "/collections/trousers" },
  { label: "Shirts", href: "/collections/shirts" },
  { label: "Occasion Wear", href: "/collections/occasion" },
];

const servicesLinks: FooterLink[] = [
  { label: "Signature Formalwear", href: "/services" },
  { label: "Bespoke Experience", href: "/services" },
  { label: "Wardrobe Consultation", href: "/services" },
  { label: "Occasion Wear", href: "/services" },
  { label: "Home Appointments", href: "/services" },
];

const studioLinks: FooterLink[] = [
  { label: "Our Story", href: "/about/our-story" },
  { label: "The XO47 Man", href: "/the-xo47-man" },
  { label: "Santali", href: "/santali" },
  { label: "Brand Recognition", href: "/brand-recognition" },
  { label: "Press", href: "/about/press" },
];

const contactLinks: FooterLink[] = [
  { label: "@studio.xo47", href: "https://instagram.com/studio.xo47", external: true },
  { label: "weknowtailoring.com", href: "https://weknowtailoring.com", external: true },
  { label: "Book a Consultation", href: "/book-consultation" },
  { label: "New Delhi, India", href: "#" },
];

const navColumns: FooterColumn[] = [
  { heading: "COLLECTIONS", links: collectionsLinks },
  { heading: "SERVICES", links: servicesLinks },
  { heading: "STUDIO", links: studioLinks },
  { heading: "CONTACT", links: contactLinks },
];

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function SiteFooter() {
  return (
    <>
      <style>{`
        .xo-footer-link {
          display: flex;
          align-items: center;
          min-height: 44px;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.4;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .xo-footer-link:hover,
        .xo-footer-link:focus-visible {
          color: rgba(255,255,255,1);
          outline: none;
        }
        .xo-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s ease;
          flex-shrink: 0;
        }
        .xo-social-btn:hover,
        .xo-social-btn:focus-visible {
          color: rgba(255,255,255,1);
          outline: none;
        }
        .footer-wrap {
          padding: 56px 24px 40px;
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
        }
        .footer-col-heading {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-weight: 400;
          margin: 0;
          padding: 20px 0 12px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 20px 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        @media (min-width: 640px) {
          .footer-nav {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .footer-wrap {
            padding: 64px 40px 48px;
          }
        }
        @media (min-width: 1024px) {
          .footer-nav {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .footer-wrap {
            padding: 72px 48px 48px;
          }
          .footer-bottom {
            padding: 24px 48px;
          }
        }
      `}</style>

      <footer
        style={{ background: "#1C1B18", color: "#FAF8F4" }}
        aria-label="Site footer"
      >
        {/* Brand row */}
        <div className="footer-wrap">
          <div style={{ marginBottom: "48px" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#FAF8F4",
                textDecoration: "none",
                marginBottom: "8px",
              }}
            >
              XO47
            </Link>
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.5,
              }}
            >
              Bespoke Menswear Tailoring · New Delhi
            </p>
          </div>

          {/* Nav columns */}
          <nav aria-label="Footer navigation" className="footer-nav">
            {navColumns.map((col) => (
              <div key={col.heading}>
                <p className="footer-col-heading">{col.heading}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xo-footer-link"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="xo-footer-link">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © 2020–2026 XO47
          </span>

          <a
            href="https://instagram.com/studio.xo47"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="XO47 on Instagram"
            className="xo-social-btn"
          >
            <Instagram size={18} />
          </a>
        </div>
      </footer>
    </>
  );
}
