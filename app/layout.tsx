import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dottra - Decentralized Data Aggregation Platform",
  description: "A decentralized data aggregation platform designed to capture and structure rich, granular data from underrepresented or niche segments of the population.",
  keywords: [
    "decentralized data",
    "data aggregation",
    "blockchain data",
    "data democracy",
    "web3 analytics",
    "open data platform",
    "niche data collection",
    "data sovereignty"
  ].join(", "),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      "/apple-icon-57x57.png",
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Dottra - Decentralized Data Aggregation Platform",
    description: "A decentralized data aggregation platform designed to capture and structure rich, granular data from underrepresented or niche segments of the population.",
    url: "https://dottra.com",
    siteName: "Dottra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dottra Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dottra - Decentralized Data Aggregation Platform",
    description: "A decentralized data aggregation platform designed to capture and structure rich, granular data from underrepresented or niche segments of the population.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}