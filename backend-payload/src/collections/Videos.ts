import type { CollectionConfig } from 'payload'
import { validateYoutubeURL } from './utils'
import adminsAndEditors from './access/adminsAndEditors'
import { admins } from './access/admins'

export const Videos: CollectionConfig = {
  slug: 'videos',
  labels: { singular: "Video", plural: "Videos" },
  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
    create: adminsAndEditors,
    update: adminsAndEditors,
    delete: admins,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
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
      localized: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'video-tags',
      hasMany: true,
      required: false,
      localized: true,
    },
  ],
}
