'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block glass rounded-full px-4 py-2 mb-6"
          >
            <span className="text-neon-cyan text-sm font-semibold">🚀 AI-Powered Digital Agency</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block neon-text bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Building Intelligent
            </span>
            <span className="block text-white">
              Websites & AI Automation
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center space-x-2">
              <span className="text-green-400">●</span>
              <span>Web Development (Live)</span>
            </span>
            <span className="mx-4 text-gray-500">|</span>
            <span className="inline-flex items-center space-x-2">
              <span className="text-yellow-400">●</span>
              <span>AI Agents (Coming Soon)</span>
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold neon-text">100%</div>
              <div className="text-gray-400 text-sm">Responsive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text">A+</div>
              <div className="text-gray-400 text-sm">Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text">Fast</div>
              <div className="text-gray-400 text-sm">Delivery</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neon-purple/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero