import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function SustainabilityPage() {
  return (
    <InfoPageLayout
      title="Sustainability"
      subtitle="Committed to responsible fashion"
      sections={[
        {
          heading: "Our Approach",
          body: "At XO47, we believe that sustainability and style are not mutually exclusive. We are committed to reducing our environmental impact while maintaining the quality our customers expect.",
        },
        {
          heading: "Responsible Sourcing",
          body: [
            "Fabrics sourced from certified mills",
            "Traceability across our supply chain",
            "Preference for natural fibres",
            "No use of harmful chemicals in production",
          ],
        },
        {
          heading: "Reducing Waste",
          body: "We produce to demand and carry minimal excess inventory. Unsold samples and seconds are donated to textile recycling programs rather than discarded.",
        },
        {
          heading: "Packaging",
          body: "All XO47 packaging is made from recycled or FSC-certified materials. We are working towards eliminating single-use plastic from our supply chain by 2026.",
        },
      ]}
    />
  );
}
