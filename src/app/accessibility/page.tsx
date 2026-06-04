import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Accessibility | XO47",
  description:
    "XO47 is committed to an accessible experience online and in the atelier, working toward WCAG 2.1 AA. How we approach access, and how to tell us when we fall short.",
};

export default function AccessibilityPage() {
  return (
    <InfoPageLayout
      eyebrow="Information"
      title={
        <>
          Open to <span className="italic serif-accent">all.</span>
        </>
      }
      meta="Accessibility"
      intro="A house built on care should be one anyone can move through with ease — on the page as much as in the room. We treat access as part of the craft, not an afterthought to it."
      sections={[
        {
          heading: "Our commitment",
          body: [
            "XO47 is committed to making this website usable by as many people as possible, regardless of ability or the way they choose to browse. We work toward the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA as our standard, and we review the experience as the site evolves.",
            "Accessibility is never finished, and we do not pretend otherwise. We treat it as ongoing work and welcome the feedback that helps us do it better.",
          ],
        },
        {
          heading: "How we build",
          body: [
            "We aim for clear structure and semantic markup, navigation that works by keyboard, legible type that scales without breaking the layout, considered colour contrast, and meaningful alternative text for imagery. Motion is kept purposeful and restrained, and we honour reduced-motion preferences where they are expressed.",
          ],
        },
        {
          heading: "In the atelier",
          body: [
            "Access extends to the experience itself. For clients who find travel to Mehrauli difficult, the house comes to you — a home appointment across Delhi NCR, or a virtual consultation. If there is something we can do to make a visit or a commission more comfortable, please tell us; we would always rather adapt.",
          ],
        },
        {
          heading: "Tell us",
          rows: [
            ["Email", "hello@studio.xo47"],
            ["Studio", "Ambawatta One, Mehrauli, New Delhi"],
            ["If you hit a barrier", "Describe the page and your device — we will respond and fix"],
          ],
        },
      ]}
    />
  );
}
