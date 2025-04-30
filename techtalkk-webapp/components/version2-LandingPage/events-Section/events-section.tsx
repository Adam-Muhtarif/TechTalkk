import Image from 'next/image'
import React from 'react'
// import FamiconsCalender from "../assets/FamiconsCalendar.svg"

export default function EventsSection() {
    return (
        <section className='overflow-hidden mt-16 px-4 font-archivo relative'>
            {/* container */}
            <div className='max-w-7xl mx-auto relative'>
                {/* background pattern */}
                <Image src="/images/eventsSection/Background.png" width={907} height={645} alt='background' className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0' />
                <div className='flex flex-col justify-center items-center w-full z-1 py-12'>
                    {/* section title */}
                    <div className='flex gap-1.5 rounded-lg bg-[#F8FAFC] px-2 py-1.5 border-[#DEE5ED] border'>
                        <div className='font-inter text-[12px] text-center'>
                            {/* <FamiconsCalender /> */}
                            <Image src="/images/famicons_calendar.png" alt="calendar icon" width={15.78} height={15.78} />
                        </div>
                        <div className='font-inter text-[12px] text-center px-3'>
                            Events
                        </div>
                    </div>
                    {/* Title Description */}
                    <h1 className="text-[#7E45F0] text-3xl sm:text-4xl font-semibold">Learn. Connect. Grow.</h1>
                    {/* sub discription */}
                    <p className="flex flex-col text-[#5B5966] text-sm sm:text-xl text-center">
                        <span>
                            🚀 Upcoming: Join live sessions, workshops, and tech talks.
                        </span>
                        <span className='sm:inline hidden'>
                            📼 Past: Watch on-demand. Real stories, real lessons.
                        </span>
                    </p>
                </div>
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
