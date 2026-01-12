'use client'

import { motion } from 'framer-motion'

const AIAgentFeatures = () => {
  const features = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced AI that understands and responds to human language naturally',
      icon: '🧠'
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock automation that never sleeps, always ready to help',
      icon: '🌙'
    },
    {
      title: 'Multi-Platform Integration',
      description: 'Seamlessly connects with your existing tools and business platforms',
      icon: '🔗'
    },
    {
      title: 'Custom Training',
      description: 'AI agents trained specifically for your business needs and workflows',
      icon: '🎯'
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor performance and get insights into your automated processes',
      icon: '📊'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, from startup to enterprise scale',
      icon: '📈'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's Coming in Our AI Agents
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cutting-edge features that will revolutionize how you do business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 glass-hover"
            >
              <div className="text-3xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIAgentFeatures