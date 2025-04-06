import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Wet_Paint } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubikPaint = Rubik_Wet_Paint({
  variable: "--font-rubik_wet_paint-mono",
  subsets: ["latin"],
  weight: "400"
})


export const metadata: Metadata = {
  title: "BajupSquare",
  description: "BajupSquare is a sleek Next.js 15 template built with TypeScript and Tailwind CSS — perfect for launching your online booking, travel, or real estate experience. From flights to homes, hotels to adventures — get started fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubikPaint.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
