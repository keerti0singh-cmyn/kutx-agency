'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const WebServices = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const webServices = [
    {
      title: 'Static Websites',
      description: 'Fast, secure, and SEO-friendly static websites perfect for portfolios, blogs, and landing pages.',
      icon: '📄',
      features: ['Lightning Fast', 'SEO Optimized', 'Secure', 'Low Cost'],
      startingPrice: '$299'
    },
    {
      title: 'Dynamic Websites',
      description: 'Interactive websites with databases, user authentication, and real-time content management.',
      icon: '🌐',
      features: ['Database Integration', 'User Management', 'Real-time Updates', 'Admin Panel'],
      startingPrice: '$799'
    },
    {
      title: 'Business Websites',
      description: 'Professional corporate websites with advanced features for business growth and customer engagement.',
      icon: '🏢',
      features: ['Corporate Design', 'Lead Generation', 'Analytics', 'CRM Integration'],
      startingPrice: '$1,299'
    },
    {
      title: 'Admin Panels',
      description: 'Powerful dashboard solutions for managing business operations, data, and team collaboration.',
      icon: '📊',
      features: ['Data Visualization', 'User Management', 'Reports', 'API Integration'],
      startingPrice: '$1,999'
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages designed for marketing campaigns, product launches, and lead generation.',
      icon: '🎯',
      features: ['A/B Testing Ready', 'Mobile Optimized', 'Fast Loading', 'Analytics'],
      startingPrice: '$499'
    },
    {
      title: 'E-commerce Websites',
      description: 'Complete online stores with payment processing, inventory management, and customer support.',
      icon: '🛒',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Customer Support'],
      startingPrice: '$2,499'
    },
    {
      title: 'SEO Optimized Websites',
      description: 'Websites built with SEO best practices to rank higher on search engines and attract organic traffic.',
      icon: '🔍',
      features: ['On-page SEO', 'Site Speed', 'Mobile First', 'Schema Markup'],
      startingPrice: '$899'
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Web Development Services
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional web solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 glass-hover relative overflow-hidden"
              onMouseEnter={() => setHoveredService(service.title)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Glow Effect on Hover */}
              {hoveredService === service.title && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-xl"
                />
              )}

              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-neon-purple">{service.startingPrice}</div>
                    <div className="text-xs text-gray-400">Starting from</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-neon-purple rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="block w-full btn-primary text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              We can build any type of website you need. Let's discuss your requirements.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WebServices