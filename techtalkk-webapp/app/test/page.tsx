import AboutUsSection from '@/components/version2-LandingPage/aboutUsSection/aboutUsSection'
import CurriculmSection from '@/components/version2-LandingPage/curriculm-section/curriculmSection'
import EventsSection from '@/components/version2-LandingPage/events-Section/events-section'
import TestimonialSection from '@/components/version2-LandingPage/testemonials/testemonials'
import React from 'react'

export default function page() {
    return (
        <>
            <AboutUsSection />
            <EventsSection />
            <CurriculmSection />
            <TestimonialSection />
        </>
    )
}
