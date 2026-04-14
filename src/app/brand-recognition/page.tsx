"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useInView } from "@/hooks/useInView";

const celebrities = [
  { name: "Shahid Kapoor", role: "Actor" },
  { name: "Rohit Saraf", role: "Actor" },
  { name: "Ishaan Khattar", role: "Actor" },
  { name: "Abhay Deol", role: "Actor" },
  { name: "Viviane Divine", role: "Artist" },
  { name: "Karron S. Dhinggra", role: "Entrepreneur" },
];

function NameRow({ person, index }: { person: typeof celebrities[0]; index: number }) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`br-name-row xo-fade-in${isVisible ? " is-visible" : ""}`}
      style={{
        padding: "32px 0",
        borderBottom: "1px solid #E0DCD5",
        borderTop: index === 0 ? "1px solid #E0DCD5" : undefined,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <span
        style={{
          fontSize: "clamp(22px, 3.5vw, 40px)",
          fontWeight: 200,
          letterSpacing: "-0.01em",
          color: "#1C1B18",
          lineHeight: 1,
          display: "block",
        }}
      >
        {person.name}
      </span>
      <span
        className="br-role"
        style={{
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#9A9590",
          fontWeight: 400,
        }}
      >
        {person.role}
      </span>
    </div>
  );
}

export default function BrandRecognitionPage() {
  const { ref: quoteRef, isVisible: quoteVisible } = useInView();

  return (
    <>
      <style>{`
        .br-hero {
          background-color: #1C1B18;
          padding: 80px 20px;
          padding-top: calc(80px + 56px);
        }
        @media (min-width: 640px) {
          .br-hero {
            padding: 100px 32px 80px;
            padding-top: calc(100px + 56px);
          }
        }
        @media (min-width: 1024px) {
          .br-hero {
            padding: 120px 48px 80px;
            padding-top: calc(120px + 56px);
          }
        }
        .br-names-section {
          background-color: #FAF8F4;
          padding: 64px 20px;
        }
        @media (min-width: 640px) {
          .br-names-section {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .br-names-section {
            padding: 80px 48px;
          }
        }
        .br-name-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        @media (min-width: 640px) {
          .br-name-row {
            flex-direction: row;
            align-items: baseline;
            justify-content: space-between;
            gap: 24px;
          }
        }
        .br-role {
          flex-shrink: 0;
        }
        .br-quote {
          background-color: #1C1B18;
          padding: 80px 20px;
          text-align: center;
        }
        @media (min-width: 640px) {
          .br-quote {
            padding: 100px 32px;
          }
        }
        @media (min-width: 1024px) {
          .br-quote {
            padding: 120px 48px;
          }
        }
      `}</style>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>

        {/* Header Section */}
        <section className="br-hero">
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
            As Worn By
          </p>
          <h1
            style={{
              fontWeight: 200,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.025em",
              color: "#FAF8F4",
              lineHeight: 1.1,
              margin: "0 0 32px",
            }}
          >
            Brand Recognition
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.42)",
              maxWidth: 560,
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            XO47 garments have been worn by some of India&apos;s most recognised figures across cinema, culture, and public life — a testament to the house&apos;s growing presence within India&apos;s contemporary style landscape.
          </p>
        </section>

        {/* Names Section */}
        <section className="br-names-section">
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            {celebrities.map((person, i) => (
              <NameRow key={person.name} person={person} index={i} />
            ))}
          </div>
        </section>

        {/* Closing Quote Section */}
        <section
          ref={quoteRef as React.RefObject<HTMLElement>}
          className={`br-quote xo-fade-in${quoteVisible ? " is-visible" : ""}`}
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
            The XO47 Presence
          </p>
          <blockquote
            style={{
              fontSize: "clamp(14px, 1.5vw, 16px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.42)",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.9,
              textAlign: "center",
            }}
          >
            &ldquo;The XO47 garments have been worn at red carpets, cultural events, and significant occasions, reflecting the brand&apos;s growing presence within India&apos;s contemporary style landscape.&rdquo;
          </blockquote>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
