import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, MapPinIcon } from "lucide-react"
import Image from "next/image"

// this page was hardcoded - just to showcase the design
// this will be changed into a dynamic route later

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 text-black lg:px-8 font-geist-sans">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column - Image and Hosts */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-square bg-black">
                <div className="relative h-full w-full">
                  <Image src="/images/events/youre-invited.png" alt="Event pattern background" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium">Hosted By</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z"
                          fill="#3ECF8E"
                          stroke="#3ECF8E"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">TechTalk</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/images/about-us/image.png" alt="myonisto" />
                    <AvatarFallback>MO</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">myonisto</span>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium">30 Going</h3>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Avatar key={i} className="border-2 border-purple-950">
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                        alt={`Attendee ${i + 1}`}
                      />
                      <AvatarFallback>{i + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Mohamed Abdirahman Mohamoud, Ridwan Mohamed Abdi and 28 others
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <Button variant="link" className="h-auto p-0 text-gray-600">
                  Contact the Host
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">Level Up Your JavaScript Skills</h1>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded bg-[var(--primary-color)] text-center text-white">
                <span className="text-xs uppercase">APR</span>
                <span className="text-xl font-bold">15</span>
              </div>
              <div>
                <p className="font-medium">Tuesday, April 15</p>
                <p className="text-gray-600">7:00 PM - 8:00 PM GMT+3</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-6 w-6 flex-shrink-0" />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="font-medium">Virtual Event</p>
                  <ExternalLinkIcon className="h-4 w-4" />
                </div>
                <p className="text-gray-600">Google meeting</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium">About Event</h2>
              <div className="space-y-4 text-gray-600">
              <p>
               Calling all JavaScript enthusiasts! Join us for <strong>JS Hargeisa: Code &amp; Connect</strong>, a meetup dedicated to all things JavaScript. Whether you&apos;re a seasoned Node.js wizard, a React framework fanatic, a Vue.js virtuoso, or just starting your journey with vanilla JS, you&apos;re welcome to join the conversation!
              </p>
              <p>
               Come connect with fellow developers in Hargeisa, share your knowledge, learn new tips and tricks, and discuss the latest trends in the JavaScript ecosystem. We&apos;ll have     engaging discussions, friendly faces, and a welcoming atmosphere perfect for networking and expanding your JavaScript horizons. We can&apos;t wait to code with you!
              </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium">Resources</h2>
              <div className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center space-x-3 rounded-lg border border-purple-800 bg-[var(--primary-color)] p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-300"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate font-medium text-white">Supabase_Presentation.png</p>
                      <p className="text-xs text-gray-400">2.4 MB</p>
                    </div>
                    <Button size="sm" variant="outline" className="bg-white text-black hover:bg-gray-200">
                      Download
                    </Button>
                  </div>
                 </div>
               </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
