'use client'

import { useState, useEffect } from 'react'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronDown, ChevronUp, MapPin, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const aboutLinks = [
  "About Us",
  "Careers",
  "Thrillophilia Reviews",
  "Terms & Conditions",
  "Privacy Policy",
  "Copyright Policy",
  "Support",
  "Fraud Alert",
]

const supplierLinks = ["List Your Activities", "Supplier Login", "Become a Partner"]
const brandLinks = ["Partner With Us", "Destination Marketing", "Advertise With Us"]
const travellerLinks = ["Gift an Experience", "Travel Insurance", "Travel Guide"]

const FooterSection = ({ title, links, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`mb-6 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-semibold mb-4 focus:outline-none md:hidden"
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <h3 className="text-lg font-semibold mb-4 hidden md:block">{title}</h3>
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href="#"
                  className={`text-sm hover:underline ${link === "Fraud Alert" ? "text-red-500" : "text-gray-600"}`}
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FooterComponent() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear())
    }, 1000 * 60 * 60) // Update every hour

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <img
              src="/logo.svg"
              alt="Thrillophilia"
              className="h-12 mb-6"
            />
            <p className="text-gray-400 mb-4">Discover and book amazing travel experiences with Thrillophilia.</p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
          <FooterSection title="ABOUT THRILLOPHILIA" links={aboutLinks} />
          <div className="space-y-6">
            <FooterSection title="FOR SUPPLIERS" links={supplierLinks} />
            <FooterSection title="FOR BRANDS" links={brandLinks} />
          </div>
          <FooterSection title="FOR TRAVELLERS" links={travellerLinks} />
        </div>
      </div>
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <div className="flex items-center mb-2 md:mb-0 md:mr-6">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-sm text-gray-400">123 Adventure St, Thrill City, TC 12345</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0 md:mr-6">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-sm text-gray-400">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-sm text-gray-400">info@thrillophilia.com</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {year} Thrillophilia.com All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}