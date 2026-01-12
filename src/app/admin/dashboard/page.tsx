'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'

export default function AdminDashboardPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/admin')
    }
  }, [router, isClient])

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return <Dashboard />
}