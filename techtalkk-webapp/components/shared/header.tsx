"use client"

import Link from "next/link"
import { useState } from "react"
import { NavLinks } from "@/constants/data"
import { LogoPink } from "@/components/icons/index"
import { Button } from "@/components/ui/button"
import MenuIcon from "@/components/home-old/menu"
// import AvatarUser from "./avatar-02";
// import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-5 py-4 mx-auto border-b shadow-sm border-gray-200/20 bg-white/95 md:bg-white/30 backdrop-blur-sm lg:px-20">
      {/* <div className="flex items-center justify-between p-3 mx-auto containe"> */}
      <div className="flex items-center">
        <Link href="/" className="transition-transform hover:scale-105">
          <LogoPink className="w-[150px] h-[40px]" />
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex gap-8">
          {NavLinks.map((link, index) => (
            <li
              key={index}
              className="text-xl font-medium font-sans transition-colors hover:text-primary"
            >
              <Link href={link.href || "#"} className="relative px-1 py-2 group">
                {link.name}
                <span className="group-hover:w-full bottom-0 left-0 absolute bg-primary w-0 h-0.5 transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant={"btn"}
          className="hover:shadow-md px-6 py-2 w-[120px] h-10 font-medium text-base transition-all duration-300 hidden md:block"
        >
          Login
        </Button>
        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <MenuIcon
            onClick={toggleMobileMenu}
            className="transition-colors text-primary hover:text-primary/80"
          />
        </div>
        {/* <AvatarUser /> */}
        {/* <ModeToggle /> */}
      </div>
      {/* </div> */}

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="top-[72px] right-0 left-0 z-40 fixed border-gray-200/20 md:hidden bg-white/95 shadow-md backdrop-blur-sm border-t transition-all duration-300">
          <ul className="flex flex-col px-6 py-4">
            {NavLinks.map((link, index) => (
              <li
                key={index}
                className="py-3 text-xl font-medium transition-colors border-b border-gray-100/20 last:border-0 hover:text-primary"
              >
                <Link
                  href={link.href || "#"}
                  className="block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
export default Header
