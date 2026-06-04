import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Fit Guide — Cut to One Body | XO47",
  description:
    "XO47 is bespoke: every garment is cut to a single body, not a size. Our fit philosophy, how measurement works, and an indicative jacket range from 46R to 56R.",
};

export default function FitGuidesPage() {
  return (
    <InfoPageLayout
      eyebrow="Information"
      title={
        <>
          Cut to one <span className="italic serif-accent">body.</span>
        </>
      }
      meta="On fit"
      intro="XO47 does not sell sizes. Every garment is drafted to a single body, so the most useful thing we can give you is not a chart — it is how we think about fit, and how we read you."
      sections={[
        {
          heading: "Fit is a decision, not a label",
          body: [
            "An off-the-rail size starts from an average and asks your body to forgive the difference. Bespoke reverses that entirely. There is no size on your pattern, because the pattern is you — one shoulder perhaps a fraction higher, a slight stoop from a desk, the precise point at which your trouser should break.",
            "Within that accuracy, the line itself is a choice. The same chest can be cut clean and severe for the boardroom or eased a half-inch for a softer drape at a wedding. We will tell you what your frame does well, and then cut the silhouette that flatters it — on purpose, for you.",
          ],
        },
        {
          heading: "How measurement works",
          body: [
            "At your first fitting we take far more than chest and waist. We read the slope of each shoulder, the length of the arms, the set of the neck, your natural posture and the small asymmetries every real body carries. From these we draft a pattern — your geometry in paper — which we refine at each fitting until the cloth follows you when you move and settles when you stop.",
            "We then keep that pattern. Future commissions inherit its accuracy, and we can re-balance a garment for years as your frame changes — a season of training, a few years, a different posture entirely.",
          ],
        },
        {
          heading: "Indicative jacket range",
          body: [
            "We cut to your exact measurements, not to a size on this list. The range below is only a rough indication of the frames we dress most often, to give a sense of scale before we meet — your true fit is established in the room.",
          ],
          rows: [
            ["46R", "Chest approx. 36 in · lean frame"],
            ["48R", "Chest approx. 38 in"],
            ["50R", "Chest approx. 40 in"],
            ["52R", "Chest approx. 42 in"],
            ["54R", "Chest approx. 44 in"],
            ["56R", "Chest approx. 46 in · fuller frame"],
          ],
        },
        {
          heading: "A note on length & posture",
          body: [
            "R denotes a regular back length. We routinely adjust length and balance beyond any standard designation — for taller and shorter frames, for a longer or shorter rise, for sloping or square shoulders — because the garment is built around your proportions rather than fitted to a template. If a figure here does not seem to describe you, that is exactly why we measure in person.",
          ],
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
