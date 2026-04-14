"use client";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export function XOSantaliTeaser() {
  const { ref, isVisible } = useInView();

  return (
    <section style={{ backgroundColor: "#FAF8F4" }}>
      <style>{`
        .santali-grid { display: grid; grid-template-columns: 1fr; }
        .santali-img { min-height: 300px; }
        @media (min-width: 768px) {
          .santali-grid { grid-template-columns: 1fr 1fr; }
          .santali-img { min-height: 480px; }
        }
      `}</style>
      <div className="santali-grid">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`xo-section-pad xo-fade-in${isVisible ? " is-visible" : ""}`}
          style={{ backgroundColor: "#EDE8E0", display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <p className="xo-label-text" style={{ marginBottom: 16 }}>A New Chapter</p>
          <h2 style={{ fontWeight: 200, fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.02em", color: "#1C1B18", margin: "0 0 12px" }}>
            Santali
          </h2>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#8C6A4A", textTransform: "uppercase", marginBottom: 20 }}>
            Modern Indian Wear · by @santali.x
          </p>
          <p style={{ fontSize: 14, fontWeight: 300, color: "#6B6560", lineHeight: 1.85, marginBottom: 36 }}>
            Rising from the 47 that defines XO47. Santali speaks in the language of texture — fabrics chosen for their depth, their tactility, their quiet ability to hold intention. Rooted in tradition, reimagined for today.
          </p>
          <Link href="/santali" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", textDecoration: "none", borderBottom: "1px solid rgba(28,27,24,0.5)", paddingBottom: 2, alignSelf: "flex-start" }}>
            Explore Santali
          </Link>
        </div>
        <div className="santali-img xo-img-hover" style={{ position: "relative", backgroundColor: "#1C1B18", overflow: "hidden" }}>
          <Image src="/images/products/X04701915-a.jpg" alt="Santali by XO47" fill unoptimized style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.85 }} />
        </div>
      </div>
    </section>
  );
}
