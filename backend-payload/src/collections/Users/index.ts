import { admins } from '../access'
import type { CollectionConfig } from 'payload'
import { resetPasswordEmail, verifyEmail } from './emails'

import checkRole from '../access/checkRole'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'User', plural: 'Users' },
  auth: {
    verify: {
      generateEmailSubject: () => 'Verify your email',
      generateEmailHTML: verifyEmail,
    },

    forgotPassword: {
      generateEmailSubject: (args) => {
        return `Hey ${args?.user.fullName}, reset your password!`
      },
      generateEmailHTML: resetPasswordEmail,
    },

    tokenExpiration: 28800, // 8 hours after login
    cookies: {
      secure: true,
    },
  },

  access: {
    admin: ({ req: { user } }) => (user ? checkRole(['admin', 'editor'], user) : false),
    read: admins,
    create: admins,
    update: admins,
    delete: admins,
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
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
