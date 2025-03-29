import type { CollectionConfig } from 'payload'
import { validateURL } from './utils'
import adminsAndEditors from './access/adminsAndEditors'
import { admins } from './access/admins'

export const Instructors: CollectionConfig = {
  slug: 'instructors',
  labels: { singular: 'Instructor', plural: 'Instructors'},
  admin: {
    useAsTitle: 'name',
  },

  access: {
    read: () => true,
    create: adminsAndEditors,
    update: adminsAndEditors,
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
      name: 'bio',
      type: 'textarea',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      localized: true,
    },
    {
      name: 'instructor-socials',
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
  ],
}
