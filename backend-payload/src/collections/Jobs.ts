import { CollectionConfig } from 'payload'
import { admins } from './access/admins'
import { validateURL } from './utils'
import adminsAndEditors from './access/adminsAndEditors'

export const JobPosts: CollectionConfig = {
  slug: 'jobs',
  labels: { singular: 'Job Post', plural: 'Job Posts' },
  admin: { useAsTitle: 'title' },

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
      admin: { position: 'sidebar' },
    },
    {
      name: 'company_name',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'company_link',
      type: 'text',
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'company_logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'company_logo_remote',
      type: 'text',
      required: false,
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
      type: 'number',
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'apply_link',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
      validate: validateURL,
    },
    {
      name: 'posted_at',
      type: 'date',
      admin: { position: 'sidebar' },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'expires_at',
      type: 'date',
      required: true,
      admin: { position: 'sidebar' },
    },
  ],
}
