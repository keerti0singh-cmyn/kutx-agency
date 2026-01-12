'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass border-t border-white/10 mt-20"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold neon-text">KUTX AGENCY</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered Web & Automation Solutions. We build high-performance websites and intelligent AI agents that automate business workflows.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:rajkeerti@zohomail.in" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                Email Us
              </a>
              <a href="tel:+917084499198" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                Call Us
              </a>
              <a href="https://wa.me/917084499198" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-400 hover:text-neon-purple transition-colors duration-300">
                Services
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-neon-purple transition-colors duration-300">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-neon-purple transition-colors duration-300">
                Contact
              </Link>
              <Link href="/ai-agents" className="block text-gray-400 hover:text-neon-purple transition-colors duration-300">
                AI Agents
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: rajkeerti@zohomail.in</p>
              <p>Phone: +91 7084499198</p>
              <p>WhatsApp: +91 7084499198</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 KUTX AGENCY. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer