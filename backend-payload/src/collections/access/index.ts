import type { Access } from 'payload'

import checkRole from './checkRole'

export const admins: Access = ({ req: { user } }) => (user ? checkRole('admin', user) : false)

export const adminsAndEditors: Access = ({ req: { user } }) =>
  user ? checkRole(['admin', 'editor'], user) : false
