import type { CollectionConfig } from 'payload'
import { validateYoutubeLink } from './utils'

export const Videos: CollectionConfig = {
  slug: 'videos',
  admin: {
    useAsTitle: 'title',
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
      validate: (value: string | null | undefined) => validateYoutubeLink(value),
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
