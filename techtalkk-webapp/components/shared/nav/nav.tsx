'use client'

import { Menus } from './menuItems'

import Logo from '../logo'
import MobMenu from './mobileMenu'
import DesktopMenu from './desktopMenu'

export default function Nav() {
  return (
    <div className="max-w-7xl mx-auto w-full z-[999]">
      <div className="flex fixed backdrop-blur-2xl lg:relative items-center justify-between px-4 py-4 w-full lg:mt-7 lg:py-1 lg:rounded-md lg:shadow-navigation lg:before:shadow-navigation-psuedo before:absolute before:w-full before:top-0 before:left-0">
        {/* Logo */}
        <div className="flex-1">
          <Logo className="self-start" />
        </div>

        {/* Menus */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="z-50 flex gap-x-4 items-center">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
        </div>

        {/* Buttons or Mobile Menu */}
        <div className="flex-1 flex justify-end items-center">
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>

          {/* Future buttons */}
          {/* <Button variant="default" className="hidden lg:flex bg-[var(--primary-color)]">
            Register
          </Button> */}
        </div>
      </div>
    </div>
  )
}
