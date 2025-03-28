import { CollectionConfig } from 'payload'
import { beforeChangeHook } from './hooks'

export const BlogTags: CollectionConfig = {
  slug: 'blog-tags',
  admin: {
    useAsTitle: 'name',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      unique: true,
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
