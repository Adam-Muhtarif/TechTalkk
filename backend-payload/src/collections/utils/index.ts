export function validateLink(link: string | null | undefined) {
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/

  if (link && !urlRegex.test(link)) return 'Invalid URL'

  return true
}

export function validateYoutubeLink(link: string | null | undefined) {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+$/

  if (link && !youtubeRegex.test(link)) return 'Invalid YouTube Link'

  return true
}
