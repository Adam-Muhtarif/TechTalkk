import { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
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
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'blog-tags',
      hasMany: true,
      localized: true,
    },
    {
      name: 'cover_image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      localized: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
    },
  ],

  hooks: {
    // Automatically generate the slug from the title
    beforeChange: [
      ({ data }) => {
        if (data.title) {
          data.slug = data.title
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
