import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GradientBg from "@/components/HomePage/GradientBg/GradientBg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DM Xposure",
  description: "Welcome to DM Xposure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GradientBg />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
