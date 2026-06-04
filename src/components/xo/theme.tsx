"use client";
import { createContext, useContext, useEffect } from "react";

interface XOThemeValue {
  dark: boolean;
  setDark: (v: boolean) => void;
}

export const XOThemeContext = createContext<XOThemeValue>({
  dark: false,
  setDark: () => {},
});

export function useXOTheme(): XOThemeValue {
  return useContext(XOThemeContext);
}

/* Pages mount this to declare a dark header/canvas (e.g. Santali, or the
   home page's Maison Noir mood). It resets to light on unmount. */
export function useDarkHeader(active: boolean) {
  const { setDark } = useXOTheme();
  useEffect(() => {
    setDark(active);
    return () => setDark(false);
  }, [active, setDark]);
}
