import { InfoPageLayout } from "@/components/xo/InfoPageLayout";
import { STORY } from "@/lib/xo-data";

export const metadata = {
  title: "Our Story — A House Built to Be Felt | XO47",
  description:
    "Founded in New Delhi in 2020 under the 1 OAK group, XO47 is a bespoke menswear house built on presence and identity — one body, one pattern, one garment.",
};

export default function OurStoryPage() {
  return (
    <InfoPageLayout
      eyebrow="The Maison"
      title={
        <>
          A house built to be <span className="italic serif-accent">felt.</span>
        </>
      }
      meta={`Est. ${STORY.founded} · ${STORY.place}`}
      intro={STORY.lede}
      sections={[
        {
          heading: "Origin",
          body: [
            "XO47 was founded in New Delhi in 2020 under the 1 OAK group — not as a label chasing a season, but as a house with a single conviction: that clothing is not worn to be seen, but to be felt. We began with one tailor, one bolt of cloth, and the belief that the right garment can change the way a man carries a room.",
            "The name is shorthand among the people who make the clothes. The forty-seven is a count kept in the workroom; the XO is the mark left at the end of a letter — close, deliberate, signed by hand. Together they became a promise: every piece that leaves the atelier is finished by someone who put their name to it.",
          ],
        },
        {
          heading: "Philosophy",
          body: [
            "We do not read trends. We read the man — his frame, his posture, the way he stands when he is at ease and the way he stands when everything is at stake. Then we read the occasion, and the intent behind it. Only then do we draft a pattern, and we draft it for one body and one body only.",
            "Presence is the whole of it. A suit should speak before its wearer does — quietly, completely — and then hold its silence. Nothing about an XO47 garment is borrowed from anyone else's measurements, and nothing about it is louder than the person inside it.",
          ],
        },
        {
          heading: "The Craft",
          body: [
            "Every commission begins with a conversation and ends with a hand. Cloth is chosen from mills refined over generations — Italian and English houses whose weaves we have come to trust by name. The canvas is shaped, the lapel is padded by hand, the buttonholes are cut and sewn one at a time. We say a garment is handcrafted, and really, it is.",
            "A commission is made to order over roughly three to four weeks. We do not keep a wall of finished suits waiting for a buyer. We keep cloth, patterns and the people who know how to bring the two together — and we begin only once we know who the garment is for.",
          ],
        },
        {
          heading: "The Result",
          body: [
            "The result is one of a kind, in the most literal sense the phrase allows. A wardrobe that does not announce itself, but holds the room the moment its wearer walks in. Cut close where it should be, released clean where it must, built from cloth and construction chosen to outlast the moment they were made for.",
            "A piece from XO47 is not finished when it is delivered. It is finished over years — re-pressed, adjusted, quietly maintained — so that it remains the most considered thing in any room its wearer enters.",
          ],
        },
        {
          heading: "A house, recorded",
          rows: STORY.milestones,
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
