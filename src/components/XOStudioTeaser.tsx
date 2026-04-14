"use client";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export function XOStudioTeaser() {
  const { ref, isVisible } = useInView();

  return (
    <section>
      <style>{`
        .studio-grid { display: grid; grid-template-columns: 1fr; }
        .studio-img { min-height: 300px; }
        @media (min-width: 768px) {
          .studio-grid { grid-template-columns: 1fr 1fr; }
          .studio-img { min-height: 480px; }
        }
      `}</style>
      <div className="studio-grid">
        <div className="studio-img xo-img-hover" style={{ position: "relative", backgroundColor: "#1A2B1A", overflow: "hidden" }}>
          <Image src="/images/products/X04701957-2-a.jpg" alt="The XO47 Studio" fill unoptimized style={{ objectFit: "cover", objectPosition: "center", opacity: 0.7 }} />
        </div>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`xo-section-pad xo-fade-in${isVisible ? " is-visible" : ""}`}
          style={{ backgroundColor: "#EDE8E0", display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <p className="xo-label-text" style={{ marginBottom: 24 }}>The Studio</p>
          <h2 style={{ fontWeight: 200, fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.015em", lineHeight: 1.25, margin: "0 0 20px", color: "#1C1B18" }}>
            Ambawatta One,<br />Mehrauli — New Delhi
          </h2>
          <p style={{ fontSize: 14, fontWeight: 300, color: "#6B6560", lineHeight: 1.85, marginBottom: 36 }}>
            The XO47 studio is designed to feel like a private tailoring lounge, where the experience is centred around conversation, craft, and discovery. Quiet luxury. Fabric exploration. Personalized consultation.
          </p>
          <Link href="/studio" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", textDecoration: "none", borderBottom: "1px solid rgba(28,27,24,0.5)", paddingBottom: 2, alignSelf: "flex-start" }}>
            About the Studio
          </Link>
        </div>
      </div>
    </section>
  );
}
