import type { CollectionConfig } from 'payload'
import adminsAndEditors from './access/adminsAndEditors'
import { admins } from './access/admins'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media Item', plural: 'Media Items' },
  access: {
    read: () => true,
  },
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
