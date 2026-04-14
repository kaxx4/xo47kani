"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const services = [
  { title: "Signature Formalwear", desc: "The foundation of the house — blazers and suits crafted with precision.", href: "/services" },
  { title: "Bespoke Experience", desc: "Fully hand-crafted garments for those seeking the purest form of tailoring.", href: "/services#bespoke" },
  { title: "Occasion Wear", desc: "Weddings, tuxedo dressing, celebrations, and defining milestones.", href: "/services#occasion" },
  { title: "Wardrobe Consultation", desc: "A styling session to refine your wardrobe strategy for work, events, and lifestyle.", href: "/services#wardrobe" },
  { title: "Home Appointments", desc: "An exclusive private experience for Delhi clients.", href: "/services#home" },
  { title: "Exhibitions & Pop-Ups", desc: "XO47 at select trade shows, exhibitions, and global events.", href: "/services#exhibitions" },
];

export function XOServices() {
  const { ref, isVisible } = useInView();

  return (
    <section className="xo-section-pad" style={{ backgroundColor: "#FAF8F4" }}>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background-color: #E0DCD5;
        }
        @media (min-width: 640px)  { .services-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
        .service-card {
          background-color: #FAF8F4;
          padding: 36px 28px;
          transition: background-color 0.25s ease;
        }
        .service-card:hover { background-color: #EDE8E0; }
        @media (max-width: 639px) {
          .service-card { padding: 28px 20px; }
        }
      `}</style>

      {/* Section header */}
      <div style={{ marginBottom: 56 }}>
        <p className="xo-label" style={{ marginBottom: 14 }}>What We Offer</p>
        <h2 className="xo-h2" style={{ margin: 0 }}>Services</h2>
      </div>

      {/* Grid */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`services-grid xo-fade-in${isVisible ? " is-visible" : ""}`}
      >
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="service-card"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <h3
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#1C1B18",
                letterSpacing: "0.03em",
                margin: "0 0 10px",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                fontWeight: 300,
                color: "#6B6560",
                lineHeight: 1.8,
                margin: "0 0 20px",
              }}
            >
              {s.desc}
            </p>
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8C6A4A",
                borderBottom: "1px solid rgba(140,106,74,0.4)",
                paddingBottom: 2,
              }}
            >
              Learn more
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
