import { CollectionBeforeChangeHook } from 'payload'

// Automatically generate the slug
// Todo remove this we migrated to use custom slug field
export const beforeChangeHook: CollectionBeforeChangeHook = async ({ data }) => {
  if (data.title) {
    data.slug = data.title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-') // REPLACE SPACES WITH DASHES
      .replace(/[^\w-]+/g, '') // REMOVE SPECIAL CHARACTERS
  }

  if (data.name) {
    data.slug = data.name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-') //
      .replace(/[^\w-]+/g, '')
  }
  console.log('data', data)
  return data
}
