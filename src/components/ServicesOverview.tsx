'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ServicesOverview = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with modern technologies',
      icon: '🌐',
      status: 'live',
      href: '/services'
    },
    {
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI for your business',
      icon: '🤖',
      status: 'coming-soon',
      href: '/ai-agents'
    },
    {
      title: 'Automation',
      description: 'Streamline workflows with AI-powered automation',
      icon: '⚡',
      status: 'coming-soon',
      href: '/ai-agents'
    },
    {
      title: 'Admin Panels',
      description: 'Powerful dashboards for business management',
      icon: '📊',
      status: 'live',
      href: '/services'
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
              Our Services
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From stunning websites to intelligent AI solutions, we've got you covered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`glass rounded-xl p-6 h-full glass-hover ${
                service.status === 'coming-soon' ? 'opacity-75' : ''
              }`}>
                {/* Status Badge */}
                {service.status === 'coming-soon' && (
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}

                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                
                {/* Link */}
                <Link
                  href={service.href}
                  className={`inline-flex items-center text-sm font-medium ${
                    service.status === 'live' 
                      ? 'text-neon-purple hover:text-neon-blue' 
                      : 'text-gray-500 cursor-not-allowed'
                  } transition-colors duration-300`}
                >
                  {service.status === 'live' ? (
                    <>
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  ) : (
                    'Coming Soon'
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview