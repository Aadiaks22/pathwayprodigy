'use client'

import { useState, FormEvent, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, User, MessageSquare } from 'lucide-react'

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
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="pl-10 w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute top-3 left-3 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute top-3 left-3 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="pl-10 w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute top-3 left-3 text-gray-400" />
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="pl-10 w-full border-orange-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Send Your Query <Send className="ml-2" size={16} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {mailtoLink && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out opacity-100">
            <p className="text-green-700 mb-4 text-center">Your email is ready to be sent. Click the button below to open your email client:</p>
            <a href={mailtoLink} className="inline-block w-full">
              <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Open Email Client <Mail className="ml-2" size={16} />
                </Button>
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact

// import { useForm, ValidationError } from "@formspree/react";

// export default function ContactForm() {
//   // Pass your form ID as the argument to useForm hook
//   if (!process.env.NEXT_PUBLIC_FORM) {
//     throw new Error("NEXT_PUBLIC_FORM environment variable is not defined");
//   }
  
//   const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

//   // Render a success message after form submission
//   if (state.succeeded) {
//     return <p>Thanks for your submission!</p>;
//   }

//   return (
//     <form onSubmit={handleSubmit} aria-label="Contact Form">
//       {/* Email Field */}
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         required
//         placeholder="Enter your email"
//         aria-required="true"
//       />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />

//       {/* Message Field */}
//       <label htmlFor="message">Message</label>
//       <textarea
//         id="message"
//         name="message"
//         required
//         placeholder="Enter your message"
//         aria-required="true"
//         rows={4}
//       />
//       <ValidationError prefix="Message" field="message" errors={state.errors} />

//       {/* Submit Button */}
//       <button type="submit" disabled={state.submitting}>
//         {state.submitting ? "Submitting..." : "Submit"}
//       </button>

//       {/* General Errors */}
//       <ValidationError errors={state.errors} />
//     </form>
//   );
// }
