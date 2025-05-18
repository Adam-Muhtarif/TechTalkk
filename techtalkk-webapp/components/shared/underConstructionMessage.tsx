import { Construction } from 'lucide-react'

export default function UnderConstructionMessage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-10 bg-gradient-to-br ">
      <div className="bg-[#5E16EC] text-white p-4 rounded-full mb-6">
        <Construction className="w-10 h-10" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
        Page Under Development
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
        This page is currently under development or maintenance. We&apos;re working hard to make it
        available soon. Please check back later.
      </p>
    </div>
  )
}
