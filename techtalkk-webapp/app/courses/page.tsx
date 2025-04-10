import CourseCard from '@/components/courses/courseCard'
import FilterSection from '@/components/courses/filterSection'
import LandingSection from '@/components/shared/landingSection'

export type Tag = {
  id: string
  slug: string
}

export type InstructorSocials = {
  id: string
  platform: string
  url: string
}

type Instructor = {
  name: string
  image: string | null
  remote_image: string | null
  instructor_socials: InstructorSocials[]
}

export type Course = {
  id: string
  youtube_link: string
  tags: Tag[]
  instructor: Instructor
}

export default async function Courses() {
  const res = await fetch(`${process.env.SERVER_URL}/api/videos`, {
    cache: 'no-store',
  })

  const courses = await res.json()

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-30 overflow-x-hidden">
      {/* Landing */}
      <LandingSection
        title="find your suitable"
        info="courses"
        className="h-3 w-[14rem] top-[3.5rem] right-[33rem]"
      />

      {/* Filter & search */}
      <FilterSection />

      {/* Courses Cards */}
      <section
        aria-label="Courses"
        className="w-full mb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
      >
        {courses.docs.map((course: Course) => (
          <CourseCard
            key={course.id}
            youtubeLink={course.youtube_link}
            tags={course.tags}
            instructorName={course.instructor.name}
            instructorImage={
              course.instructor?.remote_image ??
              course.instructor?.image ??
              '/images/member-test.png'
            }
            instructorSocials={course.instructor.instructor_socials}
          />
        ))}
      </section>
    </main>
  )
}
