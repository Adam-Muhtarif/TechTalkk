import React from "react";

type Props = {
  header: string
  paragraph: string
  className?: string
}

export default function HeroPage({ header, paragraph, className }: Props) {
  return (
    <section className="relative overflow-x-hidden">
      <div className="relative max-w-7xl mx-auto z-1">
        <div className="absolute mt-8 lg:mt-24 px-4 sm:px-6 lg:px-8 inset-x-0 top-1.5 sm:mt-20 flex flex-col items-center lg:items-start lg:mx-0">
          <h1 className="text-center text-2xl lg:text-6xl sm:text-3xl max-w-2xl sm:px-0 lg:max-w-5xl lg:text-start mx-auto lg:mx-0 font-bold text-white mt-[20%] sm:mt-0">
            {header}
          </h1>
          <p className="text-center mt-6 max-w-2xl lg:max-w-5xl px-2 sm:px-0 lg:text-start text-xl text-white">
            {paragraph}
          </p>
        </div>
      </div>

      {/* background image */}
      <div className={`w-full  ${className}`}></div>
      <div
        className={`absolute inset-0 bg-[linear-gradient(to_left,rgba(0,0,0,0.7),rgba(0,0,0,0.6))]`}
      ></div>
    </section>
  )
}
