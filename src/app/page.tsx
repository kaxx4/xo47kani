import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { XOHero } from "@/components/XOHero";
import { XOPhilosophy } from "@/components/XOPhilosophy";
import { XOCollections } from "@/components/XOCollections";
import { XOCraftsmanship } from "@/components/XOCraftsmanship";
import { XORecognition } from "@/components/XORecognition";
import { XOServices } from "@/components/XOServices";
import { XOStudioTeaser } from "@/components/XOStudioTeaser";
import { XOBookCTA } from "@/components/XOBookCTA";
import { XOSantaliTeaser } from "@/components/XOSantaliTeaser";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <XOHero />
        <XOPhilosophy />
        <XOCollections />
        <XOCraftsmanship />
        <XORecognition />
        <XOServices />
        <XOStudioTeaser />
        <XOBookCTA />
        <XOSantaliTeaser />
      </main>
      <SiteFooter />
    </>
  );
}
