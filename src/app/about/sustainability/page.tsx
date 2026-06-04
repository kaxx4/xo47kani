import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Sustainability — Made to Order, Made to Last | XO47",
  description:
    "XO47 makes nothing on speculation. Every garment is cut to one body, from cloth woven at trusted mills, and built to be repaired and worn for years — not seasons.",
};

export default function SustainabilityPage() {
  return (
    <InfoPageLayout
      eyebrow="The Maison"
      title={
        <>
          Made to order, made to <span className="italic serif-accent">last.</span>
        </>
      }
      meta="Our practice"
      intro="The most sustainable garment is the one that is actually worn — for years, and then for years more. Everything we do begins from that single idea."
      sections={[
        {
          heading: "Nothing made on speculation",
          body: [
            "XO47 holds no warehouse of finished suits waiting for a buyer. We cut a garment only once we know whose body it is for, which means we do not produce the unsold inventory that the wider industry quietly destroys at the end of every season. Made to order is not only how we work — it is the most honest answer we have found to waste.",
            "A commission takes roughly three to four weeks because it is genuinely made in that window, to measurements taken for one person. Cloth is ordered to the length the garment requires. Very little is cut that does not become part of the finished piece.",
          ],
        },
        {
          heading: "The mills we trust",
          body: [
            "We buy cloth from Italian and English mills refined over generations — houses that spin, weave and finish to a standard we can stand behind. Long relationships let us choose natural fibres with real provenance: wools, worsteds, linens and silk-blends that age well and reward maintenance rather than punishing it.",
            "We favour cloth that lasts over cloth that merely looks new on the rail. A heavier, better-finished fabric drapes longer, presses better and survives a decade of wear — which is, in the end, the most resourceful choice a tailor can make.",
          ],
        },
        {
          heading: "Built to be repaired",
          body: [
            "A canvassed, hand-finished garment is built to be opened up and put back together. Seams can be let out, trousers re-cut, a worn collar turned, a lining replaced. Because we hold each client's pattern and measurements, we can adjust a piece years after it was made — through a change in frame, a change in taste, or simple wear.",
            "We would always rather mend than replace. Bring a piece back and we will assess what it needs. Longevity is not a marketing line here; it is the whole economic logic of bespoke.",
          ],
        },
        {
          heading: "Honest about the rest",
          body: [
            "We are a small house and we do not claim to have solved everything. Offcuts are kept and reused where they can be; packaging is pared back and chosen with care; and we would rather under-promise than dress up our footprint in language it has not earned. The honest headline is the simplest one: we make less, we make it properly, and we keep it in service.",
          ],
        },
      ]}
      cta={{ label: "Explore Bespoke", href: "/bespoke" }}
    />
  );
}
