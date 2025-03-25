import React from "react";

export default function AboutUsHhero() {
  return (
    <section className="container mx-auto relative max-w-[1440px] overflow-x-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-1.5 lg:left-26 sm:mt-20 flex flex-col items-center sm:items-start max-w-5xl mx-auto lg:mx-0 z-1 ">
        <h1 className="text-center text-2xl lg:text-6xl sm:text-3xl max-w-2xl px-1 sm:px-0 lg:max-w-5xl mx-auto lg:mx-0 font-bold lg:text-start text-white mt-[20%] sm:mt-0">
          Knowledge Shared, Knowledge Gained
        </h1>
        <p className="text-center mt-6 max-w-2xl lg:max-w-5xl px-2 sm:px-0 mx-auto lg:text-start text-xl text-white">
          At TechTalk, we believe in the power of shared learning. Join our community to explore
          industry trends, exchange insights, and expand your tech expertise
        </p>
      </div>

      {/* image */}
      {/* <Image
        src="/images/about-us/about-page-image.png"
        width={1440}
        height={460}
        alt="About Us"
      /> */}
      <div className="w-[412px] h-[468px] sm:w-[1440px] sm:h-[460px] bg-[url(/images/about-us/about-page-image.jpeg)] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(0,0,0,0.7),rgba(0,0,0,1.9))]"></div>
    </section>
  )
}
