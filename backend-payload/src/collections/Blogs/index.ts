import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'
import { admins, adminsAndEditors } from '../access'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  labels: { singular: 'Blog', plural: 'Blogs' },
  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
    create: adminsAndEditors,
    update: adminsAndEditors,
    delete: admins,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField('title', {
      slugOverrides: {
        index: true,
        unique: true,
      },
    }),
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      required: true,
      relationTo: 'blog-tags',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
