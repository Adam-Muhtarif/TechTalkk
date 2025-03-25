import type { CollectionConfig } from 'payload'
import { checkRole } from './access/checkRole'
import { admins } from './access/admins'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'User', plural: 'Users' },
  auth: {
    tokenExpiration: 28800, // 8 hours
    cookies: {
      secure: true,
    },
  },
  access: {
    admin: ({ req: { user } }) => checkRole(['admin', 'editor'], user ? user : undefined),
    read: admins,
    create: admins,
    update: admins,
  },

  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      saveToJWT: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: 'editor',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      localized: true,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
