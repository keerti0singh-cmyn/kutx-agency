'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'AI Agents', href: '/ai-agents' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 glass border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-xl font-bold neon-text">KUTX AGENCY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="/admin" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm">
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/admin"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300 pt-2 border-t border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header