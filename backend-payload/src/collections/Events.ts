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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image_remote',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'host_name',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'host_image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'host_image_remote',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar',
      },
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location_icon',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'sponsors',
      type: 'relationship',
      relationTo: 'sponsors',
      required: false,
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'start_time',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'period',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
