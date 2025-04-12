import AboutUs from '@/components/home/about'
import ContactForm from '@/components/home/contactForm'
import Courses from '@/components/home/courses'
// import Blogs from "@/components/home/blogs";
import Hero from '@/components/home/hero'
import MeetUps from '@/components/home/meetUps'

const HomePage = () => {
  return (
    <div className="mx-auto container overflow-x-hidden">
      <Hero />
      <AboutUs />
      <MeetUps />
      {/* <Blogs /> */}
      <Courses />
      <ContactForm />
    </div>
  )
}
export default HomePage
