import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function SizePassportPage() {
  return (
    <InfoPageLayout
      title="Size Passport"
      subtitle="Shop with confidence, every time"
      sections={[
        {
          heading: "What is Size Passport?",
          body: "Size Passport is a free service that records your precise body measurements in your XO47 account. Every time you shop — in-store or online — your sizes are already on file, so the fit is always right.",
        },
        {
          heading: "How it Works",
          body: [
            "Walk into any XO47 store for a free measurement session",
            "A trained advisor records more than 20 body measurements",
            "Your measurements are saved securely to your account",
            "Order online with full confidence in your fit",
          ],
        },
        {
          heading: "Register Today",
          body: "Signing up for Size Passport takes around 30 minutes and costs nothing. Visit your closest XO47 store and ask a style advisor to get you started.",
        },
      ]}
    />
  );
}
