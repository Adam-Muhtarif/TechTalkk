import { admins } from '../access'
import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const VideoTags: CollectionConfig = {
  slug: 'video-tags',
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
