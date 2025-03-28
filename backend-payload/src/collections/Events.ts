import type { CollectionConfig } from 'payload'
import { validateURL } from './utils'
import adminsAndEditors from './access/adminsAndEditors'
import { admins } from './access/admins'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: { singular: 'Event', plural: 'Events' },
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
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      localized: true,
    },
    {
      name: 'host_name',
      type: 'text',
      required: true,
    },
    {
      name: 'host_image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      localized: true,
    },
    {
      name: 'host_socials',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['LinkedIn', 'GitHub', 'Twitter', 'Website', 'Youtube', 'Facebook'],
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
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'location_icon',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },

    {
      name: 'sponsors',
      type: 'relationship',
      relationTo: 'sponsors',
      required: false,
      hasMany: true,
    },
    {
      name: 'start_time',
      type: 'date',
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
      required: false,
    },
  ],
}
