import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function GiftCardsPage() {
  return (
    <InfoPageLayout
      title="Gift Cards"
      subtitle="The gift of perfect style"
      sections={[
        {
          heading: "About Gift Cards",
          body: "Give the gift of XO47 with our digital or physical gift cards. Available in denominations from ₹2,500 to ₹50,000.",
        },
        {
          heading: "How to Use",
          body: [
            "Purchase online or in-store",
            "Delivered by email or physical card",
            "Valid for 12 months from purchase",
            "Can be used online and in-store",
            "Multiple gift cards can be combined",
          ],
        },
        {
          heading: "Purchase",
          body: "Gift cards can be purchased at any XO47 store or online. Physical gift cards are elegantly packaged and can be delivered to any address in India.",
        },
      ]}
    />
  );
}
