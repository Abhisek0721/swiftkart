"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Login from "./modals/Login";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [toggleLoginModal, setToggleLoginModal] = useState(false);
  const pathname = usePathname(); // Use usePathname from next/navigation
  const noNavbarRoutes = ["/login", "/signup"];

  return (
    <div>
      {!noNavbarRoutes.includes(pathname) && (
        <div className="mb-32">
          <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4 py-5">
              <div className="flex justify-between h-14 items-center">
                <Link href="#" className="flex items-center" prefetch={false}>
                  <LogoIcon />
                  <span className="sr-only">SwiftKart</span>
                </Link>
                <nav className="hidden md:flex gap-4">
                  <Link
                    href="/"
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                    prefetch={false}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                    prefetch={false}
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                    prefetch={false}
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                    prefetch={false}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" onClick={() => setToggleLoginModal(true)}>
                    Sign in
                  </Button>
                  <Button size="sm">Sign up</Button>
                </div>
              </div>
            </div>
          </nav>
          <Login toggleLoginModal={toggleLoginModal} setToggleLoginModal={setToggleLoginModal} />
        </div>
      )}
    </div>
  )
}

function LogoIcon() {
  return (
    <Image
      src="/icons/logo-nobg.png"
      alt="SwiftKart"
      width={100}  // Set the width of the icon
      height={80} // Set the height of the icon
      className="w-[100px] h-[80px]"
    />
  )
}