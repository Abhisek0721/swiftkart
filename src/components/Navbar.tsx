"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Login from "./modals/Login";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Signup from "./modals/Signup";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [toggleLoginModal, setToggleLoginModal] = useState(false);
  const [toggleSignupModal, setToggleSignupModal] = useState(false);
  const pathname = usePathname(); // Use usePathname from next/navigation
  const noNavbarRoutes = ["/login", "/signup"];

  return (
    <div>
      {!noNavbarRoutes.includes(pathname) && (
        <div className="mb-32">
          <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4 py-5">
              <div className="flex justify-between h-14 items-center">
                <div className="flex">
                  <Link href="/" className="flex items-center" prefetch={false}>
                    <LogoIcon />
                    <span className="sr-only">SwiftKart</span>
                  </Link>
                  <div className="hidden lg:flex ml-20 items-center gap-10">
                    <input type="text" placeholder="Search products" className="outline-none text-sm px-3 rounded-sm border-[1px] border-color w-[600px] h-10" />
                    <div className="">
                      <div className="w-5 h-5 rounded-full bg-black text-white text-xs text-center relative inset-3 left-3 flex flex-col justify-center">
                        <span>2</span>
                      </div>
                      <ShoppingCart className="cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" onClick={() => setToggleLoginModal(true)}>
                    Sign in
                  </Button>
                  <Button size="sm" className="" onClick={() => setToggleSignupModal(true)}>Sign up</Button>
                </div>
              </div>
            </div>
          </nav>
          <div>
            <Login toggleLoginModal={toggleLoginModal} setToggleLoginModal={setToggleLoginModal} />
          </div>
          <div>
            <Signup toggleSignupModal={toggleSignupModal} setToggleSignupModal={setToggleSignupModal} />
          </div>
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