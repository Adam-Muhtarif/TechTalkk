import type { Access } from 'payload'
import { checkRole } from './checkRole'

const adminsAndEditors: Access = ({ req: { user } }) => {
  if (!user) return false; // No user, no access
  return checkRole(['admin', 'editor'], user); // Allow only admins & editors
}

export default adminsAndEditors
