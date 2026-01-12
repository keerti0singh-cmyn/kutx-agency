'use client'

import { motion } from 'framer-motion'

const CoreValues = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends and embrace cutting-edge solutions',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'Every project is crafted with attention to detail and excellence',
      icon: '⭐'
    },
    {
      title: 'Performance',
      description: 'We build fast, scalable, and optimized digital solutions',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Your growth is our success - we build partnerships, not just projects',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices',
      icon: '🛡️'
    },
    {
      title: 'Future-Ready',
      description: 'Our solutions are built to evolve and scale with your business',
      icon: '🔮'
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
            Our Core Values
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 glass-hover text-center"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues