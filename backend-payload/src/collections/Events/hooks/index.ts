export function validateURL(link: string | null | undefined) {
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/

  if (link && !urlRegex.test(link)) return 'Invalid URL'

  return true
}
