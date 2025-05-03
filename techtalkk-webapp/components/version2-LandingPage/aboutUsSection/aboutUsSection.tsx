import Image from 'next/image'
import React from 'react'
import AboutUsIcon from "../../../public/images/about-us-v2/AboutUsIcon.svg"
import RocketMission from "../../../public/images/about-us-v2/RocketMission.svg"
import Binoculars from "../../../public/images/about-us-v2/Binoculars.svg"
import Card, { CoreValuesCard, EventsCard } from './Card'
import { MembersCard } from './Card'
import { JoinOurCommunity } from './Card'


export default function AboutUsSection() {
    return (
        <section className='overflow-hidden mt-16 px-4 font-archivo relative'>
            {/* container */}
            <div className='max-w-7xl mx-auto relative'>
                {/* background pattern */}
                <Image src="/images/eventsSection/Background.png" width={907} height={645} alt='background' className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-999' />
                <div className='flex flex-col justify-center items-center w-full z-1 py-12'>
                    {/* section title */}
                    <div className='flex gap-1.5 rounded-lg bg-[#F8FAFC] px-2 py-1.5 border-[#DEE5ED] border items-center'>
                        <div className='font-inter text-[12px] text-center'>
                            <AboutUsIcon />
                        </div>
                        <div className='font-inter text-[12px] text-center px-3'>
                            Events
                        </div>
                    </div>
                    {/* Title Description */}
                    <h1 className="text-[#7E45F0] text-3xl sm:text-4xl font-semibold">Welcome to Tech Talk</h1>
                    {/* sub discription */}
                    <p className="flex flex-col text-[#5B5966] text-sm sm:text-xl text-center">
                        A Community Where Innovation, Learning, and Collaboration Thrive.
                    </p>
                </div>

                {/* Cards Layout --- flex Box Used */}
                <div className='flex lg:flex lg:flex-row flex-col justify-center items-center w-full h-full'>
                    {/* left Cards */}
                    <div className='flex-1 gap-1.5 flex-col justify-center items-center'>
                        {/* first top two cards */}
                        <div className='flex flex-col sm:flex sm:flex-row items-center gap-3'>
                            {/* 1st top card */}
                            <Card title='Our Misson' description='Empowering tech enthusiasts to connect, learn and grow together on cmummunity focused on innovation and collaboration ' icon={<RocketMission />} />

                            {/* 2th top card */}
                            <Card title='Our Vision' description='Building the world’s most inclusive and innovative tech community, driving the future of technology together' icon={<Binoculars />} />
                        </div>

                        {/* the 1fr card */}
                        <CoreValuesCard />
                    </div>

                    {/* right Cards */}
                    <div className='flex-1 flex-col justify-center items-center'>
                        {/* the full width top card */}
                        <MembersCard />

                        {/* two bottom cards */}
                        <div className='flex flex-col sm:flex sm:flex-row items-center gap-3'>
                            <EventsCard />
                            <JoinOurCommunity />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
