import { Button } from '@/components/ui/button'
import React from 'react'

export default function Courses() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-30 overflow-x-hidden">
      {/* Nav */}
      <header className="mt-6">
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

      {/* Landing */}
      {/* Todo: make it reusable component */}
      <section className="uppercase text-center font-extrabold py-22 space-y-10">
        <h3 className=" text-2xl">find your suitable</h3>
        <h1 className="text-8xl flex justify-center items-center relative">
          courses
          <div className="absolute top-1/2 bg-linear-to-r from-[#4C0BF7] to-[#3105a0] h-3 w-[14rem] rounded-r-2xl"></div>
        </h1>
      </section>

      {/* Filter & search */}
      <section></section>
    </main>
  )
}
