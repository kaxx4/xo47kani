"use client";
import { useEffect } from "react";

/* XO47 — motion engine. Fully additive & defensive: any failure leaves the
   static layout intact. Honours reduced-motion and pointer type.
   Faithful port of the source motion.js, adapted to React lifecycle. */
export function XOMotion() {
  useEffect(() => {
    let raf = 0;
    const cleanups: Array<() => void> = [];
    try {
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      /* ---- Scroll progress bar ---- */
      const bar = document.createElement("div");
      bar.id = "xo-progress";
      document.body.appendChild(bar);
      cleanups.push(() => bar.remove());

      /* ---- Film grain ---- */
      if (!reduce) {
        const grain = document.createElement("div");
        grain.className = "xo-grain";
        document.body.appendChild(grain);
        cleanups.push(() => grain.remove());
      }

      /* ---- Custom cursor ring ---- */
      let cursor: HTMLDivElement | null = null;
      let cx = 0, cy = 0, tx = 0, ty = 0;
      if (fine && !reduce) {
        cursor = document.createElement("div");
        cursor.className = "xo-cursor";
        document.body.appendChild(cursor);
        const localCursor = cursor;
        cleanups.push(() => localCursor.remove());
        const onMove = (e: MouseEvent) => {
          tx = e.clientX;
          ty = e.clientY;
          if (!localCursor.classList.contains("show")) localCursor.classList.add("show");
          const target = e.target as Element | null;
          const hot = target && target.closest && target.closest("a,button,[data-hot],input,select,.ulink");
          localCursor.classList.toggle("hot", !!hot);
        };
        const onOut = (e: MouseEvent) => {
          if (!e.relatedTarget) localCursor.classList.remove("show");
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseout", onOut);
        cleanups.push(() => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseout", onOut);
        });
      }

      /* ---- Magnetic buttons (delegated) ---- */
      let activeMag: HTMLElement | null = null;
      if (fine && !reduce) {
        const onMagMove = (e: MouseEvent) => {
          const target = e.target as Element | null;
          const btn = (target && target.closest && target.closest(".btn")) as HTMLElement | null;
          if (btn !== activeMag) {
            if (activeMag) activeMag.style.transform = "";
            activeMag = btn;
          }
          if (btn) {
            const r = btn.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            btn.style.transform = "translate(" + dx * 0.28 + "px," + dy * 0.4 + "px)";
          }
        };
        const onMagLeave = () => {
          if (activeMag) {
            activeMag.style.transform = "";
            activeMag = null;
          }
        };
        document.addEventListener("mousemove", onMagMove, { passive: true });
        document.addEventListener("mouseleave", onMagLeave, true);
        cleanups.push(() => {
          document.removeEventListener("mousemove", onMagMove);
          document.removeEventListener("mouseleave", onMagLeave, true);
        });
      }

      /* ---- Scroll loop: progress + parallax (cached nodes, refreshed on DOM change) ---- */
      const docEl = document.documentElement;
      let pNodes: Element[] = [];
      const refresh = () => {
        try {
          pNodes = Array.prototype.slice.call(document.querySelectorAll("[data-parallax], .watermark"));
        } catch {
          pNodes = [];
        }
      };
      let refreshT: ReturnType<typeof setTimeout>;
      refresh();
      if (window.MutationObserver) {
        const mo = new MutationObserver(() => {
          clearTimeout(refreshT);
          refreshT = setTimeout(refresh, 120);
        });
        const root = document.getElementById("__next") || document.body;
        mo.observe(root, { childList: true, subtree: true });
        cleanups.push(() => mo.disconnect());
      }
      const onResize = () => {
        clearTimeout(refreshT);
        refreshT = setTimeout(refresh, 150);
      };
      window.addEventListener("resize", onResize, { passive: true });
      cleanups.push(() => window.removeEventListener("resize", onResize));

      let lastY = -1;
      const frame = () => {
        try {
          const y = window.scrollY || docEl.scrollTop || 0;
          if (y !== lastY) {
            lastY = y;
            const h = docEl.scrollHeight - window.innerHeight || 1;
            bar.style.transform = "scaleX(" + Math.min(1, Math.max(0, y / h)) + ")";
            if (!reduce) {
              const vmid = window.innerHeight / 2;
              for (let i = 0; i < pNodes.length; i++) {
                const el = pNodes[i] as HTMLElement;
                const rect = el.getBoundingClientRect();
                if (rect.bottom < -240 || rect.top > window.innerHeight + 240) continue;
                const sp = parseFloat(el.getAttribute("data-parallax") || "") || (el.classList.contains("watermark") ? 0.12 : 0.06);
                const off = (rect.top + rect.height / 2 - vmid) * sp;
                el.style.transform = "translate3d(0," + (-off).toFixed(1) + "px,0)";
              }
            }
          }
          if (cursor) {
            cx += (tx - cx) * 0.2;
            cy += (ty - cy) * 0.2;
            cursor.style.left = cx + "px";
            cursor.style.top = cy + "px";
          }
        } catch {
          /* motion is optional */
        }
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    } catch {
      /* motion is optional */
    }
    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => {
        try {
          fn();
        } catch {
          /* ignore */
        }
      });
    };
  }, []);

  return null;
}
