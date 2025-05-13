import { slugField } from '@/fields/slug'
import { validateURL } from './hooks'
import type { CollectionConfig } from 'payload'
import { admins, adminsAndEditors } from '../access'


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
    ...slugField('title', {
      slugOverrides: {
        index: true,
        unique: true,
        admin: {
          position: 'sidebar',
        },
      },
    }),
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },

    // Todo we may add image in future but now haven't space

    {
      name: 'host_name',
      type: 'text',
      required: true,
    },
    {
      name: 'host_title',
      type: 'text',
      required: true,
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
      name: 'location_type',
      type: 'select',
      options: [
        {
          label: 'Virtual',
          value: 'virtual',
        },
        {
          label: 'On-site',
          value: 'on-site',
        },
      ],
      required: true,
      defaultValue: 'virtual',
    },
    {
      name: 'location',
      type: 'textarea',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sponsors',
      type: 'relationship',
      relationTo: 'sponsors',
      hasMany: true,
      required: false,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'start_time',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
    },
    {
      name: 'period',
      type: 'text',
      required: false,
    },
  ],
}
