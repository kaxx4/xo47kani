import type { CSSProperties, ReactNode } from "react";

interface FigureProps {
  src: string;
  alt?: string;
  float?: boolean;
  className?: string;
  style?: CSSProperties;
  imgStyle?: CSSProperties;
  children?: ReactNode;
  priority?: boolean;
}

/* A real photo that can "float" on a light canvas via mix-blend-mode: multiply
   (the white packshot background melts into the page colour). Matches the
   source Figure exactly: plain <img> with object-fit cover by default. */
export function Figure({ src, alt = "", float = false, className = "", style, imgStyle, children, priority }: FigureProps) {
  return (
    <div className={`fig ${float ? "fig-float" : ""} ${className}`} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        style={imgStyle}
      />
      {children}
    </div>
  );
}
