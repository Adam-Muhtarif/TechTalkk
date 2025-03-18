import type { FieldHook } from 'payload'
import type { User } from '../../payload-types'

export const protectRoles: FieldHook<{ id: string } & User> = ({ data, req }) => {
  const isAdmin = req.user?.role.includes('admin') || data?.email === 'demo@payloadcms.com' // for the seed script

  if (!isAdmin) {
    return ['editor']
  }

  const userRoles = new Set(data?.role || [])
  userRoles.add('editor')
  return [...userRoles]
}
