import { CollectionConfig } from 'payload'

export const VideoTags: CollectionConfig = {
  slug: 'video-tags',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.name) {
          data.slug = data.name
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-') // REPLACE SPACES WITH DASHES
            .replace(/[^\w-]+/g, '') // REMOVE SPECIAL CHARACTERS
        }
        return data
      },
    ],
  },
}
