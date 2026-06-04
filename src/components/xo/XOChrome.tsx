"use client";
import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { XOThemeContext } from "@/components/xo/theme";
import { Header } from "@/components/xo/Header";
import { Footer } from "@/components/xo/Footer";
import { XOMotion } from "@/components/xo/XOMotion";

/* Routes that render their own full-bleed layout and suppress the global footer. */
const NO_FOOTER = ["/book-consultation"];

export function XOChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  const hideFooter = NO_FOOTER.some((p) => pathname === p || pathname.startsWith(p + "/"));

  return (
    <XOThemeContext.Provider value={{ dark, setDark }}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      {!hideFooter && <Footer />}
      <XOMotion />
    </XOThemeContext.Provider>
  );
}
