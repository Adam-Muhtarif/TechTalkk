import { CollectionConfig } from 'payload'
import { beforeChangeHook } from './hooks'
import { admins } from './access/admins'

export const BlogTags: CollectionConfig = {
  slug: 'blog-tags',
  admin: {
    useAsTitle: 'name',
  },

  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
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
