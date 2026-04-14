"use client";
import { useInView } from "@/hooks/useInView";

const steps = [
  "Initial Consultation",
  "Fabric Selection",
  "Design & Style Decisions",
  "Unique Body Measurements",
  "Pattern Creation",
  "First Trial",
  "Final Fitting",
  "Delivery",
];

export function XOCraftsmanship() {
  const { ref: leftRef, isVisible: leftVisible } = useInView();
  const { ref: rightRef, isVisible: rightVisible } = useInView();

  return (
    <section>
      <style>{`
        .craft-grid { display: grid; grid-template-columns: 1fr; }
        @media (min-width: 768px) { .craft-grid { grid-template-columns: 1fr 1fr; } }
        .craft-step-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(28,27,24,0.07);
        }
      `}</style>
      <div className="craft-grid" style={{ minHeight: 600 }}>
        {/* Left panel */}
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className={`xo-section-pad xo-fade-in${leftVisible ? " is-visible" : ""}`}
          style={{
            backgroundColor: "#1C1B18",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            className="xo-label"
            style={{ color: "rgba(255,255,255,0.3)", marginBottom: 24 }}
          >
            Our Process
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 200,
              color: "#fff",
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
              margin: "0 0 28px",
            }}
          >
            ITS NOT FOR<br />YOU TO SHOW,<br />
            <em
              style={{
                fontStyle: "italic",
                color: "#8C6A4A",
              }}
            >
              its for you to feel.
            </em>
          </h2>
          <p
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "rgba(255,255,255,0.38)",
              lineHeight: 1.9,
              maxWidth: 340,
              margin: 0,
            }}
          >
            Every XO47 garment begins with the right selection of fabric. Our
            materials are sourced from mills that have refined their craft over
            generations — wool, linen, silk, velvets, cashmere, bamboo.
          </p>
        </div>

        {/* Right panel */}
        <div
          ref={rightRef as React.RefObject<HTMLDivElement>}
          className={`xo-section-pad xo-fade-in${rightVisible ? " is-visible" : ""}`}
          style={{
            backgroundColor: "#EDE8E0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transitionDelay: "120ms",
          }}
        >
          <p
            className="xo-label"
            style={{ marginBottom: 32 }}
          >
            The 8-Step Process
          </p>
          {steps.map((step, i) => (
            <div key={step} className="craft-step-row">
              <span
                style={{
                  fontSize: 11,
                  color: "#8C6A4A",
                  fontWeight: 400,
                  minWidth: 20,
                  flexShrink: 0,
                }}
              >
                0{i + 1}
              </span>
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  fontWeight: 400,
                  color: "#1C1B18",
                }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
