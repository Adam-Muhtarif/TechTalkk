import type { User } from '../../payload-types'

export const checkRole = (
  allRoles: Array<User['role']> = [],
  user: User | undefined = undefined,
): boolean => {
  if (user) {
    if (
      allRoles.some((role) => {
        return user?.role === role
      })
    ) {
      return true
    }
  }

  return false
}
