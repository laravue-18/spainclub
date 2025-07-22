import { cookies } from 'next/headers'; 
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { SessionProvider } from "next-auth/react"
import FlashMessage from '@/components/FlashMessage';

export const metadata: Metadata = {
  title: "Dev",
  // title: "Spain Club | Nightlife and exclusive dining in Valencia",
  description: "Experience the vibrant nightlife and exclusive dining options in Valencia with Spain Club.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();

  const flash = (await cookies()).get('flash')?.value;

  return (
    <html lang="{ locale }">
      <body
        className={`font-sanserif antialiased`}
      >
      <NextIntlClientProvider>
        <SessionProvider>
          {flash && <FlashMessage message={JSON.parse(flash)} />}
            {children}
        </SessionProvider>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
