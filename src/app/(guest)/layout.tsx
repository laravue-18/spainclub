import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="">
        <div className="h-20 bg-black"></div>
        {children}
      </main>
      <Subscribe />
      <Footer />
    </>
  );
}
