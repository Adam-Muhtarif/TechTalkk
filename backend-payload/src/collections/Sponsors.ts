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
      validate: (value) => {
        const urlRegex =
          /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/
        if (!urlRegex.test(value)) return 'Invalid URL'

        return true
      },
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
