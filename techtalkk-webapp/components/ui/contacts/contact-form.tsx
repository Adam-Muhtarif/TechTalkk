"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    isTechEnthusiast: false,
    isDeveloper: false,
    isLearner: false,
    isOther: false,
    acceptTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <p className="text-purple-600 font-medium">CONTACT</p>
            <h1 className="text-4xl font-bold text-purple-600 mt-1">GET IN TOUCH</h1>
            <p className="mt-2 text-gray-600">We&apos;re Here To Help With Your Inquiries!</p>
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-600 h-5 w-5" />
              <a href="mailto:contact@techtalik.com" className="text-gray-700">
                contact@techtalik.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-purple-600 h-5 w-5" />
              <a href="tel:+252630000" className="text-gray-700">
                +252630000
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-purple-600 h-5 w-5" />
              <span className="text-gray-700">Hargeisa, Somaliland</span>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex">
                <div className="bg-gray-100 flex items-center px-3 border border-r-0 rounded-l-md">
                  <span>SO</span>
                </div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+252630000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-l-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Leave us message..."
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>What Describes You?</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="techEnthusiast"
                    checked={formData.isTechEnthusiast}
                    onCheckedChange={(checked) => handleCheckboxChange("isTechEnthusiast", checked as boolean)}
                  />
                  <label htmlFor="techEnthusiast" className="text-sm">
                    Tech Enthusiast
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="developer"
                    checked={formData.isDeveloper}
                    onCheckedChange={(checked) => handleCheckboxChange("isDeveloper", checked as boolean)}
                  />
                  <label htmlFor="developer" className="text-sm">
                    Developer
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="learner"
                    checked={formData.isLearner}
                    onCheckedChange={(checked) => handleCheckboxChange("isLearner", checked as boolean)}
                  />
                  <label htmlFor="learner" className="text-sm">
                    Learner
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="other"
                    checked={formData.isOther}
                    onCheckedChange={(checked) => handleCheckboxChange("isOther", checked as boolean)}
                  />
                  <label htmlFor="other" className="text-sm">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleCheckboxChange("acceptTerms", checked as boolean)}
                required
              />
              <label htmlFor="terms" className="text-sm">
                I accept the privacy and terms
              </label>
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
