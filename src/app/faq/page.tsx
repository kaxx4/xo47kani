import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Frequently Asked Questions | XO47",
  description:
    "How a bespoke commission works at XO47 — consultations, timelines, appointments, pricing, fittings, fabric, care and Santali. Everything begins with an enquiry.",
};

export default function FAQPage() {
  return (
    <InfoPageLayout
      eyebrow="Information"
      title={
        <>
          Questions, <span className="italic serif-accent">answered.</span>
        </>
      }
      meta="Commissioning XO47"
      intro="A bespoke house works a little differently from a shop. Here is how a commission actually unfolds — from the first enquiry to the finished garment, and everything in between."
      sections={[
        {
          heading: "The commission",
          items: [
            {
              q: "How does commissioning work?",
              a: "Everything begins with an enquiry. You tell us what the garment is for, we talk through cloth and cut, and we draft a pattern for your body alone. Nothing is bought off a rail — each piece is made to order, by hand, for one person.",
            },
            {
              q: "What happens at the consultation?",
              a: "An unhurried conversation first: the occasion, the intent, the life the garment has to survive. Then we open cloth across the table, agree on fabric and silhouette, and take a full set of measurements to begin your pattern. It is the foundation the whole garment is built on.",
            },
            {
              q: "How long does a commission take?",
              a: "Roughly three to four weeks from confirmed measurements, because the garment is genuinely being made in that window. More involved pieces — heavy embellishment, occasion wear — can take longer, and we will tell you honestly at the outset.",
            },
            {
              q: "Where can I be seen?",
              a: "At our atelier at Ambawatta One, Mehrauli; at your residence through a home appointment across Delhi NCR; or remotely by virtual consultation. The address changes, the care does not.",
            },
          ],
        },
        {
          heading: "Cloth, fit & price",
          items: [
            {
              q: "How is the garment priced?",
              a: "By enquiry. Pieces are listed with an indicative from-price in INR, but the final figure depends on cloth, construction and the hours a commission asks for. We are transparent about it during the consultation, before any work begins.",
            },
            {
              q: "How do fittings and alterations work?",
              a: "At least one fitting lets us pin and correct the half-made garment against your reflection before anything is finished. Because each piece is canvassed and hand-finished, it can be opened and adjusted — and since we keep your pattern, we can re-balance it for years as your frame changes.",
            },
            {
              q: "How is fabric selected?",
              a: "Together, at the table. We open wools and worsteds from Italian and English mills, linens for the heat, and silk-blends and jacquards for the evening — and we talk through how each drapes, travels and ages. It is a guided curation, not a catalogue to flip through.",
            },
            {
              q: "What sizes do you cut?",
              a: "We do not cut to sizes — we cut to bodies. As a rough indication our jacket frame spans 46R to 56R, but the garment is drafted to your exact measurements rather than to any chart.",
            },
          ],
        },
        {
          heading: "After delivery & Santali",
          items: [
            {
              q: "How do I care for an XO47 garment?",
              a: "Dry clean sparingly and only when needed; rest a garment a day between wears; hang it on a shaped wooden hanger; and steam rather than press to lift a crease. Cared for this way, a canvassed piece holds its line for many years.",
            },
            {
              q: "Can a piece be repaired or remade?",
              a: "Yes — and we would always rather mend than replace. A seam let out, a trouser re-cut, a collar turned, a lining renewed: bring the piece back and we will assess what it needs. Longevity is the whole logic of bespoke.",
            },
            {
              q: "What is Santali?",
              a: "Santali is our sister house — modern Indianwear, distilled and reimagined with the same eye for cloth and construction. If your occasion calls for it, we can guide you between the two from the same consultation.",
            },
          ],
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
