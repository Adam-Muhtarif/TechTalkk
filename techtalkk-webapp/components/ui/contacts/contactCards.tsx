import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ContactCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-[var(--primary-color)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Email</h2>
            <p className="mb-6 text-gray-700">
              For inquiries, please reach out to us at the email below.
            </p>
            <Link
              href="mailto:contact@techtalk.com"
              className="font-medium text-gray-900 hover:underline"
            >
              contact@techtalk.com
            </Link>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-[var(--primary-color)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Phone</h2>
            <p className="mb-6 text-gray-700">Feel free to call us for immediate assistance.</p>
            <Link href="tel:+2526300000" className="font-medium text-gray-900 hover:underline">
              +2526300000
            </Link>
          </div>

          {/* Office Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-[var(--primary-color)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Office</h2>
            <p className="mb-6 text-gray-700">
              Visit us at our headquarters for in-person inquiries.
            </p>
            <Link
              href="https://www.google.com/maps/@9.5605271,44.0821507,13.42z?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="font-medium text-gray-900 hover:underline"
            >
              Hargeisa, Somaliland
            </Link>
          </div>
        </div>
      </div>
  )
}
