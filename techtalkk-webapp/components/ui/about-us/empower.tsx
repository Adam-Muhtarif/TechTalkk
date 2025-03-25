import React from 'react'

export default function Empower() {
  return (  
  <section className="max-w-7xl mx-auto mt-24 relative">
    {/* flex container */}
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
      {/* shapes */}
      <div className="relative">
        <div className="h-[239.5px] w-[240px] sm:h-[479px] sm:w-[480px] z-10 rounded-tl-[100px] bg-[url(/images/about-us/cabdaleXabdurahman.jpg)] bg-cover bg-center bg-no-repeat"></div>
        <div className="w-[120px] h-[125px] lg:w-[327px] lg:h-[318px] rounded-4xl absolute -top-6 -left-10 bg-[#DADCFC] -z-10 sm:w-[250px] sm:h-[240px] sm:-top-15 sm:-left-15"></div>
      </div>
      {/* text */}
      <div className="flex flex-col gap-3 max-w-2xl lg:mt-6  justify-between">
        {/* header */}
        <div>
          <p className="text-center text-2xl text-[var(--primary-color)] font-medium mb-2 sm:text-start">
            EMPOWER
          </p>
          <h2 className="text-center text-3xl lg:text-5xl lg:max-w-xl sm:text-start text-[var(--primary-color)] font-bold">
            Our Commitment to Technology and Innovation
          </h2>
        </div>
        <p className="mt-6 text-center lg:text-xl sm:text-lg sm:text-start">
          TechTalk is an online community where technology enthusiasts,
          developers, and learners come together to share knowledge, discuss
          industry trends, and work on collaborative projects. 
        </p>
      </div>
    </div>
  </section>
  )
}
