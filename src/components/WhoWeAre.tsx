'use client'

import { motion } from 'framer-motion'

const WhoWeAre = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Who We Are
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 neon-text">
                Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed">
                KUTX AGENCY was founded with a vision to bridge the gap between cutting-edge technology 
                and practical business solutions. We started as a web development team and evolved into a 
                full-service digital agency with expertise in AI and automation.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 neon-text">
                Our Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With years of experience in web development and a deep understanding of AI technologies, 
                we deliver solutions that are not just functional but also future-proof. Our team combines 
                creativity with technical excellence to build digital experiences that drive results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoWeAre