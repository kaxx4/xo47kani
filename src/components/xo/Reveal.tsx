"use client";
import { useEffect, useRef, useState, type ElementType, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: ElementType;
  style?: CSSProperties;
}

/* Scroll-reveal primitive — opacity stays 1, only transform animates,
   so a frozen/headless context shows content offset at worst, never blank. */
export function Reveal({ children, className = "", delay = 0, as = "div", style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.96) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- already on-screen at mount: reveal once, no observer needed
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    const t = setTimeout(() => setSeen(true), 1500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const Tag = as as ElementType;
  const dcls = delay ? ` reveal-d${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal${dcls} ${seen ? "in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
