import type { Metadata } from "next";
import { Fraunces, Special_Elite, Inter, Righteous } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const specialElite = Special_Elite({
  variable: "--font-stamp",
  subsets: ["latin"],
  weight: "400",
});

const righteous = Righteous({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boston Wax — Local Record Shop",
  description:
    "A record shop for Boston bands only. Vinyl, CDs, and cassettes from the artists actually playing your city — link straight through to buy on Bandcamp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${specialElite.variable} ${righteous.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
