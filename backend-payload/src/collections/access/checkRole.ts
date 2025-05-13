import type { User } from '../../payload-types'

const checkRole = (roles: User['role'] | Array<User['role']> = [], user: User): boolean => {
  if (!user) return false

  if (typeof roles === 'string') return user.role === roles

  if (Array.isArray(roles) && roles.some((role) => user.role === role)) return true

  return false
}

export default checkRole
