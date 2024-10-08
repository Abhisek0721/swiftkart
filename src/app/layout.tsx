import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from 'react-hot-toast';
import PageLoader from "@/components/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftKart",
  description: "SwiftKart: Online Shopping Website",
  icons: {
    icon: "/favicon.ico", // Path to the favicon file in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLoader />
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
