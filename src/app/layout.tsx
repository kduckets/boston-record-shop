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

const siteUrl = "https://bostonwax.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Boston Wax — A Record Shop for Local Boston Bands",
    template: "%s | Boston Wax",
  },
  description:
    "Boston Wax is a record shop for local Boston bands only. Browse vinyl, CDs, and cassettes from Boston-area artists across the local music scene — including Somerville and Cambridge — and buy straight from each band's own Bandcamp store.",
  keywords: [
    "Boston bands",
    "Boston music",
    "local bands Boston",
    "Boston record shop",
    "Boston vinyl",
    "Boston music scene",
    "Boston Massachusetts bands",
    "Somerville bands",
    "Cambridge bands",
    "Boston DIY music",
    "Bandcamp Boston",
    "buy vinyl Boston",
  ],
  authors: [{ name: "Boston Wax" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Boston Wax",
    title: "Boston Wax — A Record Shop for Local Boston Bands",
    description:
      "A record shop for local Boston bands only. Vinyl, CDs, and cassettes from the artists actually playing your city — link straight through to buy on Bandcamp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston Wax — A Record Shop for Local Boston Bands",
    description:
      "A record shop for local Boston bands only. Vinyl, CDs, and cassettes from the artists actually playing your city.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={`${fraunces.variable} ${specialElite.variable} ${righteous.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
