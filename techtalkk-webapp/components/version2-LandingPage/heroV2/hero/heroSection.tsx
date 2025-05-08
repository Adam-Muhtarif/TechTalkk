import React from 'react'
import Vector from "./Vector.svg"
import Code from './Code.svg'
import Collaborate from "./Collaborate .svg"
import Innovate from "./Innovate.svg"
import Meet from './meet'
export default function HeroSection() {
    return (
        <section className='overflow-hidden py-16  font-archivo relative'>
            {/* container */}
            <div className='w-full relative max-w-7xl mx-auto px-4'>
                {/* background pattern */}
                <Vector className="absolute -left-28 top-1/2 transform -translate-y-1/2 -z-999" />
                <Vector className="absolute -right-28 top-1/2 transform -translate-y-1/2 -z-999 scale-x-[-1]" />
                <Meet />

                {/* Contants */}
                <div className='flex flex-col justify-center mt-8'>
                    {/* header */}
                    <div className='flex items-center justify-center gap-x-0.5 text-2xl sm:text-4xl lg:text-7xl font-bold'>
                        <h1 className='text-black relative'>Code.<span className='absolute hidden lg:block top-3 right-0'><Code /></span></h1>
                        <h1 className='text-[#FECC33] relative'>Collaborate.<span className='absolute hidden lg:block top-3 right-0'><Collaborate /></span></h1>
                        <h1 className='text-[#5E16EC] relative'>Innovate.<span className='absolute hidden lg:block top-3 right-0'><Innovate /></span></h1>
                    </div>
                    {/* Sub header */}
                    <h2 className='text-center text-[#353F48] text-sm sm:text-xl max-w-3xl mx-auto mt-1.5' >Join Somalia’s leading tech community — where developers, designers,AI innovators, and cybersecurity minds come together to learn, build, and grow. Connect. Collaborate. Create impact. 🚀</h2>
                </div>

                {/* buttons */}

            </div>
        </section>
    )
}
