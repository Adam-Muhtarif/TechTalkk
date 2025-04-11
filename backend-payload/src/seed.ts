import { CollectionSlug, getPayload } from 'payload'
import config from '@payload-config'
import {
  blogs,
  blogTags,
  events,
  instructors,
  jobs,
  leaderboard,
  sponsors,
  users,
  videos,
  videoTags,
} from './data'

const payload = await getPayload({ config })
const collections: CollectionSlug[] = [
  'users',
  'sponsors',
  'leaderboard',
  'blog-tags',
  'video-tags',
  'blogs',
  'videos',
  'events',
  'instructors',
  'jobs',
]

export const seed = async () => {
  // DELETE ALL DOCUMENTS IN EACH COLLECTION
  payload.logger.info('🌱   CLEANING COLLECTIONS...')
  for (const collection of collections) {
    await payload.delete({
      collection: collection,
      where: {},
    })
  }

  payload.logger.info('✅ DONE CLEANING ALL COLLECTIONS.')

  payload.logger.info('🌱 SEEDING DATA...')

  // USERS
  for (const user of users) {
    await payload.create({
      collection: 'users',
      data: {
        email: user.email,
        fullName: user.fullName,
        password: user.password,
        role: user.role === 'admin' || user.role === 'editor' ? user.role : 'admin',
        isActive: user.isActive,
        _verified: user._verified,
      },
    })
  }

  // MEDIA – DUMMY FILE OBJECT
  // for (let i = 0; i < 5; i++) {
  //   await payload.create({
  //     collection: 'media',
  //     data: {
  //       alt: `Seeded media ${i + 1}`,
  //     },
  //     filePath: 'path/to/dummy-image.jpg', // YOU MUST PROVIDE A REAL FILE PATH OR MOCK FILE UPLOAD
  //   })
  // }

  // SPONSORS
  for (const sponsor of sponsors) {
    await payload.create({
      collection: 'sponsors',
      data: {
        company: sponsor.company,
        company_link: sponsor.company_link,
        company_logo_remote: sponsor.company_logo_remote,
      },
    })
  }

  // INSTRUCTORS
  for (const instructor of instructors) {
    await payload.create({
      collection: 'instructors',
      data: {
        name: instructor.name,
        title: instructor.title,
        bio: instructor.bio,
        image_remote: instructor.image_remote,
        instructor_socials: instructor.instructor_socials.map((social) => ({
          platform: social.platform as 'GitHub' | 'LinkedIn' | 'Twitter' | 'Website' | 'Facebook',
          url: social.url,
        })),
      },
    })
  }

  // LEADERBOARDS
  for (const person of leaderboard) {
    await payload.create({
      collection: 'leaderboard',
      data: {
        name: person.name,
        title: person.title,
        image_remote: person.image_remote,
        rank: person.rank,
        socials: person.socials.map((social) => ({
          platform: social.platform as 'GitHub' | 'LinkedIn' | 'Twitter' | 'Website' | 'Facebook',
          url: social.url,
        })),
      },
    })
  }

  // BLOG TAGS
  for (const tag of blogTags) {
    await payload.create({
      collection: 'blog-tags',
      data: {
        name: tag.name,
        slug: tag.slug,
      },
    })
  }

  // VIDEO TAGS
  for (const tag of videoTags) {
    await payload.create({
      collection: 'video-tags',
      data: {
        name: tag.name,
        slug: tag.slug,
      },
    })
  }

  // BLOGS
  for (const blog of blogs) {
    await payload.create({
      collection: 'blogs',
      data: {
        title: blog.title,
        slug: blog.slug,
        content: {
          ...blog.content,
          root: {
            ...blog.content.root,
            format: blog.content.root.format as
              | ''
              | 'left'
              | 'start'
              | 'center'
              | 'right'
              | 'end'
              | 'justify',
          },
        },
        author: blog.author,
        tags: [(await payload.find({ collection: 'blog-tags' })).docs[0]],
        cover_image_remote: blog.cover_image_remote,
        status: blog.status as 'published' | 'draft',
      },
    })
  }

  // VIDEOS
  const instructorsList = (await payload.find({ collection: 'instructors' })).docs
  const tagsList = (await payload.find({ collection: 'video-tags' })).docs
  for (const video of videos) {
    const randomInstructor = instructorsList[Math.floor(Math.random() * instructorsList.length)]
    const randomTag = tagsList[Math.floor(Math.random() * tagsList.length)]

    await payload.create({
      collection: 'videos',
      data: {
        youtube_link: video.youtube_link,
        instructor: randomInstructor.id,
        tags: [randomTag],
      },
    })
  }

  // EVENTS
  for (const event of events) {
    await payload.create({
      collection: 'events',
      data: {
        title: event.title,
        description: event.description,
        image_remote: event.image_remote,
        host_name: event.host_name,
        host_image_remote: event.host_image_remote,
        host_socials: event.host_socials.map((social) => ({
          platform: social.platform as 'GitHub' | 'LinkedIn' | 'Twitter' | 'Website' | 'Facebook',
          url: social.url,
        })),
        location: event.location,
        location_icon: event.location_icon,
        sponsors: [],
        start_time: event.start_time,
        period: event.period,
      },
    })
  }

  // JOB POSTS
  for (const job of jobs) {
    await payload.create({
      collection: 'jobs',
      data: {
        title: job.title,
        company_name: job.company_name,
        company_link: job.company_link,
        company_logo_remote: job.company_logo_remote,
        location: job.location as 'remote' | 'hybrid' | 'onsite',
        job_type: job.job_type as 'full-time' | 'part-time' | 'contract' | 'internship',
        salary: job.salary,
        apply_link: job.apply_link,
        posted_at: job.posted_at,
        expires_at: job.expires_at,
      },
    })
  }

  payload.logger.info('✅ DONE SEEDING ALL COLLECTIONS.')
}

seed()
