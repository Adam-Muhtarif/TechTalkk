import type { CollectionConfig } from 'payload'
import { checkRole } from './access/checkRole'
import { admins } from './access/admins'
import { resetPasswordEmail, verifyEmail } from './utils'

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
    admin: ({ req: { user } }) => checkRole(['admin', 'editor'], user ? user : undefined),
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'image_remote',
      type: 'text',
      required: false,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
