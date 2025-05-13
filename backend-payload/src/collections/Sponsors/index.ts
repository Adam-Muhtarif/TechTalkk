import { admins } from '../access'
import { validateURL } from '../Events/hooks'
import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  labels: { singular: 'Sponsor', plural: 'Sponsors' },
  admin: {
    useAsTitle: 'company',
  },

  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },

  fields: [
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'company_link',
      type: 'text',
      required: true,
      validate: validateURL,
    },
    {
      name: 'company_logo_remote',
      type: 'text',
      required: false,
    },
  ],
}
