'use client'

//import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Mail, Phone } from 'lucide-react'
import { useForm, ValidationError } from "@formspree/react"

const Footer = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID as string)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logopathway.png"
              alt="Pathway Prodigy Logo"
              width={120}
              height={120}
              className="mb-1"
              priority
            />
            <div>
              <span className="text-xl font-bold text-orange-400">Pathway Prodigy</span><br />
              <span className="text font-bold text-orange-400">Making Path To Your Dreams</span>
            </div>
            <div className="flex space-x-4 mt-4">
        <Link href="https://www.facebook.com/profile.php?id=61569698578067&mibextid=ZbWKwL" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </Link>
        <Link href="https://x.com/Pathwayprodigy?t=ml5jzLpi2irMkv97IF9OdA&s=09" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://www.instagram.com/pathwayprodigy?utm_source=qr&igsh=MWgydjFnZDB5NWt2Mg==" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/pathwayprodigy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </Link>
      </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Courses', 'About', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-orange-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a className="hover:text-orange-400 transition-colors">pathwayprodigy@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+919454430933" className="hover:text-orange-400 transition-colors">+919454430933</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            {state.succeeded ? (
              <p className="text-green-400">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <div className="flex">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                    required
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors disabled:opacity-50"
                  >
                    {state.submitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm"
                />
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; {currentYear} Pathway Prodigy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

