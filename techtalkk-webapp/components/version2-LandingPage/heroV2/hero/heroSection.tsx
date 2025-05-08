import React from 'react'
import Vector from "./Vector.svg"
import Code from './Code.svg'
import Collaborate from "./Collaborate .svg"
import Innovate from "./Innovate.svg"
import DiscordIcon from "./DiscordIcon.svg"
import Arrow from "./Arrow.svg"
import Meet from './meet'
import Link from "next/link"
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className='overflow-hidden py-16  font-archivo relative'>
            {/* container */}
            <div className='w-full relative max-w-7xl mx-auto'>
                {/* background pattern */}
                <Vector className="absolute -left-28 top-1/2 transform -translate-y-1/2 -z-999" />
                <Vector className="absolute -right-28 top-1/2 transform -translate-y-1/2 -z-999 scale-x-[-1]" />
                <Meet />

                {/* Contants */}
                <div className='flex flex-col justify-center mt-8 px-4'>
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
                <div className='flex items-cente justify-center gap-2.5 mt-8 px-4'>
                    <DiscordButton />
                    <WhiteButton />
                </div>

                {/* Discord Image */}
                <div className='relative px-4 pt-7'>
                    <Image className='mt-16' src="/images/herov2/Discord.png" width={1210.43} height={756.52} alt="hero" />
                    <Image className='mt-16 absolute top-0 right-0 -z-999 scale-x-150 scale-y-100' src="/images/herov2/dots.png" width={1422.54} height={755.72} alt="dots" />
                    <Image className='mt-16 absolute -top-16 lg:-top-[300px] right-0 -z-999 scale-75' src="/images/herov2/glows.png" width={1886.13} height={1168.51} alt="dots" />
                </div>
            </div>
        </section>
    )
}


function DiscordButton({ href = "https://discord.gg/your-invite-link" }) {
    return (
        <div className="flex justify-center items-center">
            <Link
                href={href}
                className="group relative flex items-center justify-center gap-4 bg-[#7C3AED] border-2 border-[#6D28D9] text-white font-bold text-lg sm:text-xl p-4 rounded-2xl hover:bg-[#6D28D9] transition-colors duration-300 w-full overflow-hidden"
            >
                {/* Inner border animation */}
                <span className="absolute inset-0.5 sm:inset-[3px] rounded-2xl border-t-2 border-l-2 border-white/30 animate-pulse-opacity pointer-events-none"></span>

                <DiscordIcon />
                <span className="relative z-10">Join Us</span>
            </Link>
        </div>
    )
}

function WhiteButton() {
    return (
        <div className="flex justify-center items-center">
            <div
                className="group relative flex items-center justify-center gap-4 bg-transparent text-[#6D28D9] font-bold text-lg sm:text-xl p-4 rounded-2xl transition-colors duration-300 w-full max-w-xl overflow-hidden border-2 border-[#6D28D9]"
            >
                {/* Inner border animation */}
                <span className="absolute inset-0.5 sm:inset-[3px] rounded-2xl border-t-2 border-l-2 border-[#6D28D9] animate-pulse-opacity pointer-events-none"></span>

                <span className="relative z-10">Events</span>
                <Arrow />
            </div>
        </div>
    )
}