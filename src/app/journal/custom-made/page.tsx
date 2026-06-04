import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Custom Yourself — The Journal | XO47",
  description:
    "What it actually means to commission a garment made for one body — from the first conversation to the last hand-set buttonhole. The XO47 way.",
};

export default function CustomMadePage() {
  return (
    <InfoPageLayout
      eyebrow="The Journal"
      title={
        <>
          Custom <span className="italic serif-accent">yourself.</span>
        </>
      }
      meta="On commissioning"
      intro="Custom yourself is not a slogan we reach for lightly. It is the literal sequence of a commission — a garment drafted for one body, by people who put their name to it."
      sections={[
        {
          heading: "It begins with a conversation",
          body: [
            "Every commission starts not with a tape measure but with a question: what is this garment for? A first suit, a wedding, a stage, a life that simply demands to be better dressed. We listen for the occasion and the intent behind it, because the answer changes everything that follows — the cloth, the cut, the weight, the line.",
            "Only once we understand the man do we begin to draft. There is no rushing this part. The conversation is the foundation the whole garment is built on, and a house that skips it is not really making anything bespoke.",
          ],
        },
        {
          heading: "Cloth chosen, not offered",
          body: [
            "We open the cloth alongside you — wools and worsteds from Italian and English mills, linens for the heat, silk-blends and jacquards for the evening. We talk about how each behaves: how it drapes, how it travels, how it ages, how it catches light across a room. The right cloth is rarely the most obvious one.",
            "This is a curation, not a catalogue. We will steer you toward fabric that suits your frame, your climate and the life the piece has to survive — and gently away from the one that photographs well and wears badly.",
          ],
        },
        {
          heading: "Made by a hand",
          body: [
            "From there the work moves to the bench. The canvas is shaped to the chest, the lapel padded by hand so it rolls rather than folds, the buttonholes cut and sewn one at a time. A commission takes roughly three to four weeks because it is genuinely being made in that window — and at least one fitting along the way lets us correct the cloth against your reflection before anything is finished.",
            "We say a garment is handcrafted, and we mean it without an asterisk. Someone shaped it, someone pressed it, someone signed off on it. That is the difference you feel before you can name it.",
          ],
        },
        {
          heading: "One of one",
          body: [
            "What you are left with belongs to no one else. The pattern is yours, the measurements are yours, and the garment was cut to a body that exists exactly once. It will not announce itself — but it will hold the room the moment you walk in, and it will keep doing so for years, because it was built to. That is what we mean by custom yourself.",
          ],
        },
      ]}
      cta={{ label: "Explore Bespoke", href: "/bespoke" }}
    />
  );
}
