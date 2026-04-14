import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function PressPage() {
  return (
    <InfoPageLayout
      title="Press"
      subtitle="XO47 in the media"
      sections={[
        {
          heading: "Media Enquiries",
          body: "For press and media enquiries, please contact our PR team at press@xo47.com",
        },
        {
          heading: "Recent Coverage",
          body: [
            'GQ India — "The New Face of Indian Tailoring"',
            'Vogue India — "XO47: Redefining the Indian Suit"',
            'Hindustan Times — "Best Dressed: The XO47 Edit"',
            'Forbes India — "Brands to Watch"',
          ],
        },
        {
          heading: "Press Kit",
          body: "Download our press kit for high-resolution images, brand guidelines, and company information.",
        },
      ]}
    />
  );
}
