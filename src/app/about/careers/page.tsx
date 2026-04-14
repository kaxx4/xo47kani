import { InfoPageLayout } from "@/components/InfoPageLayout";

export default function CareersPage() {
  return (
    <InfoPageLayout
      title="Careers"
      subtitle="Join the XO47 team"
      sections={[
        {
          heading: "Why XO47",
          body: "We are a growing company with a passion for exceptional menswear and customer experience. We offer a dynamic, supportive work environment with opportunities for growth.",
        },
        {
          heading: "Open Positions",
          body: [
            "Store Manager — Mumbai",
            "Senior Style Advisor — Delhi",
            "E-commerce Manager — Mumbai (Remote hybrid)",
            "Tailor / Alterations Specialist — All locations",
          ],
        },
        {
          heading: "How to Apply",
          body: "Send your CV and a brief cover letter to careers@xo47.com. We review all applications and will be in touch if your profile matches our requirements.",
        },
      ]}
    />
  );
}
