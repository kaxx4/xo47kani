import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function FitGuidesPage() {
  return (
    <InfoPageLayout
      title="Fit Guides"
      subtitle="Find the perfect fit for every occasion"
      sections={[
        {
          heading: "Understanding Fit",
          body: "The right fit transforms a garment. Our fit guides explain the key differences between our silhouettes so you can choose with confidence.",
        },
        {
          heading: "Slim Fit",
          body: [
            "Close to the body throughout",
            "Tailored through the chest, waist, and hips",
            "Best for lean to athletic builds",
            "Modern, sharp silhouette",
          ],
        },
        {
          heading: "Classic Fit",
          body: [
            "Relaxed through the chest and waist",
            "More room for movement",
            "Versatile for most body types",
            "Traditional, timeless silhouette",
          ],
        },
        {
          heading: "Extra Slim Fit",
          body: [
            "Very close to the body",
            "Minimal ease throughout",
            "Best for slim, athletic builds",
            "Fashion-forward silhouette",
          ],
        },
      ]}
    />
  );
}
