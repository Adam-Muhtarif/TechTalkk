import type { CollectionConfig } from 'payload'
import { validateURL } from './utils'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  labels: { singular: "Sponsor", plural: "Sponsors" },
  admin: {
    useAsTitle: 'company',
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
      name: 'company_logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      localized: true,
    },
  ],
}
