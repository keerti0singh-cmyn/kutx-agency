'use client'

import { motion } from 'framer-motion'

const MissionVision = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses with intelligent digital solutions that drive growth, 
              efficiency, and innovation. We are committed to delivering exceptional web experiences 
              and AI automation that transform the way our clients operate in the digital world.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To be the leading digital agency that seamlessly integrates web development 
              with artificial intelligence, creating a future where businesses can automate 
              complex workflows and deliver personalized experiences at scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision