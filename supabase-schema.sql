-- Create tables for KUTX AGENCY website

-- Contact form submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI Agents waitlist
CREATE TABLE ai_agents_waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin users
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_agents_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policies for contact_submissions
CREATE POLICY "Admins can view all contact submissions" ON contact_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE auth.uid() = admin_users.id
    )
  );

CREATE POLICY "Admins can delete contact submissions" ON contact_submissions
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE auth.uid() = admin_users.id
    )
  );

-- Policies for ai_agents_waitlist
CREATE POLICY "Admins can view all waitlist entries" ON ai_agents_waitlist
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE auth.uid() = admin_users.id
    )
  );

CREATE POLICY "Admins can delete waitlist entries" ON ai_agents_waitlist
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE auth.uid() = admin_users.id
    )
  );

CREATE POLICY "Anyone can insert to waitlist" ON ai_agents_waitlist
  FOR INSERT WITH CHECK (true);

-- Policies for admin_users
CREATE POLICY "Admins can view all admin users" ON admin_users
  FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Admins can insert admin users" ON admin_users
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_ai_agents_waitlist_created_at ON ai_agents_waitlist(created_at DESC);
CREATE INDEX idx_admin_users_email ON admin_users(email);