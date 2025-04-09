import AboutUs from "@/components/home/AboutUs"
import ContactForm from "@/components/home/ContactForm"
import Courses from "@/components/home/Courses"
// import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/Hero"
import MeetUps from "@/components/home/MeetUps"

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
