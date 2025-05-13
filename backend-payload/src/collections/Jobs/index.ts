import { validateURL } from '../Events/hooks'
import { CollectionConfig } from 'payload'
import { admins, adminsAndEditors } from '../access'

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
    },
    {
      name: 'company_name',
      type: 'text',
      required: true,
    },
    {
      name: 'company_link',
      type: 'text',
      required: false,
    },
    {
      name: 'company_logo_remote',
      type: 'text',
      required: false,
    },
    {
      name: 'location',
      type: 'select',
      required: true,
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
    },
    {
      name: 'apply_link',
      type: 'text',
      required: true,
      validate: validateURL,
    },
    {
      name: 'posted_at',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'expires_at',
      type: 'date',
      required: true,
    },
  ],
}
