"use client";
import { useEffect, useState } from "react";
import { useXOTheme } from "@/components/xo/theme";
import { XO_THEMES } from "@/components/xo/home/theme-types";
import { HeroIvory, HeroNoir, HeroEarthen } from "@/components/xo/home/heroes";
import { Ticker } from "@/components/xo/home/Ticker";
import {
  PhilosophyBand,
  CollectionsBlock,
  ColorFeature,
  Craftsmanship,
  Recognition,
  SantaliBand,
  Services,
  CTABand,
} from "@/components/xo/home/sections";

const DIRS: { k: "ivory" | "noir" | "earthen"; label: string }[] = [
  { k: "ivory", label: "Ivory" },
  { k: "noir", label: "Maison Noir" },
  { k: "earthen", label: "Forest" },
];

export function Home() {
  const [direction, setDirection] = useState<"ivory" | "noir" | "earthen">("ivory");
  const { setDark } = useXOTheme();
  const t = XO_THEMES[direction] || XO_THEMES.ivory;

  // sync the global header + page background with the chosen mood
  useEffect(() => {
    setDark(t.dark);
    document.body.style.background = t.dark ? "var(--ink)" : "var(--milk)";
    document.body.style.color = t.dark ? "var(--on-dark)" : "var(--ink)";
    window.scrollTo({ top: 0, behavior: "auto" });
    return () => {
      setDark(false);
      document.body.style.background = "var(--milk)";
      document.body.style.color = "var(--ink)";
    };
  }, [t.dark, setDark]);

  const Hero = direction === "noir" ? HeroNoir : direction === "earthen" ? HeroEarthen : HeroIvory;

  return (
    <>
      <div className="fade-page" key={direction}>
        <Hero />
        <Ticker dark={t.dark} />
        <PhilosophyBand t={t} />
        <CollectionsBlock t={t} />
        <ColorFeature t={t} />
        <Craftsmanship t={t} />
        <Recognition t={t} />
        <SantaliBand />
        <Services t={t} />
        <CTABand />
      </div>

      {/* Direction switcher */}
      <div className="switcher" role="radiogroup" aria-label="Homepage mood">
        <span className="mono" style={{ color: "rgba(237,230,216,0.62)", display: "flex", alignItems: "center", padding: "0 14px 0 8px" }}>
          Mood
        </span>
        {DIRS.map((d) => (
          <button
            key={d.k}
            type="button"
            className={`press${direction === d.k ? " on" : ""}`}
            onClick={() => setDirection(d.k)}
            role="radio"
            aria-checked={direction === d.k}
            style={{ transition: "color .4s, background .4s, transform .16s var(--ease)" }}
          >
            {d.label}
          </button>
        ))}
      </div>
    </>
  );
}
