import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function ShippingPage() {
  return (
    <InfoPageLayout
      title="Shipping Information"
      subtitle="Fast, reliable delivery across India"
      sections={[
        {
          heading: "Standard Shipping",
          body: [
            "Delivered within 5-7 business days",
            "Free on orders above ₹5,000",
            "₹299 for orders below ₹5,000",
          ],
        },
        {
          heading: "Express Shipping",
          body: [
            "Delivered within 2-3 business days",
            "₹599 flat rate",
            "Available for most pin codes in India",
          ],
        },
        {
          heading: "Same Day Delivery",
          body: [
            "Available in Mumbai and Delhi NCR",
            "Order before 12:00 noon",
            "₹999 flat rate",
          ],
        },
        {
          heading: "Order Tracking",
          body: "Once your order ships, you will receive an email with a tracking number. You can track your shipment on our website or directly on the courier partner's website.",
        },
      ]}
    />
  );
}
