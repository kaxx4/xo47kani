import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Alterations & Remakes — Our Fit Promise | XO47",
  description:
    "A bespoke garment is cut to one body, so we do not return — we perfect. How XO47 handles fittings, alterations and remakes to get the fit exactly right.",
};

export default function ReturnsPage() {
  return (
    <InfoPageLayout
      eyebrow="Information"
      title={
        <>
          We don&apos;t return. We <span className="italic serif-accent">perfect.</span>
        </>
      }
      meta="Alterations & remakes"
      intro="A garment cut to a single body cannot simply be sent back and resold — and it should never need to be. Our promise is not a return window; it is getting the fit right, and keeping it right."
      sections={[
        {
          heading: "Why bespoke is not returned",
          body: [
            "Every XO47 piece is made to order, drafted to your measurements and yours alone. It cannot be put back on a rail for another client, which is precisely why we put so much into getting it right before it is finished — and why our commitment takes the form of correction rather than refund.",
          ],
        },
        {
          heading: "Fittings come first",
          body: [
            "The fit is established in the room, not after delivery. At least one fitting lets us pin and mark the half-made garment against your reflection and re-cut it until the cloth follows you. The aim is that nothing is ever wrong on handover — but if something settles imperfectly once you live in the piece, we want to know.",
          ],
        },
        {
          heading: "Alterations & remakes",
          body: [
            "If a finished garment is not sitting as it should, bring it back and we will assess and correct it. Because each piece is canvassed and hand-finished, it can be opened and re-balanced — a sleeve, a waist, a collar, a hem. Where an issue cannot be resolved by alteration and the fault is genuinely ours, we will remake the affected piece. This is the heart of our fit promise.",
            "Years later, the same applies. We hold your pattern, so a garment can be adjusted as your frame changes, or mended rather than retired. We would always rather perfect a piece than part with it.",
          ],
        },
        {
          heading: "Faults & the fine print",
          body: [
            "In the rare event of a genuine making or material fault, contact us promptly and we will put it right at no cost to you, by repair or remake as appropriate. Natural variation in weave, shade and hand is a quality of fine cloth rather than a defect. Changes of mind on a confirmed, body-specific commission cannot be refunded — but our door, and your pattern, remain open.",
          ],
        },
        {
          heading: "Make it right",
          rows: [
            ["Email", "hello@studio.xo47"],
            ["Studio", "Ambawatta One, Mehrauli, New Delhi"],
            ["Bring", "The garment and, ideally, the original commission details"],
          ],
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
