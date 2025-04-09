import React from 'react'
import HeroPage from '@/components/ui/about-us/hero-page'
import ContactCards from '@/components/ui/contacts/contactCards'
import ContactForm from '@/components/ui/contacts/contact-form'

// this is the contact page
// this is a server component

export default function page() {
  return (
    <div className="containe mx-auto overflow-x-hidden font-geist-sans">
      <HeroPage
        header="Contact"
        paragraph="Home/Contact"
        className="h-[268px] sm:h-[460px] bg-[url(/images/about-us/about-page-image.jpeg)] bg-cover bg-center bg-no-repeat"
      />

      <ContactCards />
      <ContactForm />
    </div>
  )
}
