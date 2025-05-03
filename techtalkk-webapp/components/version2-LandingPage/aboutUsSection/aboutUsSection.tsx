import Image from 'next/image'
import React from 'react'
import AboutUsIcon from "../../../public/images/about-us-v2/AboutUsIcon.svg"
import RocketMission from "../../../public/images/about-us-v2/RocketMission.svg"
import Binoculars from "../../../public/images/about-us-v2/Binoculars.svg"
import Card, { CoreValuesCard, EventsCard } from './Card'
import { MembersCard } from './Card'
import { JoinOurCommunity } from './Card'
import TestimonialsGrid from '../testemonials/testemonials'
import SectionInfo from '../components/SectionInfo'


export default function AboutUsSection() {
    return (
        <section className='overflow-hidden mt-16 px-4 font-archivo relative'>
            {/* container */}
            <div className='max-w-7xl mx-auto relative'>
                {/* background pattern */}
                <Image src="/images/eventsSection/Background.png" width={907} height={645} alt='background' className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-999' />
                <SectionInfo title="Welcome to Tech Talk" sectionName='About Us' icon={<AboutUsIcon />} description='A Community Where Innovation, Learning, and Collaboration Thrive.
' />

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

                <TestimonialsGrid />
            </div>
        </section>
    )
}
