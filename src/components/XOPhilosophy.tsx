"use client";
import { useInView } from "@/hooks/useInView";

const words = [
  "PRECISION",
  "INTENTIONAL",
  "STRUCTURED",
  "REFINED",
  "SHARP",
  "TIMELESS",
];

export function XOPhilosophy() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`xo-section-pad xo-fade-in${isVisible ? " is-visible" : ""}`}
      style={{ backgroundColor: "#1C1B18", paddingBottom: 80 }}
    >
      {/* Top hairline rule */}
      <hr className="xo-rule-dark" style={{ marginBottom: 48 }} />

      {/* Label */}
      <p
        className="xo-label"
        style={{
          color: "rgba(255,255,255,0.3)",
          marginBottom: 40,
        }}
      >
        The XO47 Philosophy
      </p>

      {/* Philosophy words — flowing paragraph with · separators */}
      <p style={{ fontSize: "clamp(22px, 3.5vw, 42px)", fontWeight: 200, letterSpacing: "0.08em", lineHeight: 1.5, margin: "0 0 56px" }}>
        {words.map((word, i) => (
          <span key={word}>
            <span style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.2)" }}>{word}</span>
            {i < words.length - 1 && <span style={{ color: "rgba(255,255,255,0.12)", margin: "0 16px" }}>·</span>}
          </span>
        ))}
      </p>

      {/* Body text */}
      <p
        style={{
          fontSize: 15,
          fontWeight: 300,
          color: "rgba(255,255,255,0.42)",
          lineHeight: 1.9,
          maxWidth: 520,
          marginTop: 0,
        }}
      >
        XO47 is a bespoke menswear tailoring house built on the philosophy of
        presence &amp; identity. Every piece begins with intention — from the
        selection of fabric to the precision of every detail, guided by a deep
        understanding of the man who wears it.
      </p>
    </section>
  );
}
