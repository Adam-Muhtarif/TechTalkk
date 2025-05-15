import type { FieldHook } from 'payload'

// ✅ UPDATED TO SUPPORT ARABIC CHARACTERS
export const formatSlug = (val: string): string =>
  val
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^\w-]+/g, '') // Remove everything except a–z, 0–9, underscores, and dashes
    .toLowerCase()

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    return value
  }
