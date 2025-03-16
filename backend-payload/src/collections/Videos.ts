import type { CollectionConfig } from 'payload'

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
      validate: (value) => {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+$/
        if (!youtubeRegex.test(value)) {
          return 'Invalid YouTube Link'
        }
        return true
      },
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
