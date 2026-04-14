"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, User } from "@/components/icons";

const navLinks = [
  { label: "COLLECTIONS", href: "/collections" },
  { label: "SERVICES", href: "/services" },
  { label: "STUDIO", href: "/studio" },
  { label: "SANTALI", href: "/santali" },
];

const drawerLinks = [
  { label: "COLLECTIONS", href: "/collections" },
  { label: "SERVICES", href: "/services" },
  { label: "STUDIO", href: "/studio" },
  { label: "SANTALI", href: "/santali" },
  { label: "BOOK A CONSULTATION", href: "/book-consultation" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll behaviour: background + hide/show
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 60);

      if (y > 120 && y > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when drawer open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape key closes drawer
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const textColor = scrolled ? "#1C1B18" : "#FAF8F4";

  const headerBg = scrolled
    ? "rgba(250, 248, 244, 0.97)"
    : "transparent";

  const borderColor = scrolled
    ? "rgba(28,27,24,0.08)"
    : "transparent";

  return (
    <>
      <style>{`
        .xo-nav-link {
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
          transition: border-color 0.2s ease;
          text-decoration: none;
          color: inherit;
        }
        .xo-nav-link:hover {
          border-bottom-color: currentColor;
        }
        .xo-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          color: inherit;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: opacity 0.2s ease;
          text-decoration: none;
        }
        .xo-icon-btn:hover {
          opacity: 0.6;
        }
        .xo-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          color: inherit;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .xo-hamburger:hover {
          opacity: 0.6;
        }
        .xo-drawer-link {
          display: block;
          padding: 18px 24px;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .xo-drawer-link:hover,
        .xo-drawer-link:focus {
          color: #FAF8F4;
          padding-left: 28px;
          outline: none;
        }
        .xo-drawer-link:focus-visible {
          outline: 1px solid rgba(255,255,255,0.4);
          outline-offset: -1px;
        }
        @media (min-width: 768px) {
          .xo-mobile-only { display: none !important; }
          .xo-desktop-only { display: flex !important; }
        }
        @media (max-width: 767px) {
          .xo-mobile-only { display: flex !important; }
          .xo-desktop-only { display: none !important; }
        }
      `}</style>

      {/* ── Header bar ── */}
      <header
        aria-label="Site header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          height: "52px",
          padding: "0 20px",
          backgroundColor: headerBg,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: `1px solid ${borderColor}`,
          color: textColor,
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition:
            "transform 0.4s cubic-bezier(0.49,0.03,0.13,0.99), background-color 0.5s ease, border-color 0.5s ease, color 0.4s ease, backdrop-filter 0.5s ease",
        }}
      >
        {/* ── DESKTOP LEFT: nav links ── */}
        <nav
          aria-label="Primary navigation"
          className="xo-desktop-only"
          style={{
            alignItems: "center",
            gap: "28px",
            flex: 1,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="xo-nav-link"
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── MOBILE LEFT: hamburger ── */}
        <div
          className="xo-mobile-only"
          style={{ flex: 1, alignItems: "center" }}
        >
          <button
            className="xo-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
          >
            {/* 3-bar SVG */}
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              aria-hidden="true"
            >
              <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* ── CENTER: wordmark (absolute) ── */}
        <Link
          href="/"
          aria-label="XO47 — Home"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "inherit",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          XO47
        </Link>

        {/* ── DESKTOP RIGHT: BOOK + icons ── */}
        <nav
          className="xo-desktop-only"
          role="navigation"
          aria-label="Account navigation"
          style={{
            alignItems: "center",
            gap: "4px",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="/book-consultation"
            className="xo-nav-link"
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginRight: "12px",
            }}
          >
            BOOK
          </Link>

          <button
            className="xo-icon-btn"
            aria-label="Search"
            style={{ color: "inherit" }}
          >
            <Search size={16} />
          </button>

          <Link
            href="/account"
            className="xo-icon-btn"
            aria-label="Account"
            style={{ color: "inherit" }}
          >
            <User size={16} />
          </Link>
        </nav>

        {/* ── MOBILE RIGHT: Search only ── */}
        <div
          className="xo-mobile-only"
          style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
        >
          <button
            className="xo-icon-btn"
            aria-label="Search"
            style={{ color: "inherit" }}
          >
            <Search size={16} />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            backgroundColor: "rgba(28,27,24,0.4)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />
      )}

      {/* ── Mobile Drawer Panel ── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(320px, 85vw)",
          zIndex: 50,
          backgroundColor: "#1C1B18",
          display: "flex",
          flexDirection: "column",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          willChange: "transform",
          overflowY: "auto",
        }}
        aria-hidden={!menuOpen}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            flexShrink: 0,
          }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#FAF8F4",
              textDecoration: "none",
            }}
          >
            XO47
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#FAF8F4",
              fontSize: "20px",
              lineHeight: 1,
              padding: 0,
              flexShrink: 0,
              transition: "opacity 0.2s ease",
            }}
          >
            ×
          </button>
        </div>

        {/* Drawer nav links */}
        <nav aria-label="Mobile navigation" style={{ flex: 1 }}>
          {drawerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="xo-drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div
          style={{
            padding: "32px 24px",
            flexShrink: 0,
            color: "rgba(255,255,255,0.3)",
            fontSize: "11px",
            letterSpacing: "0.08em",
          }}
        >
          @studio.xo47 · New Delhi
        </div>
      </div>
    </>
  );
}
