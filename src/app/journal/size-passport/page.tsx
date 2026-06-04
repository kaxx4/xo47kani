import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "The Size Passport — The Journal | XO47",
  description:
    "Your measurements, kept by the house. How XO47 records a body once and uses it for every commission that follows — at the studio, at home, or from afar.",
};

export default function SizePassportPage() {
  return (
    <InfoPageLayout
      eyebrow="The Journal"
      title={
        <>
          The size <span className="italic serif-accent">passport.</span>
        </>
      }
      meta="On measurement"
      intro="Once we have read your body properly, we never ask you to do it again. The first commission becomes a record the house keeps for every one that follows."
      sections={[
        {
          heading: "Measured once, properly",
          body: [
            "The first fitting is unhurried by design. We take far more than the handful of figures a shop assistant reaches for — not just chest and waist, but the slope of each shoulder, the length of the arms, the set of the neck, the way you actually stand. Posture and asymmetry are noted, because every real body has both.",
            "This is the foundation of the relationship. Done carefully once, it never needs to be repeated, and every garment after the first inherits its accuracy.",
          ],
        },
        {
          heading: "A pattern that is yours",
          body: [
            "From those measurements we draft a pattern — a paper architecture of you that lives in the atelier. It is not a size pulled from a chart; it is your geometry, refined at each fitting and corrected for the small ways cloth and body disagree. With every commission, the pattern gets truer.",
            "We call this kept record your size passport. It belongs to you and stays with the house, ready the moment you decide on the next piece.",
          ],
        },
        {
          heading: "Commission from anywhere",
          body: [
            "Because the passport already exists, a second or third garment need not begin with a fitting at all. You can choose a cloth and a cut over a call, and we cut against the pattern we hold. For clients who travel, or who simply have little time, this is the quiet luxury of the system — the work of being measured is done, permanently.",
            "When a fitting does help — a new silhouette, a special occasion — we come to you at the studio or your residence in Delhi NCR, or work it through virtually. The passport makes each of those routes faster and surer.",
          ],
        },
        {
          heading: "Kept current",
          body: [
            "Bodies are not fixed, and neither is the record. A change in training, a few years, a different posture — we update the passport accordingly, so the next garment fits the man you are now rather than the man you were when we met. Your measurements are held in confidence, used only to make your clothes, and revised whenever your frame asks us to.",
          ],
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
