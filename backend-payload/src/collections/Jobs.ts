import { CollectionConfig } from 'payload'
import { admins } from './access/admins'
import { validateURL } from './utils'

const JobPosts: CollectionConfig = {
  slug: 'job-posts',
  labels: { singular: 'Job Post', plural: 'Job Posts' },
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true, // Publicly readable
    create: admins,
    update: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'company_logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'location',
      type: 'select',
      required: true,
      admin: { position: 'sidebar' },
      options: [
        { label: 'Remote', value: 'remote' },
        { label: 'Hybrid', value: 'hybrid' },
        { label: 'On-site', value: 'onsite' },
      ],
    },
    {
      name: 'job_type',
      type: 'select',
      required: true,
      admin: { position: 'sidebar' },
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
        { label: 'Internship', value: 'internship' },
      ],
    },
    {
      name: 'salary',
      type: 'text',
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'apply_link',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
      validate: validateURL,
    },
    {
      name: 'postedAt',
      type: 'date',
      admin: { position: 'sidebar' },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'expiresAt',
      type: 'date',
      required: true,
      admin: { position: 'sidebar' },
    },
  ],
}

export default JobPosts
