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

export default function Header() {
    const t = useTranslations('Header');
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="h-12">
            <Image
                src="/image/logo.png"
                alt="Spain Club Logo"
                width={354}
                height={349}
                className="h-full w-auto"
            />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-sm font-medium hover:underline">{t("Nightlife")}</a>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                <SheetClose asChild>
                  <a href="#features" className="text-base font-medium">Features</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#pricing" className="text-base font-medium">Pricing</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#contact" className="text-base font-medium">Contact</a>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="mt-4 w-full">Get Started</Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
