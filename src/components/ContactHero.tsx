'use client'

import { motion } from 'framer-motion'

const ContactHero = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to start your next project? Get in touch with us and let's 
            bring your ideas to life with our expert web development and AI solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero