// import CourseCard from "./CourseCard";
import CourseCard2 from "./CourseCard";

const Courses = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full py-1 dark:bg-gray-950'>
      <div className='absolute h-[790px] w-full bg-[#E5E8FA] -z-30'></div>
      <h1 className='flex flex-col sm:flex-row  font-sans text-2xl text-center max-w-[500px] sm:max-w-full md:text-4xl md:my-10 font-bold'>
        Join Us Today & Get Valuable<span className='text-[#4E60EE] ml-2'>Courses</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <CourseCard2
          id='html-mastery'
          title='HTML Mastery: Build Stunning Web Interfaces from Scratch'
          description='Learn the fundamentals of web structure using HTML. From tags to semantic layout, forms to accessibility — gain hands-on experience in crafting clean, professional web pages.'
          image='/images/home/html.png'
          instructor={{
            name: "Eng. Ahmed",
            avatar: "/placeholder.svg?height=100&width=100",
            title: "Frontend Developer & Educator",
          }}
          category={["Web Development", "HTML", "Frontend Basics"]}
          difficulty='Beginner'
          modules={30}
          duration={3}
          members={3100}
          rating={4.8}
          reviewCount={320}
        />

        <CourseCard2
          id='js-mastery'
          title='JavaScript Mastery: From Fundamentals to Advanced Concepts'
          description='Deep dive into JavaScript — master variables, loops, functions, asynchronous programming, DOM manipulation, and ES6+. Build interactive web applications and real-world projects.'
          image='/images/home/js.png'
          instructor={{
            name: "Eng. Muse",
            avatar: "/placeholder.svg?height=100&width=100",
            title: "JavaScript Developer & Educator",
          }}
          category={["Web Development", "JavaScript", "Programming"]}
          difficulty='Intermediate'
          modules={45}
          duration={5}
          members={2700}
          rating={4.7}
          reviewCount={290}
        />

        <CourseCard2
          id='react-mastery'
          title='React.js Mastery: Build Professional Web Applications'
          description='Master React.js and its ecosystem. Learn component architecture, state management, React Router, hooks, Context API, and build responsive, production-ready web apps.'
          image='/images/home/react.png'
          instructor={{
            name: "Eng. Farah",
            avatar: "/placeholder.svg?height=100&width=100",
            title: "React Specialist & UI Engineer",
          }}
          category={["Web Development", "React", "Frontend Framework"]}
          difficulty='Advanced'
          modules={50}
          duration={12}
          members={1850}
          rating={4.9}
          reviewCount={215}
        />
      </div>
    </section>
  );
};
export default Courses;
