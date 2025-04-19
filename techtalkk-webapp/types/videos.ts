export type Tag = {
  id: string
  slug: string
}

export type InstructorSocials = {
  id: string
  url: string
  platform: string
}

type Instructor = {
  name: string
  image: string | null
  image_remote: string | null
  instructor_socials: InstructorSocials[]
}

export type Video = {
  id: string
  tags: Tag[]
  youtube_link: string
  instructor: Instructor
}
