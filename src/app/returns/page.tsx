import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function ReturnsPage() {
  return (
    <InfoPageLayout
      title="Returns & Exchanges"
      subtitle="Hassle-free returns within 30 days"
      sections={[
        {
          heading: "Return Policy",
          body: "We accept returns on unworn, unwashed items with original tags attached within 30 days of delivery. Items must be in their original condition.",
        },
        {
          heading: "How to Return",
          body: [
            "Log in to your account and initiate a return",
            "Print the prepaid return label",
            "Pack the item securely and drop it off at any courier partner location",
            "Refund processed within 5-7 business days of receipt",
          ],
        },
        {
          heading: "Exchanges",
          body: "To exchange for a different size or colour, initiate a return and place a new order. This ensures the fastest processing time.",
        },
        {
          heading: "Non-Returnable Items",
          body: [
            "Custom made and altered garments",
            "Underwear and socks",
            "Items marked as Final Sale",
          ],
        },
      ]}
    />
  );
}
