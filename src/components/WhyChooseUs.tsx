'use client'

import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Cutting-Edge Technology',
      description: 'We use the latest frameworks and AI technologies to build future-proof solutions',
      icon: '🚀'
    },
    {
      title: 'Custom Solutions',
      description: 'Every project is tailored to your specific business needs and requirements',
      icon: '🎯'
    },
    {
      title: 'Performance First',
      description: 'Lightning-fast websites and optimized AI agents for the best user experience',
      icon: '⚡'
    },
    {
      title: 'Expert Team',
      description: 'Skilled developers and AI specialists dedicated to your project success',
      icon: '👥'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, from startup to enterprise scale',
      icon: '📈'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure your digital solutions run smoothly',
      icon: '🛡️'
    }
  ]

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="neon-text">KUTX AGENCY</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We combine creativity, technology, and business expertise to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 glass-hover text-center"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs