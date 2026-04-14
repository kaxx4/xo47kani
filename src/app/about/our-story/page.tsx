import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function OurStoryPage() {
  return (
    <InfoPageLayout
      title="Our Story"
      subtitle="Born from a passion for exceptional menswear"
      sections={[
        {
          heading: "The Beginning",
          body: "XO47 was founded with a singular vision: to make exceptional tailoring accessible to the modern Indian man. We believe that every man deserves to feel confident and impeccably dressed.",
        },
        {
          heading: "Our Philosophy",
          body: "We combine the finest fabrics from Italy and England with expert craftsmanship to create garments that stand the test of time. Each piece is designed to be worn, lived in, and treasured.",
        },
        {
          heading: "Today",
          body: "With stores across Mumbai, Delhi, and Bangalore, XO47 has grown from a single boutique into India's premier destination for tailored menswear. We continue to push the boundaries of style and craftsmanship.",
        },
      ]}
    />
  );
}
