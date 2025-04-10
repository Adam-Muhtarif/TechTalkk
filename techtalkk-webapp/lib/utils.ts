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

export function formatDuration(duration: string): string {
  // Use regex to extract hours, minutes, and seconds from the ISO 8601 format
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
