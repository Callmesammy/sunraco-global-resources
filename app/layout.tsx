import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunraco Global Resources (SGR) | Modern Trade & Infrastructure Architecture",
  description:
    "High-performance global resources, energy systems, maritime logistics, and strategic trade architecture.",
  keywords: [
    "Sunraco",
    "SGR",
    "Global Resources",
    "Maritime Logistics",
    "Infrastructure Development",
    "Energy Solutions",
    "Trade Architecture",
  ],
  authors: [{ name: "Sunraco Global Resources" }],
  openGraph: {
    title: "Sunraco Global Resources (SGR)",
    description: "Modern Trade Architecture, Energy Systems & Global Infrastructure.",
    type: "website",
    siteName: "Sunraco Global Resources",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F4F4F5] selection:bg-[#FF5500] selection:text-black">
        {children}
      </body>
    </html>
  );
}
