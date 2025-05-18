'use client'
import React from 'react'
import Logo from './Logo.svg'
import { Button } from '@/components/ui/button'
// import { Menus } from '../../utils/Menu'
// import DesktopMenu from './DesktopMenu'
// import MobMenu from './MobileMenu'

export default function NavigationV2() {
  return (
    <div className="max-w-7xl mx-auto w-full z-999">
      <div className="flex fixed backdrop-blur-2xl lg:relative justify-between px-4 py-4 lg:justify-around items-center lg:shadow-navigation w-full lg:mt-7 lg:py-1 lg:rounded-md lg:before:shadow-navigation-psuedo before:absolute before:w-full before:top-0 before:left-0">
        {/* Logo */}
        <Logo />

        {/* Menus */}
        {/* <ul className="gap-x-1 lg:flex lg:items-center hidden">
          {Menus.map((menu) => (
            <DesktopMenu menu={menu} key={menu.name} />
            <></>
          ))}
        </ul> */}

        <div className="lg:hidden">{/* <MobMenu Menus={Menus} /> */}</div>

        {/* Buttons */}
        <Button variant="default" className="hidden lg:flex bg-[var(--primary-color)]">
          Register
        </Button>
      </div>
    </div>
  )
}
