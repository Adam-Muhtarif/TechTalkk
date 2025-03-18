import type { CollectionConfig } from 'payload'
import { checkRole } from './access/checkRole'
import { admins } from './access/admins'
import { protectRoles } from './hooks/protectRoles'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 28800, // 8 hours
    cookies: {
      secure: true,
    },
  },
  access: {
    admin: ({ req: { user } }) => checkRole(['admin',"editor"], user ? user : undefined),
    create: admins,
    read: admins,
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
      hasMany: true,
      saveToJWT: true,
      hooks: {
        beforeChange: [protectRoles],
      },
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
