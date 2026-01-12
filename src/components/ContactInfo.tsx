'use client'

import { motion } from 'framer-motion'

const ContactInfo = () => {
  const contactMethods = [
    {
      title: 'Email',
      value: 'rajkeerti@zohomail.in',
      icon: '📧',
      action: 'mailto:rajkeerti@zohomail.in'
    },
    {
      title: 'Phone',
      value: '+91 7084499198',
      icon: '📱',
      action: 'tel:+917084499198'
    },
    {
      title: 'WhatsApp',
      value: '+91 7084499198',
      icon: '💬',
      action: 'https://wa.me/917084499198'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <div className="glass rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Contact Information
        </h2>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              href={method.action}
              className="block glass-hover rounded-lg p-4 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{method.icon}</div>
                <div>
                  <div className="text-sm text-gray-400">{method.title}</div>
                  <div className="text-white font-medium">{method.value}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Response Time</h3>
          <p className="text-gray-300 text-sm">
            We typically respond to inquiries within 24 hours. For urgent projects, 
            please call us directly or use WhatsApp for faster communication.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo