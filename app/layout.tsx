import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const title = "Shane So";
const description = "Pioneering robotic systems and physics-based computing."

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | ${title}",
  },
  description: description,
  keywords: [
    "shane so", "shane", "so", "shaneso", "simon fraser university", "founder", "robot", "robots", "engineer", "builder", "machine learning", "ai", "computer science", "cs",
    "mathematics", "math", "tech", "technology", "innovation", "pioneer"
  ],
  authors: [{ name: "Shane So" }],
  creator: "Shane So",
  publisher: "Shane So",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: title,
    description: description,
    siteName: title,
    type: "website",
    locale: "en-CA",
    url: "https://www.shaneso.dev",
  },
  metadataBase: new URL("https://www.shaneso.dev"),
  alternates: {
    canonical: "https://www.shaneso.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
