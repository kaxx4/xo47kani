import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function StoreExperiencePage() {
  return (
    <InfoPageLayout
      title="The Store Experience"
      subtitle="Step into a world of personal style"
      sections={[
        {
          heading: "Our Stores",
          body: "Each XO47 store is designed to offer an exceptional shopping experience. Our expert style advisors are on hand to help you find the perfect fit and style for every occasion.",
        },
        {
          heading: "Personal Styling",
          body: [
            "One-on-one consultations with our style experts",
            "Personalized fit recommendations",
            "Styling for every occasion from business to black tie",
            "Complimentary alterations on all purchases",
          ],
        },
        {
          heading: "Appointments",
          body: "Book a private styling appointment at your nearest XO47 store. Our style advisors will prepare a curated selection based on your preferences and requirements.",
        },
      ]}
    />
  );
}
