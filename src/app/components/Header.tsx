'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      const sections = ['home', 'services', 'courses', 'about', 'faq', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section) || document.getElementById(section.toUpperCase());
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section;
        }
      }

      setActiveSection(current);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase()) || document.getElementById(sectionId.toUpperCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (!isClient) {
    return null // or a loading placeholder
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-2">
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
              <span className="text-sm font-bold text-green-600">Making Path To Your Dreams</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            {['Home', 'Services', 'Courses', 'About', 'FAQ', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'bg-orange-500 text-white'
                      : 'text-green-700 hover:bg-orange-100'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2">
              {['Home', 'Services', 'Courses', 'About', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === item.toLowerCase()
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
        )}
      </nav>
    </header>
  )
}

export default Header

