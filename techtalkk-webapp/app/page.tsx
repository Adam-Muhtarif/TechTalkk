import HeroV2 from '@/components/version2-LandingPage/heroV2/heroV2'
import Footer from '@/components/version2-LandingPage/footer/footer'
import AboutUsSection from '@/components/version2-LandingPage/aboutUsSection/aboutUsSection'
import CurriculmSection from '@/components/version2-LandingPage/curriculm-section/curriculmSection'
import TestimonialSection from '@/components/version2-LandingPage/testemonials/testemonials'
// import EventsSection from '@/components/version2-LandingPage/events-Section/events-section'

export default function page() {
  return (
    <>
      <HeroV2 />
      <AboutUsSection />
      {/* <EventsSection /> */}
      <CurriculmSection />
      <TestimonialSection />
      <Footer />
    </>
  )
}
