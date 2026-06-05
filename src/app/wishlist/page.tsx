import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";

export const metadata: Metadata = {
  title: "Saved | XO47",
  description:
    "Save the pieces that speak to you and bring them to your consultation. A considered wardrobe, gathered over time with the XO47 atelier.",
};

export default function WishlistPage() {
  return (
    <div
      className="fade-page"
      style={{
        background: "var(--milk)",
        color: "var(--ink)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="wrap"
        style={{
          paddingTop: "var(--pad-top)",
          paddingBottom: "var(--sec)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Reveal>
          <div className="over" style={{ color: "var(--clay)", marginBottom: 30 }}>
            Saved
          </div>
          <h1
            className="display"
            style={{
              fontSize: "clamp(2.8rem,7vw,6rem)",
              lineHeight: 0.96,
              marginBottom: 28,
            }}
          >
            A wardrobe, <span className="italic serif-accent">considered.</span>
          </h1>
          <p className="lede" style={{ maxWidth: "48ch", margin: "0 auto 16px" }}>
            Nothing saved so far. As you move through the collections, keep the silhouettes,
            cloths and details that speak to you — they gather here.
          </p>
          <p className="lede" style={{ maxWidth: "46ch", margin: "0 auto 44px" }}>
            Bring your selection to the studio. It becomes the opening note of your
            consultation — the shape of a wardrobe made entirely for you.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link className="btn" href="/collections">
              Explore Collections
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
