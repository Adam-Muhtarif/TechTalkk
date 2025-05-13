import type { CollectionConfig } from 'payload'
import { admins, adminsAndEditors } from './access'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media Item', plural: 'Media Items' },
  access: {
    read: () => true,
    create: adminsAndEditors,
    update: adminsAndEditors,
    delete: admins,
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
