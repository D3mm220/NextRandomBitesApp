import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/src/components/Navbar";
import { AccountProvider } from "@/src/contexts/AccountContext";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

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
      <AccountProvider>
        <body className="bg-gray-300 min-h-screen overflow-x-hidden">
          <Navbar />

          {children}
          <p className="text-black text-lg lg:text-2xl pt-14 flex p-10">
            All photos are taken from the official Google Maps API, Random Bites
            is not responsible for any photos that may appear, contact Google or
            the establishment to improve the quality of service. Random Bites
            all rights reserved ©
          </p>
        </body>
      </AccountProvider>
    </html>
  );
}
