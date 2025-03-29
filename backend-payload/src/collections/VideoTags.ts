import { CollectionConfig } from 'payload'
import { beforeChangeHook } from './hooks'

import { admins } from './access/admins'

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
