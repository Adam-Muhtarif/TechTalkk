import Image from 'next/image'
import React from 'react'

export default function AboutUsHhero() {
  return (
    <div className="relative max-w-[1440px]">
    <div className="flex flex-col absolute top-1.5 left-26 items-start max-w-5xl mt-20 justify-start text-white z-1">
      <h1 className="text-6xl sm:text-5xl max-w-5xl font-bold text-start text-white">
        Knowledge Shared, Knowledge Gained
      </h1>
      <p className="mt-6 max-w-2xl text-start text-xl">
        At TechTalk, we believe in the power of shared learning. Join our
        community to explore industry trends, exchange insights, and expand
        your tech expertise
      </p>
    </div>

    {/* image */}
    <Image
      src="/images/about-us/about-page-image.png"
      width={1440}
      height={460}
      alt="About Us"
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(0,0,0,0.6),rgba(0,0,0,0.9))]"></div>
  </div>
  )
}
