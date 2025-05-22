'use client'

import { Menus } from './menuItems'
import { useEffect, useState } from 'react'
import Logo from './logo.svg'
import Link from 'next/link'
import MobMenu from './mobileMenu'
import DesktopMenu from './desktopMenu'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="max-w-7xl mx-auto w-full">
      <nav
        className={`fixed z-50 top-0 left-0 right-0 px-4 py-4 lg:mx-32 xl:mx-52 flex items-center lg:mt-7 lg:py-1 lg:rounded-md shadow-navigation transition-all duration-300
              ${
                scrolled
                  ? 'bg-white/40 backdrop-blur-xl shadow-lg border border-white/30 hover:bg-white/50'
                  : 'bg-transparent'
              }`}
      >
        {/* Logo */}
        <Link href="/" className="pl-5 flex-1 lg:flex-none">
          <Logo />
        </Link>

        {/* Desktop Menus */}
        <div className="flex-1 hidden lg:flex justify-center">
          <ul className="z-50 flex gap-x-4 items-center">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="flex-1 flex lg:hidden justify-end items-center">
          <MobMenu Menus={Menus} />
        </div>
      </nav>
    </div>
  )
}
