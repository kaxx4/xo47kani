import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function AlterYourFitPage() {
  return (
    <InfoPageLayout
      title="Alter Your Fit"
      subtitle="Tailoring for the perfect fit"
      sections={[
        {
          heading: "Complimentary Alterations",
          body: "Every XO47 garment comes with complimentary basic alterations. Our in-house tailors will ensure your purchase fits you perfectly before you leave the store.",
        },
        {
          heading: "What We Alter",
          body: [
            "Trouser hem and waist adjustment",
            "Jacket sleeve length",
            "Jacket body suppression",
            "Shirt sleeve and body adjustment",
          ],
        },
        {
          heading: "Alteration Timeline",
          body: "Basic alterations are typically completed within 3–5 business days. Complex alterations may take longer. Rush alterations may be available at an additional charge.",
        },
      ]}
    />
  );
}
