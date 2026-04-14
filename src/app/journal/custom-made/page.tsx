import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function CustomMadePage() {
  return (
    <InfoPageLayout
      title="Custom Made"
      subtitle="A suit made entirely to your specifications"
      sections={[
        {
          heading: "The Process",
          body: "Our custom made service offers you the opportunity to design a suit that is entirely unique. From fabric selection to final fitting, every detail is crafted to your specifications.",
        },
        {
          heading: "Choose Your Fabric",
          body: [
            "Premium wool and wool-blend fabrics",
            "Exclusive seasonal collections",
            "Over 200 fabric options available",
            "Swatches available to take home",
          ],
        },
        {
          heading: "Your Measurements",
          body: "Our master tailors will take over 30 precise measurements to ensure a perfect fit. We account for posture, movement, and personal preference.",
        },
        {
          heading: "Timeline",
          body: "Custom made garments are typically ready in 4–6 weeks. Rush orders may be available upon request.",
        },
      ]}
    />
  );
}
