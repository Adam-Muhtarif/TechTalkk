import React from 'react'
import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <header aria-label="menu" className="mt-6">
      <nav className="flex justify-between items-center py-4">
        <div className="uppercase text-2xl font-bold space-x-1">
          <span className="capitalize text-black font-extrabold">tech</span>
          <span className="text-[#4C0BF7]">talk</span>
        </div>
        <div>
          <ul className="flex space-x-8 font-bold text-gray-700 text-lg">
            <li>Home</li>
            <li>Courses</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <Button className="capitalize text-white px-10 rounded-l-3xl rounded-r-3xl">login</Button>
        </div>
      </nav>
    </header>
  )
}
