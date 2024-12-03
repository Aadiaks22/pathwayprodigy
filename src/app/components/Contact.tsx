'use client'

import { useState, FormEvent, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [mailtoLink, setMailtoLink] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent('New Contact Form Submission')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`)
    const link = `mailto:aadiaks220@gmail.com?subject=${subject}&body=${body}`
    setMailtoLink(link)
  }

  if (!isClient) {
    return null // or a loading placeholder
  }

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Prepare Email
          </Button>
        </form>
        {mailtoLink && (
          <div className="mt-4">
            <p className="text-green-700 mb-2">Your email is ready to be sent. Click the button below to open your email client:</p>
            <a href={mailtoLink} className="inline-block w-full">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                Open Email Client
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact

