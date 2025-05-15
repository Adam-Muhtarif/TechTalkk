export function validateYoutubeURL(link: string | null | undefined) {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+$/

  if (link && !youtubeRegex.test(link)) return 'Invalid YouTube Link'

  return true
}
