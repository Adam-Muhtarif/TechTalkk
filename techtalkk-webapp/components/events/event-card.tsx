import { MoreVertical, Play } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from 'next/link'

export default function EventCard() {
  return (
    <div className="flex rounded-lg overflow-hidden shadow-sm border border-gray-100 mt-8">
      {/* Left sidebar */}
      <div className="w-56 bg-violet-500 p-6 flex items-center justify-center">
        <h2 className="text-white text-2xl font-medium text-center">Mighty Introduction</h2>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="text-gray-500 text-sm mb-1">Mon, March 24 • 10:00PM</div>

        <h1 className="text-2xl font-bold mb-3">Mighty Introduction — Courses Plan Intro</h1>

        <div className="flex items-center text-gray-500 mb-6 max-w-2xl">
          <span>Calling all JavaScript enthusiasts! Join us for JS Hargeisa: Code & Connect, a meetup dedicated to all things JavaScript. </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex -space-x-2">
                <div
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"
                >
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt={`host image`}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
            </div>
            <span className="text-sm text-gray-500 ml-3">host name</span>
          </div>

          <div className="flex items-center">
            <Link href="#">
              <Button variant="outline" className="mr-2">
                View Event
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Share Event</DropdownMenuItem>
                <DropdownMenuItem>Add to Calendar</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

