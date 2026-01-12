import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabase: SupabaseClient | null = null
let supabaseAdmin: SupabaseClient | null = null

export const getSupabase = () => {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not provided')
      return null
    }
    
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabase
}

export const getSupabaseAdmin = () => {
  if (!supabaseAdmin) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    
    if (!supabaseUrl || !serviceRoleKey) {
      console.warn('Supabase admin credentials not provided')
      return null
    }
    
    supabaseAdmin = createClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  }
  return supabaseAdmin
}

// For backward compatibility
export { getSupabase as supabase, getSupabaseAdmin as supabaseAdmin }