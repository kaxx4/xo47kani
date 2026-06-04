import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Press & Enquiries | XO47",
  description:
    "Press coverage and media enquiries for XO47 — a bespoke menswear house dressing public life from its atelier at Ambawatta One, Mehrauli, New Delhi.",
};

export default function PressPage() {
  return (
    <InfoPageLayout
      eyebrow="The Maison"
      title={
        <>
          Press &amp; <span className="italic serif-accent">enquiries.</span>
        </>
      }
      meta="For editors & media"
      intro="XO47 dresses public life — on the red carpet, at the wedding, and in the quiet hours that never make the picture. We work with editors, stylists and journalists who want to tell that story accurately."
      sections={[
        {
          heading: "In public life",
          body: [
            "Since 2020, XO47 has tailored for the men who are watched closely — actors, founders and grooms whose clothes are read as carefully as their words. Our pieces have travelled across red carpets, award evenings, weddings and the everyday wardrobes of people who simply refuse to be under-dressed.",
            "We are deliberately quiet about who wears what. The point of a bespoke garment is that it belongs entirely to its wearer, and discretion is part of the service. For verified editorial features, we are glad to confirm specific commissions and provide the detail behind them.",
          ],
        },
        {
          heading: "Working with us",
          body: [
            "We make selected archive and current pieces available for editorial shoots, and our team can speak to construction, cloth and the philosophy behind the house. For runway-adjacent stories, profiles of the atelier, or commentary on bespoke menswear in India, the studio can arrange access and interviews on request.",
            "High-resolution imagery, fabric detail and house information are available to accredited press. Please write to us with your publication, brief and timeline, and we will respond in kind.",
          ],
        },
        {
          heading: "Reach the house",
          rows: [
            ["Press", "press@studio.xo47"],
            ["Studio", "Ambawatta One, Mehrauli, New Delhi"],
            ["Instagram", "@studio.xo47"],
            ["General", "By enquiry — Book a Consultation"],
          ],
        },
      ]}
      cta={{ label: "Book a Consultation", href: "/book-consultation" }}
    />
  );
}
