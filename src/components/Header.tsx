// components/Header.tsx
'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Header() {
    const t = useTranslations('Header');

    const menuItems = [
      {url: '/', text: 'NightLife'},
      {url: '', text: 'Gastronomy'},
      {url: '', text: 'Events'},
      {url: '', text: 'Blog'}
    ];
  return (
    <header className="fixed z-40 w-full bg-black/90 border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="h-12">
          <Link href="/">
            <Image
                src="/image/logo.png"
                alt="Spain Club Logo"
                width={354}
                height={349}
                className="h-full w-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((m, i) => (
            <Link href={m.url} className="text-white text-2xl font-semibold hover:underline" key={i}>{m.text}</Link>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Button>Login</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6 p-12">
                  {menuItems.map((m, i) => (
                    <SheetClose asChild key={i}>
                      <Link href={m.url} className="text-base font-medium">{m.text}</Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button className="mt-4 w-full">Login</Button>
                  </SheetClose>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
