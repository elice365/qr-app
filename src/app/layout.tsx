import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Generate QR codes with custom colors and styles",
  openGraph: {
    title: "QR Code Generator",
    description: "Generate QR codes with custom colors and styles",
    images: [
      {
        url: "/og-image.svg",
        width: 800,
        height: 600,
        alt: "QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Generator",
    description: "Generate QR codes with custom colors and styles",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}