import { CollectionConfig } from 'payload'

import { admins } from '../access'
import { slugField } from '@/fields/slug'

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
    ...slugField('name', {
      slugOverrides: {
        index: true,
        unique: true,
      },
    }),
  ],
}
