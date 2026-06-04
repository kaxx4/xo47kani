import { InfoPageLayout } from "@/components/xo/InfoPageLayout";

export const metadata = {
  title: "Terms of Service | XO47",
  description:
    "The terms governing the XO47 website and bespoke commissions — enquiries, made-to-order pricing, fittings, intellectual property and liability.",
};

export default function TermsPage() {
  return (
    <InfoPageLayout
      eyebrow="Information"
      title={
        <>
          Terms of <span className="italic serif-accent">service.</span>
        </>
      }
      meta="Please read"
      intro="These terms govern your use of the XO47 website and the way we take on bespoke commissions. They are written to be read, not to be hidden behind."
      sections={[
        {
          heading: "Using this site",
          body: [
            "By accessing weknowtailoring.com and the XO47 website you agree to these terms. The site presents the work of the house and invites enquiries; it is not a checkout. Browsing imagery or indicative pricing does not by itself create an order or any obligation on either side.",
            "If you do not agree with these terms, please do not use the site.",
          ],
        },
        {
          heading: "Enquiries & commissions",
          body: [
            "XO47 garments are made to order. A commission is confirmed only in writing, once cloth, specification and price have been agreed and any required deposit has been received. Until that point an enquiry or quotation is an invitation to proceed, not a binding contract.",
            "Because each piece is cut to a single body, a confirmed commission cannot generally be cancelled once cutting has begun. We will always set out timelines and the point of no cancellation before work starts.",
          ],
        },
        {
          heading: "Pricing & payment",
          body: [
            "Prices shown on the site are indicative from-prices in Indian Rupees (INR) and are confirmed by enquiry. The final price of a commission depends on cloth, construction and the hours involved, and is agreed before any work begins. Applicable taxes are charged as required by law, and we may revise published indicative pricing at any time without notice.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All content on this website — imagery, text, designs, patterns, marks and the XO47 name — is the property of XO47 and the 1 OAK group, or used under licence, and is protected by applicable intellectual property law. It may not be reproduced or used commercially without written permission. The individual pattern drafted for a client is held by the house to serve that client's future commissions.",
          ],
        },
        {
          heading: "Liability & governing law",
          body: [
            "We take care over the accuracy of this site, but to the extent permitted by law XO47 is not liable for indirect or consequential loss arising from its use. Natural materials carry natural variation in weave, shade and hand, which is a quality of the cloth rather than a defect. These terms are governed by the laws of India, and the courts of New Delhi have jurisdiction over any dispute.",
          ],
        },
      ]}
    />
  );
}
