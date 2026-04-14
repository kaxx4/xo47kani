import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function AccessibilityPage() {
  return (
    <InfoPageLayout
      title="Accessibility"
      subtitle="Our commitment to inclusive design"
      sections={[
        {
          heading: "Our Commitment",
          body: "XO47 is committed to ensuring our website is accessible to all users, including those with disabilities. We strive to meet WCAG 2.1 AA standards.",
        },
        {
          heading: "Features",
          body: [
            "Keyboard navigation support",
            "Screen reader compatible",
            "Sufficient colour contrast ratios",
            "Resizable text without loss of functionality",
            "Alternative text for all images",
          ],
        },
        {
          heading: "Contact Us",
          body: "If you experience any accessibility barriers on our website, please contact us at accessibility@xo47.com or call our customer care line.",
        },
      ]}
    />
  );
}
