import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond, Dancing_Script } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const arsenica = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arsenica",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arsenica.variable} ${dancingScript.variable} ${courierPrime.variable} antialiased w-full`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
