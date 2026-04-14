"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function XOHero() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 700,
        backgroundColor: "#1C1B18",
        overflow: "hidden",
      }}
    >
      <style>{`
        .hero-content {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-content.entered { opacity: 1; transform: translateY(0); }
        .hero-label  { transition-delay: 0ms; }
        .hero-h1     { transition-delay: 100ms; }
        .hero-sub    { transition-delay: 200ms; }
        .hero-cta    { transition-delay: 300ms; }
        .hero-btns   { display: flex; gap: 12px; flex-wrap: wrap; }
        @media (max-width: 480px) { .hero-btns { flex-direction: column; max-width: 280px; } }
        @keyframes xo-pulse { 0%,100% { opacity: 0.15; } 50% { opacity: 0.5; } }
        .hero-scroll-line { animation: xo-pulse 2.8s ease-in-out infinite; }
        @media (max-width: 639px) {
          .hero-bottom { bottom: 48px !important; }
          .hero-scroll-indicator { display: none; }
        }
      `}</style>

      {/* Background image */}
      <Image
        src="/images/products/X04701947-2-a.jpg"
        alt="XO47 Bespoke Menswear"
        fill
        unoptimized
        priority
        style={{
          objectFit: "cover",
          objectPosition: "60% top",
          opacity: 1,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(165deg, rgba(28,27,24,0.1) 0%, rgba(28,27,24,0.35) 45%, rgba(28,27,24,0.78) 80%, rgba(28,27,24,0.92) 100%)",
        }}
      />

      {/* Bottom content row */}
      <div
        className="xo-hero-pad hero-bottom"
        style={{
          position: "absolute",
          bottom: 72,
          left: 0,
          right: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {/* Left: headline block */}
        <div style={{ flex: 1 }}>
          <p
            className={`hero-content hero-label${entered ? " entered" : ""}`}
            style={{
              fontSize: 10,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
              marginBottom: 24,
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            Bespoke Menswear · New Delhi
          </p>

          <h1
            className={`hero-content hero-h1${entered ? " entered" : ""}`}
            style={{
              fontSize: "clamp(52px, 7vw, 96px)",
              fontWeight: 200,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              margin: "0 0 28px",
              maxWidth: 600,
            }}
          >
            Custom<br />Yourself.
          </h1>

          <p
            className={`hero-content hero-sub${entered ? " entered" : ""}`}
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 360,
              lineHeight: 1.85,
              margin: "0 0 48px",
            }}
          >
            A tailoring house built on the philosophy of presence and identity.
            Every garment begins with intention.
          </p>

          <div className={`hero-content hero-cta${entered ? " entered" : ""}`}>
            <div className="hero-btns">
              <Link
                href="/collections"
                className="xo-btn-primary"
                style={{
                  padding: "0 40px",
                  height: 48,
                  backgroundColor: "#FAF8F4",
                  color: "#1C1B18",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  border: "none",
                }}
              >
                Explore Collections
              </Link>
              <Link
                href="/book-consultation"
                className="xo-btn-outline"
                style={{
                  padding: "0 32px",
                  height: 48,
                  backgroundColor: "transparent",
                  color: "#FAF8F4",
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Right: scroll indicator */}
        <div
          className="hero-scroll-indicator"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            paddingBottom: 4,
            flexShrink: 0,
            marginLeft: 24,
          }}
        >
          <div
            className="hero-scroll-line"
            style={{ width: 1, height: 48, backgroundColor: "rgba(255,255,255,0.3)" }}
          />
          <p
            style={{
              fontSize: 9,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}
