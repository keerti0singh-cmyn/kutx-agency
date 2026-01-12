'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { getSupabase } from '@/lib/supabase'

const WaitlistForm = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const supabase = getSupabase()
    if (!supabase) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      const { error } = await supabase
        .from('ai_agents_waitlist')
        .insert([{ email }])

      if (error) {
        console.error('Error joining waitlist:', error)
        setSubmitStatus('error')
      } else {
        setSubmitStatus('success')
        setEmail('')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto"
    >
      <div className="glass rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Join the Waitlist
        </h3>
        
        <p className="text-gray-300 text-center mb-6">
          Be the first to know when our AI agents launch. Early subscribers get exclusive access and special discounts!
        </p>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center"
          >
            <p className="text-green-400">✅ You're on the list! We'll notify you soon.</p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center"
          >
            <p className="text-red-400">❌ Something went wrong. Please try again.</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
              placeholder="Enter your email"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </motion.div>
  )
}

export default WaitlistForm