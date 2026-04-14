"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useInView } from "@/hooks/useInView";

const pillars = [
  {
    title: "TEXTURE",
    description:
      "Santali prioritises the hand-feel of cloth — the weight of a fabric against skin, the grain of a weave, the fall of a silhouette. Texture is the first language of the garment.",
  },
  {
    title: "SILHOUETTE",
    description:
      "Every Santali piece is constructed with an awareness of the body in motion. Silhouettes are considered, never excessive — rooted in the vocabulary of Indian dress while moving freely within it.",
  },
  {
    title: "CULTURE",
    description:
      "Santali draws from the breadth of India's textile traditions without being constrained by them. It is modern Indian wear: familiar in reference, entirely contemporary in execution.",
  },
];

const collectionImages = [
  { src: "/images/products/X04701915-a.jpg", alt: "Santali garment 1" },
  { src: "/images/products/X04701931-a.jpg", alt: "Santali garment 2" },
  { src: "/images/products/X04701889-a.jpg", alt: "Santali garment 3" },
];

export default function SantaliPage() {
  const { ref: philosophyRef, isVisible: philosophyVisible } = useInView();
  const { ref: collectionsRef, isVisible: collectionsVisible } = useInView();
  const { ref: ctaRef, isVisible: ctaVisible } = useInView();

  return (
    <>
      <style>{`
        .santali-hero {
          background-color: #1A2B1A;
          padding: 80px 20px 64px;
          padding-top: calc(80px + 56px);
        }
        @media (min-width: 640px) {
          .santali-hero {
            padding: 100px 32px 80px;
            padding-top: calc(100px + 56px);
          }
        }
        @media (min-width: 1024px) {
          .santali-hero {
            padding: 120px 48px 96px;
            padding-top: calc(120px + 56px);
          }
        }
        .santali-philosophy {
          background-color: #EDE8E0;
          padding: 64px 20px;
        }
        @media (min-width: 640px) {
          .santali-philosophy {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .santali-philosophy {
            padding: 80px 48px;
          }
        }
        .pillar-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background-color: #D8D3CB;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .pillar-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .santali-collections {
          background-color: #1A2B1A;
          padding: 64px 20px;
        }
        @media (min-width: 640px) {
          .santali-collections {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .santali-collections {
            padding: 80px 48px;
          }
        }
        .collections-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .collections-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .santali-cta {
          background-color: #1C1B18;
          padding: 80px 20px;
          text-align: center;
        }
        @media (min-width: 640px) {
          .santali-cta {
            padding: 100px 32px;
          }
        }
        @media (min-width: 1024px) {
          .santali-cta {
            padding: 120px 48px;
          }
        }
      `}</style>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>

        {/* Hero Section */}
        <section className="santali-hero">
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(180,200,180,0.45)",
              marginBottom: 24,
              marginTop: 0,
              fontWeight: 400,
            }}
          >
            A Chapter by XO47
          </p>
          <h1
            style={{
              fontWeight: 200,
              fontSize: "clamp(64px, 10vw, 120px)",
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
              color: "#FAF8F4",
              margin: "0 0 24px",
            }}
          >
            Santali
          </h1>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              marginBottom: 40,
              marginTop: 24,
            }}
          >
            Modern Indian Wear · by @santali.x
          </p>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 520,
              lineHeight: 1.9,
              margin: "0 0 24px",
            }}
          >
            Santali is a chapter written alongside XO47 — a distinct expression of modern Indian wear that explores the intersection of craft, culture, and contemporary sensibility. Where XO47 is formal and Western in its primary orientation, Santali turns its attention toward the Indian wardrobe: reinterpreted, refined, and made relevant for today.
          </p>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 520,
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            The sub-brand is led by the sensibility of @santali.x, and produced under the XO47 house standards of construction and material. Every piece is considered, every choice intentional — rooted in the richness of the Indian textile tradition while remaining entirely contemporary.
          </p>
        </section>

        {/* Philosophy Pillars */}
        <section
          ref={philosophyRef as React.RefObject<HTMLElement>}
          className={`santali-philosophy xo-fade-in${philosophyVisible ? " is-visible" : ""}`}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#9A9590",
              marginBottom: 48,
              marginTop: 0,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            The Santali Approach
          </p>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  backgroundColor: "#EDE8E0",
                  padding: "48px 40px",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#1C1B18",
                    marginBottom: 12,
                    marginTop: 0,
                  }}
                >
                  {pillar.title}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#6B6560",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Collections Teaser */}
        <section
          ref={collectionsRef as React.RefObject<HTMLElement>}
          className={`santali-collections xo-fade-in${collectionsVisible ? " is-visible" : ""}`}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(180,200,180,0.45)",
              marginBottom: 48,
              marginTop: 0,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Collections
          </p>
          <div className="collections-grid">
            {collectionImages.map((img, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                  backgroundColor: "#0F1A0F",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover", opacity: 0.7 }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 400,
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry CTA */}
        <section
          ref={ctaRef as React.RefObject<HTMLElement>}
          className={`santali-cta xo-fade-in${ctaVisible ? " is-visible" : ""}`}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: 24,
              marginTop: 0,
              fontWeight: 400,
            }}
          >
            Santali by XO47
          </p>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,52px)",
              fontWeight: 300,
              color: "#FAF8F4",
              letterSpacing: "-0.02em",
              margin: "0 auto 24px",
              maxWidth: 600,
              lineHeight: 1.15,
            }}
          >
            Modern Indian wear, made on your terms.
          </h2>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 440,
              margin: "0 auto 48px",
              lineHeight: "28px",
            }}
          >
            To enquire about Santali pieces or commissions, reach us through the XO47 consultation form.
          </p>
          <Link
            href="/book-consultation"
            className="xo-btn-primary"
            style={{
              backgroundColor: "#FAF8F4",
              color: "#1C1B18",
              padding: "0 36px",
            }}
          >
            Enquire About Santali
          </Link>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
