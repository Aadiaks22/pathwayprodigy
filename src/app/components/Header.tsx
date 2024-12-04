'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const Header = () => {
  const [activeSection, setActiveSection] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      const sections = ['home', 'services', 'courses', 'about', 'contact']
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isClient) {
    return null // or a loading placeholder
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logopathway.png"
              alt="Pathway Prodigy Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <span className="text-xl font-bold text-green-700">Pathway Prodigy</span><br />
              <span className="text font-bold text-green-600">Making Path To Your Dreams</span>
            </div>
          </div>
          <ul className="flex space-x-4">
            {['Home', 'Services', 'Courses', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === item.toLowerCase()
                      ? 'bg-orange-500 text-white'
                      : 'text-green-700 hover:bg-orange-100'
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

