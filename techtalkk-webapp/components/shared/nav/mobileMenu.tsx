import { useState } from 'react'
import * as motion from 'motion/react-client'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { MenuItem } from './desktopMenu'

export default function MobMenu({ Menus }: { Menus: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [clicked, setClicked] = useState<number | null>(null)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
    setClicked(null)
  }

  const subMenuDrawer = {
    enter: {
      height: 'auto',
      overflow: 'hidden',
    },
    exit: {
      height: 0,
      overflow: 'hidden',
    },
  }

  return (
    <div className="">
      <button className="lg:hidden z-[9999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed h-screen left-0 right-0 top-16 overflow-y-auto bg-[#fff] backdrop-blur text-[#4D4D4D] p-6 pb-20"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
      >
        <ul>
          {Menus.map(({ name, url, subMenu }, i: number) => {
            const isClicked = clicked === i
            const hasSubMenu = subMenu?.length
            return (
              <li key={name} className="">
                <Link
                  href={url}
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown className={`ml-auto ${isClicked && 'rotate-180'} `} />
                  )}
                </Link>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? 'enter' : 'exit'}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, url, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <Link href={url}>
                          <Icon />
                          {name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            )
          })}
        </ul>
      </motion.div>
    </div>
  )
}
