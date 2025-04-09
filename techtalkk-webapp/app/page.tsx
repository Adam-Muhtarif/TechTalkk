import AboutUs from "@/components/ui/home/AboutUs";
import ContactForm from "@/components/ui/home/ContactForm";
import Courses from "@/components/ui/home/Courses";
// import Blogs from "@/components/ui/home/Blogs";
import Hero from "@/components/ui/home/Hero";
import MeetUps from "@/components/ui/home/MeetUps";

const HomePage = () => {
  return (
    <div className='mx-auto container overflow-x-hidden'>
      <Hero />
      <AboutUs />
      <MeetUps />
      {/* <Blogs /> */}
      <Courses />
      <ContactForm />
    </div>
  );
};
export default HomePage;
