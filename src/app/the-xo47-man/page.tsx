"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useInView } from "@/hooks/useInView";

const archetypes = [
  {
    title: "Occasion",
    description:
      "The room you walk into. The deal you close. The nights that become a memory. Occasion wear at XO47 is built for the moments that earn their weight — every detail tuned to the significance of the event.",
  },
  {
    title: "Tuxedo Dressing",
    description:
      "For the moments that define you. Black tie is not a dress code — it is a declaration. The XO47 tuxedo is constructed with the same rigour as every other garment in the house, and worn with the same quiet conviction.",
  },
  {
    title: "Formalwear",
    description:
      "The foundation. A suit that fits precisely carries more authority than any title. Formalwear at XO47 is built to work — for the office, the board room, and the rare occasion that demands you are simply at your best.",
  },
];

const professions = [
  "Business Leaders",
  "Entrepreneurs",
  "Politicians",
  "Lawyers",
  "Doctors",
  "Artists",
];

export default function TheXo47ManPage() {
  const { ref: archetypeRef, isVisible: archetypeVisible } = useInView();
  const { ref: clienteleRef, isVisible: clienteleVisible } = useInView();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useInView();

  return (
    <>
      <style>{`
        .man-hero {
          background-color: #1C1B18;
          padding: 80px 20px;
          padding-top: calc(80px + 56px);
        }
        @media (min-width: 640px) {
          .man-hero {
            padding: 100px 32px 80px;
            padding-top: calc(100px + 56px);
          }
        }
        @media (min-width: 1024px) {
          .man-hero {
            padding: 120px 48px 80px;
            padding-top: calc(120px + 56px);
          }
        }
        .archetype-section {
          background-color: #EDE8E0;
          padding: 64px 20px;
        }
        @media (min-width: 640px) {
          .archetype-section {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .archetype-section {
            padding: 96px 48px;
          }
        }
        .archetype-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background-color: #D8D3CB;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .archetype-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .clientele-section {
          background-color: #FAF8F4;
          padding: 64px 20px;
        }
        @media (min-width: 640px) {
          .clientele-section {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .clientele-section {
            padding: 80px 48px;
          }
        }
        .philosophy-section {
          background-color: #1C1B18;
          padding: 80px 20px;
          text-align: center;
        }
        @media (min-width: 640px) {
          .philosophy-section {
            padding: 100px 32px;
          }
        }
        @media (min-width: 1024px) {
          .philosophy-section {
            padding: 120px 48px;
          }
        }
      `}</style>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>

        {/* Header Section */}
        <section className="man-hero">
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
            Identity
          </p>
          <h1
            style={{
              fontWeight: 200,
              fontSize: "clamp(40px, 6vw, 80px)",
              letterSpacing: "-0.03em",
              color: "#FAF8F4",
              lineHeight: 1.05,
              margin: "0 0 32px",
            }}
          >
            The XO47 Man
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 1.8vw, 18px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.45)",
              maxWidth: 480,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            In a world of trends — he chooses to remain classic.
          </p>
        </section>

        {/* 3-Column Editorial Section */}
        <section
          ref={archetypeRef as React.RefObject<HTMLElement>}
          className={`archetype-section xo-fade-in${archetypeVisible ? " is-visible" : ""}`}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#9A9590",
              marginBottom: 56,
              marginTop: 0,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            How He Dresses
          </p>
          <div className="archetype-grid">
            {archetypes.map((archetype) => (
              <div
                key={archetype.title}
                style={{
                  backgroundColor: "#EDE8E0",
                  padding: "56px 40px",
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    color: "#1C1B18",
                    marginTop: 0,
                    marginBottom: 12,
                  }}
                >
                  {archetype.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#6B6560",
                    lineHeight: 1.85,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {archetype.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Dress Section */}
        <section
          ref={clienteleRef as React.RefObject<HTMLElement>}
          className={`clientele-section xo-fade-in${clienteleVisible ? " is-visible" : ""}`}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#9A9590",
              marginBottom: 8,
              marginTop: 0,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Our Clientele
          </p>
          <h2
            style={{
              fontSize: "clamp(24px,3vw,40px)",
              fontWeight: 300,
              color: "#1C1B18",
              letterSpacing: "-0.01em",
              marginTop: 0,
              marginBottom: 56,
              textAlign: "center",
            }}
          >
            Who We Dress
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {professions.map((profession) => (
              <div
                key={profession}
                style={{
                  flex: "1 1 120px",
                  minWidth: 120,
                  border: "1px solid #E0DCD5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "20px 16px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#1C1B18",
                  }}
                >
                  {profession}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section
          ref={philosophyRef as React.RefObject<HTMLElement>}
          className={`philosophy-section xo-fade-in${philosophyVisible ? " is-visible" : ""}`}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: 40,
              marginTop: 0,
              fontWeight: 400,
            }}
          >
            The Philosophy
          </p>
          <blockquote
            style={{
              fontSize: "clamp(14px, 1.8vw, 18px)",
              fontWeight: 200,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.5)",
              maxWidth: 560,
              margin: "0 auto 32px",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            &ldquo;Clothing is not performance. It is the quiet, continuous expression of who you have decided to be.&rdquo;
          </blockquote>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              margin: 0,
              fontWeight: 400,
            }}
          >
            — XO47
          </p>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
