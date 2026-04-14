import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function SizePassportPage() {
  return (
    <InfoPageLayout
      title="Size Passport"
      subtitle="Your measurements, stored forever"
      sections={[
        {
          heading: "What is Size Passport?",
          body: "Size Passport stores your exact measurements in our system so that every future purchase fits perfectly — whether you shop in-store or online.",
        },
        {
          heading: "How it Works",
          body: [
            "Visit any XO47 store for a complimentary measurement session",
            "Our expert takes over 20 body measurements",
            "Measurements are stored securely in your account",
            "Shop online with confidence knowing your size",
          ],
        },
        {
          heading: "Get Started",
          body: "Book a Size Passport session at your nearest store. The session takes approximately 30 minutes and is completely free of charge.",
        },
      ]}
    />
  );
}
