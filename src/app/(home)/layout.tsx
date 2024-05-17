import type { Metadata } from "next";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Card Sarthi",
  description:
    "Access a variety of India's best credit cards in one central hub and find the right one for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Toaster />
      <Footer />
    </>
  );
}
