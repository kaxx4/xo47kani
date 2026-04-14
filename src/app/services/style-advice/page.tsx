import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function StyleAdvicePage() {
  return (
    <InfoPageLayout
      title="Style Advice"
      subtitle="Expert guidance for every occasion"
      sections={[
        {
          heading: "Personal Styling",
          body: "Our style advisors are trained to help you build a wardrobe that works for your lifestyle. Whether you need a complete wardrobe refresh or just one perfect suit, we are here to help.",
        },
        {
          heading: "Book an Appointment",
          body: [
            "Complimentary 60-minute styling session",
            "In-store or virtual consultations available",
            "Curated selections prepared in advance",
            "Follow-up support after your visit",
          ],
        },
        {
          heading: "Style Guides",
          body: "Explore our online style guides for inspiration and advice on everything from suiting to casual dressing. Updated seasonally with the latest looks.",
        },
      ]}
    />
  );
}
