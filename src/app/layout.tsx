import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kuwajima.vercel.app"),
  title: "Kuwajima | 業務AI構築",
  description:
    "現場に入り、業務の課題を聞き、誰でも使えるAIの仕組みに変える。福祉・広告・不動産・税務など業界横断でAI構築を手がける welza。",
  openGraph: {
    title: "Kuwajima | 業務AI構築",
    description:
      "現場に入り、業務の課題を聞き、誰でも使えるAIの仕組みに変える。",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kuwajima | 業務AI構築",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuwajima | 業務AI構築",
    description:
      "現場に入り、業務の課題を聞き、誰でも使えるAIの仕組みに変える。",
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
      <body className="bg-white text-text-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
