"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { XOBookCTA } from "@/components/XOBookCTA";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    num: "01",
    title: "Signature Formalwear",
    description:
      "The foundation of the house. Blazers and suits crafted with precision for the modern professional.",
    detail:
      "Available in a curated selection of fabrics — wool, linen, silk blends, and seasonal weaves — sourced from mills in Italy, England, and India. Consultation is required for all Signature Formalwear commissions.",
    note: "Consultation required · Fabric selection included",
  },
  {
    num: "02",
    title: "Bespoke Experience",
    description:
      "Fully hand-crafted garments for those seeking the purest form of tailoring. Available upon request at an additional cost.",
    detail:
      "The Bespoke Experience represents the highest expression of what XO47 does. Every element — canvas, lining, buttons, stitching — is executed by hand, to your specifications, in the traditional manner. Lead times are longer, and the result is singular.",
    note: "Available upon request · Additional cost applies",
  },
  {
    num: "03",
    title: "Occasion Wear",
    description:
      "Garments designed for life's defining moments: weddings, tuxedo dressing, red carpets, and significant milestones.",
    detail:
      "Occasion Wear at XO47 spans the full range of formal and ceremonial dressing — from black tie tuxedos to wedding sherwanis, Nehru jackets, and event suits. We approach every occasion with the same care and intention, regardless of the context.",
    note: "Weddings · Black Tie · Red Carpet · Ceremonies",
  },
  {
    num: "04",
    title: "Wardrobe Consultation",
    description:
      "A styling and wardrobe-building session to refine your strategy for work, events, and lifestyle.",
    detail:
      "Not all engagements begin with a garment. The Wardrobe Consultation is a structured conversation about how you dress — what works, what doesn't, and what your wardrobe should be doing for you. We offer clear, considered direction, without the noise of trend or the pressure of a transaction.",
    note: "Available as a standalone session",
  },
  {
    num: "05",
    title: "Home Appointments",
    description:
      "An exclusive private experience for our Delhi clients. We come to you.",
    detail:
      "For clients based in Delhi who prefer the consultation to take place at home or in the office, XO47 offers private home appointments. The full studio experience — fabric samples, design discussion, measurements — is brought to your door.",
    note: "Delhi only · Subject to availability",
  },
  {
    num: "06",
    title: "Exhibitions & Pop-Ups",
    description:
      "XO47 engages with global audiences through select trade shows, pop-ups, and exhibitions.",
    detail:
      "XO47 participates in curated events across India and internationally — offering a chance to experience the house, the fabrics, and the craft in person, outside of the studio environment. Follow @studio.xo47 for upcoming dates and locations.",
    note: "Dates announced via @studio.xo47",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`service-card xo-fade-in${isVisible ? " is-visible" : ""}`}
      style={{
        backgroundColor: index % 2 === 0 ? "#FAF8F4" : "#EDE8E0",
        borderBottom: "1px solid #E0DCD5",
      }}
    >
      <div className="service-inner">
        {/* Number — desktop only via CSS */}
        <div className="service-num">
          <span
            style={{
              fontSize: 11,
              fontWeight: 400,
              color: "#8C6A4A",
              letterSpacing: "0.1em",
            }}
          >
            {service.num}
          </span>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: 17,
              fontWeight: 300,
              letterSpacing: "0.02em",
              color: "#1C1B18",
              marginTop: 0,
              marginBottom: 12,
            }}
          >
            {service.title}
          </h2>
          <p
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "#6B6560",
              lineHeight: 1.85,
              marginBottom: 20,
              marginTop: 0,
            }}
          >
            {service.description}
          </p>
          <p
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "#6B6560",
              lineHeight: 1.85,
              marginBottom: 20,
              marginTop: 0,
            }}
          >
            {service.detail}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#9A9590",
                fontWeight: 400,
              }}
            >
              {service.note}
            </span>
            <Link
              href="/book-consultation"
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8C6A4A",
                textDecoration: "none",
                borderBottom: "1px solid rgba(140,106,74,0.35)",
                paddingBottom: 2,
              }}
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <style>{`
        .services-hero {
          background-color: #1C1B18;
          padding: 80px 20px;
          padding-top: calc(80px + 56px);
        }
        @media (min-width: 640px) {
          .services-hero {
            padding: 100px 32px 80px;
            padding-top: calc(100px + 56px);
          }
        }
        @media (min-width: 1024px) {
          .services-hero {
            padding: 120px 48px 80px;
            padding-top: calc(120px + 56px);
          }
        }
        .service-card {
          padding: 40px 20px;
        }
        @media (min-width: 640px) {
          .service-card {
            padding: 48px 32px;
          }
        }
        @media (min-width: 1024px) {
          .service-card {
            padding: 56px 48px;
          }
        }
        .service-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 480px) {
          .service-inner {
            flex-direction: row;
            gap: 64px;
            align-items: flex-start;
          }
        }
        .service-num {
          display: none;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .service-num {
            display: block;
          }
        }
      `}</style>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>

        {/* Header Section */}
        <section className="services-hero">
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
            What We Offer
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
            Services
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 480,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Tailoring is personal and considered. Every engagement begins with a conversation.
          </p>
        </section>

        {/* Service Cards */}
        {services.map((service, i) => (
          <ServiceCard key={service.num} service={service} index={i} />
        ))}

        {/* Book CTA */}
        <XOBookCTA />

      </main>
      <SiteFooter />
    </>
  );
}
