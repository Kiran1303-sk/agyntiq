import type { Metadata } from "next";
import { Manrope, Roboto_Condensed } from "next/font/google";
import PointerAura from "@/components/pointer-aura";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed"
});

export const metadata: Metadata = {
  title: "AgyntiQ | Flagship Enterprise AI Platform",
  description:
    "AgyntiQ is a premium, logo-driven enterprise AI platform for automation, intelligence, and digital transformation.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Enterprise AI",
    "Machine Learning",
    "AI Platform",
    "Automation",
    "Digital Transformation"
  ],
  authors: [{ name: "AgyntiQ" }],
  creator: "AgyntiQ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agyntiq.ai",
    title: "AgyntiQ | Flagship Enterprise AI Platform",
    description: "Premium enterprise AI experiences inspired by the AgyntiQ logo palette",
    images: [
      {
        url: "https://agyntiq.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgyntiQ"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AgyntiQ | Flagship Enterprise AI Platform",
    description: "Premium enterprise AI experiences inspired by the AgyntiQ logo palette",
    creator: "@agyntiq"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050816" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${manrope.className} ${manrope.variable} ${robotoCondensed.variable} bg-agyntiq-deep-black text-agyntiq-text-primary antialiased`}
      >
        <PointerAura />
        {children}
      </body>
    </html>
  );
}
