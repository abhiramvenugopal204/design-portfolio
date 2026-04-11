import type { Metadata } from "next";
import { Fredericka_the_Great, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DotGrid from "./components/DotGrid";
import { Analytics } from "@vercel/analytics/react";

const fredericka = Fredericka_the_Great({
  variable: "--font-fredericka",
  subsets: ["latin"],
  weight: "400",
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhiramvenugopal.com"), // Update this with your final domain
  title: "Abhiram Venugopal | Product Designer & Interaction Specialist",
  description: "Portfolio of Abhiram Venugopal, a Product Designer based in Bangalore specializing in high-fidelity interactive experiences and digital products.",
  keywords: ["Product Design", "UX/UI", "Interaction Design", "Portfolio", "Bangalore", "Front-end Development", "Next.js", "Framer Motion", "Case Studies"],
  authors: [{ name: "Abhiram Venugopal" }],
  creator: "Abhiram Venugopal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhiramvenugopal.com",
    title: "Abhiram Venugopal | Product Designer",
    description: "Building high-fidelity interactive experiences and digital products.",
    siteName: "Abhiram Venugopal Portfolio",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiram Venugopal | Product Designer",
    description: "Building high-fidelity interactive experiences and digital products.",
    creator: "@Abhiram Venugopal",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${fredericka.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <DotGrid />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
