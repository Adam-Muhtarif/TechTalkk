'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, MapPin, Mail, Send, CheckCircle, Loader2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and privacy policy',
  }),
})

type FormValues = z.infer<typeof formSchema>

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      acceptTerms: false,
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
  }

  return (
    <div className="container px-4 py-16 mx-auto md:py-24">
      <div className="relative">
        {/* Background decorative elements */}
        {/* <div className='absolute -top-20 -left-20 w-64 h-64 bg-[#4e60ee]/5 rounded-full blur-3xl'></div> */}
        {/* <div className='absolute -bottom-20 -right-20 w-64 h-64 bg-[#f1b729]/5 rounded-full blur-3xl'></div> */}

        {/* Main content */}
        <div className="relative overflow-hidden bg-white border border-gray-100 shadow-sm dark:bg-gray-900 rounded-2xl dark:border-gray-700">
          {/* <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4e60ee] to-[#f1b729]'></div> */}

          <div className="grid md:grid-cols-2">
            {/* Left side - Contact info */}
            <div className="bg-[#4e60ee]/5 dark:bg-[#4e60ee]/10 p-8 md:p-12 lg:p-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#4e60ee] text-xl font-bold mb-2 text-center md:text-start">
                    CONTACT US
                  </h3>
                  <h1 className="text-3xl font-black leading-tight text-center md:text-4xl lg:text-5xl md:text-start">
                    WE&apos;D LOVE TO <br className="md:hidden lg:block" />
                    <span className="relative">
                      HEAR FROM YOU!
                      <span className="absolute -bottom-2 left-15 w-[80px] lg:left-0 lg:w-full h-1 bg-[#f1b729]"></span>
                    </span>
                  </h1>
                </div>

                <p className="text-[#5c5c5c] dark:text-gray-300 leading-relaxed font-sans text lg:text-2xl text-center md:text-start text-xl">
                  At tecktalkk, we&apos;re always excited to connect with our community. whether you
                  have a question, suggestion, or just want to say hello, we&apos;re here to help!
                </p>

                <div className="pt-4 space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-md group-hover:bg-[#4e60ee] group-hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5 text-[#4e60ee] group-hover:text-white transition-colors" />
                    </div>
                    <Link
                      href="https://wa.me/+1234567890"
                      target="_blank"
                      className="text-lg text-[#5c5c5c] dark:text-gray-300 group-hover:text-[#4e60ee] dark:group-hover:text-[#4e60ee] transition-colors"
                    >
                      +(123) 456-7890
                    </Link>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-md group-hover:bg-[#4e60ee] group-hover:text-white transition-all duration-300">
                      <MapPin className="w-5 h-5 text-[#4e60ee] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg text-[#5c5c5c] dark:text-gray-300 group-hover:text-[#4e60ee] dark:group-hover:text-[#4e60ee] transition-colors">
                      Hargeisa, Somalia
                    </span>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-md group-hover:bg-[#4e60ee] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#4e60ee] group-hover:text-white transition-colors" />
                    </div>
                    <Link
                      href="mailto:Techtalk@Gmail.Com"
                      className="text-lg text-[#5c5c5c] dark:text-gray-300 group-hover:text-[#4e60ee] dark:group-hover:text-[#4e60ee] transition-colors"
                    >
                      techtalk@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="flex items-center gap-2">
                    <div className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full "></div>
                    <p className="text-sm text-[#5c5c5c] dark:text-gray-300">
                      We&apos;re online and ready to help...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="p-8 md:p-12 lg:p-16">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full dark:bg-green-900/30">
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>

                  <h2 className="text-2xl font-bold">Message Sent Successfully!</h2>

                  <p className="text-[#5c5c5c] dark:text-gray-400 max-w-md">
                    Thank you for reaching out to us. We&apos;ve received your message and will get
                    back to you as soon as possible.
                  </p>

                  <button
                    onClick={resetForm}
                    className="mt-4 flex items-center gap-2 text-[#4e60ee] hover:text-[#4e60ee]/80 font-medium"
                  >
                    Send Another Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-[#5c5c5c] dark:text-gray-300 mb-1 ml-1 block"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className={`w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-lg border ${
                          errors.name
                            ? 'border-red-500'
                            : touchedFields.name
                              ? 'border-green-500'
                              : 'border-gray-200 dark:border-gray-700'
                        } focus:outline-none focus:ring-2 focus:ring-[#4e60ee] transition-all duration-200`}
                        {...register('name')}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="mt-1 ml-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#5c5c5c] dark:text-gray-300 mb-1 ml-1 block"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="username@gmail.com"
                        className={`w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-lg border ${
                          errors.email
                            ? 'border-red-500'
                            : touchedFields.email
                              ? 'border-green-500'
                              : 'border-gray-200 dark:border-gray-700'
                        } focus:outline-none focus:ring-2 focus:ring-[#4e60ee] transition-all duration-200`}
                        {...register('email')}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="mt-1 ml-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-[#5c5c5c] dark:text-gray-300 mb-1 ml-1 block"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={9}
                        className={`w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-lg border ${
                          errors.message
                            ? 'border-red-500'
                            : touchedFields.message
                              ? 'border-green-500'
                              : 'border-gray-200 dark:border-gray-700'
                        } focus:outline-none focus:ring-2 focus:ring-[#4e60ee] transition-all duration-200`}
                        {...register('message')}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="mt-1 ml-1 text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-6">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-[#4e60ee] focus:ring-[#4e60ee]"
                          {...register('acceptTerms')}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <label htmlFor="terms" className="text-sm text-[#5c5c5c] dark:text-gray-300">
                      I accept the{' '}
                      <a href="#" className="text-[#4e60ee] hover:underline">
                        privacy policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-[#4e60ee] hover:underline">
                        terms of service
                      </a>
                    </label>
                  </div>
                  {errors.acceptTerms && (
                    <p className="ml-1 -mt-4 text-sm text-red-500">{errors.acceptTerms.message}</p>
                  )}

                  <div className="pt-4 ">
                    <button
                      type="submit"
                      className="w-full md:w-auto float-right bg-[#f1b729] hover:bg-[#f1b729]/90 text-black font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
