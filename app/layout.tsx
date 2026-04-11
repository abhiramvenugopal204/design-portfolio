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
  title: "Abhishek | Product Designer & Interaction Specialist",
  description: "Portfolio of Abhishek, a Product Designer based in Bangalore specializing in high-fidelity interactive experiences and digital products.",
  keywords: ["Product Design", "UX/UI", "Interaction Design", "Portfolio", "Bangalore", "Front-end Development", "Next.js", "Framer Motion", "Case Studies"],
  authors: [{ name: "Abhishek" }],
  creator: "Abhishek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekportfolio.com",
    title: "Abhishek | Product Designer & Interaction Specialist",
    description: "Building high-fidelity interactive experiences and digital products.",
    siteName: "Abhishek Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek | Product Designer & Interaction Specialist",
    description: "Building high-fidelity interactive experiences and digital products.",
    creator: "@abhishek", // Replace with actual handle if applicable
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
