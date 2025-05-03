import type React from "react"
import Image from "next/image"
import SectionInfo from "../components/SectionInfo"
import Message from "./Message.svg"
import { motion } from "motion/react"
import { TestimonialsGrid } from "./tastemonialCard"
// import TestimonialCard from "./tastemonialCard"
interface Testimonial {
    id: number
    name: string
    role: string
    quote: string
    avatar: string
    stars: number
}





export default function TestimonialSection() {
    return (
        <section className='overflow-hidden my-16 px-4 font-archivo relative'>
            {/* container */}
            <div className='max-w-7xl mx-auto relative'>
                {/* background pattern */}
                <Image src="/images/eventsSection/Background.png" width={907} height={645} alt='background' className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-999' />
                <SectionInfo title="See, Why People Love TechTalk ?" sectionName='Testimonials' icon={<Message />} description='Real stories from real people — learn how TechTalk is helping them grow skills and find success.
                ' />
                <TestimonialsGrid />
            </div>
        </section>
    )
}