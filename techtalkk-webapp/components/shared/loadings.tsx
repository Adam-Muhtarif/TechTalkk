import React from 'react'

export function DataLoading() {
  return (
    <div className="flex items-center justify-center w-full h-full py-20">
      <div className="w-12 h-12 border-4 border-t-transparent border-[#4C0BF7] rounded-full animate-spin"></div>
    </div>
  )
}

export function CardLoading({ className }: { className?: string }) {
  return <div className={`w-full h-50 bg-gray-300 animate-pulse rounded ${className}`}></div>
}

export function AvatarLoading({ className }: { className?: string }) {
  return <div className={`w-15 h-15 bg-gray-300 animate-pulse rounded-full ${className}`}></div>
}
