import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GYMWO - Female First Fitness",
  description: "Pioneering the next generation of female-first fitness through artificial intelligence and physiological science.",
  openGraph: {
    title: "GYMWO - Female First Fitness",
    description: "Pioneering the next generation of female-first fitness through artificial intelligence and physiological science.",
    url: "https://gymwo.vercel.app",
    siteName: "GYMWO",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "GYMWO Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>
        <LanguageProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
