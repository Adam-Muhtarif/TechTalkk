
import Image from 'next/image'
import React from 'react'
import SectionInfo from '../components/SectionInfo';
import Calender from "./Calender.svg"

export default function EventsSection() {
    return (
        <section className='overflow-hidden mt-16 px-4 font-archivo relative'>
            {/* container */}
            <div className='max-w-7xl mx-auto relative'>
                {/* background pattern */}
                <Image src="/images/eventsSection/Background.png" width={907} height={645} alt='background' className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0' />
                <SectionInfo title="Learn. Connect. Grow." sectionName='Events' icon={<Calender />} description='🚀 Upcoming: Join live sessions, workshops, and tech talks.' secDiscription="📼 Past: Watch on-demand. Real stories, real lessons." />

                {/* Images */}
                <div className='flex justify-between items-center mt-7 w-full z-1 hover:cursor-pointer'>
                    {
                        Array.from({ length: 5 }, (_, index) => {
                            const imageNumber = index + 1;
                            console.log(imageNumber)
                            return (
                                <div key={imageNumber} className='flex justify-between w-full'>
                                    <Image src={`/images/eventsSection/Listitem-${imageNumber}.png`} alt='events' width={150} height={275} />
                                </div>
                            )
                        })
                    }
                </div>
                {/* Buttons */}
                <div className='flex gap-2 items-center justify-end mt-3.5'>
                    {/* btn left */}
                    <button className='flex justify-center items-center h-3.5 w-3.5 rounded-full bg-[#D2D2D7]/42'>
                        <Image src="/images/eventsSection/Vector-left.png" width={4} height={6.67} alt='btl-left' />
                    </button>
                    {/* btn-right */}
                    <button className='flex justify-center items-center h-3.5 w-3.5 rounded-full bg-[#D2D2D7]'>
                        <Image src="/images/eventsSection/Vector-right.png" width={4} height={6.67} alt='btl-right' />
                    </button>
                </div>
            </div>
        </section>
    )
}
