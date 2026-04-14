"use client";
import { useInView } from "@/hooks/useInView";

const celebs: { name: string; role: string }[] = [
  { name: "SHAHID KAPOOR",       role: "Actor" },
  { name: "ROHIT SARAF",         role: "Actor" },
  { name: "ISHAAN KHATTAR",      role: "Actor" },
  { name: "ABHAY DEOL",          role: "Actor" },
  { name: "VIVIANE DIVINE",      role: "Artist" },
  { name: "KARRON S. DHINGGRA",  role: "Entrepreneur" },
];

export function XORecognition() {
  const { ref, isVisible } = useInView();

  return (
    <section className="xo-section-pad" style={{ backgroundColor: "#1C1B18" }}>
      {/* Section header */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: 56,
          marginBottom: 56,
        }}
      >
        <p
          className="xo-label"
          style={{ color: "rgba(255,255,255,0.3)", marginBottom: 16 }}
        >
          As Worn By
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          Brand Recognition
        </h2>
      </div>

      {/* Name list */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`xo-fade-in${isVisible ? " is-visible" : ""}`}
        style={{ maxWidth: 720 }}
      >
        {celebs.map(({ name, role }) => (
          <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <span style={{ fontSize: "clamp(16px, 2.5vw, 26px)", fontWeight: 200, letterSpacing: "0.07em", color: "rgba(255,255,255,0.82)" }}>{name}</span>
            <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginLeft: 16 }}>{role}</span>
          </div>
        ))}
      </div>

      {/* Body paragraph */}
      <p
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.28)",
          lineHeight: 1.9,
          maxWidth: 480,
          marginTop: 48,
        }}
      >
        Over the years, XO47 has built a reputation for dressing individuals
        across culture, entertainment, sports, and public life — at red carpets,
        cultural events, weddings, and formal occasions.
      </p>
    </section>
  );
}
