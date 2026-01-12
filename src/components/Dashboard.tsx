'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getSupabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const [contactSubmissions, setContactSubmissions] = useState<any[]>([])
  const [waitlistSubmissions, setWaitlistSubmissions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'contacts' | 'waitlist'>('contacts')
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/admin')
      return
    }

    fetchData()
  }, [router])

  const fetchData = async () => {
    const supabase = getSupabase()
    if (!supabase) {
      console.error('Supabase not initialized')
      setLoading(false)
      return
    }

    try {
      // Fetch contact submissions
      const { data: contacts, error: contactsError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      // Fetch waitlist submissions
      const { data: waitlist, error: waitlistError } = await supabase
        .from('ai_agents_waitlist')
        .select('*')
        .order('created_at', { ascending: false })

      if (contactsError) console.error('Error fetching contacts:', contactsError)
      if (waitlistError) console.error('Error fetching waitlist:', waitlistError)

      setContactSubmissions(contacts || [])
      setWaitlistSubmissions(waitlist || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (id: string) => {
    const supabase = getSupabase()
    if (!supabase) {
      console.error('Supabase not initialized')
      return
    }

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting contact:', error)
      } else {
        setContactSubmissions(contactSubmissions.filter(c => c.id !== id))
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const deleteWaitlist = async (id: string) => {
    const supabase = getSupabase()
    if (!supabase) {
      console.error('Supabase not initialized')
      return
    }

    try {
      const { error } = await supabase
        .from('ai_agents_waitlist')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting waitlist:', error)
      } else {
        setWaitlistSubmissions(waitlistSubmissions.filter(w => w.id !== id))
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400">Manage your submissions</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Contact Submissions</h3>
            <div className="text-3xl font-bold text-neon-purple">{contactSubmissions.length}</div>
            <p className="text-gray-400 text-sm">Total messages</p>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">AI Waitlist</h3>
            <div className="text-3xl font-bold text-neon-blue">{waitlistSubmissions.length}</div>
            <p className="text-gray-400 text-sm">Total signups</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="glass rounded-xl p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'contacts'
                  ? 'bg-neon-purple text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Contact Submissions ({contactSubmissions.length})
            </button>
            <button
              onClick={() => setActiveTab('waitlist')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'waitlist'
                  ? 'bg-neon-purple text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              AI Waitlist ({waitlistSubmissions.length})
            </button>
          </div>

          {/* Contact Submissions */}
          {activeTab === 'contacts' && (
            <div className="space-y-4">
              {contactSubmissions.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No contact submissions yet.</p>
              ) : (
                contactSubmissions.map((submission) => (
                  <motion.div
                    key={submission.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">{submission.name}</h4>
                        <p className="text-gray-400 text-sm">{submission.email}</p>
                        <p className="text-gray-500 text-xs">
                          {new Date(submission.created_at).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteContact(submission.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="text-gray-300 mt-2">{submission.message}</p>
                  </motion.div>
                ))
              )}
            </div>
          )}

          {/* Waitlist Submissions */}
          {activeTab === 'waitlist' && (
            <div className="space-y-4">
              {waitlistSubmissions.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No waitlist signups yet.</p>
              ) : (
                waitlistSubmissions.map((submission) => (
                  <motion.div
                    key={submission.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-semibold">{submission.email}</h4>
                        <p className="text-gray-500 text-xs">
                          {new Date(submission.created_at).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteWaitlist(submission.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard