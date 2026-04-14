import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function AlterationsPage() {
  return (
    <InfoPageLayout
      title="Alterations"
      subtitle="The perfect fit, guaranteed"
      sections={[
        {
          heading: "Complimentary Alterations",
          body: "All XO47 garments are eligible for complimentary basic alterations. Our skilled in-house tailors will make the necessary adjustments so your new purchase leaves the store fitting flawlessly.",
        },
        {
          heading: "Alteration Services",
          body: [
            "Trouser hem shortening and waist adjustment",
            "Jacket sleeve length correction",
            "Jacket body and chest suppression",
            "Shirt sleeve and body tapering",
          ],
        },
        {
          heading: "Turnaround Time",
          body: "Standard alterations are typically completed within 3–5 working days. More involved work may require additional time. Express alterations can often be arranged for an extra charge — please ask a style advisor in store.",
        },
      ]}
    />
  );
}
