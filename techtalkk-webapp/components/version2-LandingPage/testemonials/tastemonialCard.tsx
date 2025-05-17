"use client"
import React from 'react'
import UserImage from "../../../public/images/testemonials-v2/UserImage.svg"
import * as motion from "motion/react-client"

interface Testimonial {
    id: number
    name: string
    role: string
    quote: string
    avatar: string
    stars: number
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className=" relative overflow-clip rounded-3xl p-6 shadow-about-card before:content-[''] before:w-full before:h-full before:bg-linear-to-t before:from-[#923CF6]/84 before:absolute before:to-[#ffffff]/39 before:-bottom-[165px] before:left-0 min-w-[459px]">

            <div className="flex flex-col justify-between items-start gap-4 h-full">

                <p className="text-base md:text-lg">"{testimonial.quote.slice(0, 100)}"</p>
                <div className="bg-[#171717]/20 w-full h-[0.3px]"></div>
                <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <UserImage />
                        {/* <Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" /> */}
                    </div>

                    <div>
                        <h3 className="font-medium text-[16px]">{testimonial.name}</h3>
                        <div className="ml-auto flex">
                            {Array.from({ length: testimonial.stars }).map((_, i) => (
                                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}

export function TestimonialsGrid() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Mike T.",
            role: "Project Manager",
            quote: "Joining TechTalk changed everything. I finally feel confident building real projects!Joining TechTalk changed everything. I finally feel confident building real projects!Joining TechTalk changed everything. I finally feel confident building real projects!",
            avatar: "/placeholder.svg?height=80&width=80",
            stars: 5,
        },
        {
            id: 2,
            name: "John P.",
            role: "Marketing Director",
            quote: "The live coding sessions helped me learn faster than any course I tried before.",
            avatar: "/placeholder.svg?height=80&width=80",
            stars: 5,
        },
        {
            id: 3,
            name: "David K.",
            role: "Software Developer",
            quote: "Before TechTalk, coding felt confusing. Now, it's clear and exciting every day!",
            avatar: "/placeholder.svg?height=80&width=80",
            stars: 5,
        },
        {
            id: 4,
            name: "Phillip W.",
            role: "Product Designer",
            quote: "I met my mentor through TechTalk — now I'm working on my dream startup!",
            avatar: "/placeholder.svg?height=80&width=80",
            stars: 5,
        },
        {
            id: 5,
            name: "Carlos R.",
            role: "Software Engineer",
            quote: "Joining TechTalk changed everything. I finally feel confident building real projects!",
            avatar: "/placeholder.svg?height=80&width=80",
            stars: 5,
        },
        {
            id: 6,
            name: "Sarah L.",
            role: "Operations Lead",
            quote: "TechTalk gave me the skills I needed to grow in my career!",
            avatar: "/placeholder.svg?height=80&width=80",
            stars: 5,
        },
    ]

    return (
        <section className="overflow-hidden mt-16 px-4 font-archivo relative">
            {/* from right to left */}
            <div className="container mx-auto max-w-7xl py-2"
            >
                <motion.div className="flex gap-5 flex-none"
                    initial={{ translateX: 0 }}
                    animate={{ translateX: "-100%" }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </motion.div>
            </div>

            {/* from left to right */}
            <div className="container mx-auto max-w-7xl py-2"
            >
                <motion.div className="flex gap-5 flex-none"
                    initial={{ translateX: "-100%" }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </motion.div>
            </div>

        </section >
    )
}