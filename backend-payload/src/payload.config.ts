// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Blogs } from './collections/Blogs'
import { Videos } from './collections/Videos'
import { Events } from './collections/Events'
import { Sponsors } from './collections/Sponsors'
import { VideoTags } from './collections/Videos/VideoTags'
import { BlogTags } from './collections/Blogs/BlogTags'
import { JobPosts } from './collections/Jobs'
import { Leaderboard } from './collections/Leaderboard'
import { Instructors } from './collections/Instructors'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const corsOrigins = process.env.CORS_ORIGINS?.split(',') || []

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || 'http://localhost:8000',
  cors: {
    origins: corsOrigins,
  },
  routes: {
    admin: '/admin',
    api: '/api',
  },
  email: nodemailerAdapter({
    defaultFromAddress: 'techtalkk.community@gmail.com',
    defaultFromName: 'TeachTalkk',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Sponsors,
    Leaderboard,
    BlogTags,
    VideoTags,
    Blogs,
    Videos,
    Events,
    Instructors,
    JobPosts,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    idType: 'uuid',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
