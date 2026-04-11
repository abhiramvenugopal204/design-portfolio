import { Fredericka_the_Great, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DotGrid from "./components/DotGrid";

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
  title: "Abhishek Portfolio",
  description: "A space for things I've been building",
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
        <Footer />
      </body>
    </html>
  );
}
