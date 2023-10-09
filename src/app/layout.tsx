import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Bites",
  description: "Random Bites, tu compañero para la aventura culinaria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-red-600 to-black min-h-screen overflow-x-hidden h-full ">
        <Navbar />
        {children}
        <p className="text-white text-2xl pt-14">
          All photos are taken from the official Google Maps API, Random Bites
          is not responsible for any photos that may appear, contact Google or
          the establishment to improve the quality of service. Random Bites all
          rights reserved ©
        </p>
      </body>
    </html>
  );
}
