import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Footer from '@/components/version2-LandingPage/footer/footer'
import CurriculmSection from '@/components/version2-LandingPage/curriculm-section/curriculmSection'
import TestimonialSection from '@/components/version2-LandingPage/testemonials/testemonials'
// import EventsSection from '@/components/version2-LandingPage/events-Section/events-section'

export default function page() {
  return (
    <>
      <Hero />
      <About />
      {/* <EventsSection /> */}
      <CurriculmSection />
      <TestimonialSection />
      <Footer />
    </>
  )
}
