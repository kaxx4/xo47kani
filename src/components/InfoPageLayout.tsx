"use client";

import { useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useInView } from "@/hooks/useInView";

interface InfoSection {
  heading?: string;
  body: string | string[];
}

interface InfoPageLayoutProps {
  title: string;
  subtitle?: string;
  sections: InfoSection[];
}

function InfoSection({ sec, index }: { sec: InfoSection; index: number }) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`xo-fade-in${isVisible ? " is-visible" : ""}`}
      style={{
        marginBottom: 48,
        paddingTop: index > 0 ? 40 : 0,
        transitionDelay: `${index * 60}ms`,
      }}
    >
      {sec.heading && (
        <h2
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#1C1B18",
            margin: "0 0 14px",
            borderBottom: "1px solid #E0DCD5",
            paddingBottom: 12,
          }}
        >
          {sec.heading}
        </h2>
      )}
      {Array.isArray(sec.body) ? (
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {sec.body.map((item, j) => (
            <li
              key={j}
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "#4A4845",
                lineHeight: 1.85,
                padding: "3px 0",
                paddingLeft: "1.4em",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "#9A9590",
                }}
              >
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: "#4A4845",
            lineHeight: 1.85,
            margin: 0,
          }}
        >
          {sec.body}
        </p>
      )}
    </div>
  );
}

export function InfoPageLayout({ title, subtitle, sections }: InfoPageLayoutProps) {
  return (
    <>
      <style>{`
        .info-header {
          padding: 72px 20px 40px;
          padding-top: calc(72px + 56px);
          background: #1C1B18;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        @media (min-width: 640px) {
          .info-header {
            padding: 80px 32px 48px;
            padding-top: calc(80px + 56px);
          }
        }
        @media (min-width: 1024px) {
          .info-header {
            padding: 88px 48px 56px;
            padding-top: calc(88px + 56px);
          }
        }
        .info-content {
          padding: 48px 20px 64px;
          max-width: 760px;
        }
        @media (min-width: 640px) {
          .info-content {
            padding: 56px 32px 80px;
          }
        }
        @media (min-width: 1024px) {
          .info-content {
            padding: 64px 48px 96px;
          }
        }
      `}</style>
      <SiteHeader />
      <main>
        {/* Page header */}
        <div className="info-header">
          <h1
            style={{
              fontWeight: 200,
              fontSize: "clamp(32px, 5vw, 60px)",
              letterSpacing: "-0.02em",
              color: "#FAF8F4",
              margin: "0 0 16px",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: "rgba(255,255,255,0.42)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="info-content">
          {sections.map((sec, i) => (
            <InfoSection key={i} sec={sec} index={i} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
