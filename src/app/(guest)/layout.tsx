import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
