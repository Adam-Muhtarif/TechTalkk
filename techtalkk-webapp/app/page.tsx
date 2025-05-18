import Footer from '@/components/version2-LandingPage/footer/footer'
import AboutUsSection from '@/components/version2-LandingPage/aboutUsSection/aboutUsSection'
import CurriculmSection from '@/components/version2-LandingPage/curriculm-section/curriculmSection'
import TestimonialSection from '@/components/version2-LandingPage/testemonials/testemonials'
import HeroSection from '@/components/version2-LandingPage/heroV2/hero/heroSection'
// import EventsSection from '@/components/version2-LandingPage/events-Section/events-section'

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      {/* <EventsSection /> */}
      <CurriculmSection />
      <TestimonialSection />
      <Footer />
    </>
  )
}
