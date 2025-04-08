import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'

export default function FilterSection() {
  return (
    <section
      aria-label="Filter and search course"
      className="bg-[#E5E8FA] w-full flex flex-col lg:flex-row justify-between items-center my-8 py-4 md:py-6 px-4 rounded-4xl"
    >
      <div className="relative w-full lg:w-1/2 flex items-center">
        <Search className="absolute right-5 text-gray-300" />
        <Input placeholder="Search on your courses" className="w-full bg-white py-6 " />
      </div>

      <div className="mt-5 lg:mt-0 flex flex-col md:flex-row items-center md:space-x-4">
        <Select>
          <SelectTrigger className="w-full bg-white p-4 sm:p-6">
            <SelectValue placeholder="Sort by latest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full bg-white p-4 sm:p-6">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
