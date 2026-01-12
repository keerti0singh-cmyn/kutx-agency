'use client'

import { motion } from 'framer-motion'

const AIAgentsHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-yellow-500/20 border border-yellow-500/50 rounded-full px-6 py-3 mb-8"
          >
            <span className="text-yellow-400 text-lg font-semibold">🚀 Coming Soon</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block neon-text bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              AI Agents
            </span>
            <span className="block text-white">
              Are Coming
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            We are building powerful AI agents for business automation. 
            Get ready to transform your workflows with intelligent automation.
          </motion.p>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <div className="text-gray-300 text-sm">AI Chatbots</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📋</div>
              <div className="text-gray-300 text-sm">CRM Agents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="text-gray-300 text-sm">WhatsApp Bots</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-gray-300 text-sm">Automation</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AIAgentsHero