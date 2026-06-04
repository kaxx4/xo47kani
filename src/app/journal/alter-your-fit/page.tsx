import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Alter Your Fit — The Journal | XO47",
  description:
    "Fit is not a number you are assigned — it is a decision made on your body. How XO47 reads a frame and tailors the line that flatters it.",
};

export default function AlterYourFitPage() {
  return (
    <InfoPageLayout
      eyebrow="The Journal"
      title={
        <>
          Alter your <span className="italic serif-accent">fit.</span>
        </>
      }
      meta="On tailoring"
      intro="Most men have spent their lives buying the size closest to their body. Bespoke asks a different question: not which size are you, but what line do you want to cut?"
      sections={[
        {
          heading: "There is no size, only a body",
          body: [
            "Off-the-rail tailoring begins with an average and works backwards. A 40 is built for an idea of a man, and then you are asked to stand close enough to that idea for the jacket to forgive the difference. It rarely does. One shoulder sits proud, the sleeve swallows the wrist, the waist either pulls or floats.",
            "We start from the opposite end. There is no size on your pattern, because the pattern is your body — one shoulder a touch higher than the other, a slight stoop from a desk, the exact point at which your trouser should break. We draft to the man in front of us, not to the man the grading chart imagined.",
          ],
        },
        {
          heading: "The line is a choice",
          body: [
            "Fit is not only accuracy; it is intent. The same chest can be cut clean and severe for the boardroom, or eased a half-inch for a softer, more Italian drape at a wedding. A higher armhole frees the arm and lifts the whole jacket. A trouser cut to drape, rather than cling, lengthens the leg without a word.",
            "These are decisions, and they are yours to make with us. We will tell you what your frame does well and what it would rather we kept quiet — and then we will cut the line that flatters it, on purpose.",
          ],
        },
        {
          heading: "Adjusted, not approximated",
          body: [
            "Because the garment is canvassed and finished by hand, it can be opened and corrected in ways a fused, glued jacket never can. At fitting, we pin, mark and re-cut against your reflection until the cloth follows you when you move and settles when you stop. Nothing is left to a return label.",
            "And the relationship does not end at delivery. Bodies change — a season of training, a few years, a different posture entirely. We hold your pattern, so the garment can be taken in, let out and re-balanced long after it leaves the atelier.",
          ],
        },
        {
          heading: "What it leaves you with",
          body: [
            "A piece that disappears in the best sense — no tugging, no adjusting, no quiet awareness that something is not sitting right. You stop thinking about the clothes, which is the entire point. The fit was altered for you, and only you, and it shows precisely by never showing at all.",
          ],
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
