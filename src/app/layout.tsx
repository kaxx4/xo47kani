import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { XOChrome } from "@/components/xo/XOChrome";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://weknowtailoring.com");

export const metadata: Metadata = {
  title: "XO47 — Bespoke Menswear",
  description:
    "XO47 is a bespoke menswear house built on presence and identity. Cut and made in New Delhi since 2020. Custom suits, tuxedos, occasion wear and Santali — modern Indianwear.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "XO47 — Bespoke Menswear",
    description:
      "A bespoke tailoring house built on presence & identity. Cut and made in New Delhi since 2020.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <XOChrome>{children}</XOChrome>
      </body>
    </html>
  );
}
