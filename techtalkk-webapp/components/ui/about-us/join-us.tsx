import React from 'react'

export default function JoinUs() {
  return (
    <section className="relative overflow-x-hidden">
      <div className="relative max-w-7xl mx-auto z-1">
          <div className="absolute mt-24 px-4 sm:px-6 lg:px-8 inset-x-0 top-1.5 sm:mt-20 flex flex-col items-center lg:items-start lg:mx-0">
            <h1 className="text-center text-2xl lg:text-6xl sm:text-3xl max-w-2xl px-1 sm:px-0 lg:max-w-3xl lg:mx-0 font-bold lg:text-start text-white mt-[20%] sm:mt-0">
            Join the TechTalk Community
            </h1>
            <p className="text-center mt-4 max-w-2xl px-2 sm:px-0 lg:text-start text-xl text-white">
            Ready to connect, collaborate, and innovate with fellow tech enthusiasts? Join us today!
            </p>

            <button className='bg-white text-[var(--primary-color)] text-2xl font-bold px-12 py-4 rounded-md shadow-card mt-8 hover:bg-white/70 duration-300 ease-in-out cursor-pointer'>Join</button>
         </div>
     </div>
    <div className="w-full h-[468px] sm:h-[460px] bg-[url(/images/about-us/join-section-image.jpeg)] bg-cover bg-center bg-no-repeat"></div>
    <div className="absolute inset-0 bg-gradient-to-l  from-[#666666]/58 to-[#5E16EC]/88"></div>
  </section>
  )
}
