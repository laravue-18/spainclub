import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev",
  // title: "Spain Club | Nightlife and exclusive dining in Valencia",
  description: "Experience the vibrant nightlife and exclusive dining options in Valencia with Spain Club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();

  return (
    <html lang="{ locale }">
      <body
        className={`font-sanserif antialiased`}
      >
      <NextIntlClientProvider>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
