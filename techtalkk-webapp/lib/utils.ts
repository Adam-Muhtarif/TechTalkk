import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractYouTubeVideoID(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|embed|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

export function formatVideoDuration(duration: string): string {
  // Use regex to extract hours, minutes, and seconds from the ISO 8601 format that youtube uses
  // Example: "PT1H45M30S" → match[1] = "1", match[2] = "45", match[3] = "30"
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)

  if (!match) return '0m'

  // Convert the matched values to numbers,
  const hours = parseInt(match[1] || '0', 10)
  const minutes = parseInt(match[2] || '0', 10)

  // If there are no hours, return minutes as "Xm"
  if (hours === 0) {
    return `${minutes}m`
  }

  // If there are hours, return only hours as "Xh"
  return `${hours}h`
}

export function formatVideoLikes(likes: string | number): string {
  const num = typeof likes === 'string' ? parseInt(likes, 10) : likes

  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`
  }

  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`
  }

  return `${num}`
}

export function formatVideoViews(views: string | number): string {
  const num = typeof views === 'string' ? parseInt(views, 10) : views

  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M views`
  }

  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K views`
  }

  return `${num} views`
}
