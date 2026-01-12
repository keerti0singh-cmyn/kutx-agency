'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const AIServices = () => {
  const aiServices = [
    {
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI for customer support, lead generation, and user engagement.',
      icon: '🤖',
      features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'Custom Training'],
      estimatedPrice: 'Contact for pricing'
    },
    {
      title: 'CRM AI Agents',
      description: 'Automated CRM agents that manage customer relationships, follow-ups, and sales pipelines.',
      icon: '📋',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Pipeline Management', 'Customer Insights'],
      estimatedPrice: 'Contact for pricing'
    },
    {
      title: 'WhatsApp / Telegram AI Bots',
      description: 'AI-powered chatbots for popular messaging platforms to engage customers where they are.',
      icon: '💬',
      features: ['Platform Integration', 'Rich Media Support', 'Automated Responses', 'Analytics'],
      estimatedPrice: 'Contact for pricing'
    },
    {
      title: 'Inventory & Automation Agents',
      description: 'Smart AI agents for inventory management, order processing, and business automation.',
      icon: '📦',
      features: ['Real-time Tracking', 'Predictive Analytics', 'Automated Reordering', 'Integration Ready'],
      estimatedPrice: 'Contact for pricing'
    },
    {
      title: 'Custom AI Workflows',
      description: 'Tailored AI solutions using n8n, OpenAI, and other cutting-edge technologies.',
      icon: '⚙️',
      features: ['n8n Integration', 'OpenAI API', 'Custom Logic', 'Scalable Architecture'],
      estimatedPrice: 'Contact for pricing'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      icon: '✍️',
      features: ['SEO Optimized', 'Multi-format Output', 'Brand Voice Training', 'Scheduled Publishing'],
      estimatedPrice: 'Contact for pricing'
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
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-400 text-sm font-semibold">🚀 Coming Soon</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              AI Services
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We're building powerful AI solutions to automate and transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-yellow-400 text-2xl font-bold mb-2">Coming Soon</div>
                  <div className="text-gray-300 text-sm">We're building this for you</div>
                </div>
              </div>

              {/* Service Card */}
              <div className="glass rounded-xl p-6 opacity-75">
                {/* Icon and Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl grayscale">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-lg text-gray-400">{service.estimatedPrice}</div>
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
                      className="flex items-center space-x-2 text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Disabled CTA */}
                <div className="w-full py-3 bg-gray-700 text-gray-400 rounded-lg text-center cursor-not-allowed">
                  Get Notified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Be the First to Know
            </h3>
            <p className="text-gray-300 mb-6">
              Join our waitlist and get notified when our AI services launch. Early subscribers get special discounts!
            </p>
            <Link href="/ai-agents" className="btn-primary">
              Join Waitlist
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIServices