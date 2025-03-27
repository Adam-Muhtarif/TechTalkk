import { CollectionConfig } from 'payload'

export const BlogTags: CollectionConfig = {
  slug: 'blog-tags',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      unique: true,
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
          data.slug = generateSlug(data.name); // Replace inline logic with the function
        }
        return data;
      },
    ],
  },
}
