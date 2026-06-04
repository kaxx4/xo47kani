import Link from "next/link";
import { COLLECTIONS } from "@/lib/xo-data";

/* INTERACTIVE TICKER — big serif words interleaved with floating photos.
   Hover anywhere pauses; words are clickable. Two rows, opposite directions. */
export function Ticker({ dark }: { dark: boolean }) {
  const units = COLLECTIONS.map((c) => ({ word: c.label, img: c.img, href: c.href }));

  const make = (arr: typeof units) => {
    const row = [...arr, ...arr, ...arr];
    return row.map((u, i) => (
      <Link key={i} href={u.href} className="tick-unit">
        <span className="display tick-word">{u.word}</span>
        <span className={`tick-thumb ${dark ? "framed-thumb" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={u.img} alt="" loading="lazy" decoding="async" />
        </span>
        <span className="tick-dot" />
      </Link>
    ));
  };

  return (
    <section className={`tick ${dark ? "tick-dark" : ""}`}>
      <div className="tick-track" style={{ animationDuration: "52s" }}>{make(units)}</div>
      <div className="tick-track tick-rev" style={{ animationDuration: "60s" }}>{make([...units].reverse())}</div>
      <style>{`
        .tick{position:relative;overflow:hidden;padding:26px 0;border-top:1px solid ${dark ? "var(--on-dark-line)" : "var(--line)"};border-bottom:1px solid ${dark ? "var(--on-dark-line)" : "var(--line)"};background:${dark ? "var(--ink)" : "var(--milk)"};color:${dark ? "var(--on-dark)" : "var(--ink)"}}
        .tick-track{display:flex;align-items:center;width:max-content;animation:tickMove linear infinite}
        .tick-rev{animation-direction:reverse;margin-top:6px;opacity:.5}
        .tick:hover .tick-track{animation-play-state:paused}
        @keyframes tickMove{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}
        .tick-unit{display:inline-flex;align-items:center;gap:22px;padding:0;margin:0 4px;cursor:pointer;background:none;border:none;color:inherit}
        .tick-word{font-size:clamp(1.7rem,3.4vw,3rem);line-height:1;letter-spacing:-.01em;transition:color .35s,opacity .35s;white-space:nowrap}
        .tick-unit:nth-child(even) .tick-word{font-style:italic}
        .tick-unit:hover .tick-word{color:var(--clay)}
        .tick-thumb{width:46px;height:60px;overflow:hidden;flex:0 0 auto;transition:transform .5s var(--ease)}
        .tick-thumb img{width:100%;height:100%;object-fit:cover;mix-blend-mode:${dark ? "normal" : "multiply"}}
        .framed-thumb{background:var(--milk)}
        .tick-unit:hover .tick-thumb{transform:translateY(-4px) scale(1.04)}
        .tick-dot{width:5px;height:5px;border-radius:50%;background:var(--clay);margin:0 22px;flex:0 0 auto}
        @media (prefers-reduced-motion: reduce){.tick-track{animation:none}}
      `}</style>
    </section>
  );
}
