"use client";
import { useEffect } from "react";
import { useXOTheme } from "@/components/xo/theme";
import { XO_THEMES } from "@/components/xo/home/theme-types";
import { HeroIvory } from "@/components/xo/home/heroes";
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

export function Home() {
  const t = XO_THEMES.ivory;
  const { setDark } = useXOTheme();

  // home is the light "ivory" canvas — keep the global header light
  useEffect(() => {
    setDark(false);
    return () => setDark(false);
  }, [setDark]);

  return (
    <div className="fade-page">
      <HeroIvory />
      <Ticker dark={false} />
      <PhilosophyBand t={t} />
      <CollectionsBlock t={t} />
      <ColorFeature t={t} />
      <Craftsmanship t={t} />
      <Recognition t={t} />
      <SantaliBand />
      <Services t={t} />
      <CTABand />
    </div>
  );
}
