import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Inside the Atelier — The Journal | XO47",
  description:
    "There is no shop floor at XO47. An afternoon inside the atelier at Ambawatta One, Mehrauli — cloth, conversation and the slow work of being measured.",
};

export default function StoreExperiencePage() {
  return (
    <InfoPageLayout
      eyebrow="The Journal"
      title={
        <>
          Inside the <span className="italic serif-accent">atelier.</span>
        </>
      }
      meta="Ambawatta One, Mehrauli"
      intro="We do not have a store, in the way that word is usually meant. We have an atelier — a room where cloth is opened, bodies are read, and nothing is bought off a rail."
      sections={[
        {
          heading: "A room, not a rail",
          body: [
            "Step into Ambawatta One in Mehrauli and there is no wall of finished suits to riffle through, no size to hunt for, no assistant steering you toward the season's push. There is cloth, light, and the unhurried sense that something is about to be made rather than sold. The atelier is the house at rest between commissions — and the place each new one begins.",
            "It is deliberately quiet. A bespoke garment starts in conversation, and conversation needs room to breathe. You are not a transaction passing through; you are a commission being understood.",
          ],
        },
        {
          heading: "The cloth comes to the table",
          body: [
            "Rather than browse, you sit. Bolts are brought to the table and opened across it — Italian wools, English worsteds, linens for the heat, silk-blends and jacquards for the evening. We drape them, talk through how each behaves, hold them to the light and against your skin. The decision is made together, slowly, with the garment's purpose always in the room.",
            "This is the part most men have never experienced: choosing cloth not from a swatch card but from the full hand of the fabric, with someone who can tell you exactly how it will age.",
          ],
        },
        {
          heading: "Measured against the light",
          body: [
            "Then the tape comes out, and the room turns to the body. We measure carefully and completely, noting posture and the small asymmetries every real frame carries, and begin the pattern that will become yours. At a later fitting we pin and mark the half-made garment against your reflection, correcting the cloth until it follows you when you move.",
            "It is meticulous, and it is meant to feel that way. You are watching a garment be built to you, in front of you.",
          ],
        },
        {
          heading: "When the room comes to you",
          body: [
            "For clients across Delhi NCR, the atelier travels. A home appointment brings the cloth, the tape and the conversation to your residence, with the same unhurried care. And when distance or time makes that impractical, a virtual consultation carries it further still. The address changes; the experience does not.",
          ],
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
