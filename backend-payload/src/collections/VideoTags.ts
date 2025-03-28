import { CollectionConfig } from 'payload'
import { beforeChangeHook } from './hooks'

export const VideoTags: CollectionConfig = {
  slug: 'video-tags',
  admin: {
    useAsTitle: 'name',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
  ],

  hooks: {
    beforeChange: [beforeChangeHook],
  },
}
