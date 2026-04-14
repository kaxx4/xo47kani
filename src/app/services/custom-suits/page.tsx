import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function CustomSuitsPage() {
  return (
    <InfoPageLayout
      title="Custom Suits"
      subtitle="Made to your exact specifications"
      sections={[
        {
          heading: "The Process",
          body: "Our custom suits service gives you the freedom to design a garment that is completely your own. From the initial fabric consultation through to your final fitting, every detail reflects your personal taste.",
        },
        {
          heading: "Fabric Selection",
          body: [
            "Fine wool and luxury wool-blend cloths",
            "Curated seasonal and exclusive collections",
            "More than 200 fabric options to choose from",
            "Take home fabric swatches to decide at your leisure",
          ],
        },
        {
          heading: "Precision Measurements",
          body: "Our experienced tailors take in excess of 30 individual measurements, carefully accounting for your posture, range of movement, and preferred fit style.",
        },
        {
          heading: "Delivery Timeline",
          body: "Your custom suit will be ready within 4–6 weeks from the date of your order. Expedited production may be arranged on request, subject to availability.",
        },
      ]}
    />
  );
}
