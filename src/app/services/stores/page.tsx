import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function StoresPage() {
  return (
    <InfoPageLayout
      title="Our Stores"
      subtitle="Find your nearest XO47 store"
      sections={[
        {
          heading: "Store Locations",
          body: "Visit us at our flagship stores across India. Each location offers the full XO47 experience with expert style advisors and a comprehensive selection.",
        },
        {
          heading: "Mumbai",
          body: [
            "XO47 Bandra — Linking Road, Bandra West",
            "XO47 Lower Parel — High Street Phoenix",
            "Mon–Sat: 11:00–21:00 / Sun: 12:00–20:00",
          ],
        },
        {
          heading: "Delhi",
          body: [
            "XO47 Khan Market",
            "XO47 Select Citywalk, Saket",
            "Mon–Sat: 11:00–21:00 / Sun: 12:00–20:00",
          ],
        },
        {
          heading: "Bangalore",
          body: [
            "XO47 UB City",
            "Mon–Sat: 11:00–21:00 / Sun: 12:00–20:00",
          ],
        },
      ]}
    />
  );
}
