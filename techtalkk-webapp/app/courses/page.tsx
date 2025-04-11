import LandingSection from '@/components/shared/landingSection'
import Pagination from '@/components/shared/pagination'

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
  image_remote: string | null
  instructor_socials: InstructorSocials[]
}

export type Course = {
  id: string
  youtube_link: string
  tags: Tag[]
  instructor: Instructor
}

export default async function Courses() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-30 overflow-x-hidden">
      {/* Landing */}
      <LandingSection
        title="find your suitable"
        info="courses"
        className="h-3 w-[14rem] top-[3.5rem] right-[33rem]"
      />

      {/* Courses Cards */}
      <Pagination slug="videos" limit={8} />
    </main>
  )
}
