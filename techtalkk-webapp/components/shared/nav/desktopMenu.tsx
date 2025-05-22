'use client'

import { ComponentType, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import Link from 'next/link'

export interface SubMenuItem {
  name: string
  desc: string
  url: string
  icon: ComponentType
}

export interface MenuItem {
  name: string
  url: string
  subMenuHeading?: string[]
  subMenu?: SubMenuItem[]
  gridCols?: number
}

export default function DesktopMenu({ menu }: { menu: MenuItem }) {
  const [isHovered, setIsHovered] = useState(false)
  const hasSubMenu = !!menu?.subMenu?.length

  const submenuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
      pointerEvents: 'none' as const,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
      pointerEvents: 'auto' as const,
    },
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* PARENT ITEM */}
      <Link
        href={menu.url}
        className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl capitalize"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            className={`mt-[0.6px] transition-transform duration-200 ${
              isHovered ? 'rotate-180' : ''
            }`}
          />
        )}
      </Link>

      {/* SUBMENU */}
      {hasSubMenu && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={submenuVariants}
              className="absolute top-full left-1/2 -translate-x-1/2 z-50 min-w-[500px] bg-white dark:bg-[#0f0f0f] shadow-xl rounded-b-xl p-6 origin-top"
            >
              <div
                className={`grid gap-7 ${
                  (menu.gridCols ?? 1) === 3
                    ? 'grid-cols-3'
                    : (menu.gridCols ?? 1) === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-1'
                }`}
              >
                {menu.subMenu?.map((submenu, i) => (
                  <Link href={submenu.url} className="relative cursor-pointer" key={i}>
                    {(menu.gridCols ?? 1) > 1 && menu?.subMenuHeading?.[i] && (
                      <p className="text-sm mb-4 text-gray-500">{menu?.subMenuHeading?.[i]}</p>
                    )}
                    <div className="flex gap-x-4 group/menubox">
                      <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-[#5E16EC] group-hover/menubox:text-gray-300 duration-300">
                        {submenu.icon && <submenu.icon />}
                      </div>
                      <div>
                        <h6 className="font-semibold">{submenu.name}</h6>
                        <p className="text-sm text-gray-400">{submenu.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
