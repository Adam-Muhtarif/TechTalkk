import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
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
    },
    {
      name: 'company_logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

