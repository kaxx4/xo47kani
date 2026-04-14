"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export function XOBookCTA() {
  const { ref, isVisible } = useInView();

  return (
    <section
      className="xo-section-pad"
      style={{ backgroundColor: "#1C1B18", textAlign: "center" }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`xo-fade-in${isVisible ? " is-visible" : ""}`}
      >
        {/* Label */}
        <p
          className="xo-label"
          style={{
            color: "rgba(255,255,255,0.3)",
            marginBottom: 24,
          }}
        >
          Start Your Journey
        </p>

        {/* Thin rule above headline */}
        <div
          style={{
            width: 40,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.18)",
            margin: "0 auto 32px",
          }}
        />

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 200,
            color: "#FAF8F4",
            letterSpacing: "-0.025em",
            margin: "0 auto 24px",
            maxWidth: 600,
            lineHeight: 1.1,
          }}
        >
          Great style begins with high standards.
        </h2>

        {/* Body */}
        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: "rgba(255,255,255,0.35)",
            maxWidth: 400,
            margin: "0 auto 48px",
            lineHeight: 1.85,
          }}
        >
          Book a private consultation at the XO47 studio. We will guide you
          through fabric, silhouette, and every detail that makes a garment yours.
        </p>

        {/* CTA button */}
        <Link
          href="/book-consultation"
          className="xo-btn-primary"
          style={{
            padding: "0 52px",
            height: 52,
            backgroundColor: "#FAF8F4",
            color: "#1C1B18",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
