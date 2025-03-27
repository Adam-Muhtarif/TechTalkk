import React from 'react'
import { CalendarDays, ChartNoAxesCombined, Handshake, Lightbulb } from 'lucide-react'


export default function Journey() {
  return (
    <section className="mt-24">
    {/* Container */}
    <div className="max-w-7xl mx-auto mt-24 relative px-4 sm:px-6 lg:px-8">
      {/* flex wrapper */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        {/* Heading */}
        <div className="self-center sm:self-start text-start mb-10">
          <h2 className="text-center sm:text-start text-xl uppercase font-semibold text-[var(--primary-color)] tracking-widest">
            Journey
          </h2>
          <p className="text-center sm:text-start text-3xl lg:text-5xl font-bold text-[var(--primary-color)] mt-2">
            Our Path to a Thriving Community
          </p>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-3 items-center">
            <CalendarDays size={44} strokeWidth={1.25} />
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-bold text-[var(--primary-color)]">Founded in</h3>
              <p className="text-gray-500 text-lg">2020 by a passionate group of developers.</p>
            </div>
          </div>

          {/* border line */}
          <div className="ml-[5%] lg:ml-[4%] h-16 border-1 lg:border-2 border-solid border-black"></div>

          <div className="flex gap-3 items-center">
            <ChartNoAxesCombined size={44} strokeWidth={1.25} />
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-bold text-[var(--primary-color)]">
                Community Growth
              </h3>
              <p className="text-gray-500 text-lg">
                Now, we proudly support over 10,000 members globally.
              </p>
            </div>
          </div>
          {/* border line */}
          <div className="ml-[5%] lg:ml-[4%] h-16  border-1 lg:border-2 border-solid border-black"></div>

          <div className="flex gap-3 items-center">
            <Lightbulb size={44} strokeWidth={1.25} />
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-bold text-[var(--primary-color)]">Our Vision</h3>
              <p className="text-gray-500 text-lg">
                To empower tech enthusiasts through collaboration and innovation.
              </p>
            </div>
          </div>
          {/* border line */}
          <div className="ml-[5%] lg:ml-[4%] h-16 border-1 lg:border-2 border-solid border-black"></div>

          <div className="flex gap-3 items-center">
            <Handshake size={44} strokeWidth={1.25} />
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-bold text-[var(--primary-color)]">Join Us</h3>
              <p className="text-gray-500 text-lg">
                Be part of our journey and contribute today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
