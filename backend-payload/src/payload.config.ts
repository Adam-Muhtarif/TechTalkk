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
 import { Sponsors } from './collections/Sponsors'
 import { Leaderboards } from './collections/Leaderboards'
 import { BlogTags } from './collections/BlogTags'
 import { VideoTags } from './collections/VideoTags'
 import { Blogs } from './collections/Blogs'
 import { Events } from './collections/Events'
 import { Instructors } from './collections/Instructors'
 import { Videos } from './collections/Videos'
 
 const filename = fileURLToPath(import.meta.url)
 const dirname = path.dirname(filename)
const corsOrigins = process.env.CORS_ORIGINS?.split(',') || [];
 
 export default buildConfig({
   serverURL: process.env.PUBLIC_EXTERNAL_SERVER_URL || 'http://localhost:8000',
 
   admin: {
     user: Users.slug,
     importMap: {
       baseDir: path.resolve(dirname),
     },
   },
  cors: {
    origin: corsOrigins,
    credentials: true,
  },
   collections: [
     Users,
     Media,
     Sponsors,
     Leaderboards,
     BlogTags,
     VideoTags,
     Blogs,
     Videos,
     Events,
     Instructors,
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
     migrationDir: './migrations',
     idType: 'uuid',
   }),
   sharp,
   plugins: [
     payloadCloudPlugin(),
     // storage-adapter-placeholder
   ],
 })