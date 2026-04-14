"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { XOBookCTA } from "@/components/XOBookCTA";
import { useInView } from "@/hooks/useInView";

const processSteps = [
  { num: "01", name: "Consultation" },
  { num: "02", name: "Fabric Selection" },
  { num: "03", name: "Design" },
  { num: "04", name: "Measurements" },
  { num: "05", name: "Pattern Making" },
  { num: "06", name: "First Trial" },
  { num: "07", name: "Final Fitting" },
  { num: "08", name: "Delivery" },
];

const keyFacts = [
  { label: "Founded", value: "2020" },
  { label: "Founder", value: "Shrey Suneja" },
  { label: "Location", value: "New Delhi, India" },
  { label: "Website", value: "weknowtailoring.com" },
  { label: "Instagram", value: "@studio.xo47" },
  { label: "Price Range", value: "₹25,000 — ₹4,00,000" },
];

export default function StudioPage() {
  const { ref: aboutRef, isVisible: aboutVisible } = useInView();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useInView();
  const { ref: processRef, isVisible: processVisible } = useInView();
  const { ref: founderRef, isVisible: founderVisible } = useInView();

  return (
    <>
      <style>{`
        .studio-hero {
          background-color: #1C1B18;
          padding: 80px 20px;
          padding-top: calc(80px + 56px);
        }
        @media (min-width: 640px) {
          .studio-hero {
            padding: 100px 32px 80px;
            padding-top: calc(100px + 56px);
          }
        }
        @media (min-width: 1024px) {
          .studio-hero {
            padding: 120px 48px 80px;
            padding-top: calc(120px + 56px);
          }
        }
        .studio-about {
          background-color: #FAF8F4;
          padding: 64px 20px;
        }
        @media (min-width: 640px) {
          .studio-about {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .studio-about {
            padding: 96px 48px;
          }
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 60fr 40fr;
            gap: 80px;
          }
        }
        .dark-pad {
          padding: 64px 20px;
        }
        @media (min-width: 640px) {
          .dark-pad {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .dark-pad {
            padding: 96px 48px;
          }
        }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }
        @media (min-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .light-pad {
          padding: 64px 20px;
        }
        @media (min-width: 640px) {
          .light-pad {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .light-pad {
            padding: 96px 48px;
          }
        }
      `}</style>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>

        {/* Hero / Header Section */}
        <section className="studio-hero">
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 24,
              marginTop: 0,
              fontWeight: 400,
            }}
          >
            THE STUDIO
          </p>
          <h1
            style={{
              fontWeight: 200,
              fontSize: "clamp(36px, 5vw, 68px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#FAF8F4",
              margin: "0 0 32px",
              whiteSpace: "pre-line",
            }}
          >
            {"Ambawatta One,\nMehrauli — New Delhi"}
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.42)",
              maxWidth: 500,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            A private tailoring lounge where experience is centred around conversation, craft, and discovery.
          </p>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef as React.RefObject<HTMLElement>}
          className={`studio-about xo-fade-in${aboutVisible ? " is-visible" : ""}`}
        >
          <div className="about-grid">
            {/* Left — copy */}
            <div>
              <h2
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(22px, 3vw, 36px)",
                  letterSpacing: "-0.01em",
                  color: "#1C1B18",
                  margin: "0 0 24px",
                }}
              >
                About the House
              </h2>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#4A4845", lineHeight: 1.85, marginBottom: 24, marginTop: 0 }}>
                XO47 is a bespoke menswear tailoring house based in Ambawatta One, Mehrauli, New Delhi. Founded in 2020 by Shrey Suneja, the house was built around a singular conviction: that clothing should be experienced, not simply worn. Every garment is conceived in conversation — shaped by who you are, what you do, and how you wish to be seen.
              </p>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#4A4845", lineHeight: 1.85, marginBottom: 24, marginTop: 0 }}>
                The XO47 studio is a private lounge, not a shop floor. Clients are invited into a considered, unhurried process — from the first consultation through fabric selection, design, pattern, fittings, and final delivery. The result is a garment that belongs entirely to you.
              </p>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#4A4845", lineHeight: 1.85, marginBottom: 24, marginTop: 0 }}>
                The house works primarily in formal menswear — suits, blazers, tuxedos, and occasion wear — and has grown to serve a clientele ranging from entrepreneurs and professionals to actors, artists, and public figures. XO47 also operates a sub-brand, Santali, which explores modern Indian wear through the same lens of thoughtful construction and refined sensibility.
              </p>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#4A4845", lineHeight: 1.85, marginBottom: 0, marginTop: 0 }}>
                The house engages with clients across India and internationally, offering home appointments for Delhi-based clients, as well as exhibitions and pop-ups for broader access. Everything begins with a conversation — and that conversation is always the most important part.
              </p>
            </div>

            {/* Right — key facts */}
            <div>
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#9A9590",
                  marginTop: 0,
                  marginBottom: 24,
                  fontWeight: 400,
                }}
              >
                Key Details
              </p>
              <dl style={{ margin: 0, padding: 0 }}>
                {keyFacts.map((fact, i) => (
                  <div
                    key={fact.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px 0",
                      borderTop: i === 0 ? "1px solid #E0DCD5" : undefined,
                      borderBottom: "1px solid #E0DCD5",
                    }}
                  >
                    <dt
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#9A9590",
                        marginBottom: 6,
                        fontWeight: 400,
                      }}
                    >
                      {fact.label}
                    </dt>
                    <dd
                      style={{
                        fontSize: 14,
                        fontWeight: 300,
                        color: "#1C1B18",
                        margin: 0,
                      }}
                    >
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section
          ref={philosophyRef as React.RefObject<HTMLElement>}
          className={`xo-fade-in${philosophyVisible ? " is-visible" : ""}`}
          style={{
            backgroundColor: "#EDE8E0",
            textAlign: "center",
          }}
        >
          <div className="xo-section-pad">
            <blockquote
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 200,
                fontStyle: "italic",
                color: "#1C1B18",
                letterSpacing: "-0.01em",
                lineHeight: 1.5,
                maxWidth: 700,
                margin: "0 auto 24px",
              }}
            >
              &ldquo;ITS NOT FOR YOU TO SHOW, its for you to feel.&rdquo;
            </blockquote>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9A9590",
                margin: 0,
                fontWeight: 400,
              }}
            >
              — XO47 Brand Philosophy
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section
          ref={processRef as React.RefObject<HTMLElement>}
          className={`dark-pad xo-fade-in${processVisible ? " is-visible" : ""}`}
          style={{ backgroundColor: "#1C1B18" }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 16,
              marginTop: 0,
              fontWeight: 400,
            }}
          >
            How We Work
          </p>
          <h2
            style={{
              fontSize: "clamp(28px,3vw,48px)",
              fontWeight: 300,
              color: "#FAF8F4",
              letterSpacing: "-0.01em",
              marginTop: 0,
              marginBottom: 64,
            }}
          >
            The Process
          </h2>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div
                key={step.num}
                style={{
                  padding: "40px 32px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: "#8C6A4A",
                    marginBottom: 16,
                    marginTop: 0,
                    fontWeight: 400,
                  }}
                >
                  {step.num}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#1C1B18",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {step.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder Section */}
        <section
          ref={founderRef as React.RefObject<HTMLElement>}
          className={`light-pad xo-fade-in${founderVisible ? " is-visible" : ""}`}
          style={{
            backgroundColor: "#FAF8F4",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9A9590",
                marginBottom: 16,
                marginTop: 0,
                fontWeight: 400,
              }}
            >
              Founded By
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "-0.01em",
                color: "#1C1B18",
                marginTop: 0,
                marginBottom: 32,
                lineHeight: 1.1,
              }}
            >
              Shrey Suneja
            </h2>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "#6B6560",
                lineHeight: 1.85,
                margin: "0 0 24px",
              }}
            >
              Shrey Suneja founded XO47 in 2020 with the intention of building something personal — a tailoring house that prioritised the relationship between maker and wearer above all else. Having worked within the world of clothing and style, Shrey brought together his understanding of construction, fabric, and the particular requirements of the modern Indian man into a single, focused offering.
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "#6B6560",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              XO47 operates out of Ambawatta One, Mehrauli — a considered address that reflects the house&apos;s values of discretion, quality, and quiet authority. Under Shrey&apos;s direction, the house has dressed some of India&apos;s most recognised figures, and continues to grow through word of mouth and genuine connection.
            </p>
          </div>
        </section>

        {/* Book CTA */}
        <XOBookCTA />

      </main>
      <SiteFooter />
    </>
  );
}
