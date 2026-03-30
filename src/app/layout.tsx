import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero to Hero AI Coding Course - Build Apps with Cursor + Claude",
  description:
    "A beginner-friendly AI coding course built around Cursor + Claude. Learn by building dozens of real projects — websites, mini-apps, browser extensions, mobile apps, and AI agents. No coding experience required!",
  keywords: "AI coding,Cursor,Claude,beginner coding,coding tutorial,AI development,coding course",
  openGraph: {
    title: "Zero to Hero AI Coding Course - Build Apps with Cursor + Claude",
    description:
      "A beginner-friendly AI coding course built around Cursor + Claude. Learn by building dozens of real projects — websites, mini-apps, browser extensions, mobile apps, and AI agents. No coding experience required!",
    images: ["/images/dp.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
