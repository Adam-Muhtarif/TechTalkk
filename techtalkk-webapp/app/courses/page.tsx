'use client'

import CourseCard from '@/components/courses/courseCard'
import FilterSection from '@/components/courses/filterSection'
import LandingSection from '@/components/shared/landingSection'
import Navbar from '@/components/shared/navbar'

export default function Courses() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-30 overflow-x-hidden">
      {/* Nav */}
      <Navbar />

      {/* Landing */}
      {/* Todo: make it reusable component */}
      <LandingSection title="courses" info="find your suitable" />

      {/* Filter & search */}
      <FilterSection />

      {/* Cards */}
      <section className="w-full flex items-center justify-between gap-5 flex-wrap">
        <CourseCard
          image="/images/blogs/article1.png"
          title="ux design beginner"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae reprehenderit
          laboriosam nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam
          nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam nam autem
          eum eos non, eaque adipisci doloribus, minima praesentium"
          rating={4.3}
          period={1}
          lessons={14}
          instructorName="John Doe"
          instructorImage="/images/member-test.png"
        />
        <CourseCard
          image="/images/blogs/article1.png"
          title="ux design beginner"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae reprehenderit
          laboriosam nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam
          nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam nam autem
          eum eos non, eaque adipisci doloribus, minima praesentium"
          rating={4.3}
          period={1}
          lessons={14}
          instructorName="John Doe"
          instructorImage="/images/member-test.png"
        />
        <CourseCard
          image="/images/blogs/article1.png"
          title="ux design beginner"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae reprehenderit
          laboriosam nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam
          nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam nam autem
          eum eos non, eaque adipisci doloribus, minima praesentium"
          rating={4.3}
          period={1}
          lessons={14}
          instructorName="John Doe"
          instructorImage="/images/member-test.png"
        />
        <CourseCard
          image="/images/blogs/article1.png"
          title="ux design beginner"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae reprehenderit
          laboriosam nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam
          nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam nam autem
          eum eos non, eaque adipisci doloribus, minima praesentium"
          rating={4.3}
          period={1}
          lessons={14}
          instructorName="John Doe"
          instructorImage="/images/member-test.png"
        />
        <CourseCard
          image="/images/blogs/article1.png"
          title="ux design beginner"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae reprehenderit
          laboriosam nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam
          nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam nam autem
          eum eos non, eaque adipisci doloribus, minima praesentium"
          rating={4.3}
          period={1}
          lessons={14}
          instructorName="John Doe"
          instructorImage="/images/member-test.png"
        />
        <CourseCard
          image="/images/blogs/article1.png"
          title="ux design beginner"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae reprehenderit
          laboriosam nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam
          nam autem eum eos non, eaque adipisci doloribus, minima praesentium laboriosam nam autem
          eum eos non, eaque adipisci doloribus, minima praesentium"
          rating={4.3}
          period={1}
          lessons={14}
          instructorName="John Doe"
          instructorImage="/images/member-test.png"
        />
      </section>
    </main>
  )
}
