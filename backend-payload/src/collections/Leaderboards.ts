import type { CollectionConfig } from 'payload'
import { validateURL } from './utils'
import { admins } from './access/admins'

export const Leaderboard: CollectionConfig = {
  slug: 'leaderboard',
  labels: { singular: 'Leaderboard', plural: 'Leaderboards' },
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
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'image_remote',
      type: 'text',
      required: false,
    },
    {
      name: 'socials',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['LinkedIn', 'GitHub', 'Twitter', 'Website', 'Facebook'],
          required: false,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          validate: validateURL,
        },
      ],
    },
    {
      name: 'rank',
      type: 'number',
      required: true,
    },
  ],
}
