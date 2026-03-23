import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kuwajima.vercel.app"),
  title: "Kuwajima | AI × SNS",
  description:
    "AI事業化とSNS設計の二刀流。福祉・税務・不動産・広告のAI効率化と、SNS戦略設計で事業を加速させるフリーランス。",
  openGraph: {
    title: "Kuwajima | AI × SNS",
    description:
      "AI事業化とSNS設計の二刀流。業界特化のAI構築とSNS戦略設計。",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kuwajima | AI × SNS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuwajima | AI × SNS",
    description:
      "AI事業化とSNS設計の二刀流。業界特化のAI構築とSNS戦略設計。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
