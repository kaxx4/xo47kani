import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function FAQPage() {
  return (
    <InfoPageLayout
      title="Frequently Asked Questions"
      sections={[
        {
          heading: "Sizing",
          body: [
            "How do I find my size? — Use our Size Guide available on each product page, or visit a store for a professional measurement.",
            "What if my size is out of stock? — You can sign up for restock notifications on the product page.",
          ],
        },
        {
          heading: "Orders",
          body: [
            "Can I modify my order? — Orders can be modified within 1 hour of placement. Contact customer care immediately.",
            "Can I cancel my order? — Orders can be cancelled within 2 hours of placement.",
          ],
        },
        {
          heading: "Payment",
          body: [
            "What payment methods do you accept? — We accept all major credit and debit cards, UPI, net banking, and EMI.",
            "Is my payment information secure? — Yes, all transactions are processed through our secure payment gateway.",
          ],
        },
        {
          heading: "Care",
          body: [
            "How should I care for my suit? — We recommend dry cleaning. Hang garments on quality hangers and allow them to air between wearings.",
            "How do I remove wrinkles? — Use a garment steamer for best results. Avoid pressing directly with a hot iron.",
          ],
        },
      ]}
    />
  );
}
