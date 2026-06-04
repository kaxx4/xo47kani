import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Careers — Work at XO47 | XO47",
  description:
    "Join the XO47 atelier in Mehrauli, New Delhi — craft apprenticeships, tailoring and client roles in a bespoke menswear house built on presence and the hand.",
};

export default function CareersPage() {
  return (
    <InfoPageLayout
      eyebrow="The Maison"
      title={
        <>
          Work at the <span className="italic serif-accent">house.</span>
        </>
      }
      meta="Atelier · Mehrauli"
      intro="A bespoke house is only ever as good as the hands inside it. We hire slowly, train deliberately, and keep the people who care about the millimetre."
      sections={[
        {
          heading: "The apprenticeship",
          body: [
            "Craft at XO47 is taught the old way — at the bench, beside someone who has done it for years. We take on a small number of apprentices each year and bring them through the workroom: hand-padding a lapel, setting a sleeve, cutting a buttonhole until it is clean every time. It is slow, exacting work, and there is no shortcut through it.",
            "We are not looking for finished tailors. We are looking for patience, a steady hand and an unreasonable attention to detail — the kind of person who will re-press a panel because the line was a fraction off, even when no client would ever have known.",
          ],
        },
        {
          heading: "Roles in the atelier",
          body: [
            "Beyond the bench, the house runs on people who hold the standard everywhere else: cutters and pattern-makers who translate a body into a draft; client advisors who guide a first commission with warmth and precision; and studio coordinators who keep fittings, cloth and timelines moving without ever letting it feel rushed.",
            "Every role here touches the garment in some way. We do not separate the front of house from the workroom — everyone is expected to understand what makes an XO47 piece, and why it costs what it costs in hours.",
          ],
        },
        {
          heading: "Who we tend to keep",
          body: [
            "People who are early, who finish what they start, and who would rather do one thing impeccably than five things adequately. People who can sit with a client and a cutter in the same afternoon and speak both languages. People who treat cloth as something to be respected, not consumed.",
          ],
        },
        {
          heading: "How to apply",
          rows: [
            ["Email", "careers@studio.xo47"],
            ["Include", "A short note on why the craft, and any work you can show"],
            ["Studio", "Ambawatta One, Mehrauli, New Delhi"],
            ["Process", "Conversation, then a trial day at the bench"],
          ],
        },
      ]}
      cta={{ label: "Visit the Maison", href: "/maison" }}
    />
  );
}
