'use client'

import { useState, useEffect } from 'react'
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [isClient, setIsClient] = useState(false)
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID as string)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading placeholder
  }

  if (state.succeeded) {
    return (
      <section id="contact" className="py-10 bg-gradient-to-b from-green-50 to-orange-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600">Your message has been successfully sent. We will get back to you soon.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-10 bg-gradient-to-b from-green-50 to-orange-50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center transition-all duration-500 ease-in-out transform hover:scale-105">
          Get in Touch
        </h2>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-orange-400 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-4">We had love to hear from you. Fill out the form and we will get back to you as soon as possible.</p>
              <div className="flex items-center mb-4">
                <Mail className="mr-2" />
                <span>pathwayprodigy@gmail.com</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-2" />
                <span>+919454430933</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute top-3 left-3 text-gray-400" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="pl-10 w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute top-3 left-3 text-gray-400" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="pl-10 w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="relative">
                  <Phone className="absolute top-3 left-3 text-gray-400" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="pl-10 w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute top-3 left-3 text-gray-400" />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="pl-10 w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
                  <Button type="submit" disabled={state.submitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    {state.submitting ? "Sending..." : "Send Your Query"} <Send className="ml-2" size={16} />
                  </Button>
                </div>
              </form>
              <ValidationError errors={state.errors} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact