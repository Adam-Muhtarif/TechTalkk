import Image from 'next/image'
import React from 'react'
// import FamiconsCalender from "../assets/FamiconsCalendar.svg"

export default function EventsSection() {
    return (
        <section className='overflow-hidden py-16 max-w-7xl mx-auto font-archivo mt-12'>
            {/* container */}
            <div className='flex flex-col justify-center items-center'>
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
                <h1 className="text-[#7E45F0] text-4xl">Learn. Connect. Grow.</h1>
                {/* sub discription */}
                <p className="flex flex-col text-[#5B5966] text-xl text-center">
                    <span>
                        🚀 Upcoming: Join live sessions, workshops, and tech talks.
                    </span>
                    <span>
                        📼 Past: Watch on-demand. Real stories, real lessons.
                    </span>
                </p>
            </div>
        </section>
    )
}
