import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/xo/Reveal";

export const metadata: Metadata = {
  title: "Your Selections | XO47",
  description:
    "XO47 is a bespoke house — wardrobes are built by commission and conversation, not by cart. Explore the collections or book a consultation at the atelier in Ambawatta One, Mehrauli.",
};

export default function BagPage() {
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
          paddingTop: 130,
          paddingBottom: 110,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Reveal>
          <div className="over" style={{ color: "var(--clay)", marginBottom: 30 }}>
            Your Selections
          </div>
          <h1
            className="display"
            style={{
              fontSize: "clamp(2.8rem,7vw,6rem)",
              lineHeight: 0.96,
              marginBottom: 28,
            }}
          >
            Nothing held — <span className="italic serif-accent">yet.</span>
          </h1>
          <p className="lede" style={{ maxWidth: "48ch", margin: "0 auto 16px" }}>
            XO47 is a house of commission. There is no cart to fill and no checkout to
            rush — a wardrobe is built in conversation, one considered piece at a time.
          </p>
          <p className="lede" style={{ maxWidth: "46ch", margin: "0 auto 44px" }}>
            Begin with the collections, or sit with us at the atelier in Ambawatta One,
            Mehrauli, and we&apos;ll cut something that is wholly yours.
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
            <Link className="btn btn-ghost" href="/book-consultation">
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
