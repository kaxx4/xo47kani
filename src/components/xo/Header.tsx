"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/xo-data";
import { useXOTheme } from "@/components/xo/theme";
import { SearchOverlay } from "@/components/SearchOverlay";

const MENU: [string, string][] = [
  ["Collections", "/collections"],
  ["Bespoke", "/bespoke"],
  ["The Maison", "/maison"],
  ["Santali", "/santali"],
  ["Book a Consultation", "/book-consultation"],
  ["Account", "/account"],
];

export function Header() {
  const pathname = usePathname();
  const { dark } = useXOTheme();
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenu(false);
    burgerRef.current?.focus();
  };

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  // when the overlay menu opens: move focus in + close on Escape
  useEffect(() => {
    if (!menu) return;
    const t = setTimeout(() => closeRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        burgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  // close the overlay menu on navigation (covers browser back/forward while open)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset overlay state on route change
    setMenu(false);
  }, [pathname]);

  const onDark = dark;
  const color = onDark ? "var(--on-dark)" : "var(--ink)";
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header className={`hdr${solid ? " solid" : ""}${onDark ? " on-dark-hdr" : ""}`} style={{ color }}>
        <div className="hdr-inner wrap-wide">
          <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
            <Link href="/" className="wordmark">
              XO47
            </Link>
            <nav className="hdr-nav" style={{ display: "flex", gap: 30, alignItems: "center" }}>
              {NAV.map((n) => (
                <Link key={n.href} className={`nav-link${isActive(n.href) ? " active" : ""}`} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
          <nav style={{ display: "flex", gap: 26, justifyContent: "flex-end", alignItems: "center" }}>
            <button type="button" className="nav-link hdr-util" onClick={() => setSearch(true)} aria-label="Search" style={{ opacity: 0.7 }}>
              Search
            </button>
            <Link className="nav-link hdr-util" href="/account" style={{ opacity: 0.7 }}>
              Account
            </Link>
            <Link className="ulink hdr-util" href="/book-consultation" style={{ color: "var(--clay)" }}>
              Enquire
            </Link>
            <button
              type="button"
              ref={burgerRef}
              className="hdr-burger"
              aria-label="Menu"
              aria-expanded={menu}
              onClick={() => setMenu(true)}
              style={{ display: "none", flexDirection: "column", gap: 5, width: 26 }}
            >
              <span style={{ height: 1, background: "currentColor", width: "100%" }} />
              <span style={{ height: 1, background: "currentColor", width: "100%" }} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile / overlay menu */}
      <div className={`xo-menu${menu ? " open" : ""}`} aria-hidden={!menu}>
        <div className="xo-menu-bar wrap-wide">
          <span className="wordmark">XO47</span>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <button type="button" className="ulink" onClick={() => { setMenu(false); setSearch(true); }} aria-label="Search" style={{ padding: "12px 2px" }}>
              Search
            </button>
            <button type="button" ref={closeRef} className="ulink" onClick={closeMenu} aria-label="Close menu" style={{ color: "var(--clay)", padding: "12px 2px" }}>
              Close
            </button>
          </div>
        </div>
        <nav className="xo-menu-nav wrap-wide">
          {MENU.map((m, i) => (
            <Link
              key={m[1]}
              href={m[1]}
              onClick={() => setMenu(false)}
              className="xo-menu-link"
              style={{ transitionDelay: menu ? `${0.08 + i * 0.06}s` : "0s" }}
            >
              <span className="mono" style={{ color: "var(--clay)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display">{m[0]}</span>
            </Link>
          ))}
        </nav>
        <div className="xo-menu-foot wrap-wide mono">Ambawatta One, Mehrauli · @studio.xo47 · weknowtailoring.com</div>
      </div>

      <SearchOverlay open={search} onClose={() => setSearch(false)} />

      <style>{`
        @media(max-width:860px){.hdr-nav{display:none !important}.hdr-burger{display:flex !important}}
        @media(max-width:560px){.hdr-util{display:none !important}}
      `}</style>
    </>
  );
}
