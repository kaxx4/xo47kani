import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Delivery — Made-to-Order Commissions | XO47",
  description:
    "How an XO47 commission reaches you — made to order over roughly three to four weeks, hand-finished, and delivered across Delhi NCR and pan-India.",
};

export default function ShippingPage() {
  return (
    <InfoPageLayout
      eyebrow="Information"
      title={
        <>
          When it <span className="italic serif-accent">arrives.</span>
        </>
      }
      meta="Delivery"
      intro="An XO47 garment is not pulled from a shelf and posted the same afternoon. It is made for you first — and only then does it travel, pressed and ready to wear."
      sections={[
        {
          heading: "Made before it ships",
          body: [
            "Because every piece is made to order, the timeline is led by the making rather than the courier. A commission is typically ready roughly three to four weeks after measurements are confirmed; more involved pieces can take longer, and we will tell you honestly when to expect it. We will be in touch as your garment is finished and prepared for delivery or final collection.",
          ],
        },
        {
          heading: "Delhi NCR",
          body: [
            "For clients in and around the capital, the final fitting and handover are part of the experience. You are welcome to collect from the atelier at Ambawatta One, Mehrauli, or we can arrange delivery to your residence across Delhi NCR. Where a home appointment is in progress, the finished garment can be brought to you directly.",
          ],
        },
        {
          heading: "Across India",
          body: [
            "We deliver pan-India through trusted, insured courier partners. Each piece is packed to protect its shape in transit, and you will receive tracking once it is dispatched. Delivery timelines beyond Delhi NCR depend on destination and are confirmed at handover.",
          ],
        },
        {
          heading: "At a glance",
          rows: [
            ["Making", "Approx. 3–4 weeks from confirmed measurements"],
            ["Delhi NCR", "Atelier collection or delivery to your residence"],
            ["Pan-India", "Insured courier, tracked, packed to hold its shape"],
            ["International", "By arrangement — please enquire"],
          ],
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
