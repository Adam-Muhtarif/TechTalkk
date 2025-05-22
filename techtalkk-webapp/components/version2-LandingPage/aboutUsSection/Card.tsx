import React from 'react'
import MemberFilled from "../../../public/images/about-us-v2/MemberFilled.svg"
import Medal from "../../../public/images/about-us-v2/Medal.svg"
import Calender from "../../../public/images/about-us-v2/Calendar-24.svg"
import Discord from "../../../public/images/about-us-v2/Discord.svg"
import Github from "../../../public/images/about-us-v2/Github.svg"
import TechtalkStar from "../../../public/images/about-us-v2/TechtalkStar.svg"
import Dots from "../../../public/images/about-us-v2/Dots.svg"
import Light from "../../../public/images/about-us-v2/Light.svg"
import Union from "../../../public/images/about-us-v2/Union.svg"
import TechtalkLogo from "../../../public/images/about-us-v2/TechTalk-Logo.svg"
import { Share, Lightbulb, Users, TrendingUp } from "lucide-react"
import Rectangle from "./Rectangle.svg"
import Link from 'next/link'
import Image from 'next/image'

// prop types 

interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
    return (
        <div className='flex flex-col px-9 py-6 gap-1.5 justify-start shadow-about-card rounded-2xl m-3 relative'>
            {/*  */}
            {icon}
            <h1 className='font-semibold text-xl'>{title}</h1>
            <p className='text-sm text-[#464553]'>{description}</p>
            <Image src="/images/about-us-v2/Rectangle.png" width={280} height={161} alt="rectangle" className="absolute bottom-1.5 right-1.5" />
        </div>
    )
}

export const MembersCard = function () {
    return (
        <div className='flex flex-col px-9 py-6 gap-1.5 justify-center items-center shadow-about-card rounded-2xl m-3 relative h-full sm:min-h-[214px]'>
            <Image src="/images/about-us-v2/Rectangle.png" width={280} height={161} alt="rectangle" className="absolute bottom-1.5 right-1.5" />
            <MemberFilled />
            <h1 className='font-semibold text-xl font-bricolage text-[#5E16EC]'>300+</h1>
            <h1>Members</h1>
        </div>
    )
}

export const CoreValuesCard = function () {
    return (
        <div className='flex flex-col px-9 py-6 gap-1.5 justify-start shadow-about-card rounded-2xl m-3 relative h-full'>
            <Image src="/images/about-us-v2/Rectangle.png" width={280} height={161} alt="rectangle" className="absolute bottom-1.5 right-1.5" />
            <Medal />
            <h1 className='font-semibold text-xl'>Our Core Values</h1>

            {/* list wrapper */}
            <div className="flex items-center justify-start gap-4">
                <div className="text-blue-500">
                    <Share className="w-6 h-6" />
                </div>
                <div>
                    <span className="text-[15px] font-medium">knowledge-sharing:</span>
                    <span className="text-[15px] text-gray-500 ml-2">fostering growth</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-amber-400">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                    <span className="text-[15px] font-medium">Innovation:</span>
                    <span className="text-[15px] text-gray-500 ml-2">Always pushing boudries</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-emerald-400">
                    <Users className="w-6 h-6" />
                </div>
                <div>
                    <span className="text-[15px] font-medium">Inclusivity:</span>
                    <span className="text-[15px] text-gray-500 ml-2">Creating welcome spaces</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-rose-400">
                    <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-[15px] font-medium">Community-driven growth</div>
            </div>
        </div>
    )
}

export const EventsCard = function () {
    return (
        <div className='flex-1 w-[94%] sm:w-auto sm:flex flex-col px-9 py-6 gap-1.5 justify-center items-center shadow-about-card rounded-2xl m-3 relative max-h-[282px] min-h-[282px] lg:min-h-[269px]'>
            <Image src="/images/about-us-v2/Rectangle.png" width={280} height={161} alt="rectangle" className="absolute bottom-1.5 right-1.5" />
            <Calender className="my-0 mx-auto" />
            {/* 300+ events */}
            <div className='flex items-center justify-center gap-1.5'>
                <h1 className='font-semibold text-xl font-bricolage text-[#5E16EC]'>300+</h1>
                <h1>events</h1>
            </div>
            {/* links */}
            <div className='flex items-center flex-col gap-1.5'>
                <h1 className='font-semibold'>Join us on</h1>

                <div className='flex items-center gap-1.5'>
                    <Link href="#">
                        <Discord />
                    </Link>
                    <Link href="#">
                        <Github />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const JoinOurCommunity = function () {
    return (
        <div className="flex w-[360px] h-[216px] sm:w-[470px] sm:h-[282px] relative">
            <div className='w-full flex flex-col px-9 py-6 gap-1.5 justify-center items-center shadow-about-card rounded-2xl m-3 relative bg-black overflow-clip'>

                {/* Decoration */}
                <TechtalkStar className="absolute -bottom-42 left-44" />
                <Light className="absolute -top-9 right-0" />
                <Union className="absolute top-0 right-0 w-full h-full scale-125" />
                <Dots className="absolute top-0 right-0" />
                <Dots className="absolute top-0 left-0" />

                {/* content */}
                <div className="flex flex-col justify-center items-center gap-1.5 font-inter z-10">
                    {/* logo */}
                    <TechtalkLogo />
                    {/* title */}
                    <h1 className='font-bold text-xl text-white'>
                        Join our community
                    </h1>
                    {/* <p className='text-[#989899] text-[8px] font-medium'>Be part of the fastest-growing Somali-Tech Cmmounity</p> */}

                    {/* button */}
                    <button className='bg-[#7E45F0] py-2 font-bold text-[7px] text-center justify-center rounded-sm w-full flex relative text-white hover:cursor-pointer before:content-[""] before:absolute before:h-full before:w-full before:border-[1px] before:border-[#7E45F0] before:rounded-sm before:scale-x-[1.03] before:scale-y-[1.2] before:bottom-0 before:left-0 mt-2'>
                        <p className='inline text-center text-sm '>
                            Join For Free
                        </p>
                    </button>
                </div>
            </div>
            <div className='before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-z-9 before:scale-x-98 before:scale-y-97 before:rounded-2xl before:bg-[#9363F266]/40'></div>
        </div>
    )
}