# DEPLOYMENT GUIDE

This guide will help you deploy your KUTX AGENCY website to production for FREE using Vercel or Netlify.

## 📋 Prerequisites

- GitHub account
- Supabase account
- Vercel or Netlify account

## 🔧 Step 1: Set Up Supabase (Required)

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up/login with GitHub
4. Create a new organization (or use existing)
5. Click "New Project"
6. Choose a database password (save it securely)
7. Select a region closest to your audience
8. Wait for project to be created (2-3 minutes)

### 2. Run Database Schema
1. In your Supabase project, go to "SQL Editor" in the left sidebar
2. Copy the entire content from `supabase-schema.sql` in your project
3. Paste it into the SQL Editor
4. Click "Run" to create all tables and policies

### 3. Get API Keys
1. Go to "Settings" → "API" in your Supabase project
2. Copy the following values:
   - **Project URL** (starts with https://)
   - **anon public** key (starts with eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)
   - **service_role** key (click "reveal" to see it)

### 4. Test Local Setup
1. Create `.env.local` file in your project root
2. Add the Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```
3. Run `npm run dev` and test all features locally

## 🚀 Step 2: Deploy to Vercel (Recommended)

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub
5. Click "Add New..." → "Project"
6. Find your repository and click "Import"
7. Vercel will detect Next.js settings automatically
8. Click "Add Environment Variables" and add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
   - `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service role key
9. Click "Deploy"
10. Wait for deployment (usually 2-3 minutes)

### 3. Test Your Live Site
1. Click the deployed URL
2. Test all features:
   - Navigation works
   - Contact form submits
   - AI waitlist works
   - Admin panel accessible (/admin)

### 4. Set Up Custom Domain (Optional)
1. In Vercel dashboard, go to "Domains"
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (usually automatic)

## 🚀 Step 3: Deploy to Netlify (Alternative)

### 1. Build Project Locally
```bash
npm run build
```

### 2. Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Build settings (Netlify auto-detects Next.js):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
7. Click "Deploy site"

## 🔒 Step 4: Production Security

### 1. Update Admin Credentials
For production, replace the demo admin credentials:
1. In `src/components/LoginForm.tsx`, update the login logic
2. Or implement proper Supabase Auth:
   ```typescript
   // Replace demo login with Supabase Auth
   const { data, error } = await supabase.auth.signInWithPassword({
     email: formData.email,
     password: formData.password,
   })
   ```

### 2. Enable Supabase RLS
Your database already has Row Level Security policies, but verify:
1. Go to Supabase → Authentication → Policies
2. Ensure RLS is enabled on all tables
3. Test with a different browser session

## 📊 Step 5: Monitor Performance

### 1. Vercel Analytics
1. In Vercel dashboard, go to "Analytics"
2. Enable analytics (free tier available)
3. Monitor page views and performance

### 2. Supabase Monitoring
1. Go to Supabase → Reports
2. Monitor database usage
3. Check API call limits (free tier: 500MB database, 50k active users)

## 🔄 Step 6: Ongoing Maintenance

### 1. Regular Updates
```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit
```

### 2. Backup Database
1. In Supabase → Settings → Database
2. Set up automated backups (free tier: 7 days)
3. Export data manually if needed

### 3. Monitor Submissions
1. Regularly check admin panel
2. Respond to contact forms promptly
3. Clean up old submissions if needed

## 📱 Testing Checklist

Before going live, test all features:

### ✅ Frontend Tests
- [ ] All pages load correctly
- [ ] Mobile navigation works
- [ ] Animations are smooth
- [ ] Forms validate properly
- [ ] Links go to correct pages

### ✅ Backend Tests
- [ ] Contact form submits to database
- [ ] AI waitlist adds emails
- [ ] Admin dashboard loads submissions
- [ ] Delete functionality works
- [ ] Error handling shows messages

### ✅ Cross-Device Tests
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet (iPad, Android tablet)
- [ ] Responsive design works at all sizes

## 🎉 You're Live!

Your KUTX AGENCY website is now live and ready for business! 

### Next Steps:
1. Share your website URL
2. Set up Google Analytics
3. Submit to search engines
4. Start marketing your services
5. Monitor contact form submissions

## 🆘 Troubleshooting

### Common Issues:

#### 1. Forms not submitting
- Check Supabase URL and keys in environment variables
- Verify RLS policies allow public inserts
- Check browser console for errors

#### 2. Admin panel not accessible
- Ensure localStorage is working
- Check for JavaScript errors
- Verify admin credentials

#### 3. CSS animations not working
- Check Tailwind CSS build
- Verify mobile.css is imported
- Check for CSS conflicts

#### 4. Deploy fails
- Check for build errors in deployment logs
- Verify all environment variables are set
- Ensure Node.js version compatibility

### Get Support:
- Check deployment logs for specific errors
- Review console errors in browser
- Test in an incognito window
- Contact support if needed

---

🎊 **Congratulations! Your premium agency website is now live!**