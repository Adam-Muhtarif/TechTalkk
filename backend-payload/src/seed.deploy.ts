import { CollectionSlug, getPayload } from 'payload'
import config from '@payload-config'

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
  await payload.create({
    collection: 'users',
    data: {
      email: 'techtalkk.community@gmail.com',
      fullName: 'admin',
      password: '123',
      role: 'admin',
      isActive: true,
      _verified: true,
    },
  })

  payload.logger.info('✅ DONE SEEDING ALL COLLECTIONS.')
  process.exit()
}

await seed()
