import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function TermsPage() {
  return (
    <InfoPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: "By accessing and using the XO47 website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.",
        },
        {
          heading: "Products & Pricing",
          body: "All prices are displayed in Indian Rupees (INR) and include applicable taxes. We reserve the right to change prices at any time without prior notice. We strive to ensure accuracy but errors may occasionally occur.",
        },
        {
          heading: "Intellectual Property",
          body: "All content on this website, including images, text, and designs, is the property of XO47 and is protected by intellectual property laws.",
        },
        {
          heading: "Limitation of Liability",
          body: "XO47 shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.",
        },
      ]}
    />
  );
}
