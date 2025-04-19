import React from 'react'
import HeroPage from '@/components/about/hero-page'
import ContactCards from '@/components/contacts/contactCards'
import ContactForm from '@/components/contacts/contact-form'

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
