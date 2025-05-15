import { validateYoutubeURL } from './hooks'
import type { CollectionConfig } from 'payload'
import { admins, adminsAndEditors } from '../access'

export const Videos: CollectionConfig = {
  slug: 'videos',
  labels: { singular: 'Video', plural: 'Videos' },
  admin: {
    useAsTitle: 'youtube_link',
  },

  access: {
    read: () => true,
    create: adminsAndEditors,
    update: adminsAndEditors,
    delete: admins,
  },

  fields: [
    {
      name: 'youtube_link',
      type: 'text',
      unique: true,
      required: true,
      validate: validateYoutubeURL,
    },
    {
      name: 'instructor',
      type: 'relationship',
      relationTo: 'instructors',
      required: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'video-tags',
      hasMany: true,
      required: true,
    },
  ],
}
